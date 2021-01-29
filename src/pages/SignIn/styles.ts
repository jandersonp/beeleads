import styled from 'styled-components';
import { shade } from 'polished';

import sectionBanner from '../../assets/section-banner.png';
import bannerFooter from '../../assets/banner-footer.png';
import logoCarro from '../../assets/logo-carro.png';

export const Container = styled.div`
  width: 1920px;
  /* height: 1325px; */
`;

export const Header = styled.div`
  position: absolute;
  width: 376px;
  height: 90px;
  left: 772px;
  top: 0px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 0px 0px 8px 8px;
  background: #ffffff;

  img {
    margin-left: 48px;
    margin-top: 16px;
  }
`;

export const Banner = styled.div`
  position: absolute;
  width: 1920px;
  height: 536px;
  left: 388px;
  top: 106px;

  background: url(${logoCarro}) no-repeat #546e7a;
`;

export const Form = styled.div`
  position: absolute;
  width: 529px;
  height: 536px;
  left: 600px;

  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;

  h1 {
    margin: 24px;
    font-size: 24px;
    line-height: 28px;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  input {
    flex: 1;
    width: 481px;
    height: 56px;
    left: 988px;
    top: 182px;
    margin: 16px 24px;
    padding: 18px 16px;

    background: #ffffff;
    border: 1px solid #cfd8dc;
    box-sizing: border-box;
    border-radius: 4px;
  }

  button {
    width: 481px;
    height: 56px;
    left: 988px;
    top: 506px;
    margin: 16px 24px;
    padding: 18px 16px;
    background: #ffca28;
    border-radius: 4px;
    transition: transform 0.2s;

    &:hover {
      background: ${shade(0.2, '#ffca28')};
    }
  }

  p {
    margin-left: 24px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;

    color: #ffffff;
  }
`;

export const Section = styled.div`
  margin-top: 700px;
  width: 1920px;
  height: 536px;
  left: 388px;
  top: 106px;
  background: url(${sectionBanner}) no-repeat #00c1e3;

  img {
    position: absolute;
    width: 476px;
    height: 459px;
    left: 347px;
    top: 722px;
  }
`;

export const Footer = styled.div`
  position: absolute;
  width: 1920px;
  height: 144px;
  left: 0px;
  top: 1181px;

  background: url(${bannerFooter}), #263238;

  img {
    position: absolute;
    margin-top: 40px;
    left: 320px;
  }
`;
