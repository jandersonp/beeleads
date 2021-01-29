import React from 'react';

import logoBee from '../../assets/logo-bee.png';
import logoBigTester from '../../assets/logo-bigtester.png';
import logoRadio from '../../assets/logo-radio.png';

import { Container, Header, Banner, Form, Section, Footer } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Header>
      <img src={logoBee} alt="Logo Grupo Bee" />
      <img src={logoBigTester} alt="Logo BigTester" />
    </Header>
    <Banner>
      <Form>
        <h1>Faça seu cadastro grátis e concorra!</h1>
        <input placeholder="Nome completo" />
        <input type="email" name="" placeholder="E-mail" />
        <input type="tel" name="" placeholder="Telefone" />
        <input type="date" name="" />

        <button type="submit">QUERO CONCORRER</button>
        <p>Concordo com os termos e Politicas.</p>
      </Form>
    </Banner>
    <Section>
      <img src={logoRadio} alt="" />
    </Section>
    <Footer>
      <img src={logoBee} alt="Logo Grupo Bee" />
    </Footer>
  </Container>
);

export default SignIn;
