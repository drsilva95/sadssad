// 1,2,4,78,9,10

let array: number[] = [1,2,4,78,9,10] 

let maisAlto: number = maiorNumero(array)
console.log("o numero mais alto é ", maisAlto)

function maiorNumero (array2: number[]): number {
    let numero: number = array2[0]

    array2.forEach((element) => {
        if (element > numero){
            numero = element
        }
    })

    for (let i=1; i<array2.length; i++){
        if (array2[i] > numero){
            numero = array2[i]
        }
    }
    return numero
}