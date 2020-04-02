import React, { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';

import Actions from '../../components/Actions';
import api from '../../services/api';
import Pagination from '../../components/Pagination';

const actions = ['Visualizar', 'Cancelar Encomenda'];
const limit = 6;

export default function Problems() {
  const [deliveryProblems, setDeliveryProblems] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const loadDeliveryProblems = useCallback(async (page = 1) => {
    const response = await api.get('/delivery/problems', {
      params: { page, limit },
    });

    setDeliveryProblems(response.data.problems);
    setTotalPages(Number(response.data.totalPages));
  }, []);

  useEffect(() => {
    loadDeliveryProblems();
  }, [loadDeliveryProblems]);

  async function handleCancelParcelByProblem(id) {
    try {
      await api.delete(`/problems/${id}/delivery`);
      toast.success('Encomenda cancelada com sucesso!');
    } catch (error) {
      toast.error(error.response.data.error);
    }
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
      <Pagination callback={loadDeliveryProblems} totalPages={totalPages} />
    </>
  );
}
