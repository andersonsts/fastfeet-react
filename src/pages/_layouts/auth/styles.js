import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(120deg, #8d40e1, #7d40e7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  text-align: center;
  background: #fff;
  padding: 60px 30px;
  box-shadow: 5px 5px 20px rgba(1, 1, 1, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  img {
    margin-bottom: 40px;
    width: 252px;
    height: 44px;
  }

  form {
    width: 100%;
    margin-top: 5px;

    button {
      background: #7159c1;
      width: 100%;
      border: 0;
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      border-radius: 4px;
      padding: 15px 0px;
      margin-top: 20px;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: ${darken(0.05, '#7159c1')};
      }
    }
  }
`;

export const EmailWrapper = styled.div`
  position: relative;

  > input {
    margin-top: 20px;
    padding: 10px 40px 10px 0px;
    margin-bottom: 30px;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 2px solid ${lighten(0.15, '#7159c1')};
    font-size: 18px;
    font-family: 'Roboto';
    transition: all 0.3s ease-in-out;
    color: #777;

    &:focus ~ label,
    &:valid ~ label {
      bottom: 70px;
      font-size: 18px;
      font-weight: bold;
      color: #7159c1;
    }

    &:focus ~ svg,
    &:valid ~ svg {
      color: #7159c1;
      transform: translateX(20%);
    }

    &:focus,
    &:valid {
      border-bottom: 2px solid #7159c1;
    }
  }

  > label {
    font-family: 'Roboto';
    position: absolute;
    bottom: ${(props) => (props.ani ? '42px' : '70px')};
    left: 0px;
    transition: all 0.3s ease;
    pointer-events: none;
    font-weight: bold;
    font-size: 18px;
    color: #777;
  }

  > svg {
    position: absolute;
    bottom: 42px;
    right: 10px;
    color: ${lighten(0.1, '#7159c1')};
    font-size: 22px;
    transition: all 0.3s ease-in-out;
  }
`;

export const PassWrapper = styled.div`
  position: relative;

  > input {
    margin-top: 20px;
    padding: 10px 0;
    margin-bottom: 30px;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 2px solid ${lighten(0.15, '#7159c1')};
    font-size: 18px;
    font-family: 'Roboto';
    transition: all 0.3s ease-in-out;
    color: #777;

    &:focus ~ label,
    &:valid ~ label {
      bottom: 70px;
      font-size: 18px;
      font-weight: bold;
      color: #7159c1;
    }

    &:focus ~ svg,
    &:valid ~ svg {
      color: #7159c1;
      transform: translateX(20%);
    }

    &:focus,
    &:valid {
      border-bottom: 2px solid #7159c1;
    }
  }

  > label {
    font-family: 'Roboto';
    font-size: 18px;
    position: absolute;
    bottom: 42px;
    left: 0px;
    transition: all 0.3s ease;
    pointer-events: none;
    font-weight: bold;
    color: #777;
  }

  > svg {
    position: absolute;
    bottom: 42px;
    right: 10px;
    color: ${lighten(0.1, '#7159c1')};
    font-size: 22px;
    transition: all 0.3s ease-in-out;
  }
`;
