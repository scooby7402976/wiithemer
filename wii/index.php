<?php
	$sesId = NULL;
	$app = NULL;
	$displayname = NULL;

	if(isset($_GET['action'])) {

		$action = $_GET['action'];
		$tooldir = "../tools";
		$themedir = "../mym";
		$runfirstthemes = array("black_pirate.mym", "matrix.mym", "matrix_reloaded.mym", "muse.mym");
		$themeNoext = NULL;
		$str = NULL;
		$spinmym = NULL;
		$spindisplay = NULL;
		$runfirst = NULL;

		switch($action) {
			case "prepDir": // http://bartlesvilleok-am.com/wiithemer/wii/index.php?action=prepDir
				$copytools = NULL;
				session_start();
				$sesId = session_id();
				if(!empty($sesId)) {  // make session directory and copy needed files to it
					if(!is_dir($sesId)) {
						mkdir($sesId);
					}
					if(is_dir($tooldir)) {
						if ($dh = opendir($tooldir)){
							while(($file = readdir($dh)) !== false) {
								if($file == "." or $file == "..")
									continue;
								$copytools = copy($tooldir . "/" . $file, $sesId . "/" . $file );
								usleep(1000);
							}
							closedir($dh);
						}
					}
					if(is_dir($sesId)) {
						if($copytools)
							echo $sesId;
						else
							echo "ERROR";
					}
				}
			break;
			case "copymymfiles": // http://bartlesvilleok-am.com/wiithemer/wii/index.php?action=copymymfiles&mymfile=matrix.mym&spinselected=fastspin.mym
				if(isset($_GET['sessionId'])) $sesId = $_GET['sessionId'];
				//echo $sesId . "<br>\n";
				if(isset($_GET['mymfile'])) $theme = $_GET['mymfile'];
				if(isset($theme)) {
					$copytheme = NULL;
					$themewdir = $themedir . "/" . $theme;
					$copytheme = copy($themewdir, $sesId . "/" . $theme);
					if($copytheme)
						echo "Copying Theme to Session Dir. Complete .\n";
					else
						echo "ERROR - Copying Theme to Session Dir. Failed .\n";
				}
				if(isset($_GET['spinselected'])) $spinselected = $_GET['spinselected'];
				if(isset($spinselected)) {
					$copyspin = NULL;

					if($spinselected == "fastspin.mym") {
						$spinmym = "../mym/spins/fastspin.mym";
					}
					else if($spinselected == "spin.mym") {
						$spinmym = "../mym/spins/spin.mym";
					}
					else if($spinselected == "nospin.mym") {
						$spinmym = "../mym/spins/nospin.mym";
					}

					$copyspin = copy($spinmym, $sesId . "/" . $spinselected);
					if($copyspin)
						echo "Copying Spin Option to Session Dir. Complete .\n";
					else
						echo "ERROR - Copying Spin Option to Session Dir. Failed .\n";
				}
			break;
			case "downloadappfile": // http://bartlesvilleok-am.com/wiithemer/wii/index.php?action=downloadappfile&version=481
				if(isset($_GET['sessionId'])) $sesId = $_GET['sessionId'];
				//echo $sesId . "<br>\n";
				if(isset($_GET['version'])) $version = $_GET['version'];
				if(isset($version)) { # download .app file from nus servers
					getappndisplayname($version);
					$str = $sesId . "/000000" . $GLOBALS['app'];
					$myfile = file_exists($str);
					if(!$myfile) {
						$homedir = getcwd();
						chdir($sesId);
						$str = "themewii.exe " . $GLOBALS['app'];
						execInBackground($str);
						chdir($homedir);
						$str = $sesId . "/000000" . $GLOBALS['app'];
						$myfile = file_exists($str);
						while(!$myfile and filesize($myfile) == 0) {
							$myfile = file_exists($str);
						}
						$appfile = $GLOBALS['app'];
					}
					echo "Appfile download Complete .\n";
				}
			break;
			case "buildtheme":  // http://bartlesvilleok-am.com/wiithemer/wii/index.php?action=buildtheme&mymfile=matrix.mym&version=481&spinselected=fastspin.mym
				if(isset($_GET['mymfile'])) $theme = $_GET['mymfile'];
				if(isset($_GET['sessionId'])) $sesId = $_GET['sessionId'];
				if(isset($_GET['spinselected'])) $spinselected = $_GET['spinselected'];
				//echo $spinselected . "<br>";
				if(isset($_GET['version'])) $version = $_GET['version'];
				//echo $version . "<br>";
				if(isset($theme)) {
					getappndisplayname($version);	
					if($spinselected == "fastspin.mym") {
						$spinmym = "../mym/spins/fastspin.mym";
						$spindisplay = "_fastspin";
					}
					else if($spinselected == "spin.mym") {
						$spinmym = "../mym/spins/spin.mym";
						$spindisplay = "_spin";
					}
					else if($spinselected == "nospin.mym") {
						$spinmym = "../mym/spins/nospin.mym";
						$spindisplay = "_nospin";
					}
					//echo $spinmym . "<br>" . $spindisplay . "<br>";
					
					for($i = 0; $i < 4; $i++) {
						if($theme == $runfirstthemes[$i]) {
							$runfirst = 1;
							break;
						}
						else
						$runfirst = 0;
					}
					if($runfirst) {
						$str = "themewii " . $spinselected . " 000000" . $app . " 000000" . $app . ".app";
						$homedir = getcwd();
						chdir($sesId);
						execInBackground($str);
						chdir($homedir);
						$str = NULL;
						$str = $sesId . "/000000" . $app . ".app";
						$myfile = file_exists($str);
						while(!$myfile and filesize($myfile) == 0) {
							$myfile = file_exists($str);
						}
						$themeNoext = substr($theme, 0, strlen($theme) - 4);
						$str = NULL;
						$str = "themewii " . $theme . " 000000" . $app . ".app ". $themeNoext . $displayname . $spindisplay . ".csm";
						$homedir = getcwd();
						chdir($sesId);
						execInBackground($str);
						chdir($homedir);
						$str = NULL;
						$str = $sesId . "/" . $themeNoext . $displayname . $spindisplay . ".csm";
						$myfile = file_exists($str);
						while(!$myfile and filesize($myfile) == 0) {
							$myfile = file_exists($str);
						}
					}
					else {
						$str = "themewii " . $theme . " 000000" . $app . " 000000" . $app . ".app";
						$homedir = getcwd();
						chdir($sesId);
						execInBackground($str);
						chdir($homedir);
						
						$str = NULL;
						$str = $sesId . "/000000" . $app . ".app";
						$myfile = file_exists($str);
						while(!$myfile and filesize($myfile) == 0) {
							$myfile = file_exists($str);
						}
						$themeNoext = substr($theme, 0, strlen($theme) - 4);
						$str = NULL;
						$str = "themewii " . $spinselected . " 000000" . $app . ".app ". $themeNoext . $displayname . $spindisplay . ".csm";
						$homedir = getcwd();
						chdir($sesId);
						execInBackground($str);
						chdir($homedir);
						$str = NULL;
						$str = $sesId . "/" . $themeNoext . $displayname . $spindisplay . ".csm";
						$myfile = file_exists($str);
						while(!$myfile and filesize($myfile) == 0) {
							$myfile = file_exists($str);
						}
					}
					echo "http://bartlesvilleok-am.com/wiithemer/wii/" . $sesId . "/" . $themeNoext .$displayname . $spindisplay . ".csm";
				}
			break;
			case "removesessionDir":  // http://bartlesvilleok-am.com/wiithemer/wii/index.php?action=removesessionDir
				if(isset($_GET['sessionId'])) $sesId = $_GET['sessionId'];
				if (is_dir($sesId)){
					if ($dh = opendir($sesId)){
						while (($file = readdir($dh)) !== false) {
							if($file == "." or $file == "..")
								continue;
							unlink($sesId . "/" . $file);
						}
						closedir($dh);
					}
					usleep(1000);
					rmdir($sesId);
					echo "Session Dir. and files removal complete .\n";
				}
			break;
		}
	}
	function execInBackground($cmd) {
		if (substr(php_uname(), 0, 7) == "Windows"){
			pclose(popen("start ". $cmd, "r"));
		}
		return;
	}
	function getappndisplayname($version) {
		switch($version) {
			case 513: 
				$GLOBALS['app'] = "97"; // U 4.3
				$GLOBALS['displayname'] = "4.3U";
			break;
			case 481:
				$GLOBALS['app'] = "87";
				$GLOBALS['displayname'] = "4.2U";
			break;
			case 449:
				$GLOBALS['app'] = "7b";
				$GLOBALS['displayname'] = "4.1U";
			break;
			case 417:
				$GLOBALS['app'] = "72";
				$GLOBALS['displayname'] = "4.0U";
			break;
			case 514:
				$GLOBALS['app'] = "9a";// E 4.3
				$GLOBALS['displayname'] = "4.3E";
			break;
			case 482:
				$GLOBALS['app'] = "8a";
				$GLOBALS['displayname'] = "4.2E";
			break;
			case 450:
				$GLOBALS['app'] = "7e";
				$GLOBALS['displayname'] = "4.1E";
			break;
			case 418:
				$GLOBALS['app'] = "75"; 
				$GLOBALS['displayname'] = "4.0E";
			break;
			case 512:
				$GLOBALS['app'] = "94"; // J 4.3
				$GLOBALS['displayname'] = "4.3J";
			break;
			case 480:
				$GLOBALS['app'] = "84";
				$GLOBALS['displayname'] = "4.2J";
			break;
			case 448:
				$GLOBALS['app'] = "78";
				$GLOBALS['displayname'] = "4.1J";
			break;
			case 416:
				$GLOBALS['app'] = "70";
				$GLOBALS['displayname'] = "4.0J";
			break;
			case 518:
				$GLOBALS['app'] = "9d"; // K 4.3
				$GLOBALS['displayname'] = "4.3K";
			break;
			case 486:
				$GLOBALS['app'] = "8d";
				$GLOBALS['displayname'] = "4.2K";
			break;
			case 454:
				$GLOBALS['app'] = "81";
				$GLOBALS['displayname'] = "4.1K";
			break;
		}
		return;
	}
	
?>