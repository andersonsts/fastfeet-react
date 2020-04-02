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
    </Container>
  );
}
