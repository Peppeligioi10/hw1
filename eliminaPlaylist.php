<?php
    session_start();
    if(!isset($_SESSION["username"])){
        header("Location: login.php");
        exit;
    } 
    musica();
    function musica(){
        if(isset($_POST["nome"]) && isset($_POST["img"]))
    {

        $conn = mysqli_connect("localhost", "root", "", "sito");
        $nome = mysqli_real_escape_string($conn, $_POST['nome']);
        $img = mysqli_real_escape_string($conn, $_POST['img']);
        $nomeutente=$_SESSION["username"];
        

        $query = "DELETE FROM musica WHERE id_utente='$nomeutente' AND nome = '$nome' AND img = '$img'";
        $res = mysqli_query($conn, $query) or die(mysqli_error($conn));
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