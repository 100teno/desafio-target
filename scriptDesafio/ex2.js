function sequenciaFibonacci(numero) {
    let x = 0;
    let y = 1;

    while (y <= numero) {
        if (y === numero) {
            console.log(`${numero} é pertencente à sequencia de Fibonacci`);
            return;
        }
        let muda = x;
        x = y;
        y = muda + y;
    }

    console.log(`${numero} nao é pertencente à sequencia de Fibonacci`);
}

let verificarNumero = 21;
sequenciaFibonacci(verificarNumero);