<?php
	session_start();
	$sesId = session_id();
	echo $sesId;
	
	if (is_dir($sesId)){
		if ($dh = opendir($sesId)){
			while (($file = readdir($dh)) !== false){
				if($file == "." or $file == "..")
					continue;
				$x = unlink($sesId . "/" . $file);
				if(!$x)	
					rmdir($sesId . "/" . $file);
				usleep(1000);
			}
			closedir($dh);
		}
		usleep(1000);
		rmdir($sesId);
		echo "file removal complete";
	}
?>