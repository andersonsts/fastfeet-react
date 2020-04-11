import React, { useState } from 'react';
import { MdMail, MdLock } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import { EmailWrapper, PassWrapper } from '../_layouts/auth/styles';
import logo from '../../assets/logo.png';

export default function Sign() {
  const [animation, setAnimation] = useState(true);

  function handleSubmit(data) {
    console.tron.log(data);
  }

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

      <Form onSubmit={handleSubmit}>
        <EmailWrapper animation={animation}>
          <Input
            type="email"
            name="email"
            onBlur={handleBlur}
            required
            autoCorrect="off"
            autoComplete="off"
          />
          <label htmlFor="email">SEU E-MAIL</label>
          <MdMail />
        </EmailWrapper>
        <PassWrapper>
          <Input type="password" name="password" required />
          <label htmlFor="password">SUA SENHA</label>
          <MdLock />
        </PassWrapper>
        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
