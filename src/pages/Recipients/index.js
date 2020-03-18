import React, { useState, useEffect } from 'react';
import { MdAdd, MdMoreHoriz } from 'react-icons/md';
import PropTypes from 'prop-types';

import api from '../../services/api';

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
                <button type="button">
                  <MdMoreHoriz size={25} color="#C6C6C6" />
                </button>
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
