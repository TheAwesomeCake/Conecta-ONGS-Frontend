document.addEventListener("DOMContentLoaded", async function() {

    const times = await fetch('js/json/listaOngs.json', {
      method: 'GET'
    });
  console.log(times)
  const equipes = await times.json();
  const timesContainer = document.querySelector("#time");
  timesContainer.classList.add("row");
  equipes.forEach(projeto => {
      const cardcoluna = document.createElement("div");
      cardcoluna.classList.add("column");
      const container = document.createElement("div");
      container.classList.add("card");


      container.innerHTML = `
        <div class="container" >
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
        </div>
      `;
      
      container.setAttribute('data-id', projeto.id);
      container.addEventListener("click", () => {
        let cardID = container.getAttribute('data-id');
        window.location.href='perfilOng.html?id='+cardID  
      });
      cardcoluna.appendChild(container);
      timesContainer.appendChild(cardcoluna);
    });
  });