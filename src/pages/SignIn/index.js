import React, { useState } from 'react';

import { Block } from '../_layouts/auth/styles';
import logo from '../../assets/logo.png';

export default function Sign() {
  const [Aemail, setAEmail] = useState(false);

  function handleChange(e) {
    if (e.target.value === '') {
      setAEmail(false);
    } else {
      setAEmail(true);
    }
  }

  return (
    <>
      <img src={logo} alt="FastFeet" />

      <form>
        <Block Aemail={Aemail}>
          <input type="email" name="email" onChange={handleChange} />
          <label htmlFor="email">
            <span>SEU E-MAIL</span>
          </label>
        </Block>

        {/* <input type="password" placeholder="SUA SENHA" name="password" />
          <label htmlFor="password">SUA SENHA</label> */}
        {/*
        <button type="submit">Entrar no sistema</button> */}
      </form>
    </>
  );
}
