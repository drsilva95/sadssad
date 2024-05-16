// import promptSync from "prompt-sync";

// function soma(): void {
//   const prompter = promptSync();
//   let text: string = prompter("Enter the first number: ");
//   let numero1: number = parseInt(text);
//   // numero1 = 'ola';
//   text = prompter("Enter the second number: ");
//   let numero2: number = parseInt(text);
//   let soma: number = numero1 + numero2;
//   console.log(numero1 + " + " + numero2 + " = " + soma);
//   return;
// }
// let message: string = "Welcome";
// console.log(message);
// soma();

let numero1: number = 10;
let numero2: number = 20;
let numero3: number = 30;
let numero4: number = 40;
let numero5: number = 50;
let numero6: number = 60;

let resultado = soma(numero1, numero2);
let resultado2 = soma(numero3, numero4);
let resultado3 = soma(numero5, numero6);

function soma(number1: number, number2: number): number {
    return number1 + number2;
}