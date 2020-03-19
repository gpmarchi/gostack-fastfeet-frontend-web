import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdAdd } from 'react-icons/md';

import Actions from '../../components/Actions';

import api from '../../services/api';

const actions = ['Editar', 'Excluir'];

export default function Deliverymen({ history }) {
  const [deliverymen, setDeliverymen] = useState([]);

  useEffect(() => {
    async function loadDeliverymen() {
      const response = await api.get('/deliverymen');

      setDeliverymen(response.data);
    }

    loadDeliverymen();
  }, []);

  function handleAddDeliveryman() {
    history.push('/deliveryman');
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
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

Deliverymen.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
