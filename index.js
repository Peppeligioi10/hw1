
//FUNZIONI MENU A TENDINA
function appari1(){
    const primoN=document.querySelector('.primo_nascosto');
    primoN.classList.remove('primo_nascosto');
    primoN.classList.add('primo');
}
function scompari1(){
    const primoS=document.querySelector('.primo');
    primoS.classList.remove('primo');
    primoS.classList.add('primo_nascosto');
}
function appari2(){
    const secondoN=document.querySelector('.secondo_nascosto');
    secondoN.classList.remove('secondo_nascosto');
    secondoN.classList.add('secondo');
}
function scompari2(){
    const secondoS=document.querySelector('.secondo');
    secondoS.classList.remove('secondo');
    secondoS.classList.add('secondo_nascosto');
}
function appari3(){
    const terzoN=document.querySelector('.terzo_nascosto');
    terzoN.classList.remove('terzo_nascosto');
    terzoN.classList.add('terzo');
}
function scompari3(){
    const terzoS=document.querySelector('.terzo');
    terzoS.classList.remove('terzo');
    terzoS.classList.add('terzo_nascosto');
}
function appari4(){
    const quartoN=document.querySelector('.quarto_nascosto');
    quartoN.classList.remove('quarto_nascosto');
    quartoN.classList.add('quarto');
}
function scompari4(){
    const quartoS=document.querySelector('.quarto');
    quartoS.classList.remove('quarto');
    quartoS.classList.add('quarto_nascosto');
}
function appari5(){
    const quintoN=document.querySelector('.quinto_nascosto');
    quintoN.classList.remove('quinto_nascosto');
    quintoN.classList.add('quinto');
}
function scompari5(){
    const quintoS=document.querySelector('.quinto');
    quintoS.classList.remove('quinto');
    quintoS.classList.add('quinto_nascosto');
}
function appari8(){
    const ottavoN=document.querySelector('.ottavo_nascosto');
    ottavoN.classList.remove('ottavo_nascosto');
    ottavoN.classList.add('ottavo');
}
function scompari8(){
    const ottavoS=document.querySelector('.ottavo');
    ottavoS.classList.remove('ottavo');
    ottavoS.classList.add('ottavo_nascosto');
}



// FUNZIONI MENU SOTTO
function mostraProdotti(){
    const prodotti=document.querySelector('#liste .lista_prodotti')
    prodotti.classList.remove('lista_prodotti');
    prodotti.classList.add('lista_prodottiVisibile');
    pulsante1.removeEventListener("click", mostraProdotti);
    pulsante1.addEventListener("click", nascondiProdotti);
}
function nascondiProdotti(){
    const prodottiLeva=document.querySelector('#liste .lista_prodottiVisibile');
    prodottiLeva.classList.remove('lista_prodottiVisibile');
    prodottiLeva.classList.add('lista_prodotti');
    pulsante1.removeEventListener("click",nascondiProdotti);
    pulsante1.addEventListener("click",mostraProdotti);
}


function mostraOccasioni(){
    const occasioni=document.querySelector('#liste .lista_occasioni')
    occasioni.classList.remove('lista_occasioni');
    occasioni.classList.add('lista_occasioniVisibile');
    pulsante2.removeEventListener("click", mostraOccasioni);
    pulsante2.addEventListener("click", nascondiOccasioni);
}
function nascondiOccasioni(){
    const occasioniLeva=document.querySelector('#liste .lista_occasioniVisibile');
    occasioniLeva.classList.remove('lista_occasioniVisibile');
    occasioniLeva.classList.add('lista_occasioni');
    pulsante2.removeEventListener("click",nascondiOccasioni);
    pulsante2.addEventListener("click",mostraOccasioni);
}

