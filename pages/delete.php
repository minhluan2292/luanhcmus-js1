<?php
$filename = $_GET['f']; //get the filename
echo $filename;
$path = "./pages/fileshare/$filename";

if (unlink($path)) {
    echo 'success';
} else {
    echo 'fail';
}
?>