<?php
    session_start();
    if(isset($_SESSION["username"])){
        header("Location: index.php");
        exit;
    }
    // Verifica l'esistenza di dati POST
    if(isset($_POST["nomeUtente"]) && isset($_POST["password"]))
    {
        // Connetti al database
        $conn = mysqli_connect("localhost", "root", "", "sito");
        $nomeUtente = mysqli_real_escape_string($conn, $_POST['nomeUtente']);
        $passwordUtente = mysqli_real_escape_string($conn, $_POST['password']);
        // Cerca utenti con quelle credenziali
        $query = "SELECT * FROM utenti WHERE username = '$nomeUtente' AND password = '$passwordUtente'";
        $res = mysqli_query($conn, $query);
        // Verifica la correttezza delle credenziali
        if(mysqli_num_rows($res) > 0)
        {
            // Imposta la variabile di sessione
            $_SESSION["username"] = $nomeUtente;
            // Vai alla pagina home_db.php
            header("Location: index.php");
            exit;
        }
        else
        {
            // Flag di errore
            $errore = true;
        }
    }
?>

<html>
    <head>
        <title>login</title>
        <link rel="stylesheet" href="login.css" />
        <script src="login.js" defer ></script>
    </head>
    <body>
    <?php
            // Verifica la presenza di errori
            if(isset($errore))
            {
                echo "<span id='erroreCredenziali'>";
                echo "CREDENZIALI NON VALIDE.";
                echo "</span>";
            }
        ?>
        <main>
        <h1>BENVENUTO NEL SITO DI GIUSEPPE LI GIOI</h1>
            <form name='login' method='post'>
                <div class="div">   
                    <label>NOME UTENTE</label>
                    <input type="text" name="nomeUtente">
                </div>
                <div class="div">
                    <label>PASSWORD </label>
                    <input  type="password" name="password">
                </div>
                <div class="div">
                    <label><input class="input" type="submit"></label>
                </div>
                
            </form>
            <div class="hidden">NON HAI RIEMPITO TUTTI I CAMPI</div>
            <div class="testo"><span>NON SEI REGISTRATO?</span></div>
            <div class="registrati"><a href="register.php">REGISTRATI</a></div>
        </main>
       
    </body>
    
</html>

