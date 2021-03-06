import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { MdSearch, MdAdd, MdWarning } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';

import Actions from '../../components/Actions';
import api from '../../services/api';
import Pagination from '../../components/Pagination';

const actions = ['Editar', 'Excluir'];
const limit = 6;

export default function Deliverymen({ history }) {
  const [deliverymen, setDeliverymen] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const loadDeliverymen = useCallback(
    async (page = 1) => {
      setLoading(true);

      const response = await api.get('/deliverymen', {
        params: { page, limit, query },
      });

      setDeliverymen(response.data.deliverymen);
      setTotalPages(Number(response.data.totalPages));
      setLoading(false);
    },
    [query]
  );

  useEffect(() => {
    loadDeliverymen();
  }, [query, loadDeliverymen]);

  function handleAddDeliveryman() {
    history.push('/deliveryman');
  }

  async function handleDeleteDeliverymen(id) {
    await api.delete(`/deliverymen/${id}`);
    loadDeliverymen();
    toast.success('Entregador excluido com sucesso!');
  }

  return (
    <>
      <header>
        <h1>Gerenciando entregadores</h1>
        <div>
          <div id="search">
            <MdSearch size={20} color="#999" />
            <input
              type="search"
              placeholder="Buscar por entregadores"
              onChange={e => setQuery(e.target.value)}
            />
          </div>
          <button type="button" onClick={handleAddDeliveryman}>
            <MdAdd size={23} /> CADASTRAR
          </button>
        </div>
      </header>
      {deliverymen.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Foto</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {deliverymen.map(deliveryman => (
                <tr key={deliveryman.id}>
                  <td>#{deliveryman.id}</td>
                  <td>
                    <div>
                      <img
                        src={
                          deliveryman.avatar
                            ? deliveryman.avatar.url
                            : 'https://api.adorable.io/avatars/35/abott@adorable.png'
                        }
                        alt={deliveryman.name}
                      />
                    </div>
                  </td>
                  <td>{deliveryman.name}</td>
                  <td>{deliveryman.email}</td>
                  <td>
                    <Actions
                      actions={actions}
                      target="/deliveryman"
                      object={deliveryman}
                      callback={() => handleDeleteDeliverymen(deliveryman.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination callback={loadDeliverymen} totalPages={totalPages} />
        </>
      ) : (
        <div id="empty-list">
          {loading ? (
            <span>
              <FaSpinner size={40} color="#999" />
            </span>
          ) : (
            <>
              <MdWarning size={40} color="#999" />
              <p>Não existem registros a exibir</p>
            </>
          )}
        </div>
      )}
    </>
  );
}

Deliverymen.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
