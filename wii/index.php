<?php
	$sesId = NULL;

	if(isset($_GET['action'])) {

		$action = $_GET['action'];
		$tooldir = "../tools";
		$themedir = "../mym";
		$runfirstthemes = array("black_pirate.mym", "matrix.mym", "matrix_reloaded.mym", "muse.mym", "lime_wii.mym", "diablo_3.mym");
		$themeNoext = NULL;
		$str = NULL;
		$spinmym = NULL;
		$spindisplay = NULL;
		$runfirst = false;
		$multistage_theme = null;
		$seccntr = NULL;
		$optimeout = 60;

		switch($action) {
			case "prepDir": 
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
			case "copymymfiles": 
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
			case "downloadappfile": 
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
						$str = "themething.exe " . $GLOBALS['app'];
						execInBackground($str);
						chdir($homedir);
						$str = $sesId . "/000000" . $GLOBALS['app'];
						$myfile = file_exists($str);
						while((!$myfile and filesize($myfile) == 0) and $seccntr < $optimeout) {
							$myfile = file_exists($str);
							sleep(1);
							$seccntr += 1;
						}
						if(!$myfile and $seccntr == $optimeout) {
							echo "Error = downloading app file .";
							return;
						}
						$appfile = $GLOBALS['app'];
					}
					echo "Appfile download Complete .\n";
				}
			break;
			case "buildtheme":  
				if(isset($_GET['mymfile'])) $theme = $_GET['mymfile'];
				if(isset($_GET['sessionId'])) $sesId = $_GET['sessionId'];
				if(isset($_GET['spinselected'])) $spinselected = $_GET['spinselected'];
				//echo $spinselected . "<br>";
				if(isset($_GET['version'])) $version = $_GET['version'];
				if(isset($_GET['selected'])) $selected = $_GET['selected'];
				//echo "selected = \n"  .  $selected;
				//return;
				$multistage_theme = checkfor2stagetheme($theme);
				if(isset($theme)) {
					getappndisplayname($version);
					$app = 	$GLOBALS['app'];
					$displayname = $GLOBALS['displayname'];

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
					if($multistage_theme){
						//echo "Found multistage theme .\n";
						$str = "themething " . $theme . " " . $app . " 000000" . $app . ".app";
						//echo "str = " . $str; return;
						$homedir = getcwd();
						chdir($sesId);
						execInBackground($str);
						chdir($homedir);
						$str = null;
						$str = $sesId . "/000000" . $app . ".app";
						$myfile = file_exists($str);
						while((!$myfile and filesize($myfile) == 0) and $seccntr < $optimeout) {
							$myfile = file_exists($str);
							sleep(1);
							$seccntr += 1;
						}
						if(!$myfile and $seccntr == $optimeout) {
							echo "Error = building multi section 1";
							return;
						}
						$str = null;
						$str = $sesId . "/" . "000000" . $app;
						unlink($str);
						$str = null;
						$str = $sesId . "/" . "000000" . $app . ".app";
						rename($str, $sesId . "/" . "000000" . $app);
						$str = "themething " . $multistage_theme . "stage2.mym " .  $app .  " 000000" . $app . ".ap";
						$homedir = getcwd();
						chdir($sesId);
						execInBackground($str);
						chdir($homedir);
						$str = null;
						$str = $sesId . "/000000" . $app . ".ap";
						$myfile = file_exists($str);
						while((!$myfile and filesize($myfile) == 0) and $seccntr < $optimeout) {
							$myfile = file_exists($str);
							sleep(1);
							$seccntr += 1;
						}
						if(!$myfile and $seccntr == $optimeout) {
							echo "Error = building multi section 2";
							return;
						}
						$str = null;
						$str = $sesId . "/" . "000000" . $app;
						unlink($str);
						$str = null;
						$str = $sesId . "/" . "000000" . $app . ".ap";
						rename($str, $sesId . "/" . "000000" . $app);
						$str = null;
						$str = "themething " . $spinselected . ".mym 000000" . $appfile . " ". $multistage_theme . "_" . $displayname . $spindisplay . ".csm";
						$homedir = getcwd();
						chdir($sesId);
						execInBackground($str);
						chdir($homedir);
						$str = null;
						$str = $sesId . "/" . $multistage_theme . "_" . $displayname . $spindisplay . ".csm";
						$myfile = file_exists($str);
						while((!$myfile and filesize($myfile) == 0) and $seccntr < $optimeout) {
							$myfile = file_exists($str);
							sleep(1);
							$seccntr += 1;
						}
						if(!$myfile and $seccntr == $optimeout) {
							echo "Error = building multi section 3";
							return;
						}
					}
					else {
						for($i = 0; $i < 6; $i++) {
							if($theme == $runfirstthemes[$i]) {
								$runfirst = true;
								break;
							}
						}
						if($runfirst) {
							$str = "themething " . $spinselected . " 000000" . $app . " 000000" . $app . ".app";
							$homedir = getcwd();
							chdir($sesId);
							execInBackground($str);
							chdir($homedir);
							$str = NULL;
							$str = $sesId . "/000000" . $app . ".app";
							$myfile = file_exists($str);
							while((!$myfile and filesize($myfile) == 0) and $seccntr < $optimeout) {
								$myfile = file_exists($str);
								sleep(1);
								$seccntr += 1;
							}
							if((($selected >= 20) && ($selected <= 27)) or ($selected <= 47) or ($selected <= 117)) // dark wii themes
								$themeNoext = substr($theme, 0, strlen($theme) - 5);
							else $themeNoext = substr($theme, 0, strlen($theme) - 4);
							$str = NULL;
							$str = "themething " . $theme . " 000000" . $app . ".app ". $themeNoext . $displayname . $spindisplay . ".csm";
							$homedir = getcwd();
							chdir($sesId);
							execInBackground($str);
							chdir($homedir);
							$str = NULL;
							$str = $sesId . "/" . $themeNoext . $displayname . $spindisplay . ".csm";
							$myfile = file_exists($str);
							while((!$myfile and filesize($myfile) == 0) and $seccntr < $optimeout) {
								$myfile = file_exists($str);
								sleep(1);
								$seccntr += 1;
							}
						}
						else {
							$str = "themething " . $theme . " 000000" . $app . " 000000" . $app . ".app";
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
							if((($selected >= 20) && ($selected <= 27)) or ($selected <= 47) or ($selected <= 117)) // dark wii themes
								$themeNoext = substr($theme, 0, strlen($theme) - 5);
							else $themeNoext = substr($theme, 0, strlen($theme) - 4);
							$str = NULL;
							$str = "themething " . $spinselected . " 000000" . $app . ".app ". $themeNoext . $displayname . $spindisplay . ".csm";
							$homedir = getcwd();
							chdir($sesId);
							execInBackground($str);
							chdir($homedir);
							$str = NULL;
							$str = $sesId . "/" . $themeNoext . $displayname . $spindisplay . ".csm";
							$myfile = file_exists($str);
							while((!$myfile and filesize($myfile) == 0) and $seccntr < $optimeout) {
								$myfile = file_exists($str);
								sleep(1);
								$seccntr += 1;
							}
						}
					}
					echo "http://wiithemer.org/wii/" . $sesId . "/" . $themeNoext . $displayname . $spindisplay . ".csm";
				}
			break;
			case "removesessionDir":  
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
			case "updatedownloadcount": 
				if(isset($_GET['downloadcount'])) $downloadcount = $_GET['downloadcount'];
				if(isset($_GET['themetoupdate'])) $themetoupdate = $_GET['themetoupdate'];
				//echo "theme = " . $themetoupdate . "<br>downloadcount = " . $downloadcount . "<br>\n";
				//$themetoupdatenospaces = str_replace(" ", "", $themetoupdate);
				$readCount = file_get_contents("wiithememanager/" . $themetoupdate . "/downloads.txt");
				//echo $readCount . "<br>\n";
				//echo $themetoupdatenospaces . "<br>\n";
				$count = $readCount + $downloadcount;
				
				file_put_contents("wiithememanager/" . $themetoupdate . "/downloads.txt", $count, LOCK_EX);
				echo $count;
			break;
			case "getdownloadcount":
				if(isset($_GET['themetocheck'])) $themetocheck = $_GET['themetocheck'];
				$readCount = file_get_contents("wiithememanager/" . $themetocheck . "/downloads.txt");
				echo $readCount;
			break;
			case "getthemefilesize":
				if(isset($_GET['themetocheck'])) $themetocheck = $_GET['themetocheck'];
				$readsize = file_get_contents("wiithememanager/" . $themetocheck . "/filesize.txt");
				echo $readsize;
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
			case 609: 
				$GLOBALS['app'] = "1f"; // U 4.3
				$GLOBALS['displayname'] = "vWii_U";
			break;
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
			case 610:
				$GLOBALS['app'] = "22";// E 4.3
				$GLOBALS['displayname'] = "vWii_E";
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
			case 608:
				$GLOBALS['app'] = "1c"; // J vwii
				$GLOBALS['displayname'] = "vWii_J";
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
				$GLOBALS['app'] = "6f";
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
	function checkfor2stagetheme($input_mym) {
		$str = strstr($input_mym, "stage1", true);
		if($str) {
			return $str;
		}
		else return false;
	}
	function add_mym_Extension($theme_Selected) {
		if((($theme_Selected >= 32) && $theme_Selected <= 39 ) || ($theme_Selected == 68) || ($theme_Selected == 178))
			return true;
		return false;
	}
?>