<style>
    body {
        background: linear-gradient(135deg, #71b7e6, #9b59b6);
        color: white;
    }   

    .alert {
        margin-top: 10%;
        font-size: 2rem;
        text-decoration: underline;
        color: white;
        height: 20rem;
        width: 80vw;
        margin-left: auto;
        margin-right: auto;
        border-radius: 1rem;
        border: 1px solid white;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 5px 5px 25px wheat;
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

    function getData() {
        // $uname = $_POST['uname'];
        // $email = $_POST['email'];
        // $contact = $_POST['contact'];
        // $serviceName = $_POST['service'];
        // $price = $_POST['price'];
        // $pw = $_POST['pw'];
        // $confirmPw = $pw ;
        $b = "<br>";

        $con = connectToDatabase('localhost','root','','hh');
        if($con == true){
            echo "" ;
        } else {
            echo "DB NOT CONNECTED";
        }

        $queryForEmail = "SELECT * FROM service_provider WHERE service_provider_email = '$_POST[email]' ";

        $query = "INSERT INTO service_provider VALUES ('','$_POST[uname]','$_POST[service]',' $_POST[contact]','$_POST[email]','$_POST[pw]')" ;

        $login = "INSERT INTO login (username, password) SELECT service_provider_name, password FROM service_provider;";

                         // FOR EMAIL IS ALREADY REGISTERED OR NOT
        $res = mysqli_query($con,$queryForEmail);
        if(mysqli_num_rows($res) > 0){
            echo "<h1 class='alert'>Email is already Registered , Please Go Back and use another Email Id</h1>".$b;
        } else {
            // FOR INSERT 
            $res = mysqli_query($con,$query);
            if($res == true) {
                echo "<h1 class='alert'> SERVICE PROVIDER REGISTERED </h1>".$b;
                $loginRes = mysqli_query($con,$login);
                if($loginRes==true) {
                    //echo "data entered in login table";
                } else {
                    echo "<h1 class='alert'> ERROR OCCURED TO INSERT IN LOGIN TABLE </h1>";
                }
            }
            else 
            echo "<h1 class='alert'> USER NOT REGISTERED </h1>".$b;
        }
        mysqli_close($con);

    }

    getData();
?>