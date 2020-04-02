import React, { useState, useEffect, useCallback } from 'react';
import { MdSearch, MdAdd, MdWarning } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import Actions from '../../components/Actions';
import api from '../../services/api';
import { parcelStatus } from '../../util/helper';
import Pagination from '../../components/Pagination';

import { StatusPill } from './styles';

const actions = ['Visualizar', 'Editar', 'Excluir'];
const limit = 6;

export default function Parcels({ history }) {
  const [parcels, setParcels] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const loadParcels = useCallback(
    async (page = 1) => {
      setLoading(true);

      const response = await api.get('/parcels', {
        params: { page, limit, query },
      });

      const data = response.data.parcels.map(parcel => ({
        ...parcel,
        status: parcelStatus(parcel),
      }));

      setParcels(data);
      setTotalPages(Number(response.data.totalPages));
      setLoading(false);
    },
    [query]
  );

  useEffect(() => {
    loadParcels();
  }, [query, loadParcels]);

  function handleAddParcel() {
    history.push('/parcel');
  }

  async function handleDeleteParcel(id) {
    try {
      await api.delete(`/parcels/${id}`);
      loadParcels();
      toast.success('Encomenda excluida com sucesso!');
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }

  return (
    <>
      <header>
        <h1>Gerenciando encomendas</h1>
        <div>
          <div id="search">
            <MdSearch size={20} color="#999" />
            <input
              type="search"
              placeholder="Buscar por encomendas"
              onChange={e => setQuery(e.target.value)}
            />
          </div>
          <button type="button" onClick={handleAddParcel}>
            <MdAdd size={23} /> CADASTRAR
          </button>
        </div>
      </header>
      {parcels.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Destinatário</th>
                <th>Entregador</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {parcels.map(parcel => (
                <tr key={parcel.id}>
                  <td>#{parcel.id}</td>
                  <td>{parcel.recipient.name}</td>
                  <td>
                    <div>
                      <img
                        src={
                          parcel.deliveryman.url
                            ? parcel.deliveryman.url
                            : 'https://api.adorable.io/avatars/35/abott@adorable.png'
                        }
                        alt={parcel.deliveryman.name}
                      />
                      {parcel.deliveryman.name}
                    </div>
                  </td>
                  <td>{parcel.recipient.city}</td>
                  <td>{parcel.recipient.state}</td>
                  <td>
                    <StatusPill status={parcel.status.id}>
                      <div />
                      {parcel.status.name}
                    </StatusPill>
                  </td>
                  <td>
                    <Actions
                      actions={actions}
                      target="/parcel"
                      object={parcel}
                      callback={() => handleDeleteParcel(parcel.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Pagination callback={loadParcels} totalPages={totalPages} />
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

Parcels.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
