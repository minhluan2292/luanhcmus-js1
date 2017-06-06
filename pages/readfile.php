<?php
$dir = opendir('pages/fileshare');
echo "<br><br>";

while ($file = readdir($dir)) {
    if ($file == '.' || $file == '..') {
        continue;
    }

  echo "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
  echo "<a class='btn btn-warning btn-rounded' href='pages/fileshare/$file'><span class='btn-label-icon left fa fa-file'></span>".$file."</a>";
   echo "<a class='btn btn-danger' href='pages/delete.php?f=$file'><span class='btn-label-icon left fa fa-delete'></span>"."Delete"."</a>";
    echo "<br>";
}
closedir($dir);
?>