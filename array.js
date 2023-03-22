document.addEventListener("DOMContentLoaded", () => {

    let minhasInfos = [];
  
    document.getElementById("meuBotao").addEventListener("click", () => {
  
      let info = document.getElementById("info").value;
  
      minhasInfos.push(info); 
      minhasInfos.sort();
  
      let lista = document.getElementById("lista");
      lista.innerHTML = "";
  
      for (let i = 0; i < minhasInfos.length; i++) {
        let elemento = document.createElement("li");
        elemento.appendChild(document.createTextNode(minhasInfos[i]));
        elemento.appendChild();
      }
    }); 
  });