import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

import avatar from '../../assets/avatar.jpg';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src="" alt="" />
          </Link>
          <Link to="/">Encomendas</Link>
          <Link to="/">Entregadores</Link>
          <Link to="/">Destinatários</Link>
        </nav>

        <aside>
          <img src={avatar} alt="Avatar" />
          <div>
            <strong>Admin FastFeet</strong>
            <Link to="/logout">
              <FaSignOutAlt />
              <p>Sair</p>
            </Link>
          </div>
        </aside>
      </Content>
    </Container>
  );
}
