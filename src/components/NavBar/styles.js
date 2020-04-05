import styled from 'styled-components';

export const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const optionsTranslate = (valueIndex) => {
  switch (valueIndex) {
    case 0:
      return 'translate(10px)';
    case 1:
      return 'translate(150px)';
    case 2:
      return 'translate(290px)';
    default:
      return 'translate(430px)';
  }
};

export const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;

  a {
    font-size: 15px;
    color: #777;
    width: 140px;
    font-weight: bold;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:nth-child(${(props) => props.active + 1}) {
      color: orange;
    }

    &:nth-child(${(props) => props.active + 1}) ~ .line {
      transform: ${(props) => optionsTranslate(props.active)};
      transition: all 0.22s ease-in-out;
      background: #7159c1;
    }
  }

  div.line {
    width: 140px;
    height: 3px;
    background: #7159c1;
    position: absolute;
    top: 100%;
    transition: all 0.2s ease-in;
  }
`;
