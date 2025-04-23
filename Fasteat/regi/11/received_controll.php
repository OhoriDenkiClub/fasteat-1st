<?php
$postData = json_decode(file_get_contents('php://input'), true);
$jsonFilePath = 'data-json.json';
$jsonData = json_decode(file_get_contents($jsonFilePath), true);
$changeKey=$postData['num'];
$jsonData[$changeKey]['received'] = $postData['received'];
file_put_contents($jsonFilePath, json_encode($jsonData,  JSON_PRETTY_PRINT));
echo json_encode(['status' => 'success']);
?>