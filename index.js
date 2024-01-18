var card1 = document.getElementById("greatCard1");
var card2 = document.getElementById("greatCard2");
var card3 = document.getElementById("greatCard3");
var setaDir = document.getElementById("setaDir");
var setaEsq = document.getElementById("setaEsq");
var miniCard1 = document.getElementById("card1");
var miniCard2 = document.getElementById("card2");
var miniCard3 = document.getElementById("card3");

var cardAtual = 1;

miniCard1.classList.add("selected");
miniCard1.style.filter = 'grayscale(0%)';
miniCard1.style.boxShadow = '0px 4px 8px var(--black)';
miniCard1.style.transform = 'scale(1.07)';
card2.style.display = "none";
card3.style.display = "none";

function RolarParaDireita() {
    cardAtual = (cardAtual % 3) + 1;
    atualizarVisibilidade();
}

function RolarParaEsquerda() {
    cardAtual = (cardAtual - 2 + 3) % 3 + 1;
    atualizarVisibilidade();
}

function SelecionarMiniCard(numero) {
    cardAtual = numero;
    atualizarVisibilidade();
}

function atualizarVisibilidade() {
    for (let i = 1; i <= 3; i++) {
        var card = document.getElementById(`greatCard${i}`);
        var miniCard = document.getElementById(`card${i}`);
        var isSelected = cardAtual === i;

        card.style.display = isSelected ? "inline" : "none";
        miniCard.classList.toggle("selected", isSelected);
        miniCard.style.filter = isSelected ? 'grayscale(0%)' : 'grayscale(100%)';
        miniCard.style.boxShadow = isSelected ? '0px 4px 8px var(--black)' : 'none';
        miniCard.style.transform = isSelected ? 'scale(1.07)' : 'none';
    }
}

var num = document.getElementById("num");

function addCard() {
    var currentValue = parseInt(num.innerText);
    num.innerText = currentValue + 1;
}

function minusCard() {
    var currentValue = parseInt(num.innerText);
    num.innerText = Math.max(0, currentValue - 1);
}

function addOnList() {
        var currentValue = parseInt(num.innerText);

        if (currentValue !== 0) {
            window.alert("As cartas foram adicionadas à lista!");
            num.innerText = 0;
        } else {
            window.alert("Você não selecionou nenhuma carta.");
        }
    }