function mostraScopriKitKat(){
    const Kit=document.querySelector('#liste .lista_scopriKitKat')
    Kit.classList.remove('lista_scopriKitKat');
    Kit.classList.add('lista_scopriKitKatVisibile');
    pulsante3.removeEventListener("click", mostraScopriKitKat);
    pulsante3.addEventListener("click", nascondiScopriKitKat);
}
function nascondiScopriKitKat(){
    const KitLeva=document.querySelector('#liste .lista_scopriKitKatVisibile');
    KitLeva.classList.remove('lista_scopriKitKatVisibile');
    KitLeva.classList.add('lista_scopriKitKat');
    pulsante3.removeEventListener("click",nascondiScopriKitKat);
    pulsante3.addEventListener("click",mostraScopriKitKat);
}

function mostraPromozioni(){
    const Prom=document.querySelector('#liste .lista_promozioni')
    Prom.classList.remove('lista_promozioni');
    Prom.classList.add('lista_promozioniVisibile');
    pulsante4.removeEventListener("click", mostraPromozioni);
    pulsante4.addEventListener("click", nascondiPromozioni);
}
function nascondiPromozioni(){
    const PromLeva=document.querySelector('#liste .lista_promozioniVisibile');
    PromLeva.classList.remove('lista_promozioniVisibile');
    PromLeva.classList.add('lista_promozioni');
    pulsante4.removeEventListener("click",nascondiPromozioni);
    pulsante4.addEventListener("click",mostraPromozioni);
}

function mostraRicette(){
    const ricetta=document.querySelector('#liste .lista_ricette')
    ricetta.classList.remove('lista_ricette');
    ricetta.classList.add('lista_ricetteVisibile');
    pulsante5.removeEventListener("click", mostraRicette);
    pulsante5.addEventListener("click", nascondiRicette);
}
function nascondiRicette(){
    const ricettaLeva=document.querySelector('#liste .lista_ricetteVisibile');
    ricettaLeva.classList.remove('lista_ricetteVisibile');
    ricettaLeva.classList.add('lista_ricette');
    pulsante5.removeEventListener("click",nascondiRicette);
    pulsante5.addEventListener("click",mostraRicette);
}

function mostraSupporto(){
    const sup=document.querySelector('#liste .lista_supporto')
    sup.classList.remove('lista_supporto');
    sup.classList.add('lista_supportoVisibile');
    pulsante6.removeEventListener("click", mostraSupporto);
    pulsante6.addEventListener("click", nascondiSupporto);
}
function nascondiSupporto(){
    const supLeva=document.querySelector('#liste .lista_supportoVisibile');
    supLeva.classList.remove('lista_supportoVisibile');
    supLeva.classList.add('lista_supporto');
    pulsante6.removeEventListener("click",nascondiSupporto);
    pulsante6.addEventListener("click",mostraSupporto);
}

function mostraLegale(){
    const legale=document.querySelector('#liste .lista_legale')
    legale.classList.remove('lista_legale');
    legale.classList.add('lista_legaleVisibile');
    pulsante7.removeEventListener("click", mostraLegale);
    pulsante7.addEventListener("click", nascondiLegale);
}
function nascondiLegale(){
    const legaleLeva=document.querySelector('#liste .lista_legaleVisibile');
    legaleLeva.classList.remove('lista_legaleVisibile');
    legaleLeva.classList.add('lista_legale');
    pulsante7.removeEventListener("click",nascondiLegale);
    pulsante7.addEventListener("click",mostraLegale);
}
//FUNZIONI MENU SUP
function mostraProdottiSup(){
    const prodottisup=document.querySelector('#listesup .lista_prodotti')
    prodottisup.classList.remove('lista_prodotti');
    prodottisup.classList.add('lista_prodottiVisibile');
    pulsante1sup.removeEventListener("click", mostraProdottiSup);
    pulsante1sup.addEventListener("click", nascondiProdottiSup);
}
function nascondiProdottiSup(){
    const prodottiLevasup=document.querySelector('#listesup .lista_prodottiVisibile');
    prodottiLevasup.classList.remove('lista_prodottiVisibile');
    prodottiLevasup.classList.add('lista_prodotti');
    pulsante1sup.removeEventListener("click",nascondiProdottiSup);
    pulsante1sup.addEventListener("click",mostraProdottiSup);
}

