import styled, { css } from 'styled-components';

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
  box-shadow: 1px 1px 10px rgba(1, 1, 1, 0.3);

  img {
    margin-bottom: 40px;
    width: 252px;
    height: 44px;
  }

  form {
    display: flex;
    flex-direction: column;
    position: relative;
  }
`;

export const Block = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  ${(props) => props.Aemail && css``}

  input {
    outline: 0;
    width: 100%;
    height: 100%;
    color: #000;
    padding-top: 10px;
    font-size: 16px;
    border: 0;

    &:focus + label span {
      transform: translateY(-25px);
      transition: all 0.3s ease;
      color: #3498db;
    }
  }
`;
