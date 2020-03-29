import React, { useState } from 'react';

import { EmailWrapper, PassWrapper } from '../_layouts/auth/styles';
import logo from '../../assets/logo.png';

export default function Sign() {
  const [ani, setAni] = useState(true);

  function handleBlur(e) {
    if (e.target.value !== '') {
      setAni(false);
    } else {
      setAni(true);
    }
  }

  return (
    <>
      <img src={logo} alt="FastFeet" />

      <form>
        <EmailWrapper ani={ani}>
          <input
            type="email"
            name="email"
            required
            onBlur={handleBlur}
            autoCorrect="off"
          />
          <label htmlFor="email">SEU E-MAIL</label>
        </EmailWrapper>
        <PassWrapper>
          <input type="password" name="password" required />
          <label htmlFor="password">SUA SENHA</label>
        </PassWrapper>
      </form>
    </>
  );
}