function mostraOccasioniSup(){
    const occasionisup=document.querySelector('#listesup .lista_occasioni')
    occasionisup.classList.remove('lista_occasioni');
    occasionisup.classList.add('lista_occasioniVisibile');
    pulsante2sup.removeEventListener("click", mostraOccasioniSup);
    pulsante2sup.addEventListener("click", nascondiOccasioniSup);
}
function nascondiOccasioniSup(){
    const occasioniLevasup=document.querySelector('#listesup .lista_occasioniVisibile');
    occasioniLevasup.classList.remove('lista_occasioniVisibile');
    occasioniLevasup.classList.add('lista_occasioni');
    pulsante2sup.removeEventListener("click",nascondiOccasioniSup);
    pulsante2sup.addEventListener("click",mostraOccasioniSup);
}


function mostraScopriKitKatSup(){
    const Kitsup=document.querySelector('#listesup .lista_scopriKitKat')
    Kitsup.classList.remove('lista_scopriKitKat');
    Kitsup.classList.add('lista_scopriKitKatVisibile');
    pulsante3sup.removeEventListener("click", mostraScopriKitKatSup);
    pulsante3sup.addEventListener("click", nascondiScopriKitKatSup);
}
function nascondiScopriKitKatSup(){
    const KitLevasup=document.querySelector('#listesup .lista_scopriKitKatVisibile');
    KitLevasup.classList.remove('lista_scopriKitKatVisibile');
    KitLevasup.classList.add('lista_scopriKitKat');
    pulsante3sup.removeEventListener("click",nascondiScopriKitKatSup);
    pulsante3sup.addEventListener("click",mostraScopriKitKatSup);
}


function mostraPromozioniSup(){
    const Promsup=document.querySelector('#listesup .lista_promozioni')
    Promsup.classList.remove('lista_promozioni');
    Promsup.classList.add('lista_promozioniVisibile');
    pulsante4sup.removeEventListener("click", mostraPromozioniSup);
    pulsante4sup.addEventListener("click", nascondiPromozioniSup);
}
function nascondiPromozioniSup(){
    const PromLevasup=document.querySelector('#listesup .lista_promozioniVisibile');
    PromLevasup.classList.remove('lista_promozioniVisibile');
    PromLevasup.classList.add('lista_promozioni');
    pulsante4sup.removeEventListener("click",nascondiPromozioniSup);
    pulsante4sup.addEventListener("click",mostraPromozioniSup);
}


function mostraRicetteSup(){
    const ricettasup=document.querySelector('#listesup .lista_ricette')
    ricettasup.classList.remove('lista_ricette');
    ricettasup.classList.add('lista_ricetteVisibile');
    pulsante5sup.removeEventListener("click", mostraRicetteSup);
    pulsante5sup.addEventListener("click", nascondiRicetteSup);
}
function nascondiRicetteSup(){
    const ricettaLevasup=document.querySelector('#listesup .lista_ricetteVisibile');
    ricettaLevasup.classList.remove('lista_ricetteVisibile');
    ricettaLevasup.classList.add('lista_ricette');
    pulsante5sup.removeEventListener("click",nascondiRicetteSup);
    pulsante5sup.addEventListener("click",mostraRicetteSup);
}


function mostraSupportoSup(){
    const supsup=document.querySelector('#listesup .lista_supporto')
    supsup.classList.remove('lista_supporto');
    supsup.classList.add('lista_supportoVisibile');
    pulsante6sup.removeEventListener("click", mostraSupportoSup);
    pulsante6sup.addEventListener("click", nascondiSupportoSup);
}
function nascondiSupportoSup(){
    const supLevasup=document.querySelector('#listesup .lista_supportoVisibile');
    supLevasup.classList.remove('lista_supportoVisibile');
    supLevasup.classList.add('lista_supporto');
    pulsante6sup.removeEventListener("click",nascondiSupportoSup);
    pulsante6sup.addEventListener("click",mostraSupportoSup);
}

