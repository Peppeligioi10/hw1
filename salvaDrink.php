<?php
    session_start();
    if(!isset($_SESSION["username"])){
        header("Location: login.php");
        exit;
    } 
    drink();
    function drink(){
        if(isset($_POST["nome"]) && isset($_POST["img"]))
    {
        // Connetti al database
        $conn = mysqli_connect("localhost", "root", "", "sito");
        $nome = mysqli_real_escape_string($conn, $_POST['nome']);
        $img = mysqli_real_escape_string($conn, $_POST['img']);
        $nomeutente=$_SESSION["username"];
        

        $query = "SELECT * FROM drink WHERE id_utente='$nomeutente' AND nome = '$nome' AND img = '$img'";
        $res = mysqli_query($conn, $query) or die(mysqli_error($conn));
        if(mysqli_num_rows($res) > 0) {
            echo json_encode(array('ok' => true));
            exit;
        }

        $query = "INSERT INTO drink(id_utente,nome, img, content) VALUES('$nomeutente','$nome','$img', JSON_OBJECT('nome', '$nome', 'img', '$img'))";
        error_log($query);
        if(mysqli_query($conn, $query) or die(mysqli_error($conn))) {
            echo json_encode(array('ok' => true));
            exit;
        }

        mysqli_close($conn);
        echo json_encode(array('ok' => false));
    }
    }

?>