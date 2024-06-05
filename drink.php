<?php
session_start();
if(!isset($_SESSION["username"])){
    header("Location: login.php");
    exit;
} 
drink();

function drink(){
    $key='1';
    $valore=urlencode($_GET["s"]); //permette di codificare in url una stringa
    $url='https://www.thecocktaildb.com/api/json/v1/'.$key.'/search.php?s='.$valore;
    $curl=curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $res=curl_exec($curl);
    curl_close($curl);
    echo $res;
}

?>
