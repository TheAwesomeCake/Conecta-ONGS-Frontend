const urlParams = new URLSearchParams(window.location.search);
const idDaURL = urlParams.get('id');

document.addEventListener("DOMContentLoaded", async function() {


 
    fetch('js/json/ONGStestes.json')
      .then((response) => response.json())
      .then((listaongs) => {
        const dadoOng = listaongs.find((dadoOng) => {
          return idDaURL == dadoOng.id;
        });
       
        if (dadoOng) {
          exibirOng(dadoOng);
        } else {
        }
      });
    
      const exibirOng = (dadoOng) => {
        document.getElementById("nomeong").innerText=dadoOng.nome
        document.getElementById("emailong").innerText=dadoOng.email
        document.getElementById("recursosong").innerText=dadoOng.recursos
    };
});

