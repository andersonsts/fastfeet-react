import React, { useState } from 'react';
import { MdMail, MdLock } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
// import * as Yup from 'yup';

import { EmailWrapper, PassWrapper } from '../_layouts/auth/styles';
import logo from '../../assets/logo.png';

// const schema = Yup.object().shape({
//   email: Yup.string()
//     .email('Insira um e-mail válido')
//     .required('O e-mail é obrigatório'),
//   password: Yup.string().required('A senha é obrigatória'),
// });

export default function Sign() {
  const [ani, setAni] = useState(true);

  function handleSubmit(data) {
    console.tron.log(data);
  }

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

      <Form onSubmit={handleSubmit}>
        <EmailWrapper ani={ani}>
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
