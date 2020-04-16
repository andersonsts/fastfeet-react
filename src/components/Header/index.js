import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';

import { Container, Content, Nav } from './styles';

export default function Header() {
  const [links] = useState([
    { label: 'ENCOMENDAS', route: '/packages', active: true },
    { label: 'ENTREGADORES', route: '/deliverymans', active: false },
    { label: 'DESTINATÁRIOS', route: '/recipients', active: false },
    { label: 'PROBLEMAS', route: '/problems', active: false },
  ]);
  const [filterIndex, setFilterIndex] = useState(0);

  const dispatch = useDispatch();

  async function handleIndex(index) {
    await setFilterIndex(index);
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Nav active={filterIndex}>
          {links.map((link, index) => (
            <Link
              to={link.route}
              key={link.label}
              onClick={() => handleIndex(index)}
            >
              {link.label}
            </Link>
          ))}
          <div className="line" />
        </Nav>

        <aside>
          <img src={avatar} alt="Avatar" />
          <div>
            <strong>Admin FastFeet</strong>
            <button type="button" onClick={handleSignOut}>
              <FaSignOutAlt />
              <p>Sair</p>
            </button>
          </div>
        </aside>
      </Content>
    </Container>
  );
}
