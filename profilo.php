<?php
    session_start();
    if(isset($_SESSION["username"])){
        $nomeutente=$_SESSION["username"];
    } else {
        header("Location: login.php");
        exit;
    }
?>
<html>
    <head>
        <title>PROFILO utente</title>
        <link rel="stylesheet" href="profilo.css" />
        <script src="profilo.js" defer ></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Mogra&family=Rubik+Puddles&display=swap" rel="stylesheet">
    </head>
    <body>
    <header>
       <?php
            echo "<div id='nomeProfilo'>";
            echo "PROFILO DI " .$nomeutente;
            echo "</div>";
        ?> 
        <div id="logout"><a href="logout.php">LOGOUT</a></div>
    </header>
        <main>
            <div id="principale">
                <div class="funziona">INFORMAZIONI PROFILO</div>
                <div class="striscia"></div>
                <div><a href="index.php">SITO</a></div>
                <div class="striscia"></div>
                <div><a href="preferiti.php">PREFERITI</a></div>
                <div class="striscia"></div>
                <div>PRIVACY</div>
                <div class="striscia"></div>
                <div><a href="logout.php">LOGOUT</a></div>
                <div class="striscia"></div>
            </div>
            <div class="informazioni">
                
            </div>            
        </main>
        <footer>
            <div><a href="https://www.nestle.it/"><img src="https://www.kitkat.it/sites/default/files/2021-12/nestle%20%281%29.png"></a></div>
            <div><a href="https://www.nestle.it/"><span><strong>© 2023 Nestlé Limited, all rights reserved</strong></span></a></div>
            <div id="sparisci">
                <a href="https://www.nestle.it/info/notelegali_privacy"><span><strong>Politiche di Privacy</strong></span></a>
                <a href="https://www.buonalavita.it/note-legali"><span><strong>Cookie</strong></span></a>
                <a href="https://www.kitkat.it/sitemap"><span><strong>Mappe del sito</strong> </span></a>
            </div>
    </footer>
    </body>
    
</html>