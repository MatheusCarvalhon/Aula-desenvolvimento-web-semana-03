console.log("--- BLOCO 1 ---");

let pontos = 50;
pontos += 10;
console.log(`Pontos atuais: ${pontos}`);


const MAX_PONTOS = 100;
try {
    MAX_PONTOS = 200; 
} catch (erro) {
    console.error("Erro ao reatribuir constante:", erro.name);

}

const tipoString = "Engenharia de Software";
const tipoNumber = 2026;
const tipoBoolean = true;
let tipoUndefined;
const tipoNull = null;

console.log("typeof String:", typeof tipoString);
console.log("typeof Number:", typeof tipoNumber);
console.log("typeof Boolean:", typeof tipoBoolean);
console.log("typeof Undefined:", typeof tipoUndefined);
console.log("typeof Null:", typeof tipoNull); 


const linguagem = "JavaScript";
const dificuldade = "fácil";

const fraseTemplate = `Aprender ${linguagem} é muito ${dificuldade}!`;
const fraseConcat = "Aprender " + linguagem + " é muito " + dificuldade + "!";

console.log("Com Template Literal:", fraseTemplate);
console.log("Com Concatenação:", fraseConcat);

console.log("\n--- BLOCO 2 ---");

console.log("Testando hoisting (Função declarada):", ehMaiorDeIdade(20)); // Funciona normalmente pois a função é "içada" para o topo
function ehMaiorDeIdade(idade) {
    return idade >= 18;
}

try {
    console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
    console.error("Erro de hoisting (Função de expressão):", erro.name);

}
const ehMaiorDeIdadeExpressao = function(idade) {
    return idade >= 18;
};


function dobroDeclarada(n) {
    return n * 2;
}

const dobroExpressao = function(n) {
    return n * 2;
};

const dobroArrow = n => n * 2; 

console.log("Dobro (Declarada):", dobroDeclarada(5));
console.log("Dobro (Expressão):", dobroExpressao(5));
console.log("Dobro (Arrow):", dobroArrow(5));

const calcularDobroPadrao = (n = 1) => n * 2;
console.log("Chamando função com argumento (10):", calcularDobroPadrao(10)); // 20
console.log("Chamando função sem argumentos (padrão n=1):", calcularDobroPadrao()); // 2

console.log("\n--- BLOCO 3 ---");


function classificarNota(nota) {
    if (nota >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}
console.log("Nota 7:", classificarNota(7));
console.log("Nota 4:", classificarNota(4));


const corSemaforo = "amarelo";
switch (corSemaforo) {
    case "vermelho":
        console.log("Semáforo: Pare");
        break;
    case "amarelo":
        console.log("Semáforo: Atenção");
        break;
    case "verde":
        console.log("Semáforo: Siga");
        break;
    default:
        console.log("Semáforo: Cor inválida");
}


console.log("\nTabuada do 5:");
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

console.log("\nContagem regressiva:");
let contador = 5;
while (contador >= 1) {
    console.log(contador);
    contador--; 
}

console.log("\nPar ou Ímpar com laço FOR:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} é par`);
    } else {
        console.log(`${i} é ímpar`);
    }
}

console.log("\nPar ou Ímpar com laço WHILE:");
let numeroAtual = 1;
while (numeroAtual <= 20) {
    if (numeroAtual % 2 === 0) {
        console.log(`${numeroAtual} é par`);
    } else {
        console.log(`${numeroAtual} é ímpar`);
    }
    numeroAtual++; 
}

function diaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Número inválido. Insira um valor de 1 a 7.";
    }
}
console.log("\nDia 3:", diaDaSemana(3));
console.log("Dia 9:", diaDaSemana(9));