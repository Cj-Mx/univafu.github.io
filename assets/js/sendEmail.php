<?php
$to = "pagetest98@gmail.com";
$subject = "My subject";
$txt = "Hola mundo";
$headers = "From: webmaster@example.com" . "\r\n" .
"CC: somebodyelse@example.com";
mail($to,$subject,$txt,$headers);
?>