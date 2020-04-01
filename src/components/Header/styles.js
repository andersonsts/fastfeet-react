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

  nav {
    display: flex;
    align-items: center;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    width: 100%;

    a {
      &:nth-child(n + 2):nth-child(-n + 5) {
        font-size: 15px;
        display: flex;
        align-items: center;
        border-bottom: 3px solid #7d40e7;
        height: 100%;
        padding: 0px 10px;
        font-weight: bold;
        color: #999;
        transition: color 0.25s ease-in-out;

        &:hover {
          color: #444;
        }
      }

      &:first-child {
        padding-right: 30px;
        margin-right: 30px;
        border-right: 1px solid #ddd;
      }

      img {
        width: 135px;
        height: 26px;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
    font-family: 'Roboto';
    width: 200px;

    img {
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
      width: 40px;
      height: 40px;
      margin-right: 10px;
      border-radius: 50%;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      strong {
        font-size: 15px;
      }

      a {
        display: flex;
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
