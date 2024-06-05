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
        <title>SEZIONE PREFERITI</title>
        <link rel="stylesheet" href="preferiti.css" />
        <script src="preferiti.js" defer ></script>
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
        <div id="profilo"><a href="profilo.php">PROFILO</a></div>
    </header>
        <main>
            <div id="Preferiti">   
                <div class="drink">DRINK</div>
                <div class="playlist">PLAYLIST</div>
            </div>
            <section id="raccoglitore">

            </section>
        </main>
       
    </body>
    
</html>