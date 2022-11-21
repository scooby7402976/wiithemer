

<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["appfile"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if file is not 0 bytes
if(isset($_POST["submit"])) {
  $check = filesize($_FILES["appfile"]["tmp_name"]);
  if($check > 0) {
  //  echo "File is an image - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    echo "File is 0 bytes .\n";
    $uploadOk = 0;
  }
}

// Check if file already exists
if (file_exists($target_file)) {
  echo "Sorry, file already exists \n.";
  $uploadOk = 0;
}

 //Check file size isn't to large
if ($_FILES["appfile"]["size"] > 30000000) {
	echo "Sorry, your file is too large .\n";
	$uploadOk = 0;
}
if ($uploadOk == 0) 
	echo "Sorry, your file was not uploaded .\n";
else {
	if (move_uploaded_file($_FILES["appfile"]["tmp_name"], $target_file))
		echo "The file ". htmlspecialchars( basename( $_FILES["appfile"]["name"])). " has been uploaded .\n";
	else 
		echo "Sorry, there was an error uploading your file .\n";
}
?>
