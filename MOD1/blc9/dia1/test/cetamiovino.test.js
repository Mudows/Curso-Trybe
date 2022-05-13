// test('Não deveria passar!', (done) => {
//     setTimeout(() => {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//       done();
//     }, 500);
//   });

/* Falso positivo ainda */
// test('Não deveria passar!', (done) => {
//     setTimeout(() => {
//       try {
//         expect(10).toBe(5);
//         console.log('Deveria falhar!');
//         done();
//       } catch (error) {
//         done();
//       }
//     }, 500);
//   });

  /* Teste vai falhar como esperado agora. */
  test('Não deveria passar!', (done) => {
    setTimeout(() => {
      try {
        expect(10).toBe(5);
        console.log('Deveria falhar!');
        done();
      } catch (error) {
        done(error); // Alteramos esta linha
      }
    }, 500);
  });
