<?php
session_start();
if(!isset($_SESSION["username"])){
    header("Location: login.php");
    exit;
} 
spotifyApi();
function spotifyApi(){
    $client_id = '91cfc525a59542d09aa26b6d2a06dbd0';
    $client_secret = 'a1f16f99d40f4282aec61a64caeb99bb';
    // ACCESS TOKEN
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, 'https://accounts.spotify.com/api/token' );
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_POST, 1);
    curl_setopt($curl, CURLOPT_POSTFIELDS, 'grant_type=client_credentials'); 
    curl_setopt($curl, CURLOPT_HTTPHEADER, array('Authorization: Basic '.base64_encode($client_id.':'.$client_secret))); 
    $token=json_decode(curl_exec($curl), true); //converte un json in un php appropriato
    curl_close($curl); 
    // QUERY EFFETTIVA
    $query = urlencode($_GET["q"]);
    $url = 'https://api.spotify.com/v1/browse/categories/'.$query.'/playlists';
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Authorization: Bearer '.$token['access_token'])); 
    $res=curl_exec($ch);
    curl_close($ch);

    echo $res;  
}

?>