import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import PropTypes from 'prop-types';

import Actions from '../../components/Actions';

import api from '../../services/api';

const actions = ['Editar', 'Excluir'];

export default function Recipients({ history }) {
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('/recipients');

      const data = response.data.map(recipient => ({
        ...recipient,
        address: `${recipient.street}, ${recipient.number}, ${recipient.city} - ${recipient.state}`,
      }));

      setRecipients(data);
    }

    loadRecipients();
  }, []);

  function handleAddRecipient() {
    history.push('/recipient');
  }

  return (
    <>
      <header>
        <h1>Gerenciando destinatários</h1>
        <div>
          <input type="search" placeholder="Buscar por destinatários" />
          <button type="button" onClick={handleAddRecipient}>
            <MdAdd size={23} /> CADASTRAR
          </button>
        </div>
      </header>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {recipients.map(recipient => (
            <tr key={recipient.id}>
              <td>#{recipient.id}</td>
              <td>{recipient.name}</td>
              <td>{recipient.address}</td>
              <td>
                <Actions
                  actions={actions}
                  target="/recipient"
                  object={recipient}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

Recipients.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
