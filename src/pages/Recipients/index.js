import React, { useState, useEffect } from 'react';
import { MdAdd, MdMoreHoriz } from 'react-icons/md';

import api from '../../services/api';

export default function Recipients() {
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

  return (
    <>
      <header>
        <h1>Gerenciando destinatários</h1>
        <div>
          <input type="text" placeholder="Buscar por destinatários" />
          <button type="button">
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
            <tr>
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
