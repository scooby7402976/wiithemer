<?php
	session_start();
	$sesId = session_id();
	$readCount = null;
	$downloadcountfile = "downloadcount.ini";
	if(isset($_POST['type'])) {
		if($_POST['type'] == "increasecount") {
			$count = $_POST['count'];
			
			if(file_exists($downloadcountfile)) 
				$readCount = file_get_contents($downloadcountfile);
			$count = $count + $readCount;
			file_put_contents($downloadcountfile, $count, LOCK_EX);
			
			echo $count;
		}
	
		if($_POST['type'] == "updatecount") {
			$count = file_get_contents($downloadcountfile);
			echo $count;
		}
	}
?>