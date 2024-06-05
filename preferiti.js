const divDrink=document.querySelector('.drink');
divDrink.addEventListener("click",MostraDrink);

const divPlaylist=document.querySelector('.playlist');
divPlaylist.addEventListener("click",MostaPlaylist);

function MostraDrink(){
    const divDrinkF=document.querySelector('.drink');
    const divPlaylistF=document.querySelector('.playlist');
    divDrinkF.classList.add('uso');
    divPlaylistF.classList.remove('uso');
    fetch("preferitiDrink.php").then(onResponse).then(onJsonDrinks);

}

function MostaPlaylist(){
    const divDrinkF1=document.querySelector('.drink');
    const divPlaylistF1=document.querySelector('.playlist');
    divDrinkF1.classList.remove('uso');
    divPlaylistF1.classList.add('uso');
    fetch("preferitiPlaylist.php").then(onResponse).then(onJsonMusica);
    
}
function onResponse(response){
    console.log(response);
      return response.json();
      
  }
function onJsonDrinks(json){
    console.log(json);
    const LibreriaDrink=document.querySelector('#raccoglitore');
    LibreriaDrink.innerHTML='';
    if(json.length>0){ 
        for(eventoDrink of json){
            const url_img=eventoDrink.img;
            const nomeDrink=eventoDrink.nome;
            const infoDrink=document.createElement('div');
            infoDrink.dataset.nome=nomeDrink;
            infoDrink.dataset.img=url_img;
            infoDrink.classList.add('infoDrink');
            const EliminaDrink=document.createElement('span');
            EliminaDrink.textContent="ELIMINA";
            EliminaDrink.addEventListener("click",EliminaDrinkPreferito);
            const container=document.createElement('div');
            container.classList.add('book');
            const img=document.createElement('img');
            const testo=document.createElement('span');
            img.src=url_img;
            testo.textContent=nomeDrink;
            container.appendChild(img);
            container.appendChild(testo);
            infoDrink.appendChild(EliminaDrink);
            container.appendChild(infoDrink);
            LibreriaDrink.appendChild(container);
          
  
      
        }
    }
      
}
function EliminaDrinkPreferito(event){
    const eliminaDRinkP=event.currentTarget.parentNode;
    const form=new FormData();
    form.append('nome',eliminaDRinkP.dataset.nome);
    form.append('img',eliminaDRinkP.dataset.img);
    fetch("eliminaDrink.php",{method: 'post', body: form}).then(dispatchResponseDrink, dispatchError);
    
}
function dispatchResponseDrink(response) {

    console.log(response);
    return response.json().then(databaseResponseDrink); 
  }
  
  function dispatchError(error) { 
    console.log(error);
  }
  
  function databaseResponseDrink(json) {
    if (!json.ok) {
        dispatchError();
        return null;
    }
    fetch("preferitiDrink.php").then(onResponse).then(onJsonDrinks);
  }

function onJsonMusica(json){
    console.log(json);
    const LibreriaPlaylist=document.querySelector('#raccoglitore');
    LibreriaPlaylist.innerHTML='';
    if(json.length>0){
        for(eventoPlaylist of json){
            const imagePlaylist=eventoPlaylist.img;
            const nomePlaylist=eventoPlaylist.nome;
            const infoPlaylist=document.createElement('div');
            infoPlaylist.dataset.nome=nomePlaylist;
            infoPlaylist.dataset.img=imagePlaylist;
            infoPlaylist.classList.add('infoDrink');
            const eliminaPlaylist=document.createElement('span');
            eliminaPlaylist.textContent="ELIMINA";
            eliminaPlaylist.addEventListener("click",EliminaPlaylistPreferita);
            const containerP=document.createElement('div');
            containerP.classList.add('book');
            const imgMusica=document.createElement('img');
            const testoMusica=document.createElement('span');
            imgMusica.src=imagePlaylist;
            testoMusica.textContent=nomePlaylist;
            containerP.appendChild(imgMusica);
            containerP.appendChild(testoMusica);
            infoPlaylist.appendChild(eliminaPlaylist);
            containerP.appendChild(infoPlaylist);
            LibreriaPlaylist.appendChild(containerP);
        }
    }
    
}

function EliminaPlaylistPreferita(event){
    const eliminaPlaylistP=event.currentTarget.parentNode;
    const formPlay=new FormData();
    formPlay.append('nome',eliminaPlaylistP.dataset.nome);
    formPlay.append('img',eliminaPlaylistP.dataset.img);
    fetch("eliminaPlaylist.php",{method: 'post', body: formPlay}).then(dispatchResponsePlaylist, dispatchError);
}
function dispatchResponsePlaylist(response) {

    console.log(response);
    return response.json().then(databaseResponsePlaylist); 
  }
  

  
  function databaseResponsePlaylist(json) {
    if (!json.ok) {
        dispatchError();
        return null;
    }
    fetch("preferitiPlaylist.php").then(onResponse).then(onJsonMusica);
  }