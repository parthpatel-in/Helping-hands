<style>
    h1 {
        margin-top: 30px;
        font-size: 1.5rem;
        text-decoration: underline;
    }
</style>
<?php

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

    /* **************************** getting data from signUp form**************************** */

    function getData() {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $contact = $_POST["contactNo"];
        $address = $_POST["address"];
        $passW = $_POST["pw"];
        $confirmPw = $_POST["confirmPw"];
        $b = "<br>";

        function insertCustomer() {
            
        }

        $con = connectToDatabase("localhost","root","","hh");
        if($con == true)
            echo "";
        else 
            echo "DB NOT CONNECTED".$b;

        $queryForEmail = "SELECT * FROM customer WHERE customer_email = '$_POST[email]' ";

        $query = "INSERT INTO customer VALUES ('','$_POST[name]','$_POST[email]','$_POST[pw]',' $_POST[confirmPw]','$_POST[contactNo]','$_POST[address]')" ;

        $login = "INSERT INTO login (username, password) SELECT customer_name, password FROM customer;";
        
                        // FOR EMAIL IS ALREADY REGISTERED OR NOT
        $res = mysqli_query($con,$queryForEmail);
        if(mysqli_num_rows($res) > 0){
            echo "<h1 style='color:red;'>Email is already Registered , Please Go Back and use another Email Id</h1>".$b;
        } else {
            // FOR INSERT 
            $res = mysqli_query($con,$query);
            if($res == true) {
                echo "USER REGISTERED".$b;
                $loginRes = mysqli_query($con,$login);
                if($loginRes==true) {
                    //echo "data entered in login table";
                } else {
                    echo "ERROR OCCURED TO INSERT IN LOGIN TABLE";
                }
            }
            else 
            echo "USER NOT REGISTERED".$b;
        }
        mysqli_close($con);
    }
    getData();
?>