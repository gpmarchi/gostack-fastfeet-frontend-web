import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

import Actions from '../../components/Actions';
import api from '../../services/api';
import Pagination from '../../components/Pagination';

const actions = ['Editar', 'Excluir'];

export default function Deliverymen({ history }) {
  const [deliverymen, setDeliverymen] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  async function loadDeliverymen(page = 1) {
    const response = await api.get(`/deliverymen?page=${page}`);

    setDeliverymen(response.data.deliverymen);
    setTotalPages(Number(response.data.totalPages));
  }

  useEffect(() => {
    loadDeliverymen();
  }, []);

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
          <input type="search" placeholder="Buscar por entregadores" />
          <button type="button" onClick={handleAddDeliveryman}>
            <MdAdd size={23} /> CADASTRAR
          </button>
        </div>
      </header>
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
  );
}

Deliverymen.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
