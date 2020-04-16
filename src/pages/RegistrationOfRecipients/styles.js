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
    display: flex;
    flex-direction: column;
    padding: 28px 30px 40px 30px;
    border-radius: 4px;

    div {
      display: flex;

      label {
        font-size: 15px;
        color: #444;
        font-weight: bold;
        margin-bottom: 9px;
      }

      input {
        border: 1px solid #ddd;
        height: 45px;
        border-radius: 4px;
        padding: 12px 20px;
        font-size: 16px;
        color: #666;
      }

      &:first-child {
        flex-direction: column;
      }

      &:nth-child(2) {
        flex-direction: row;
        margin: 10px 0px;
        align-items: center;

        div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          &:first-child {
            input {
              width: 420px;
              margin-right: 12px;
            }
          }

          &:nth-child(2) {
            input {
              width: 150px;
              margin-right: 12px;
            }
          }

          &:last-child {
            flex: 1;

            input {
              width: 100%;
            }
          }
        }
      }

      &:last-child {
        flex-direction: row;
        align-items: center;

        div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          &:first-child {
            input {
              width: 270px;
              margin-right: 16px;
            }
          }

          &:nth-child(2) {
            input {
              width: 270px;
              margin-right: 16px;
            }
          }

          &:last-child {
            flex: 1;

            input {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;
