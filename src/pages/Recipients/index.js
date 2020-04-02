import React, { useState, useEffect, useCallback } from 'react';
import { MdSearch, MdAdd, MdWarning } from 'react-icons/md';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import Actions from '../../components/Actions';
import api from '../../services/api';
import Pagination from '../../components/Pagination';

const actions = ['Editar', 'Excluir'];
const limit = 6;

export default function Recipients({ history }) {
  const [recipients, setRecipients] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState('');

  const loadRecipients = useCallback(
    async (page = 1) => {
      const response = await api.get('/recipients', {
        params: { page, limit, query },
      });

      const data = response.data.recipients.map(recipient => ({
        ...recipient,
        address: `${recipient.street}, ${recipient.number}, ${recipient.city} - ${recipient.state}`,
      }));

      setRecipients(data);
      setTotalPages(Number(response.data.totalPages));
    },
    [query]
  );

  useEffect(() => {
    loadRecipients();
  }, [query, loadRecipients]);

  function handleAddRecipient() {
    history.push('/recipient');
  }

  async function handleDeleteRecipient(id) {
    await api.delete(`/recipients/${id}`);
    loadRecipients();
    toast.success('Destinatário excluido com sucesso!');
  }

  return (
    <>
      <header>
        <h1>Gerenciando destinatários</h1>
        <div>
          <div id="search">
            <MdSearch size={20} color="#999" />
            <input
              type="search"
              placeholder="Buscar por destinatários"
              onChange={e => setQuery(e.target.value)}
            />
          </div>
          <button type="button" onClick={handleAddRecipient}>
            <MdAdd size={23} /> CADASTRAR
          </button>
        </div>
      </header>
      {recipients.length > 0 ? (
        <>
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
                      callback={() => handleDeleteRecipient(recipient.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination callback={loadRecipients} totalPages={totalPages} />
        </>
      ) : (
        <div id="empty-list">
          <MdWarning size={40} color="#999" />
          <p>Não existem registros a exibir</p>
        </div>
      )}
    </>
  );
}

Recipients.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
