import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <Link to="/">ENCOMENDAS</Link>
          <Link to="/deliverymans">ENTREGADORES</Link>
          <Link to="/recipients">DESTINATÁRIOS</Link>
          <Link to="/problems">PROBLEMAS</Link>
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
