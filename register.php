<?php
 $conn = mysqli_connect("localhost","root", "", "dimpal");
 if ($conn->connect_error) {
    die('connection failed');
  }
 
// echo "<pre>";
// print_r($_POST);
if(isset($_POST['callmethod']) =='hello'){
    

    $name= $_POST['name1'];
    $mail= $_POST['email'];
    $phone= $_POST['phone'];
    $pass1= md5($_POST['pass1']);
    $pass2= md5($_POST['pass2']);
    $sql = "SELECT * FROM user WHERE email='$mail'";
    $result = $conn->query($sql);
    if ($result == false) {
      die(mysqli_error($conn));
    }
    if ($result->num_rows > 0) {
        echo json_encode(array("statusCode"=>0, "msg"=>"Email already registered"));
    
    }
    elseif ($pass1 === $pass2) {

      $varpass = md5($pass1);
      $sql = "INSERT INTO `user` (`full_name`, `email`, `pass`,`phone`) VALUES ('$name','$mail','$varpass','$phone')";
      if ($conn->query($sql) === true) {
       echo json_encode(array("statusCode"=>1, "msg"=>"successfully registered"));
        // header('Location: http://localhost/projects/login.php');
      }
    } else {
        echo json_encode(array("statusCode"=>0, "msg"=>"Please provide identical passwords"));
    }
  }
  $conn->close();

?>