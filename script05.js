let numerosecreto = Math.floor(Math.random() * 100) + 1;
let tentativa = parseInt(prompt("Digite um numero entre 1 e 100:"));

if (tentativa == numerosecreto){
    alert("Parabens, voce acertou!!");
} else{
    alert("Que pena, voce errou!!");
}