<?php


for ($i=0; $i < count($_FILES); $i++) {
  move_uploaded_file($_FILES['file'.$i]['tmp_name'], $_POST['path'] . $_FILES['file'.$i]['name']);
}

