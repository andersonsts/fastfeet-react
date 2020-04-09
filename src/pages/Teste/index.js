import React, { useRef } from 'react';

import useClickOut from './useCloseBox';
import { Container } from './styles';

export default function Teste() {
  const node = useRef();
  const result = useClickOut(node, false);

  return (
    <Container ref={node} closeActions={result}>
      <button type="button">Click me</button>
      <div />
    </Container>
  );
}
