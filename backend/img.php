<?php
$name = $_GET['path'];
$fp = fopen($name, 'rb');

// send the right headers
header("Content-Type: image/jpg");
header("Content-Length: " . filesize($name));

// dump the picture and stop the script
fpassthru($fp);
exit;
?>