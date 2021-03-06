import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  padding: 0px 20px;
  height: 64px;
  background: #fff;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    padding-right: 30px;
    padding-left: 10px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #ddd;

    img {
      height: 26px;
      width: 135px;
    }
  }

  aside {
    display: flex;
    align-items: center;
    font-family: 'Roboto';
    width: 200px;

    > img {
      border-radius: 50%;
      width: 34px;
      height: 34px;
      margin-right: 10px;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      strong {
        font-size: 15px;
      }

      > button {
        display: flex;
        background: transparent;
        border: none;
        align-items: center;
        font-size: 14px;
        color: #de3b3b;
        transition: all 0.25s ease-in-out;

        &:hover {
          color: ${darken(0.1, '#de3b3b')};
        }

        svg {
          margin-right: 5px;
        }
      }
    }
  }
`;

const optionsTranslate = (valueIndex) => {
  switch (valueIndex) {
    case 0:
      return 'translate(0px)';
    case 1:
      return 'translate(140px)';
    case 2:
      return 'translate(280px)';
    default:
      return 'translate(420px)';
  }
};

export const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  font-family: 'Roboto', sans-serif;
  width: 900px;
  padding-left: 30px;

  a {
    width: 140px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    font-weight: bold;
    color: #999;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #7d40e7;
    }

    &:nth-child(${(props) => props.active + 1}) {
      color: #444;
      background: ${darken(0.002, '#fff')};
    }

    &:nth-child(${(props) => props.active + 1}) ~ .line {
      transform: ${(props) => optionsTranslate(props.active)};
      transition: all 0.22s ease-in-out;
      background: #7d40e7;
    }
  }

  div.line {
    width: 140px;
    top: calc(100% - 3px);
    height: 3px;
    background: #7d40e7;
    position: absolute;
  }
`;
