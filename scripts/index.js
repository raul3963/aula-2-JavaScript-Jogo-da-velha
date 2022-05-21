const spanVez = document.getElementById("vez");
const botao1 = document.getElementById("1");
const botao2 = document.getElementById("2");
const botao3 = document.getElementById("3");
const botao4 = document.getElementById("4");
const botao5 = document.getElementById("5");
const botao6 = document.getElementById("6");
const botao7 = document.getElementById("7");
const botao8 = document.getElementById("8");
const botao9 = document.getElementById("9");
let vez = "X";

function jogada(event) {
    console.log("event.innerText:", event.innerText)
    if (event.innerText == "") {
        event.innerText = vez;
        spanVez.innerText = vez;
        verificarVencedor();
        if (vez == "X") {
            vez = "O";
        } else {
            vez = "X";
        }
    } else {
        alert("não é possivel jogar nessa posição")
    }
}

function verificarVencedor() {
    //horizontal
    if(botao1.innerText == botao2.innerText && botao2.innerText == botao3.innerText  && botao3.innerText !== ""){
        alert("o jogador " + vez + " ganhou!!!!");
    }
    if(botao4.innerText == botao5.innerText && botao5.innerText == botao6.innerText && botao6.innerText !== ""){
        alert("o jogador " + vez + " ganhou!!!!");
    }
    if(botao7.innerText == botao8.innerText && botao8.innerText == botao9.innerText  && botao9.innerText !== ""){
        alert("o jogador " + vez + " ganhou!!!!");
    }
    //vertical
    if(botao1.innerText == botao4.innerText && botao4.innerText == botao7.innerText  && botao7.innerText !== ""){
        alert("o jogador " + vez + " ganhou!!!!");
    }
    if(botao2.innerText == botao5.innerText && botao5.innerText == botao8.innerText && botao8.innerText !== ""){
        alert("o jogador " + vez + " ganhou!!!!");
    }
    if(botao3.innerText == botao6.innerText && botao6.innerText == botao9.innerText  && botao9.innerText !== ""){
        alert("o jogador " + vez + " ganhou!!!!");
    }
    //diagonal
    if(botao1.innerText == botao5.innerText && botao5.innerText == botao9.innerText && botao9.innerText !== ""){
        alert("o jogador " + vez + " ganhou!!!!");
    }
    if(botao3.innerText == botao5.innerText && botao5.innerText == botao7.innerText  && botao7.innerText !== ""){
        alert("o jogador " + vez + " ganhou!!!!");
    }
}