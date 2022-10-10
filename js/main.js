// var item = document.querySelectorAll('.perguntas-item');
var botoes = document.querySelectorAll('.btn');
const icone = document.querySelectorAll('.icone');
// var resumo = document.querySelector('.resumo');

var resumo1 = document.getElementById('resumo1')
var resumo2 = document.getElementById('resumo2')
var resumo3 = document.getElementById('resumo3')
var resumo4 = document.getElementById('resumo4')
var resumo5 = document.getElementById('resumo5')
var resumo6 = document.getElementById('resumo6')

function resposta1() {
    icone[0].classList.toggle('icone-girar')
    resumo1.classList.toggle('resumo-abrir')
}
function resposta2() {
    icone[1].classList.toggle('icone-girar')
    resumo2.classList.toggle('resumo-abrir')
}
function resposta3() {
    icone[2].classList.toggle('icone-girar')
    resumo3.classList.toggle('resumo-abrir')
}
function resposta4() {
    icone[3].classList.toggle('icone-girar')
    resumo4.classList.toggle('resumo-abrir')
}
function resposta5() {
    icone[4].classList.toggle('icone-girar')
    resumo5.classList.toggle('resumo-abrir')
}
function resposta6() {
    icone[5].classList.toggle('icone-girar')
    resumo6.classList.toggle('resumo-abrir')
}