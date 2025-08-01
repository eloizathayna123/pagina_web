// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Alterar cor do texto para azul
  document.getElementById("button1").addEventListener("click", function () {
    document.getElementById("textMessage").style.color = "blue";
  });

  // Alterar o texto da mensagem
  document.getElementById("button2").addEventListener("click", function () {
    document.getElementById("textMessage").textContent = "A mensagem foi alterada!";
  });

  // Ocultar a mensagem
  document.getElementById("button3").addEventListener("click", function () {
    document.getElementById("textMessage").style.display = "none";
  });

  // Mostrar a mensagem novamente
  document.getElementById("button4").addEventListener("click", function () {
    document.getElementById("textMessage").style.display = "block";
  });
});
