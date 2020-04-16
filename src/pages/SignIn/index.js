import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdMail, MdLock } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '../../store/modules/auth/actions';

import { EmailWrapper, PassWrapper } from '../_layouts/auth/styles';
import logo from '../../assets/logo.png';

export default function Sign() {
  const [animation, setAnimation] = useState(true);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
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
        <button type="submit">
          {loading ? 'Carregando...' : 'Entrar no sistema'}
        </button>
      </Form>
    </>
  );
}
