const botoes = document.querySelectorAll('.botao');
const textos = document.querySelectorAll('.aba-conteudo');

for (let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function() {
        
        for  (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove('ativo');
            textos[j].classList.remove('ativo');

        
        }
        botoes[i].classList.add('ativo');
        textos[i].classList.add('ativo');
    }
    console.log(botoes);
}


const contadores = document.querySelectorAll('.contador');
const tempoObjetivo1 = new Date('2024-10-05T00:00:00');


contadores[0]. textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo1) {
    let tempoAtual = new Date ();
    let tempoFinal = tempoObjetivo1-tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = mat.floor(segundos / 60);
    let horas = mat.floor(minutos / 60);
    let dias = mat.floor(horas / 24);
    return dias;
}
