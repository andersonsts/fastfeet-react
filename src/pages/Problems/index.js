import React, { useState } from 'react';
import { FaEllipsisH, FaPen } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

import { Container, Actions } from './styles';

export default function Problems() {
  const [problems, setProblems] = useState([
    {
      id: 0,
      description: 'alguma coisa aqui q sej aqualquer',
      openActions: false,
    },
    {
      id: 1,
      description: 'deaff coisa aqui q sej aqualquer',
      openActions: false,
    },
    {
      id: 2,
      description: 'fafea coisa aqui q sej aqualquer',
      openActions: false,
    },
    {
      id: 3,
      description: 'fafea feaf aqui q sej aqualquer',
      openActions: false,
    },
    {
      id: 4,
      description: 'fafea feaf aqui q sej aqualquer',
      openActions: false,
    },
  ]);

  function handleActions(problemId) {
    const problem = problems.find((prob) => prob.id === problemId);
    problem.openActions = !problem.openActions;

    const problemCopy = [...problems];
    problemCopy.splice(problemId, 1, problem);

    setProblems(problemCopy);
  }

  function handleActionFalse(problemId) {
    const problem = problems.find((prob) => prob.id === problemId);
    problem.openActions = false;

    const problemCopy = [...problems];
    problemCopy.splice(problemId, 1, problem);

    setProblems(problemCopy);
  }

  return (
    <Container>
      <h2>Problemas na entrega</h2>
      <table>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <tr key={problem.id}>
              <td>#{problem.id}</td>
              <td>{problem.description}</td>
              <td>
                <Actions
                  openActions={problem.openActions}
                  onBlur={() => handleActionFalse(problem.id)}
                >
                  <button
                    type="button"
                    onClick={() => handleActions(problem.id)}
                  >
                    <FaEllipsisH />
                  </button>
                  <div>
                    <button type="button">
                      <FaPen /> <p>Visualiza</p>
                    </button>
                    <button type="button">
                      <MdDeleteForever /> <p>Cancelar</p>
                    </button>
                  </div>
                </Actions>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
