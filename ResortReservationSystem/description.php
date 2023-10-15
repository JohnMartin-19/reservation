
<?php
$servername = "localhost";
$username = "root";
$password = "empty";
$dbname = "mydb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$in = $_POST['in'];
$out = $_POST['out'];
$adults = $_POST['adults'];
$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];

$sql = "SELECT * FROM users WHERE in = ? AND out = ? AND adults = ? AND name = ? AND email = ? AND number =?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $in, $out, $adults, $name, $email, $number);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo "Reservation successful!";
} else {
    echo "Invalid cridentials.";
}

$stmt->close();
$conn->close();
?>
