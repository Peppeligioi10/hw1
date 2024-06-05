<?php
    session_start();
    // Verifica l'esistenza di dati POST
    if(isset($_POST["nomeUtente"]) && isset($_POST["password"]))
    {
        // Connetti al database
        $conn = mysqli_connect("localhost", "root", "", "sito");
        // Cerca utenti con quelle credenziali
        $query = "SELECT * FROM utenti WHERE username = '".$_POST['nomeUtente']."'";
        $res = mysqli_query($conn, $query);
        // Verifica esistenza nome utente
        if(mysqli_num_rows($res) == 0)
        {
            $query1="INSERT INTO utenti(username,password,nome,cognome,data_creazione) VALUES ('".$_POST['nomeUtente']."','".$_POST['password']."','".$_POST['nome']."','".$_POST['cognome']."',current_date())";
            $res1=mysqli_query($conn,$query1);
            header("Location: login.php");
            exit;
        }
        else
        {
            $errore=true;
        }
    }
?>

<html>
    <head>
        <title>login</title>
        <link rel="stylesheet" href="login.css" />
        <script src="register.js" defer ></script>
    </head>
        <main>
        <?php
            // Verifica la presenza di errori
            if(isset($errore))
            {
                echo "<span id='errore'>";
                echo "NOME UTENTE GIA IN USO";
                echo "</span>";
            }
        ?>
            <h1>REGISTRATI</h1>
            <form class="form" name='register' method='post'>
                <div class="div">
                    <label>NOME</label>
                    <input type="text" name="nome">
                </div>
                <div class="div">
                    <label>COGNOME</label>
                    <input type="text" name="cognome">
                </div>
                <div class="div">
                    <label>NOME UTENTE</label> 
                    <input type="text" name="nomeUtente">
                </div>
                <div class="div">
                    <label>PASSWORD </label>
                    <input  type="password" name="password">
                </div>
                <div class="div">
                    <label> RIPETI PASSWORD </label>
                    <input  type="password" name="RipetiPassword">
                </div>
                <div class="div">
                    <label><input class="input" type="submit"></label>
                </div>
                
            </form>
            <div id="erroreRiempireCampi" class="hidden">NON HAI RIEMPITO TUTTI I CAMPI</div>
            <div id="erroreNumeroPass" class="hidden">DEVI METTERE ALMENO UN NUMERO NELLA PASSWORD</div>
            <div class="registrati"><a href="login.php">FAI LOGIN</a></div>
        </main>
</html>