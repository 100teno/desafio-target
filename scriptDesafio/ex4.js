function invertString(string) {
    let resultado = '';
    for (let i = string.length - 1; i >= 0; i--) {
        resultado += string[i];
    }
    return resultado;
}
let novaString = 'Espero conseguir passar nesse desafio...';
let stringInvertida = invertString(novaString);
console.log(stringInvertida);