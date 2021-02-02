import React from 'react';

import logoBee from '../../assets/logo-bee.svg';
import logoBigTester from '../../assets/logo-bigtester.png';
import logoRadio from '../../assets/logo-radio.png';
import logoCarro from '../../assets/logo-carro.png';
import logoFacebook from '../../assets/icon-facebook.svg';
// import logoYoutube from '../../assets/icon-youtube.svg';
// import logoTwitter from '../../assets/icon-twitter.svg';
// import logoInstagram from '../../assets/icon-instagram.svg';

import { Container, Header, Banner, Section, Footer } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Header>
      <img src={logoBee} alt="Logo Grupo Bee" />
      <img src={logoBigTester} alt="Logo BigTester" />
    </Header>
    <Banner>
      <img src={logoCarro} alt="" />
      <form>
        <h1>Faça seu cadastro grátis e concorra!</h1>
        <input placeholder="Nome completo" />
        <input type="email" name="" placeholder="E-mail" />
        <input type="tel" name="" placeholder="Telefone" />
        <input type="date" name="" />

        <button type="submit">QUERO CONCORRER</button>
        <p>Concordo com os termos e Politicas.</p>
      </form>
    </Banner>
    <Section>
      <img src={logoRadio} alt="" />
    </Section>
    <Footer>
      <img src={logoBee} alt="Logo Grupo Bee" />
      <span>
        <img src={logoFacebook} alt="" />
        {/* <img src={logoYoutube} alt="" />
        <img src={logoTwitter} alt="" />
        <img src={logoInstagram} alt="" /> */}
      </span>
    </Footer>
  </Container>
);

export default SignIn;
