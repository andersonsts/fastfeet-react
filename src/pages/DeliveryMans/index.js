import React from 'react';
import { MdSearch } from 'react-icons/md';
import { FaPlus, FaEllipsisH } from 'react-icons/fa';

import { Container, Top, Actions } from './styles';

export default function DeliveryMans() {
  return (
    <Container>
      <h2>Gerenciando entregadores</h2>
      <Top>
        <div>
          <button type="button">
            <MdSearch />
          </button>
          <input type="text" />
        </div>

        <button type="button">
          <FaPlus />
          <strong>CADASTRAR</strong>
        </button>
      </Top>
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
          <tr>
            <td>#01</td>
            <td>
              <div>
                <div>
                  <strong>JD</strong>
                </div>
                <p>John Doe</p>
              </div>
            </td>
            <td>John Doe</td>
            <td>examples@gmail.com</td>
            <td>
              <Actions type="button">
                <FaEllipsisH />
              </Actions>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
