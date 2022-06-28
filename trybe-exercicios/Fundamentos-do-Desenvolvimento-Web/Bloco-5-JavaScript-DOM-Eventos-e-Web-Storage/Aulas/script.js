const cabecalho = document.getElementById('header-container');
cabecalho.style.backgroundColor = "green";

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = "green";

const urgente = document.getElementsByClassName('emergency-tasks')[0];
urgente.style.backgroundColor = 'rgb(255, 169, 132)';

const urgenteCabecalho = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < urgenteCabecalho.length; index += 1) {
    urgenteCabecalho[index].style.backgroundColor = 'rgb(233, 117, 255)';
}

const semUrgencia = document.getElementsByClassName('no-emergency-tasks')[0];
semUrgencia.style.backgroundColor = 'rgb(255, 221, 100)';

const semUrgenciaCabecalho = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < semUrgenciaCabecalho.length; index += 1) {
    semUrgenciaCabecalho[index].style.backgroundColor = "black"
}