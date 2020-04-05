import React, { useState } from 'react';
import { FaEllipsisH, FaPen } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

import { Container, Actions } from './styles';

export default function Problems() {
  const [openActions, setOpenActions] = useState(false);

  function handleActions(stateActions) {
    setOpenActions(!stateActions);
    console.log(openActions);
  }

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
              <Actions
                type="button"
                openActions={openActions}
                onClick={() => handleActions(openActions)}
              >
                <FaEllipsisH />
                <div>
                  <div>
                    <FaPen /> <p>Visualizar</p>
                  </div>
                  <div>
                    <MdDeleteForever /> <p>Cancelar encomenda</p>
                  </div>
                </div>
              </Actions>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
