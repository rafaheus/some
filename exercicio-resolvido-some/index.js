const arquivos = [
    'teste.bat',
    'foto.png',
    'contrato.doc',
    'instalador.exe'
];

const antiVirus = (arrayArquivos) => {    
    const resultado = arrayArquivos.some((arquivo) => {
    const existeExtensao = arquivo.indexOf('.bat');
    return existeExtensao !== -1;
});

    if(resultado){
        console.log('Vírus encontrado');
    } else {
        console.log('Nenhum vírus encontrado');
    }
}

antiVirus(arquivos);


