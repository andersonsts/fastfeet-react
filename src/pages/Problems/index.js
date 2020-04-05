import React from 'react';
import { FaEllipsisH } from 'react-icons/fa';

import { Container, Actions } from './styles';

export default function Problems() {
  return (
    <Container>
      <h2>Problemas na entrega</h2>
      <table>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>
              Lorem ipsun dolor sit amount, consectuting elit. Donec in marius
              et fellis eleifered elementuin vei queis
            </td>
            <td>
              <Actions type="button">
                <FaEllipsisH />
              </Actions>
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>
              Lorem ipsun dolor sit amount, consectuting elit. Donec in marius
              et fellis eleifered elementuin vei queis
            </td>
            <td>
              <Actions type="button">
                <FaEllipsisH />
              </Actions>
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>
              Lorem ipsun dolor sit amount, consectuting elit. Donec in marius
              et fellis eleifered elementuin vei queis
            </td>
            <td>
              <Actions type="button">
                <FaEllipsisH />
              </Actions>
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>
              Lorem ipsun dolor sit amount, consectuting elit. Donec in marius
              et fellis eleifered elementuin vei queis
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
