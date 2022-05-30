<?php
	session_start();
	$sesId = session_id();
	$pageloadsfile = "pageloads.log";
	$readCount = null;
	
	if(isset($_POST['type'])) {
		if($_POST['type'] == "addtocount") {
			$count = $_POST['count'];
			if(file_exists($pageloadsfile)) 
				$readCount = file_get_contents($pageloadsfile);
			$count = $count + $readCount;
			file_put_contents($pageloadsfile, $count, LOCK_EX);
			echo $count;
		}
	
		if($_POST['type'] == "updatecount") {
			$count = file_get_contents($pageloadsfile);
			echo $count;
		}
	}
?>