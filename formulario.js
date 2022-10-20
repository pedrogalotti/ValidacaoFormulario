const form = document.getElementById('form');
const dados_cliente = document.querySelectorAll('.inputUser');
const avisos = document.querySelectorAll('.span-avisos');
const confirmado = document.querySelectorAll('.span-confirmado');
const emailRegex = /^\w+([-+.']\w+)*@\w+([_.]\w+)*\.\w+([-.]\w+)*$/;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  NameValidate();
  emailValidate();
  cidadeValidate();
  estadoValidate();

});

function setError(index){
  dados_cliente[index].style.border = "1px solid red";
  dados_cliente[index].style.borderRadius = "8px";

  avisos[index].style.display = "block";
}

function removeError(index){ 
  if(avisos[index].style.display = "none"){
  dados_cliente[index].style.border = "2px solid green";
  confirmado[index].style.display = "block";
  } 
}

function NameValidate(){
  if(dados_cliente[0].value.length < 16){
    setError(0);
  } else {
    removeError(0);
  }
}

function emailValidate(){
  // '!' sinal de negação, ou seja, quando isso for falso (quando o email não tiver validado) ele add o setError
  if(!emailRegex.test(dados_cliente[1].value)){
    setError(1);
  } else {
    removeError(1);
  }
}

function cidadeValidate(){
  if(dados_cliente[2].value.length < 6){
    setError(2);
  } else {
    removeError(2);
  }
}

function estadoValidate(){
  if(dados_cliente[3].value.length < 1){
    setError(3);
  } else {
    removeError(3);
  }
}