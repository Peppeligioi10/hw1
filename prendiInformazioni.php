<?php
    session_start();
    if(!isset($_SESSION["username"])){
        header("Location: login.php");
        exit;
    } 
    Info();
    function info(){
        $conn = mysqli_connect("localhost", "root", "", "sito");
        $nomeutente=$_SESSION["username"];
        $query="SELECT * FROM utenti WHERE username='$nomeutente'";
        $res=mysqli_query($conn, $query) or die(mysqli_error($conn));
        while($row=mysqli_fetch_assoc($res)){
            $info[]=$row;
        }
        mysqli_close($conn);
        echo json_encode($info);
    }

?>