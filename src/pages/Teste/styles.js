import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: ${(props) => (props.closeActions ? 'green' : 'grey')};
  width: 400px;
  height: 400px;
  transition: all 0.3s ease-in-out;

  > span {
    ${({ closeActions }) =>
      closeActions
        ? css`
            visibility: hidden;
            opacity: 0;
            font-size: 12px;
          `
        : css`
            visibility: visible;
            opacity: 1;
            font-size: 20px;
          `};
  }
`;
