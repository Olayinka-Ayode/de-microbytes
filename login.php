<?php
$server_name = 'localhost';
$user_name = 'root';
$pass_word = '';
$database = 'de-microbytes';

$connection = new mysqli($server_name, $user_name, $pass_word, $database);

if($connection -> connect_error){
    die("Unsuccessful".$connection->connect_error);
}
echo "Successful";

$username = $_POST['fname'];
$email = $_POST['email'];
$password = $_POST['password'];

$sql = "INSERT into login (username, email, pass) VALUES ('$username', '$email', '$password')";

if(mysqli_query($connection, $sql)){
    echo "Sent Successfully";
} else {    
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

$url = 'index.html';


$connection -> close();
header('Location: '.$url.'#about/');
?>