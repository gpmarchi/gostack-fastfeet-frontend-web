import React, { useState, useEffect, useCallback } from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';
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

  const loadParcels = useCallback(
    async (page = 1) => {
      const response = await api.get('/parcels', {
        params: { page, limit, query },
      });

      const data = response.data.parcels.map(parcel => ({
        ...parcel,
        status: parcelStatus(parcel),
      }));

      setParcels(data);
      setTotalPages(Number(response.data.totalPages));
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
    await api.delete(`/parcels/${id}`);
    loadParcels();
    toast.success('Encomenda excluida com sucesso!');
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
  );
}

Parcels.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
