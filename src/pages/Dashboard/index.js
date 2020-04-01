import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <h2>Gerenciando encomendas</h2>
      <div>
        <MdSearch color="#999" />
        <input type="text" />
      </div>
    </Container>
  );
}
