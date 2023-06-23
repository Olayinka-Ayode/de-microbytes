<?php
$username = $_POST['username'];
$pass = $_POST['pass'];
$server_name = 'localhost';
$pass_word = 'potato';
$database = 'test';
$user_name = 'admin';

$connection = new mysqli($server_name, $user_name, $pass_word, $database);

if($connection -> connect_error){
    die("uns");
}
echo "Succ";

$sql = "INSERT into table (username, pass) VALUES ('$username', '$pass')";

if(mysqli_query($connection, $sql)){
    echo "Sent";
}else {
    echo "Error";
}
?>