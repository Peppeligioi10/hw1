
function loggaUtente(event){
    
    const verificanome=utenteLogin.nomeUtente.value.length;
    const verificapassword=utenteLogin.password.value.length;
    console.log(verificanome);
    if(verificanome==0 || verificapassword==0){
            const div=document.querySelector('.hidden');
            div.classList.remove('hidden');
            event.preventDefault();
        }
     
}



const utenteLogin=document.querySelector('form')
utenteLogin.addEventListener("submit",loggaUtente);

