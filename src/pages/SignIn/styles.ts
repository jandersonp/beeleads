import styled from 'styled-components';
import { shade } from 'polished';

import bannerFooter from '../../assets/banner-footer.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  position: absolute;
  width: 376px;
  height: 90px;
  left: 772px;
  top: 0px;

  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 0px 0px 8px 8px;

  img {
    margin-left: 48px;
    margin-top: 16px;
  }
`;

export const Banner = styled.div`
  width: 1920px;
  height: 682px;
  left: 0px;
  top: 0px;

  background: #546e7a;

  img {
    position: absolute;
    width: 500px;
    height: 452px;
    left: 388px;
    top: 148px;
  }

  form {
    position: absolute;
    width: 529px;
    height: 536px;
    left: 964px;
    top: 106px;

    background: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;

    h1 {
      width: 481px;
      height: 28px;
      left: 988px;
      top: 130px;

      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 28px;
      text-align: center;

      color: #ffffff;
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
  }
`;

export const Section = styled.div`
  width: 1920px;
  height: 499px;
  left: 0px;
  top: 1181px;
  background-color: #00c1e3;

  img {
    position: absolute;
    width: 476px;
    height: 459px;
    left: 347px;
    top: 722px;
  }
`;

export const Footer = styled.div`
  width: 1920px;
  height: 144px;
  left: 0px;
  top: 1181px;

  background: url(${bannerFooter}), #263238;

  img {
    position: absolute;
    width: 103px;
    height: 64px;
    left: 320px;
    margin-top: 40px;
  }

  span {
    width: 152px;
    height: 32px;
    left: 1448px;
    top: 1200px;

    img {
      margin: 60px;
      margin-left: 1400px;
      width: 32px;
      height: 32px;
    }
  }
`;
