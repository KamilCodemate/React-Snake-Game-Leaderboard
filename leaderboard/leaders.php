<?php
header("Access-Control-Allow-Origin: *");

$pdo = new PDO('mysql:host=localhost;port=3306;dbname=leaderboard', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$statement = $pdo -> prepare('SELECT name, surname, points FROM leaders ORDER BY points DESC LIMIT 10');
$statement -> execute();

$data = $statement -> fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data);
?>