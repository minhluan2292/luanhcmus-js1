<?php
$dir = opendir('fileshare');
echo "<br><br>";

while ($file = readdir($dir)) {
    if ($file == '.' || $file == '..') {
        continue;
    }

  echo "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
  echo "<a class='btn btn-warning btn-rounded' href='/fileshare/$file'><span class='btn-label-icon left fa fa-file'></span>".$file."</a>";
  
    echo "<br>";
}
closedir($dir);
?>