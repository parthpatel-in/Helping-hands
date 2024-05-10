<?php

// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$database = "hh";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to fetch data from service_provider and customer tables using foreign key relationships
$sql = "SELECT service_provider_id, service_provider_name, service_provider_contact_no, customer_id, customer_contact_no 
        FROM manage_client 
        INNER JOIN service_provider  ON service_provider_id = service_provider_id
        INNER JOIN customer c ON mc.customer_id = c.customer_id";

$result = $conn->query($sql);

// Check if there are rows returned
if ($result->num_rows > 0) {
    // Loop through each row
    while($row = $result->fetch_assoc()) {
        // Insert fetched data into manage_client table
        $insert_sql = "INSERT INTO manage_client (service_provider_id, service_provider_name, service_provider_contact_no, customer_id, customer_contact_no) 
                       VALUES ('".$row['service_provider_id']."', '".$row['service_provider_name']."', '".$row['service_provider_contact_no']."', '".$row['customer_id']."', '".$row['customer_contact_no']."')";
        
        if ($conn->query($insert_sql) === TRUE) {
            echo "Data inserted successfully";
        } else {
            echo "Error inserting data: " . $conn->error;
        }
    }
} else {
    echo "No data found";
}

// Close database connection
$conn->close();

?>
