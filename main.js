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
const tempoObjetivo1 = new Date('2025-02-13T00:00:00');
const tempoObjetivo2 = new Date('2025-03-01T00:00:00');
const tempoObjetivo3 = new Date('2025-01-01T00:00:00');
const tempoObjetivo4 = new Date('2025-01-01T00:00:00');

contadores[0]. textContent = calculaTempo(tempoObjetivo1);
contadores[1]. textContent = calculaTempo(tempoObjetivo2);
contadores[2]. textContent = calculaTempo(tempoObjetivo3);
contadores[3]. textContent = calculaTempo(tempoObjetivo4);


function calculaTempo(tempoObjetivo1) {
    let tempoAtual = new Date ();
    let tempoFinal = tempoObjetivo1-tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %=60;
    horas %=24;
    return dias + 'dias' + horas + 'horas' + minutos + 'minutos' + segundos + 'segundos' ;
}
