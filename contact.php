<?php
$server_name = 'localhost';
$user_name = 'root';
$pass_word = '';
$database = 'de-microbytes';

$connection = new mysqli($server_name, $user_name, $pass_word, $database);

if($connection -> connect_error){
    die("Unsuccessful");
}
echo "Connected";

$username = $_POST['uname'];
$email = $_POST['temail'];
$comment = $_POST['comment'];

$sql = "INSERT into contact (name, email, comment) VALUES ('$username' ,'$email', '$comment')";

if(mysqli_query($connection, $sql)){
    echo "Successful";
}else {
    echo "Failed";
}

$url = './index.html';


$connection -> close();
// header('Location: '.$url.'#about/');
?>