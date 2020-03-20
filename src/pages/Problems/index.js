import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import Actions from '../../components/Actions';

import api from '../../services/api';

const actions = ['Visualizar', 'Cancelar Encomenda'];

export default function Problems() {
  const [deliveryProblems, setDeliveryProblems] = useState([]);

  useEffect(() => {
    async function loadDeliveryProblems() {
      const response = await api.get('/delivery/problems');

      setDeliveryProblems(response.data);
    }
    loadDeliveryProblems();
  }, []);

  async function handleCancelParcelByProblem(id) {
    await api.delete(`/problems/${id}/delivery`);
    toast.success('Encomenda cancelada com sucesso!');
  }

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
            <tr key={problem.id}>
              <td>#{problem.parcel_id}</td>
              <td>{problem.description}</td>
              <td>
                <Actions
                  actions={actions}
                  target=""
                  object={problem}
                  callback={() => handleCancelParcelByProblem(problem.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
