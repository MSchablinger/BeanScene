<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

$conn = new mysqli("localhost", "BeanScene", "BeanScene", "BeanScene");
$stmt = $conn->prepare("SELECT * FROM product ORDER BY id");
$stmt->execute();
$result = $stmt->get_result();
$data = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($data);
?>