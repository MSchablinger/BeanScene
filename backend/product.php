<?php
header('Content-Type: application/json');
// $pdo = new PDO('mysql:host=localhost;dbname=bean-scene', 'bean-scene', '');
// $statement = $pdo->prepare("SELECT * FROM products ORDER BY id");
// $statement->execute();
// $data = $statement->fetchAll(PDO::FETCH_ASSOC);
header("Access-Control-Allow-Origin: *");

$data = '"products": [
{
id: 1,
name: "Ethiopian Espresso",
price: 30,
path: "bag.jpg"
}
]';
echo json_encode($data);
?>