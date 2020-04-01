import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 35px auto;

  h2 {
    font-size: 24px;
  }

  div {
    position: relative;
    margin-top: 35px;
    margin-bottom: 20px;

    input {
      width: 240px;
      padding: 10px 45px;
      color: #999;
      font-size: 14px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    svg {
      position: absolute;
      top: 10px;
      left: 10px;
    }
  }
`;
