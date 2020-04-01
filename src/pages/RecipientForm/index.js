import React from 'react';
import PropTypes from 'prop-types';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useLocation } from 'react-router-dom';
import InputMask from './InputMask';

import api from '../../services/api';

import { Content } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  street: Yup.string().required('A rua é obrigatória'),
  number: Yup.string().required('O número é obrigatório'),
  complement: Yup.string(),
  city: Yup.string().required('A cidade é obrigatória'),
  state: Yup.string().required('O estado é obrigatório'),
  zipcode: Yup.string().required('O cep é obrigatório'),
});

export default function RecipientForm({ history }) {
  const location = useLocation();

  const { object: recipient } = location.state ? location.state : {};

  function handleBack() {
    history.push('/recipients');
  }

  async function handleSubmit(data) {
    if (recipient) {
      await api.patch(`/recipients/${recipient.id}`, data);
    } else {
      await api.post('/recipients', data);
    }
    history.push('/recipients');
  }

  return (
    <Form schema={schema} initialData={recipient} onSubmit={handleSubmit}>
      <header>
        <div>
          <h1>Cadastro de destinatário</h1>
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
        <tbody>
          <tr>
            <td colSpan="5">Nome</td>
          </tr>
          <tr>
            <td colSpan="5">
              <Input type="text" name="name" />
            </td>
          </tr>
          <tr>
            <td colSpan="3">Rua</td>
            <td>Número</td>
            <td>Complemento</td>
          </tr>
          <tr>
            <td colSpan="3">
              <Input type="text" name="street" />
            </td>
            <td>
              <Input type="text" name="number" />
            </td>
            <td>
              <Input type="text" name="complement" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">Cidade</td>
            <td colSpan="2">Estado</td>
            <td>CEP</td>
          </tr>
          <tr>
            <td colSpan="2">
              <Input type="text" name="city" />
            </td>
            <td colSpan="2">
              <Input type="text" name="state" />
            </td>
            <td>
              <InputMask type="text" name="zipcode" mask="99999-999" />
            </td>
          </tr>
        </tbody>
      </Content>
    </Form>
  );
}

RecipientForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
