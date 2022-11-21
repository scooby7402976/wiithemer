<?php
	session_start();
	if(isset($_POST["action"])) {
		$sesId = session_id();
		$action = null;
		$ret = null;
		$themecount = getthemecount();
		$pageloadsfile = "res/pageloadcount.txt";
		$readCount = null;
		$downloadcountfile = "res/downloadcount.txt";
		$action = $_POST["action"];
		$tooldir = "tools";
		
		switch($action) {
			case "getthemecount": {
				echo $themecount . "\n";
			}break;
			case "loadthemelist": {
				for($x = 0; $x < $themecount; $x++) {
					$ret .= loadthemelist($x) . "\n";
				}
				echo $themecount . "%" . $ret;
			}break;
			case "getsessionId": {
				echo $sesId;
			}break;
			case "addtopageloadscount": {
				$count = $_POST['count'];
				if(file_exists($pageloadsfile)) 
					$readCount = file_get_contents($pageloadsfile);
				$count = $count + $readCount;
				file_put_contents($pageloadsfile, $count, LOCK_EX);
				echo $count;
			}break;
			case "updatepageloadscount": {
				$count = file_get_contents($pageloadsfile);
				echo $count;
			}break;
			case "increasedownloadcount": {
				$count = $_POST['count'];
				if(file_exists($downloadcountfile)) 
					$readCount = file_get_contents($downloadcountfile);
				$count = $count + $readCount;
				file_put_contents($downloadcountfile, $count, LOCK_EX);
				echo $count;
			}break;
			case "updatedownloadcount": {
				$count = file_get_contents($downloadcountfile);
				echo $count;
			}break;
			case "removesessionfolder": {
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
					//echo "file removal complete";
				}
			}break;
			case "copythemetosessiondirectory": {
				if(isset($_POST['theme'])) {
					$theme = "mym/" . $_POST['theme'];
					$theme = str_replace(" ", "", $theme);
					$themenospaces = str_replace(" ", "", $_POST['theme']);
					copy($theme, $sesId . "/" . $themenospaces);
				}
			}break;
			case "makesesdir": {
				if(!empty($sesId)) {
					if (!is_dir($sesId)) {
						mkdir($sesId);
					}
					if (is_dir($tooldir)){
						if ($dh = opendir($tooldir)){
							while (($file = readdir($dh)) !== false){
								if($file == "." or $file == "..")
									continue;
								copy($tooldir . "/" . $file, $sesId . "/" . $file );
								usleep(1000);
							}
							closedir($dh);
						}
					}
					echo "<p>Made Session directory '" . $sesId . "'<br>copied needed files to Session directory .</p>";
				}
			}break;
		}
	}
	
	function getthemecount() {
		$list = file( "res/themelist.txt", FILE_IGNORE_NEW_LINES);
		return count($list);
	}
	function loadthemelist($input) {
		$list = file( "res/themelist.txt", FILE_IGNORE_NEW_LINES);
		return $list[$input];
	}
?>