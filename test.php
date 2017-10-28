<?php
$rname = "admin";
$rpassword = "admin1";

$name = $_POST["username"];
$password = $_POST["password"];

 if ($name == $rname) {
  	if($password == $rpassword)
  	{
  		echo "Ano!";
  	}
  }
  else {
  	echo "Ne!";
  } 

?>