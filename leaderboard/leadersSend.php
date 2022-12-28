<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");


$pdo = new PDO('mysql:host=localhost;port=3306;dbname=leaderboard', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


$data = json_decode(file_get_contents('php://input'), true);
$name = $data['name'];
$surname = $data['surname'];
$points = $data['points'];


$statement = $pdo->prepare("INSERT INTO leaders (name, surname, points) VALUES ('$name', '$surname', $points)");
$statement->execute();
http_response_code(200);
