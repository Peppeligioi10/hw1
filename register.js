function RegistraUtente(event){
    const utente=utenteRegister.nomeUtente.value.length;
    const password=utenteRegister.password.value.length;
    const nome=utenteRegister.nome.value.length;
    const cognome=utenteRegister.cognome.value.length;
    const ripeti=utenteRegister.RipetiPassword.value.length;
    if(utente == 0 ||
        password == 0 ||
        nome == 0 ||
        cognome == 0 ||
        ripeti == 0)
     {
        alert("non hai riempito tutti i campi");
        event.preventDefault();
     }
    //verifica numeri nella password
    const stringaPassword=utenteRegister.password.value;
    var x=0;
    while(x<10){
        var trova=stringaPassword.indexOf(x);
        console.log(trova);
        if(trova!=-1 )break;
        x++;
    } 
    if(trova!=-1){
        console.log('numero trovato');
    }
    else{
        alert("devi mettere almeno un numero nella password");
        event.preventDefault();
    }
    //verifica lunghezza nome utente e password
    if(utente>16 || password>16){
        alert("caratteri massimi della password e dell'utente sono 16");
        event.preventDefault();
    }
    if(utente<8 || password<8){
        alert("nome utente e password devono avere almeno 8 caratteri");
        event.preventDefault();
    }
    const RipetiStringaPassword=utenteRegister.RipetiPassword.value;
    if(stringaPassword != RipetiStringaPassword){
        alert("Le password non coincidono");
        event.preventDefault();
    }
}


const utenteRegister=document.querySelector('form')
utenteRegister.addEventListener("submit",RegistraUtente);