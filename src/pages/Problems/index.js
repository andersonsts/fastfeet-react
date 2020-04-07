import React, { useState } from 'react';
import { FaEllipsisH, FaPen } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

import { Container, Actions } from './styles';

export default function Problems() {
  const [problems, setProblems] = useState([
    {
      id: 1,
      description: 'alguma coisa aqui q sej aqualquer',
      openActions: false,
    },
    {
      id: 2,
      description: 'deaff coisa aqui q sej aqualquer',
      openActions: false,
    },
    {
      id: 3,
      description: 'fafea coisa aqui q sej aqualquer',
      openActions: false,
    },
    {
      id: 4,
      description: 'fafea feaf aqui q sej aqualquer',
      openActions: false,
    },
    {
      id: 5,
      description: 'fafea feaf aqui q sej aqualquer',
      openActions: false,
    },
  ]);

  // useEffect(() => {
  //   loadProblems() {

  //   }

  //   loadProblems();
  // }, [problems])

  function handleActions(problemId) {
    const problem = problems.find((prob) => prob.id === problemId);
    problem.openActions = !problem.openActions;

    const problemCopy = [...problems];
    problemCopy.splice(problemId - 1, 1, problem);
    setProblems(problemCopy);

    window.addEventListener('click', (event) => {
      const actionsContainer = document.getElementById(problemId);
      const actionsSimple = document.getElementById(`s${problemId}`);
      if (
        event.target !== actionsContainer &&
        event.target.parentNode !== actionsContainer &&
        event.target !== actionsSimple &&
        event.target.parentNode !== actionsSimple
      ) {
        console.log('clicou fora do elemento', event.target);
        return;
      }

      console.log('Clicou dentro do elemento');
    });
    //   if (
    //     event.target !== actionsContainer &&
    //     event.target.parentNode !== actionsContainer
    //   ) {
    //     problem.openActions = !problem.openActions;

    //     const problemCopy2 = [...problems];
    //     problemCopy2.splice(problemId - 1, 1, problem);
    //     setProblems(problemCopy2);
    //   }
    // });
    // problems.forEach((p) => {
    //   const actionContainer = document.getElementById(problemId);
    //   if (
    //     event.target !== actionContainer &&
    //     event.target.parentNode !== actionContainer
    //   ) {
    //     p.openActions = false;
    //     problemCopy.splice(problemId - 1, 1, p);
    //     setProblems(problemCopy);
    //   }
    // });
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
                  type="button"
                  openActions={problem.openActions}
                  onClick={() => handleActions(problem.id)}
                >
                  <FaEllipsisH />
                  <div id={problem.id}>
                    <div id={`s${problem.id}`}>
                      <button type="button">
                        <FaPen /> <p>Visualiza</p>
                      </button>
                      <button type="button">
                        <MdDeleteForever /> <p>Cancelar</p>
                      </button>
                    </div>
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