function mostraLegaleSup(){
    const legalesup=document.querySelector('#listesup .lista_legale')
    legalesup.classList.remove('lista_legale');
    legalesup.classList.add('lista_legaleVisibile');
    pulsante7sup.removeEventListener("click", mostraLegaleSup);
    pulsante7sup.addEventListener("click", nascondiLegaleSup);
}
function nascondiLegaleSup(){
    const legaleLevasup=document.querySelector('#listesup .lista_legaleVisibile');
    legaleLevasup.classList.remove('lista_legaleVisibile');
    legaleLevasup.classList.add('lista_legale');
    pulsante7sup.removeEventListener("click",nascondiLegaleSup);
    pulsante7sup.addEventListener("click",mostraLegaleSup);
}
//FUNZIONI PAGINA SCORREVOLE
function pagina1(){
    const stilepagina1=document.getElementById('img-pagina-scorrevole');
    stilepagina1.dataset.posizione='normale';
    const img1=document.querySelector('#img-pagina-scorrevole img');
    img1.src='https://www.kitkat.it/sites/default/files/06_KITKAT_Master_Identity_RGB.png';
    const testo1h=document.querySelector('.pagina-scorrevole h1 ');
    testo1h.textContent="VINCI CON KITKAT";
    const testo1p=document.querySelector('.pagina-scorrevole p');
    testo1p.textContent="ACQUISTA 3€ DI PRODOTTO E PROVA A VINCERE OGNI SETTIMANA FANTASTICI PREMI";
    const a1=document.querySelector('.pagina-scorrevole a');
    a1.href='https://www.kitkat.it/sites/default/files/styles/full_width_image_1920x795_/public/2024-02/Statici%20campagna%20kitkat%20LoL1-1.jpg?itok=qQlKumu6';
    avanti.removeEventListener("click",pagina1);
    avanti.removeEventListener("click",pagina3);
    avanti.removeEventListener("click",pagina4);
    avanti.addEventListener("click",pagina2);
    indietro.removeEventListener("click",pagina2);
    indietro.removeEventListener("click",pagina3);
    indietro.removeEventListener("click",pagina1);
    indietro.addEventListener("click",pagina4);
}
function pagina2(){
    const stilepagina2=document.getElementById('img-pagina-scorrevole');
    stilepagina2.dataset.posizione='normale';
    const img2=document.querySelector('#img-pagina-scorrevole img');
    img2.src='https://www.kitkat.it/sites/default/files/styles/full_width_image_1920x795_/public/2024-03/BANNER-strappo_0.jpg?itok=gmRdWjJ8';
    const testo2h=document.querySelector('.pagina-scorrevole h1 ');
    testo2h.textContent="VINCI CON KITKAT E PLAYSTATION";
    const testo2p=document.querySelector('.pagina-scorrevole p');
    testo2p.textContent="ACQUISTA 3€ DI PRODOTTO E PROVA A VINCERE OGNI SETTIMANA FANTASTICI PREMI";
    const a2=document.querySelector('.pagina-scorrevole a');
    a2.href='https://www.kitkat.it/playthebreak-kitkat-playstation-pasqua';
    avanti.removeEventListener("click",pagina2);
    avanti.removeEventListener("click",pagina1);
    avanti.removeEventListener("click",pagina4);
    avanti.addEventListener("click",pagina3);
    indietro.removeEventListener("click",pagina4);
    indietro.removeEventListener("click",pagina2);
    indietro.removeEventListener("click",pagina2);
    indietro.addEventListener("click",pagina1);
}
function pagina3(){
    const stilepagina3=document.getElementById('img-pagina-scorrevole');
    stilepagina3.dataset.posizione='pagina3';
    const img3=document.querySelector('#img-pagina-scorrevole img');
    img3.src='https://www.kitkat.it/sites/default/files/styles/full_width_image_1920x795_/public/2024-01/KK%20CLASSICO%20IAP%20PACK%20-%20MAIN_0.png?itok=xglxDqpJ';
    const testo3h=document.querySelector('.pagina-scorrevole h1 ');
    testo3h.textContent="KITKAT ORIGINALE AL LATTE";
    const testo3p=document.querySelector('.pagina-scorrevole p');
    testo3p.textContent="LO SNACK IDEALE PER FERMARSI AD ASSAPORARE UN MOMENTO DI PIACERE DURANTE LA GIORNATA";
    const a3=document.querySelector('.pagina-scorrevole a');
    a3.href='https://www.kitkat.it/tutti-i-prodotti/kitkat-original-latte';
    avanti.removeEventListener("click",pagina3);
    avanti.removeEventListener("click",pagina2);
    avanti.removeEventListener("click",pagina1);
    avanti.addEventListener("click",pagina4);
    indietro.removeEventListener("click",pagina1);
    indietro.removeEventListener("click",pagina2);
    indietro.removeEventListener("click",pagina3);
    indietro.addEventListener("click",pagina2);
}
function pagina4(){
    const stilepagina4=document.getElementById('img-pagina-scorrevole');
    stilepagina4.dataset.posizione='pagina4';
    const img4=document.querySelector('#img-pagina-scorrevole img');
    img4.src='https://www.kitkat.it/sites/default/files/styles/full_width_image_1920x795_/public/2023-11/BFG%20logo.png?itok=585oIhSv';
    const testo4h=document.querySelector('div.pagina-scorrevole h1 ');
    testo4h.textContent="KITKAT BREAK FOR GOOD";
    const testo4p=document.querySelector('.pagina-scorrevole p');
    testo4p.textContent="SCOPRI KITKAT BREACKS FOR GOOD L'INIZIATIVA CHE DA VISIBILITA' AL PROGETTO NESTLE' INCOME ACCELERATOR";
    const a4=document.querySelector('.pagina-scorrevole a');
    a4.href='https://www.kitkat.it/breaks-for-good';
    avanti.removeEventListener("click",pagina4);
    avanti.removeEventListener("click",pagina2);
    avanti.removeEventListener("click",pagina3);
    avanti.addEventListener("click",pagina1);
    indietro.removeEventListener("click",pagina2);
    indietro.removeEventListener("click",pagina1);
    indietro.removeEventListener("click",pagina4);
    indietro.addEventListener("click",pagina3);
}

