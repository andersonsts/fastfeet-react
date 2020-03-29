import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-120deg, #8515e6, #7d40e7);
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
    margin-top: 10px;
  }
`;

export const EmailWrapper = styled.div`
  position: relative;

  > input {
    margin-top: 20px;
    padding: 10px 0;
    margin-bottom: 30px;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 2px solid #7159c1;
    font-size: 16px;
    font-family: 'Roboto';
    transition: all 0.3s ease-in-out;
    color: #777;

    &:focus ~ label,
    &:valid ~ label {
      bottom: 70px;
      font-size: 16px;
      font-weight: bold;
      color: #7159c1;
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
    color: #777;
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
    border-bottom: 2px solid #7159c1;
    font-size: 16px;
    font-family: 'Roboto';
    transition: all 0.3s ease-in-out;
    color: #777;

    &:focus ~ label,
    &:valid ~ label {
      bottom: 70px;
      font-size: 16px;
      font-weight: bold;
      color: #7159c1;
    }

    &:focus,
    &:valid {
      border-bottom: 2px solid #7159c1;
    }
  }

  > label {
    font-family: 'Roboto';
    position: absolute;
    bottom: 42px;
    left: 0px;
    transition: all 0.3s ease;
    pointer-events: none;
    font-weight: bold;
    color: #777;
  }
`;
