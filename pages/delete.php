<?php
$filenameD = $_GET['f']; //get the filename

foreach (glob('fileshare/*.*') as $filename) {
    if ('fileshare/'.$filenameD == $filename) {
        if(unlink('fileshare/'.$filenameD))
          echo "Success";
      else
        echo "Failed";
    }
}
header('Location: ' . $_SERVER['HTTP_REFERER']);
exit;
?>