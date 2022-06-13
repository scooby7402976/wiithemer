<?php
	session_start();
	$sesId = session_id();
	$tooldir = "tools";
	$theme = null;
	$versionregion = null;
	$themedir = "mym/";
	$titleId = "0000000100000002/";
	$app = null;
	$str = null;
	$themeNoext = null;
	$titleIdnoSlash = "0000000100000002";
	$appdir = null;
	$displayname = null;
	
	if(isset($_POST['type'])) {
		switch($_POST['type']) {
			case "makesesdir":
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
			break;
			case "getappfile":
				if(isset($_POST['version'])) {
					$versionregion = $_POST['version'];
					$myfile = file_exists($sesId . "/0000000100000002/0000000100000002.wad");
					if(!$myfile) {
						//echo "Downloading .....<br>";
						execInBackground($sesId . "/nusd.exe 0000000100000002 $versionregion");
						while(!$myfile and filesize($myfile)==0) {
							$myfile = file_exists($sesId . "/0000000100000002/0000000100000002.wad");			
						}		
					}
					else {
						if (is_dir($sesId . "/" . $titleIdnoSlash)){
						  if ($dh = opendir($sesId . "/" . $titleIdnoSlash)){
							while (($file = readdir($dh)) !== false){
							  if($file == "." or $file == "..")
								continue;
							  unlink($sesId . "/0000000100000002/" . $file);
							  usleep(500);
							}
							closedir($dh);
						  }
						}
						execInBackground($sesId . "/nusd.exe 0000000100000002 $versionregion");
						while(!$myfile and filesize($myfile)==0) {
							$myfile = file_exists($sesId . "/0000000100000002/0000000100000002.wad");		
						}
					}
					getappndisplayname();
					$GLOBALS['appdir'] = $sesId . "/0000000100000002/" . $GLOBALS['app'];
					$myfile = file_exists($GLOBALS['appdir']);
					while(!$myfile and filesize($myfile)==0) {
						$myfile = file_exists($GLOBALS['appdir']);
					}
					usleep(1000);
					copy($GLOBALS['appdir'], $sesId . "/" . $GLOBALS['app']);
					if (is_dir($sesId . "/" . $GLOBALS['titleIdnoSlash'])) {
						if ($dh = opendir($sesId . "/" . $GLOBALS['titleIdnoSlash'])){
							while (($file = readdir($dh)) !== false){
							  if($file == "." or $file == "..")
								continue;
							  @unlink($sesId . "/0000000100000002/" . $file);
							  usleep(1000);
							}
							closedir($dh);
						}
					}
					echo "app file copy complete ./" . $GLOBALS['app'];
				}
			break;
			case "gettheme":
				if(isset($_POST['theme'])) {
					$theme = $themedir . $_POST['theme'];
					copy($theme, $sesId . "/" . $_POST['theme']);
					echo "copy theme mym file complete";
				}
			break;
			case "buildtheme":
				if(isset($_POST['theme'])) {
					getappndisplayname();
					$theme = $sesId . "/" .  $themedir . $_POST['theme'];
					if(substr($_POST['theme'], strlen($_POST['theme']) - 3, 3) == "mym")
						$themeNoext = substr($_POST['theme'], 0, strlen($_POST['theme']) - 4);
					$str = "themewii.exe " . $_POST['theme'] . " " . $_POST['appfile'] . " " . $themeNoext . $displayname . ".csm";
					$homedir = getcwd();
					chdir($sesId);
					execInBackground($str);
					usleep(500);
					unlink($_POST['appfile']);
					chdir($homedir);
					if (is_dir($sesId . "/" . $GLOBALS['titleIdnoSlash'])){
						if ($dh = opendir($sesId . "/" . $GLOBALS['titleIdnoSlash'])){
							while (($file = readdir($dh)) !== false){
							  if($file == "." or $file == "..")
								continue;
							  unlink($sesId . "/" . "0000000100000002/" . $file);
							  usleep(1000);
							}
						closedir($dh);
						}
					}
					$myfile = file_exists($sesId . "/" . $themeNoext . $displayname . ".csm");
					while(!$myfile and filesize($myfile)==0) {
						$myfile = file_exists($sesId . "/" . $themeNoext . $displayname . ".csm");
					}	
					
					echo "$sesId/$themeNoext/$displayname";
					
					
					
					@rmdir($GLOBALS['titleIdnoSlash']);
				}
			break;
			default:
				echo "type = " . $_POST['type'];
			break;
		}
	}
	
	function execInBackground($cmd) {
		if (substr(php_uname(), 0, 7) == "Windows"){
			pclose(popen("start /B ". $cmd, "r"));
		}
		return;
	}
	function getappndisplayname() {
		switch($_POST['version']) {
			case 513: 
				$GLOBALS['app'] = "00000097"; // U 4.3
				$GLOBALS['displayname'] = "4.3U";
			break;
			case 481:
				$GLOBALS['app'] = "00000087";
				$GLOBALS['displayname'] = "4.2U";
			break;
			case 449:
				$GLOBALS['app'] = "0000007b";
				$GLOBALS['displayname'] = "4.1U";
			break;
			case 417:
				$GLOBALS['app'] = "00000072";
				$GLOBALS['displayname'] = "4.0U";
			break;
			case 514:
				$GLOBALS['app'] = "0000009a";// E 4.3
				$GLOBALS['displayname'] = "4.3E";
			break;
			case 482:
				$GLOBALS['app'] = "0000008a";
				$GLOBALS['displayname'] = "4.2E";
			break;
			case 450:
				$GLOBALS['app'] = "0000007e";
				$GLOBALS['displayname'] = "4.1E";
			break;
			case 418:
				$GLOBALS['app'] = "00000075"; 
				$GLOBALS['displayname'] = "4.0E";
			break;
			case 512:
				$GLOBALS['app'] = "00000094"; // J 4.3
				$GLOBALS['displayname'] = "4.3J";
			break;
			case 480:
				$GLOBALS['app'] = "00000084";
				$GLOBALS['displayname'] = "4.2J";
			break;
			case 448:
				$GLOBALS['app'] = "00000078";
				$GLOBALS['displayname'] = "4.1J";
			break;
			case 416:
				$GLOBALS['app'] = "00000070";
				$GLOBALS['displayname'] = "4.0J";
			break;
			case 518:
				$GLOBALS['app'] = "000000xx"; // K 4.3
				$GLOBALS['displayname'] = "4.3K";
			break;
			case 486:
				$GLOBALS['app'] = "000000xx";
				$GLOBALS['displayname'] = "4.2K";
			break;
		}
		return;
	}
?>