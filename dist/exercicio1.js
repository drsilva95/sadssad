// 1,2,4,78,9,10
let array = [1, 2, 4, 78, 9, 10];
let maisAlto = maiorNumero(array);
console.log("o numero mais alto é ", maisAlto);
function maiorNumero(array2) {
    let numero = array2[0];
    for (let i = 1; i < array2.length; i++) {
        if (array2[i] > numero) {
            numero = array2[i];
        }
    }
    return numero;
}
//# sourceMappingURL=exercicio1.js.map