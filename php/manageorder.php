<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
    $host = "localhost";
    $uname = "root";
    $pw = "";
    $dbname = "hh";

   function connectToDatabase($host, $username, $password, $database) {
       $con = mysqli_connect($host, $username, $password, $database);
       if(mysqli_connect_errno()) { 
           echo "Connection Failed: " . mysqli_connect_error();
           return null;
       } else {
           return $con;
       }
   }
   function getData() {
    $service_name = $_POST["name"];
    $address = $_POST["address"];
    $b = "<br>";



    $con = connectToDatabase("localhost","root","","hh");
       if($con == true)
           echo "";
       else 
           echo "DB NOT CONNECTED";

   }
}