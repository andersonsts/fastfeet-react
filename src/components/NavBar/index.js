import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Nav } from './styles';

export default function NavBar() {
  const [links, setLinks] = useState([
    { label: 'ENCOMENDAS', route: '/', active: true },
    { label: 'ENTREGADORES', route: '/deliverymans', active: false },
    { label: 'DESTINATÁRIOS', route: '/recipients', active: false },
    { label: 'PROBLEMAS', route: '/problems', active: false },
  ]);
  const [filterIndex, setFilterIndex] = useState(0);

  async function handleIndex(index) {
    await setFilterIndex(index);
  }

  return (
    <Container>
      <Nav active={filterIndex}>
        {links.map((link, index) => (
          <Link
            key={link.label}
            to={link.route}
            onClick={() => handleIndex(index)}
          >
            {link.label}
          </Link>
        ))}
        <div className="line" />
      </Nav>
    </Container>
  );
}
