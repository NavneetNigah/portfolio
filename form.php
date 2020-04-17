<?php 
if($_SERVER["REQUEST_METHOD"] == "POST")
{
  $name = $_POST['name1'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  
  $to = "kaur.navneet0494@gmail.com";
$headers = "From: $email " ;

if(mail($to,$name,$message,$headers))
{
 	echo "success";
}
else
{
	echo "error";
}
}
?>