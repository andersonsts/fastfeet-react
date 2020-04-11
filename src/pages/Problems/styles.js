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

export const Actions = styled.div`
  position: relative;

  > button {
    border: none;
    background: none;
    font-size: 16px;
    color: #666;

    svg {
      transition: all 0.2s ease-in-out;

      &:hover {
        color: #7d40e7;
        transform: scale(1.1);
        cursor: pointer;
      }
    }
  }

  > div {
    padding: 18px 15px;
    background: #fff;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    height: 95px;
    width: 150px;
    top: 20px;
    left: calc(100% - 130px);
    display: flex;
    visibility: ${(props) => (props.openActions ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.openActions ? '1' : '0')};
    transform: ${(props) =>
      props.openActions ? 'translate(5%, 15%)' : 'translate(0)'};
    transition: all 0.3s ease;
    z-index: 2;

    > button {
      display: flex;
      align-items: center;
      background: none;
      border: none;

      &:first-child {
        padding: 10px 0px;
        border-bottom: 1px solid #eee;

        > svg {
          color: #4d85ee;
          font-size: 15px;
          margin-right: 10px;
        }

        > p {
          font-size: 16px;
          color: #999;
          transition: color 0.25s ease-in-out;

          &:hover {
            color: ${darken(0.2, '#999')};
          }
        }
      }

      &:last-child {
        padding: 10px 0px;
        > svg {
          color: #de3b3b;
          font-size: 18px;
          margin-right: 10px;
        }

        > p {
          font-size: 16px;
          color: #999;
          transition: color 0.25s ease-in-out;

          &:hover {
            color: ${darken(0.2, '#999')};
          }
        }
      }
    }
  }
`;
