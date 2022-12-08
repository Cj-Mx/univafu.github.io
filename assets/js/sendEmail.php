<?php
 $data = json_decode(file_get_contents('php://input'), true);
 echo $data['nombre'];
$to = $data['emailTo'];
$subject = "My subject";
$txt = $data['nombre'];
$headers = "From: webmaster@example.com" . "\r\n" .
"CC: somebodyelse@example.com";
mail($to,$subject,$txt,$headers);
?>