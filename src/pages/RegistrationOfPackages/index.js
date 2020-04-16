import React from 'react';
import { IoIosArrowBack, IoMdCheckmark } from 'react-icons/io';
import { Form, Input, Select } from '@rocketseat/unform';

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
          <div>
            <label htmlFor="recipient">Destinatário</label>
            <Select name="recipient" />
          </div>
          <div>
            <label htmlFor="entregador">Entregador</label>
            <Select name="entregador" />
          </div>
        </div>
        <div>
          <label htmlFor="package">Nome do produto</label>
          <Input name="package" />
        </div>
      </Form>
    </Container>
  );
}
