import React, { useState, useEffect } from 'react';
import { MdAdd, MdMoreHoriz } from 'react-icons/md';

import api from '../../services/api';

export default function Deliverymen() {
  const [deliverymen, setDeliverymen] = useState([]);

  useEffect(() => {
    async function loadDeliverymen() {
      const response = await api.get('/deliverymen');

      setDeliverymen(response.data);
    }

    loadDeliverymen();
  }, []);

  return (
    <>
      <header>
        <h1>Gerenciando entregadores</h1>
        <div>
          <input type="search" placeholder="Buscar por entregadores" />
          <button type="button">
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
