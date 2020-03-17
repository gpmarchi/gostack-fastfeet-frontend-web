import React, { useState, useEffect } from 'react';
import { MdMoreHoriz } from 'react-icons/md';

import api from '../../services/api';

export default function Recipients() {
  const [deliveryProblems, setDeliveryProblems] = useState([]);

  useEffect(() => {
    async function loadDeliveryProblems() {
      const response = await api.get('/delivery/problems');

      setDeliveryProblems(response.data);
    }

    loadDeliveryProblems();
  }, []);

  return (
    <>
      <header>
        <h1>Problemas na entrega</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliveryProblems.map(problem => (
            <tr>
              <td>#{problem.parcel_id}</td>
              <td>{problem.description}</td>
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