//FUNZIONE CHE MODIFICA IL MENU NEL TELEFONO
function appareMenu(){
    const men=document.querySelector('.menu');
    men.classList.remove('menu');
    men.classList.add('menuAppari');
    const body=document.querySelector('body');
    body.classList.add('no_scroll');
    menu.removeEventListener("click",appareMenu);
    menu.addEventListener("click",scompareMenu);
}

function scompareMenu(){
    const men1=document.querySelector('.menuAppari');
    men1.classList.remove('menuAppari');
    men1.classList.add('menu');
    const body1=document.querySelector('.no_scroll')
    body1.classList.remove('no_scroll');
    menu.removeEventListener("click",scompareMenu);
    menu.addEventListener("click",appareMenu);
}


//MENU A TENDINA
const primo=document.querySelector('header .link1');
primo.addEventListener("mouseover",appari1);
primo.addEventListener("mouseout",scompari1);

const secondo=document.querySelector('header .link2');
secondo.addEventListener("mouseover",appari2);
secondo.addEventListener("mouseout",scompari2);

const terzo=document.querySelector('header .link3');
terzo.addEventListener("mouseover",appari3);
terzo.addEventListener("mouseout",scompari3);

const quarto=document.querySelector('header .link4');
quarto.addEventListener("mouseover",appari4);
quarto.addEventListener("mouseout",scompari4);

const quinto=document.querySelector('header .link5');
quinto.addEventListener("mouseover",appari5);
quinto.addEventListener("mouseout",scompari5);

const ottavo=document.querySelector('header .link8');
ottavo.addEventListener("mouseover",appari8);
ottavo.addEventListener("mouseout",scompari8);



//PULSANTI CHE FANNO APPARIRE MENU
const pulsante1=document.querySelector('#liste .pulsante1');
pulsante1.addEventListener("click",mostraProdotti);
const pulsante1sup=document.querySelector('#listesup .pulsante1');
pulsante1sup.addEventListener("click",mostraProdottiSup);

