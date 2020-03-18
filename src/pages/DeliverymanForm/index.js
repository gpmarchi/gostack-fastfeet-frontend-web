import React from 'react';
import PropTypes from 'prop-types';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import AvatarInput from './AvatarInput';

import api from '../../services/api';

import { Content } from './styles';

const schema = Yup.object().shape({
  avatar_id: Yup.number(),
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().required('O email é obrigatório'),
});

export default function DeliverymanForm({ history }) {
  function handleBack() {
    history.push('/deliverymen');
  }

  async function handleSubmit({ name, email, avatar_id }) {
    await api.post('/deliverymen', {
      name,
      email,
      avatar_id,
    });
    history.push('/deliverymen');
  }

  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <header>
        <div>
          <h1>Cadastro de entregadores</h1>
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
        <AvatarInput name="avatar_id" />
        <fieldset>
          <label htmlFor="name">Nome</label>
          <Input type="text" name="name" id="name" />
          <label htmlFor="email">E-mail</label>
          <Input type="text" name="email" id="email" />
        </fieldset>
      </Content>
    </Form>
  );
}

DeliverymanForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};