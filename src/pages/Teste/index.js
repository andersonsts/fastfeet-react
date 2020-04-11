// import React, { useRef, useState } from 'react';

// import useClickOut from './useCloseBox';
// import { Container } from './styles';

// export default function Teste() {
//   const [problems, setProblems] = useState([
//     {
//       id: 0,
//       description: 'alguma coisa aqui q sej aqualquer',
//       openActions: false,
//     },
//     {
//       id: 1,
//       description: 'deaff coisa aqui q sej aqualquer',
//       openActions: false,
//     },
//     {
//       id: 2,
//       description: 'fafea coisa aqui q sej aqualquer',
//       openActions: false,
//     },
//     {
//       id: 3,
//       description: 'fafea feaf aqui q sej aqualquer',
//       openActions: false,
//     },
//     {
//       id: 4,
//       description: 'fafea feaf aqui q sej aqualquer',
//       openActions: false,
//     },
//   ]);
//   const referents = Object.keys(problems);
//   const results = [];

//   referents[0] = useRef(null);
//   referents[1] = useRef(null);
//   referents[2] = useRef(null);
//   referents[3] = useRef(null);
//   referents[4] = useRef(null);

//   referents.forEach((referent, index) => {
//     results[index] = useClickOut(referent, false);
//   });

//   // return (
//     <>
//       {problems.map((problem) => (
//         <>
//           <button type="button" ref={referents[problem.id]} visible={results}>
//             {problem.description}
//           </button>
//           <div>{problem.id}</div>
//         </>
//       ))}
//     </>
//   );
// }
