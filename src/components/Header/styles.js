import styled from 'styled-components';

export const Container = styled.div`
  background: #444;
  padding: 0 30px;
`;

export const Content = styled.div`
  padding: 0px 20px;
  height: 64px;
  background: #eee;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    height: 100%;

    a {
      background: #777;
      display: flex;
      padding: 0 20px;
      align-items: center;
      border-bottom: 5px solid black;
      height: 100%;
    }
  }

  aside {
    display: flex;
    align-items: center;
    font-family: 'Roboto';

    img {
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
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
        color: red;

        svg {
          margin-right: 5px;
        }
      }
    }
  }
`;
