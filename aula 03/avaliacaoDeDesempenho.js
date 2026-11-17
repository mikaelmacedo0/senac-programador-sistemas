inquirer.prompt([
    {name: 'nota', message: 'Informe a nota (0 a 10): ' },
    {name: 'frequencia', message: 'Informe a frequência (0 a 100%): ' }
]).then(respostas => {
    const nota = Number(respostas.nota);
    const frequencia = Number(respostas.frequencia);


    let resultado;

    if (nota >= 7 && frequencia >= 75) {
        resultado = 'Aprovado';
    } else if (nota >= 5 && frequencia >= 75) {
        resultado = 'Recuperação';
    } else { resultado = 'Reprovado';}
    console.log(`Resultado: ${resultado} `);
});

//correção
/*

(async () => {
    const inquirer = (await import('inquirer')).default;

    const respostas = await inquirer.prompt([
        { name: 'nota', message: 'Informe a nota (0 a 10): ' },
        { name: 'frequencia', message: 'Informe a frequência (0 a 100%): ' }
    ]);

    const nota = Number(respostas.nota);
    const frequencia = Number(respostas.frequencia);

    let resultado;

    if (nota >= 7 && frequencia >= 75) {
        resultado = 'Aprovado';
    } else if (nota >= 5 && frequencia >= 75) {
        resultado = 'Recuperação';
    } else {
        resultado = 'Reprovado';
    }

    console.log(`Resultado: ${resultado}`);
})();

*/


