import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: ${(props) => (props.visible ? 'green' : 'grey')};
  width: 400px;
  height: 400px;
  transition: all 1s ease-in-out;

  div {
    transition: all 1s ease-in-out;
    background: black;
    height: 100px;
    width: 100px;
    cursor: pointer;
    ${({ visible }) =>
      visible
        ? css`
            visibility: hidden;
            opacity: 0;
            transform: translate(0);
          `
        : css`
            visibility: visible;
            opacity: 1;
            transform: translate(100%, 100%);
          `};
  }
`;
