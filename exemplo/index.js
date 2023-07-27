const nomes = ['joao', 'maria', 'jose', 'rodrigo'];

// const minhaFuncaoCallback = (nomes) => {
//     return nome === 'joao';
// }
// const resultado = nomes.some(minhaFuncaoCallback);

const resultado = nomes.some((nome) => {
    return nome === 'joao';
});
console.log(resultado);