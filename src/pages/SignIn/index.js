import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { signInRequest } from '../../store/modules/auth/actions';

import { Container, Content } from './styles';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="FastFeet" />
        <Form schema={schema} onSubmit={handleSubmit}>
          <label htmlFor="email">SEU E-MAIL</label>
          <Input
            name="email"
            type="email"
            id="email"
            placeholder="exemplo@email.com"
          />
          <label htmlFor="password">SUA SENHA</label>
          <Input
            name="password"
            type="password"
            id="password"
            placeholder="*************"
          />
          <button type="submit">Entrar no sistema</button>
        </Form>
      </Content>
    </Container>
  );
}
