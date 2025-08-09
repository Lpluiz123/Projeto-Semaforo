const semaforoImg = document.querySelector("img");
const informationsParagraph = document.querySelector("#informations-paragraph")
const imagens = [
  "../img/semaforo_verde.png",
  "../img/semaforo_amarelo.png",
  "../img/semaforo_vermelho.png",
];


const tempos = [10000, 5000, 9000]


let indiceImagem = 0;

const trocarImagem = () => {
  semaforoImg.src = imagens[indiceImagem];

  const tempoAtual = tempos[indiceImagem]
  indiceImagem = (indiceImagem + 1) % imagens.length;

  information(indiceImagem)

  setTimeout(trocarImagem, tempoAtual);
};

const information = (index) => {
    switch (index) {
        case 1:
            informationsParagraph.innerText = "Cuidado, sinal aberto para os veículos!"
            informationsParagraph.style.color = "green"
            break;
        case 2:
            informationsParagraph.innerText = "Atenção, o sinal vai fechar!" 
            informationsParagraph.style.color ="yellow"
            break;
        case 0:
           informationsParagraph.innerText = "Fique a vontade para atravessar a rua!"
           informationsParagraph.style.color ="red"
           break;
    }
}

trocarImagem()






