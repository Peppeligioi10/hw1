<?php
    session_start();
    if(!isset($_SESSION["username"])){
        header("Location: login.php");
        exit;
    } 
    drink();
    function drink(){
        $conn = mysqli_connect("localhost", "root", "", "sito");
        $nomeutente=$_SESSION["username"];
        $query="SELECT nome,img FROM drink WHERE id_utente='$nomeutente'";
        $res=mysqli_query($conn, $query) or die(mysqli_error($conn));
        if(mysqli_num_rows($res) == 0) {
            echo json_encode(array('ok' => true));
            exit;
        }
        while($row=mysqli_fetch_assoc($res)){
            $drink[]=$row;
        }
        mysqli_close($conn);
        echo json_encode($drink);
    }

?>