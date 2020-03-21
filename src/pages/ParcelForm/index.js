import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useLocation } from 'react-router-dom';

import api from '../../services/api';
import { filterSelect } from '../../util/helper';

import { Content, Select } from './styles';

const schema = Yup.object().shape({
  recipient: Yup.object()
    .shape({
      value: Yup.number(),
      label: Yup.string(),
    })
    .required('O destinatário é obrigatório'),
  deliveryman: Yup.object({
    value: Yup.number(),
    label: Yup.string(),
  }).required('O entregador é obrigatório'),
  product: Yup.string().required('O produto é obrigatório'),
});

export default function ParcelForm({ history }) {
  const location = useLocation();
  const formRef = useRef(null);

  let parcel;

  if (location.state) {
    const { object } = location.state;
    parcel = {
      id: object.id,
      product: object.product,
      recipient: {
        value: object.recipient.id,
        label: object.recipient.name,
      },
      deliveryman: {
        value: object.deliveryman.id,
        label: object.deliveryman.name,
      },
    };
  }

  function handleBack() {
    history.push('/parcels');
  }

  async function handleSubmit({ recipient, deliveryman, product }) {
    if (parcel) {
      await api.patch(`/parcels/${parcel.id}`, {
        recipient_id: recipient.value,
        deliveryman_id: deliveryman.value,
        product,
      });
    } else {
      await api.post('/parcels', {
        recipient_id: recipient.value,
        deliveryman_id: deliveryman.value,
        product,
      });
    }

    history.push('/parcels');
  }

  async function loadRecipients(inputValue) {
    const response = await api.get('/recipients');

    const recipients = response.data.map(recipient => ({
      value: recipient.id,
      label: recipient.name,
    }));

    return filterSelect(inputValue, recipients);
  }

  async function loadDeliverymen(inputValue) {
    const response = await api.get('/deliverymen');

    const deliverymen = response.data.map(deliveryman => ({
      value: deliveryman.id,
      label: deliveryman.name,
    }));

    return filterSelect(inputValue, deliverymen);
  }

  return (
    <Form
      ref={formRef}
      schema={schema}
      initialData={parcel}
      onSubmit={handleSubmit}
    >
      <header>
        <div>
          <h1>Cadastro de encomendas</h1>
          <aside>
            <button id="back" type="button" onClick={handleBack}>
              <MdChevronLeft size={23} /> VOLTAR
            </button>
            <button type="submit">
              <MdCheck size={23} /> SALVAR
            </button>
          </aside>
        </div>
      </header>
      <Content>
        <div className="selects">
          <fieldset>
            <label htmlFor="recipient">Destinatário</label>
            <Select
              name="recipient"
              id="recipient"
              cacheOptions
              defaultOptions
              loadOptions={loadRecipients}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="deliveryman">Entregador</label>
            <Select
              name="deliveryman"
              id="deliveryman"
              cacheOptions
              defaultOptions
              loadOptions={loadDeliverymen}
            />
          </fieldset>
        </div>
        <fieldset>
          <label htmlFor="product">Nome do produto</label>
          <Input type="text" name="product" id="product" />
        </fieldset>
      </Content>
    </Form>
  );
}

ParcelForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