const pulsante2=document.querySelector('#liste .pulsante2');
pulsante2.addEventListener("click",mostraOccasioni);
const pulsante2sup=document.querySelector('#listesup .pulsante2');
pulsante2sup.addEventListener("click",mostraOccasioniSup);



const pulsante3=document.querySelector('#liste .pulsante3');
pulsante3.addEventListener("click",mostraScopriKitKat);
const pulsante3sup=document.querySelector('#listesup .pulsante3');
pulsante3sup.addEventListener("click",mostraScopriKitKatSup);



const pulsante4=document.querySelector('#liste .pulsante4');
pulsante4.addEventListener("click",mostraPromozioni);
const pulsante4sup=document.querySelector('#listesup .pulsante4');
pulsante4sup.addEventListener("click",mostraPromozioniSup);


const pulsante5=document.querySelector('#liste .pulsante5');
pulsante5.addEventListener("click",mostraRicette);
const pulsante5sup=document.querySelector('#listesup .pulsante5');
pulsante5sup.addEventListener("click",mostraRicetteSup);


const pulsante6=document.querySelector('#liste .pulsante6');
pulsante6.addEventListener("click",mostraSupporto);
const pulsante6sup=document.querySelector('#listesup .pulsante6');
pulsante6sup.addEventListener("click",mostraSupportoSup);


const pulsante7=document.querySelector('#liste .pulsante7');
pulsante7.addEventListener("click",mostraLegale);
const pulsante7sup=document.querySelector('#listesup .pulsante7');
pulsante7sup.addEventListener("click",mostraLegaleSup);

//TASTI PAGINA SCORREVOLE
const avanti=document.querySelector('.avanti');
avanti.addEventListener("click",pagina2);

const indietro=document.querySelector('.indietro');
indietro.addEventListener("click",pagina4);

//MENU CHE APPARE NELLA VERSIONE TELEFONO
const menu=document.querySelector('#menu');
menu.addEventListener("click",appareMenu);

//PARTE API
const cambio=document.querySelector('#tipo');
cambio.addEventListener("change",cambiatesto);
const form=document.querySelector('form');
form.addEventListener("submit",stampaOggettiottenuti);



function cambiatesto(){
    const valore=document.querySelector('#tipo').value;
    const cambiamento=document.querySelector('form span');
    cambiamento.innerHTML='';
    if(valore==='cocktail'){
      cambiamento.textContent='INSERISCI UN INGREDIENTE';
  
    }else if(valore==='musica'){
      cambiamento.textContent='INSERISCI UN GENERE MUSICALE';
    }
  }
  
  function stampaOggettiottenuti(event){
      event.preventDefault();
      const imput=document.querySelector('#scelta');
      const imput_value=encodeURIComponent(imput.value);
      console.log("esguo ricerca su " + imput_value);
      const tipo=document.querySelector('#tipo').value;
      if(tipo==='cocktail'){
          fetch("drink.php?s="+imput_value).then(onResponse).then(onJsonDrinks);   
      }
      else if(tipo==='musica'){
          fetch("spotifyAPI.php?q="+imput_value).then(onResponse).then(onJsonMusica);
      }
      
  }
  
  
  function onResponse(response){
    console.log(response);
    return response.json();
      
  }
  function onJsonDrinks(json){
      console.log(json);
      const LibreriaDrink=document.querySelector('#raccoglitore');
      LibreriaDrink.innerHTML='';
      if(json.drinks==null){
        LibreriaDrink.textContent="NON HO TROVATO NULLA";
      }else{
        for(let i=0;i<json.drinks.length;i++){
          const drink=json.drinks[i];
          const info=document.createElement('div');
          info.dataset.nome=drink.strDrink;
          info.dataset.img=drink.strDrinkThumb;
          const url_img=drink.strDrinkThumb;
          const nomeDrink=drink.strDrink;
          const container=document.createElement('div');
          container.classList.add('book');
          const img=document.createElement('img');
          const testo=document.createElement('span');
          img.src=url_img;
          testo.textContent=nomeDrink;
          const aggiungiDrink=document.createElement('span');
          info.classList.add('aggiungi');
          aggiungiDrink.addEventListener("click",preferitiDrink);
          aggiungiDrink.textContent="AGGIUNGI";
          container.appendChild(img);
          container.appendChild(testo);
          info.appendChild(aggiungiDrink);
          container.appendChild(info);
          LibreriaDrink.appendChild(container);
          
  
      }
      }
      
      
  }
