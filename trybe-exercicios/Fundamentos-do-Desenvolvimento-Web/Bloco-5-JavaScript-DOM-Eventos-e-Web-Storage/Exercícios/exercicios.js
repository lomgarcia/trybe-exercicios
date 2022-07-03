/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 


 
        */

//  1. Crie uma função que mude o texto na tag <p>-----</p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function textoFuturo() {
  let paragrafo = document.getElementsByTagName("p")[1];
  paragrafo.innerText = "Estar estável proficionalmente.";
}

textoFuturo();

// 2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function trocaCor() {
  let cor = document.getElementsByClassName("main-content")[0];
  cor.style.background = "rgb(76,164,109)";
}

trocaCor();

// 3. Crie uma função que mude a cor do quadrado vermelho para branco.
function corQuadrado() {
  let novaCor = document.getElementsByClassName("center-content")[0];
  novaCor.style.background = "white";
}

corQuadrado();

// 4. Crie uma função que corrija o texto da tag <h1>.
function textoCorreto() {
  let correcao = document.getElementsByTagName("h1")[0];
  correcao.innerText = "Exercício 5.1 - JavaScripit";
}

textoCorreto();

// 5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function tudoMaiusculo() {
  let paragrafo = document.getElementsByTagName("p")[0];
  paragrafo.innerHTML = paragrafo.innerHTML.toUpperCase();
}

tudoMaiusculo();

// 6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function todoConteudo() {
  let paragrafos = document.getElementsByTagName("p");
  for (let index = 0; index < paragrafos; index += 1) {
    console.log(paragrafos[index].innerHTML);
  }
}
todoConteudo();
