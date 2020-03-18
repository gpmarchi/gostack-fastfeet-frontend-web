import React, { useState, useEffect } from 'react';
import { MdSearch, MdAdd, MdMoreHoriz } from 'react-icons/md';
import PropTypes from 'prop-types';

import api from '../../services/api';
import { parcelStatus } from '../../util/helper';

import { StatusPill } from './styles';

export default function Parcels({ history }) {
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    async function loadParcels() {
      const response = await api.get('/parcels');

      const data = response.data.map(parcel => ({
        ...parcel,
        status: parcelStatus(parcel),
      }));

      setParcels(data);
    }

    loadParcels();
  }, []);

  function handleAddParcel() {
    history.push('/parcel');
  }

  return (
    <>
      <header>
        <h1>Gerenciando encomendas</h1>
        <div>
          <input type="search" placeholder="Buscar por encomendas" />
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

Parcels.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
