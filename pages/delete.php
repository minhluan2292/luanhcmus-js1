<?php
$filename = $_GET['f']; //get the filename
unlink('pages/fileshare'.DIRECTORY_SEPARATOR.$filename); //delete it
?>