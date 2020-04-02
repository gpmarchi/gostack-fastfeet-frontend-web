import React, { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import { MdWarning } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';

import Actions from '../../components/Actions';
import api from '../../services/api';
import Pagination from '../../components/Pagination';

const actions = ['Visualizar', 'Cancelar Encomenda'];
const limit = 6;

export default function Problems() {
  const [deliveryProblems, setDeliveryProblems] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  const loadDeliveryProblems = useCallback(async (page = 1) => {
    setLoading(true);

    const response = await api.get('/delivery/problems', {
      params: { page, limit },
    });

    setDeliveryProblems(response.data.problems);
    setTotalPages(Number(response.data.totalPages));
    setLoading(false);
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
      {deliveryProblems.length > 0 ? (
        <>
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
