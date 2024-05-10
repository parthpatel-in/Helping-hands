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

    
    .alert1 {
        margin-top: 10%;
        font-size: 2rem;
        text-decoration: underline;
        color: white;
        height: 20rem;
        width: 80vw;
        text-align: center;
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

    /* **************************** getting data from login form **************************** */

    function getData() {
        $uname = $_POST["username"];
        $passW = $_POST["password"];
        
        $con = connectToDatabase("localhost","root","","hh");
        if($con == true)
            // echo "DB CONNECTED";
            echo "" ;
        else 
            echo "DB NOT CONNECTED";

        $query = "SELECT * FROM login WHERE username = '$_POST[username]' AND password = '$_POST[password]' " ;

        $res = mysqli_query($con,$query);
        
        if(mysqli_num_rows($res) > 0) {
            while($row = mysqli_fetch_assoc($res)) {
                if($row['username'] = 'admin101' && $row['password'] == 'adm101') {
                    header("location: http://localhost/Helping%20hands%20website/servicepanelHH/ruang-admin/index.html");
                }
            }
            echo "<h1 class='alert'> LOGIN SUCCESS </h1>" ;
        } else {
            echo "<h1 class='alert1'> USER NOT FOUND / PLEASE ENSURE THAT USERNAME AND PASSWORD IS CORRECT </h1>" ; 
        }
 
        mysqli_close($con);

    }

    getData();
?>