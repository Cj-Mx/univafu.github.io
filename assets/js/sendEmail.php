<?php
 $data = json_decode(file_get_contents('php://input'), true);
 echo $data['nombre'];
$to = $data['emailTo'];
$subject = 'Solicitud de información';
$cuerpo = "Mensaje: \n" . $data['mensaje'] . "\n\n\n" . "Información de contacto\n".
          "Nombre: " . $data['nombre'] . "\n".
          "Correo: " . $data['email'] . "\n".
          "Telefono: " . $data['telefono'] . "\n";
$txt = $data['mensaje'] . '\r\n' . ' Información de contacto:  ' . '\r\n' . 'Nombre: ' . $data['nombre'] . '\r\n' . 'Telefono: ' . $data['telefono'] . '\r\n' . 'Correo Electronico ' . $data['email'];
$headers = "From: " . 'info@univafu.edu.mx';
if(mail($to,$subject,$cuerpo,$headers)){
    echo "Mensaje enviado con exito";
}
else{
    echo "Error";
}
?>
