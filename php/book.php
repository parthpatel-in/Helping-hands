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
    $customer_name = $_POST["name"];
    $email = $_POST["email"];
    $appointment_time = $_POST["time"];
    $service_date = $_POST["date"];
    $address = $_POST["address"];
    $b = "<br>";



    $con = connectToDatabase("localhost","root","","hh");
       if($con == true)
           echo "";
       else 
           echo "DB NOT CONNECTED";

    

        //    $query = "INSERT INTO book VALUES ('','$_POST[name]','$_POST[email]','$_POST[time]',' $_POST[date]','$_POST[address]')" ;
        $query = "INSERT INTO book (customer_name, customer_email, appointment_time, service_date, customer_address) VALUES ('$_POST[name]', '$_POST[email]', '$_POST[time]', '$_POST[date]', '$_POST[address]')";

           $res = mysqli_query($con,$query);
                       if($res == true) {
                           echo "order  placed";
                       }else{
                        echo "try again";
                       }
           mysqli_close($con);

}
}
getdata();

?>
