import React from 'react';
import { MdSearch } from 'react-icons/md';
import { FaEllipsisH, FaPlus } from 'react-icons/fa';

import { Container, Top, Actions } from './styles';

export default function Recipients() {
  return (
    <Container>
      <h2>Gerenciando destinatários</h2>
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
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>John Doe</td>
            <td>Rua Bethoven, 1729, Diadema - São Paulo</td>
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
