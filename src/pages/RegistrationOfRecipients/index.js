import React from 'react';
import { IoIosArrowBack, IoMdCheckmark } from 'react-icons/io';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function RegistrationOfRecipients() {
  return (
    <Container>
      <header>
        <h1>Cadastro de destinatário</h1>
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
          <label htmlFor="name">Nome</label>
          <Input name="name" placeholder="Ex: Anderson Santos" />
        </div>
        <div>
          <div>
            <label htmlFor="street">Rua</label>
            <Input name="street" placeholder="Ex: Rua Pedro Alves" />
          </div>
          <div>
            <label htmlFor="number">Número</label>
            <Input name="number" placeholder="Ex: 450" />
          </div>
          <div>
            <label htmlFor="complement">Complemento</label>
            <Input
              name="complement"
              placeholder="Ex: Próximo a praça três poderes"
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="city">Cidade</label>
            <Input name="city" placeholder="Ex: São Paulo" />
          </div>
          <div>
            <label htmlFor="state">Estado</label>
            <Input name="state" placeholder="Ex: São Paulo" />
          </div>
          <div>
            <label htmlFor="zip_code">CEP</label>
            <Input name="zip_code" placeholder="Ex: 00000-000" />
          </div>
        </div>
      </Form>
    </Container>
  );
}
