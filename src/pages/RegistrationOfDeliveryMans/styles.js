import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  margin: 27px auto;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 27px;

    h1 {
      font-size: 24px;
    }

    > div {
      display: flex;
      align-items: center;

      button {
        height: 36px;
        width: 112px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 4px;
        color: #fff;
        transition: all 0.3s ease-in-out;

        &:first-child {
          margin-right: 16px;
          background: #ccc;

          &:hover {
            background: ${darken(0.1, '#ccc')};
          }
        }

        &:last-child {
          background: #7d40e7;

          &:hover {
            background: ${darken(0.1, '#7d40e7')};
          }
        }

        svg {
          font-size: 20px;
          margin-right: 8px;
        }

        p {
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
  }

  form {
    background: #fff;
    height: 400px;
    display: flex;
    flex-direction: column;
    padding: 28px 30px 40px 30px;
    border-radius: 4px;

    div {
      display: flex;
      flex-direction: column;

      &:first-child {
        margin-bottom: 24px;
        align-items: center;
        justify-content: center;
        align-self: center;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 2px dashed #ddd;
        color: #ddd;

        > svg {
          font-size: 50px;
        }

        > p {
          font-size: 16px;
          font-weight: bold;
        }
      }

      &:last-child {
        margin-top: 20px;
      }

      label {
        font-size: 15px;
        color: #444;
        font-weight: bold;
        margin-bottom: 8px;
      }

      input {
        border: 1px solid #ddd;
        height: 45px;
        border-radius: 4px;
        padding: 12px 20px;
        font-size: 16px;
        color: #666;
      }
    }
  }
`;
