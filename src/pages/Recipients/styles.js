import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 35px auto;

  h2 {
    font-size: 24px;
    font-weight: bold;
    width: 400px;
    text-transform: uppercase;
    color: #444;
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 20px;

    thead tr th {
      text-align: left;
      padding: 10px 0px 0px 25px;
      font-size: 16px;
      color: #444;

      &:last-child {
        text-align: center;
      }
    }

    tbody tr td {
      padding: 20px 0px 16px 25px;
      color: #666;
      font-size: 16px;
      background: #fff;

      &:nth-child(2) {
        > div {
          display: flex;
          align-items: center;

          div {
            margin-right: 5px;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            background: #f4effc;
            display: flex;
            align-items: center;
            justify-content: center;

            strong {
              font-weight: 500;
              font-size: 16px;
              color: #a28fd0;
            }
          }
        }
      }

      &:first-child {
        border-radius: 4px 0px 0px 4px;
      }

      &:last-child {
        text-align: center;
        border-radius: 0px 4px 4px 0px;
      }
    }
  }
`;

export const Top = styled.div`
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 237px;
    height: 36px;
    display: flex;
    align-items: center;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 2px 2px 5px rgba(1, 1, 1, 0.1);
    padding-right: 25px;

    input {
      width: 100%;
      font-size: 14px;
      height: 90%;
      border: none;
      color: #999;
    }

    button {
      background: none;
      border: 0;
      display: flex;
      align-items: center;
      margin: 0px 8px 0px 16px;

      &:hover svg {
        color: #7d40e7;
      }

      svg {
        transition: all 0.18s ease-in-out;
        font-size: 25px;
        color: #999;
      }
    }
  }

  > button {
    background: #7d40e7;
    width: 142px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 4px;
    padding: 8px 18px;
    transition: all 0.25s ease-in-out;

    &:hover {
      background: ${darken(0.15, '#7d40e7')};
    }

    strong {
      font-size: 14px;
      font-weight: bold;
      color: #fff;
    }

    svg {
      color: #fff;
      font-size: 18px;
      margin-right: 8px;
    }
  }
`;

export const Actions = styled.button`
  border: none;
  background: none;
  font-size: 16px;
  color: #666;

  svg {
    transition: all 0.2s ease-in-out;
  }

  &:hover svg {
    color: #7d40e7;
    transform: scale(1.1);
  }
`;
