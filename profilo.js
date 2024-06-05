function mostaInformazioni(){
    fetch("prendiInformazioni.php").then(onResponse).then(onJson);
}
function onResponse(response){
    console.log(response);
      return response.json();
      
  }
  function onJson(json){
    console.log(json);
    const informazioniPrese=document.querySelector('.informazioni');
    const usernameP=document.createElement('h1');
    usernameP.textContent="USERNAME"
    const usernameUtente=document.createElement('div');
    usernameUtente.textContent=json[0].username
    const nomeP=document.createElement('h1');
    nomeP.textContent="NOME";
    const nomeUtente=document.createElement('div');
    nomeUtente.textContent=json[0].nome
    const cognomeP=document.createElement('h1');
    cognomeP.textContent="COGNOME";
    const cognomeUtente=document.createElement('div');
    cognomeUtente.textContent=json[0].cognome;
    const dataP=document.createElement('h1');
    dataP.textContent="DATA CREAZIONE PROFILO";
    const dataUtente=document.createElement('div');
    dataUtente.textContent=json[0].data_creazione;
    informazioniPrese.appendChild(usernameP);
    informazioniPrese.appendChild(usernameUtente);
    informazioniPrese.appendChild(nomeP);
    informazioniPrese.appendChild(nomeUtente);
    informazioniPrese.appendChild(cognomeP);
    informazioniPrese.appendChild(cognomeUtente);
    informazioniPrese.appendChild(dataP);
    informazioniPrese.appendChild(dataUtente);      
}
const informazioni=document.querySelector('.funziona');
informazioni.addEventListener("click",mostaInformazioni);