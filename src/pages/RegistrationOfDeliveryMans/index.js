import React from 'react';
import { IoIosArrowBack, IoMdCheckmark } from 'react-icons/io';
import { MdInsertPhoto } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function RegistrationOfDeliveryMans() {
  return (
    <Container>
      <header>
        <h1>Cadastro de entregadores</h1>
        <div>
          <button type="button">
            <IoIosArrowBack />
            <p>VOLTAR</p>
          </button>
          <button type="button">
            <IoMdCheckmark />
            <p>SALVAR</p>
          </button>
        </div>
      </header>
      <Form>
        <div>
          <MdInsertPhoto />
          <p>Adicionar foto</p>
        </div>
        <div>
          <label htmlFor="name">Nome</label>
          <Input name="name" />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <Input name="email" />
        </div>
      </Form>
    </Container>
  );
}
