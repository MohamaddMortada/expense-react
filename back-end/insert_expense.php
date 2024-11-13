<?php

include 'connections.php';

$data = json_decode(file_get_contents("php://input"), true);

$type = $data['type'];
$source = $data['source'];
$amount = $data['amount'];
$date = $data['date'];

$query = $connection->prepare("INSERT INTO expenses (type, source, amount, date) VALUES (?, ?, ?, ?)");
$query->bind_param("ssds", $type, $source, $amount, $date);

if ($query->execute()) {
    echo json_encode(["status" => "success", "message" => "Transaction added successfully"]);
} else {
    echo json_encode(["status" => "error", "message" => "Transaction insertion failed"]);
}

$query->close();
$connection->close();
?>
