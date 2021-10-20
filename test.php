<?php
    $path=getcwd();
     echo $path;
     $files= scandir($path);
      echo '<pre>';
      echo printf_r($files);
      echo '</pre>';
?>