//Exercícios 1

// let num = prompt("Digite um Número :");

// if (num > 0) {
//     console.log("Positivo");
// }

// else if (num < 0) {
//     console.log("Negativo");

// }

// else {
//     console.log("É Zero");
// }

//Exercício 2

// let num = prompt("Digite um número aqui");

// if (num % 2 === 0) {
//     alert("Número é Par");
// }

// else {
//     alert("Número é Impar");
// }

//Exercício 3

// let idade = prompt("Digite um Número :");

//  if (idade<=12) {
//     console.log("Criança");
//  }

//  else if (idade<=17) {
//      console.log("Adolescente");

//  }

//  else {
//     console.log("Aduto");
//  }

// Exercício 4

// let nota = prompt("Insira a nota do Aluno");

// if (nota<=59) {
//     console.log("Reprovado")
// }

// else if (nota>=60){
//     console.log("Aprovado")
// }


//Exercicio 1 Intermediário

// let numero1 = parseFloat(prompt("Digite o primeiro número:"));
// let numero2 = parseFloat(prompt("Digite o segundo número:"));
// let operacao = prompt("Escolha uma operação (+, -, *, /):");

// let resultado;

// if (operacao === "+") {
//   resultado = numero1 + numero2;
// } else if (operacao === "-") {
//   resultado = numero1 - numero2;
// } else if (operacao === "*") {
//   resultado = numero1 * numero2;
// } else if (operacao === "/") {
//   if (numero2 === 0) {
//     resultado = "Não é possível dividir por zero.";
//   } else {
//     resultado = numero1 / numero2;
//   }
// } else {
//   resultado = "Operação inválida!";
// }


// console.log("Resultado: " + resultado);


// Exercício 2 Intermediário

// let a = prompt("Digite um número");
// let b = prompt("Digite um número");
// let c = prompt("Digite um número");

// if (a > b && a > c) {
//     console.log(a);
// }
// else if (b > a && b > c) {
//     console.log(b);
// } 
//     else {
//         console.log(c);
//     }


//exercicio 3 



// let valorCompra = parseFloat(prompt("Digite o valor da compra: R$"));

// if (valorCompra > 90) {
//     let desconto = valorCompra * 0.10; 
//     let valorComDesconto = valorCompra - desconto;
//     console.log("Valor com desconto: R$ " + valorComDesconto);
// } 
// else {
//     console.log("Valor normal: R$ " + valorCompra);
// }


//Exercício 4 Intermediário

// let usuario = prompt("Informe o Usuário!");
// let senha = prompt("Informe sua Senha :");
// if (usuario == "admin" && senha == 1234) {
//     console.log("Login Aceito");
// } 
// else {
//     console.log("Login Recusado");
// }


//exercicio 3 avancado


let peso = parseFloat(prompt("Informe o seu peso (em kg):"));
let altura = parseFloat(prompt("Informe a sua altura (em metros):"));

let imc = peso / (altura * altura);

console.log("Seu IMC é: " + imc);

if (imc < 18.5) {
    console.log("Classificação: Abaixo do peso");
} 
else if (imc >= 18.5 && imc < 24.9) {
    console.log("Classificação: Peso normal");
} 
else if (imc >= 25 && imc < 29.9) {
    console.log("Classificação: Sobrepeso");
} 
else {
    console.log("Classificação: Obesidade");
}





