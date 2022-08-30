<?php


$requestPayload = file_get_contents("php://input");
$obj            = json_decode($requestPayload);


echo json_encode($obj);

?>