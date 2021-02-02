import React from 'react';

import logoBee from '../../assets/logo-bee.png';

import { Container } from './styles';

const Landing: React.FC = () => (
  <Container>
    <img src={logoBee} alt="Logo Grupo Bee" />
  </Container>
);

export default Landing;
