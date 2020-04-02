import React from 'react';
import { MdSearch } from 'react-icons/md';
import {
  FaPlus,
  FaCheck,
  FaRegClock,
  FaTruckLoading,
  FaEllipsisH,
} from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';

import { Container, Top, Status, Actions } from './styles';

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
            <td>
              <Status value="delivered">
                <FaCheck />
                ENTREGUE
              </Status>
            </td>
            <td>
              <FaEllipsisH />
            </td>
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
            <td>
              <Status value="pending">
                <FaRegClock />
                PENDENTE
              </Status>
            </td>
            <td>
              <FaEllipsisH />
            </td>
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
            <td>
              <Status value="pullout">
                <FaTruckLoading />
                RETIRADA
              </Status>
            </td>
            <td>
              <FaEllipsisH />
            </td>
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
            <td>
              <Status value="canceled">
                <GiCancel />
                CANCELADA
              </Status>
            </td>
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
