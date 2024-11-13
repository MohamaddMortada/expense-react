<?php

include 'connections.php';

$query = $connection->prepare("SELECT * FROM expenses");
$query->execute();
$result = $query->get_result();

$transactions = [];

while ($row = $result->fetch_assoc()) {
    $transactions[] = $row;
}

echo json_encode($transactions);

$query->close();
$connection->close();
?>