function preferitiDrink(event){
  const aggiungiDrinkP=event.currentTarget.parentNode;
  const form=new FormData();
  form.append('nome',aggiungiDrinkP.dataset.nome);
  form.append('img',aggiungiDrinkP.dataset.img);
  fetch("salvaDrink.php",{method: 'post', body: form}).then(dispatchResponse, dispatchError);
  
}
function dispatchResponse(response) {

  console.log(response);
  return response.json().then(databaseResponse); 
}

function dispatchError(error) { 
  console.log(error);
}

function databaseResponse(json) {
  if (!json.ok) {
      dispatchError();
      return null;
  }
}

  function onJsonMusica(json){
      console.log(json);
      const LibreriaPlaylist=document.querySelector('#raccoglitore');
      LibreriaPlaylist.innerHTML='';
      if(json.error){
        LibreriaPlaylist.innerHTML="NON HO TROVATO NULLA";
      }else{
        for(let i=0;i<json.playlists.items.length;i++){
        const musica=json.playlists.items[i];
        const url_img_Playlist=musica.images[0];
        const imagePlaylist=url_img_Playlist.url;
        const nomePlaylist=musica.name;
        const infoMusica=document.createElement('div');
        infoMusica.dataset.nome=nomePlaylist;
        infoMusica.dataset.img=imagePlaylist;
        const containerP=document.createElement('div');
        containerP.classList.add('book');
        const imgMusica=document.createElement('img');
        const testoMusica=document.createElement('span');
        imgMusica.src=imagePlaylist;
        testoMusica.textContent=nomePlaylist;
        const aggiungiMusica=document.createElement('div');
        infoMusica.classList.add('aggiungi');
        aggiungiMusica.addEventListener("click", musicaPreferiti);
        aggiungiMusica.textContent="AGGIUNGI";
        containerP.appendChild(imgMusica);
        containerP.appendChild(testoMusica);
        infoMusica.appendChild(aggiungiMusica);
        containerP.appendChild(infoMusica);
        LibreriaPlaylist.appendChild(containerP);
      }
    }
       
    
      
  }
  
  function musicaPreferiti(event){
    const aggiungiMusicaP=event.currentTarget.parentNode;
    const formMusica=new FormData();
    formMusica.append('nome',aggiungiMusicaP.dataset.nome);
    formMusica.append('img',aggiungiMusicaP.dataset.img);
    fetch("salvaMusica.php",{method: 'post', body: formMusica}).then(dispatchResponse, dispatchError);
  }


//giochino kitkat


const bottoneCrea=document.querySelector('.giochiamo');
bottoneCrea.addEventListener("click",giochiamo);


function giochiamo(){
    let m=0;
    const contenitoredeldiv=document.querySelector('.gioco');
    contenitoredeldiv.innerHTML='';
    for(let i=0;i<3;i++){
        const numero=Math.random();
        const imggioco=document.createElement('img');
        if(numero>0.5){
            console.log(numero);
            imggioco.src='https://www.kitkat.it/sites/default/files/06_KITKAT_Master_Identity_RGB.png';
            m=verifica(numero,m);
        }else{
            console.log(numero);
            imggioco.src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Mars_Logo.svg/2560px-Mars_Logo.svg.png';
        }
        contenitoredeldiv.appendChild(imggioco);

    }
    console.log(m);
    verdetto(m);
}
function verifica(numero,m){
    if( numero>0,5){
        m=m+1;
    }
    return m;
}
function verdetto(m){
    const risultato=document.querySelector('.risultato');
    const data=document.getElementById('gioco');
    if(m>2){
        data.dataset.colore='verde';
        risultato.textContent="HAI VINTO";
    }else{
        data.dataset.colore='rosso'
        risultato.textContent="HAI PERSO";

    }
    
}

