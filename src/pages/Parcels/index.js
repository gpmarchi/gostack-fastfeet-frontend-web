import React from 'react';
import { MdSearch, MdAdd, MdMoreHoriz } from 'react-icons/md';

import { StatusPill } from './styles';

export default function Parcels() {
  return (
    <>
      <header>
        <h1>Gerenciando encomendas</h1>
        <div>
          <input type="text" placeholder="Buscar por encomendas" />
          <button type="button">
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
          <tr>
            <td>#01</td>
            <td>Nome do destinatátio</td>
            <td>
              <div>
                <img
                  src="https://api.adorable.io/avatars/35/abott@adorable.png"
                  alt=""
                />
                Nome do entregador
              </div>
            </td>
            <td>São Paulo</td>
            <td>São Paulo</td>
            <td>
              <StatusPill>
                <div />
                CANCELADA
              </StatusPill>
            </td>
            <td>
              <MdMoreHoriz size={25} color="#C6C6C6" />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Nome do destinatátio</td>
            <td>
              <div>
                <img
                  src="https://api.adorable.io/avatars/35/abott@adorable.png"
                  alt=""
                />
                Nome do entregador
              </div>
            </td>
            <td>São Paulo</td>
            <td>São Paulo</td>
            <td>
              <StatusPill>
                <div />
                ENTREGUE
              </StatusPill>
            </td>
            <td>
              <MdMoreHoriz size={25} color="#C6C6C6" />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Nome do destinatátio</td>
            <td>
              <div>
                <img
                  src="https://api.adorable.io/avatars/35/abott@adorable.png"
                  alt=""
                />
                Nome do entregador
              </div>
            </td>
            <td>São Paulo</td>
            <td>São Paulo</td>
            <td>
              <StatusPill>
                <div />
                RETIRADA
              </StatusPill>
            </td>
            <td>
              <MdMoreHoriz size={25} color="#C6C6C6" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
