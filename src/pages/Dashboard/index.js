import React from 'react';
import { MdSearch } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';

import { Container, Top } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <h2>Gerenciando encomendas</h2>
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
            <td>Ludwig van Beethoven</td>
            <td>
              <img src="" alt="" />
              John Doe
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>Entregue</td>
            <td>...</td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Ludwig van Beethoven</td>
            <td>
              <img src="" alt="" />
              John Doe
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>Entregue</td>
            <td>...</td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Ludwig van Beethoven</td>
            <td>
              <img src="" alt="" />
              John Doe
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>Entregue</td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
