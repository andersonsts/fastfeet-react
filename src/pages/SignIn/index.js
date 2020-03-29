import React, { useState } from 'react';

import { EmailWrapper, PassWrapper } from '../_layouts/auth/styles';
import logo from '../../assets/logo.png';

export default function Sign() {
  const [animation, setAnimation] = useState(true);

  function handleBlur(e) {
    if (e.target.value !== '') {
      setAnimation(false);
    } else {
      setAnimation(true);
    }
  }

  return (
    <>
      <img src={logo} alt="FastFeet" />

      <form>
        <EmailWrapper animation={animation}>
          <input type="email" name="email" onBlur={handleBlur} />
          <label htmlFor="email">SEU E-MAIL</label>
        </EmailWrapper>
        <PassWrapper>
          <input type="password" name="password" />
          <label htmlFor="password">SUA SENHA</label>
        </PassWrapper>
      </form>
    </>
  );
}
