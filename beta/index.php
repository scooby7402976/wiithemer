<?php
	session_start();
	$sesId = session_id();
	$action = null;
	$arr_cookie_options = array (
        'path' => '/',
        'domain' => '.wiithemer.org', // leading dot for compatibility or use subdomain
        'secure' => false,     // or false
        'httponly' => true,    // or false
        'samesite' => 'Strict' // None || Lax  || Strict
    );
	setcookie("sesId", $sesId, $arr_cookie_options);
	$runfirstthemes = array("black_pirate.mym", "matrix.mym", "matrix_reloaded.mym", "muse.mym");
	if(isset($_POST["action"])) {
		$ret = null;
		$themecount = 93;
		$pageloadsfile = "res/pageloadcount.txt";
		$mymenuifymoddownloadsfile = "res/mymenuifymoddownloads.txt";
		$wiithemerdownloadsfile = "res/wiithemerdownloads.txt";
		$readCount = null;
		$downloadcountfile = "res/downloadcount.txt";
		$action = $_POST["action"];
		$tooldir = "tools";
		$list = null;
		$pos = null;
		$theme = null;
		$version = null;
		$themedir = "mym/";
		$app = null;
		$str = null;
		$themeNoext = null;
		$displayname = null;
		$spinmym = null;
		$spindisplay = null;
		$runfirst = null;
		$downloadfile = null;
		$multistage_theme = null;
		$commentsfile = "res/comments.txt";

		switch($action) {
			case "getthemecount": {
				echo $themecount;
			}break;
			case "getsessionId": {
				echo $sesId;
			}break;
			case "writecomment": {
				$name = $_POST["name"] . "\n";
				$message = $_POST["message"] . "\n";
				$file = fopen($commentsfile, "a+");
				if($file) {
					fwrite($file, $name);
					fwrite($file, $message);
					fclose($file);
					
					$file = fopen($commentsfile, "a+");
					if($file) {
						$comment = fread($file, filesize($commentsfile));
					}
					fclose($file);
				}
				echo $comment;
			}break;
			case "readcomment": {
				$file = fopen($commentsfile, "a+");
				if($file) {
					$comment = fread($file, filesize($commentsfile));
				}
				fclose($file);
				echo $comment;
			}break;
			case "increasepageloadscount": {
				$count = $_POST['count'];
				if(file_exists($pageloadsfile)) 
					$readCount = file_get_contents($pageloadsfile);
				$count = $count + $readCount;
				file_put_contents($pageloadsfile, $count, LOCK_EX);
				echo $count;
			}break;
			case "getpageloadscount": {
				$count = file_get_contents($pageloadsfile);
				echo $count;
			}break;
			case "updatesinglethemeDLcnt":{
				$downloadfile = $_POST['downloadfile'];
				$count = $_POST['count'];
				if(file_exists("res/indthemecnt/" . $downloadfile)) 
					$readCount = file_get_contents("res/indthemecnt/" . $downloadfile);
				$count = $count + $readCount;
				file_put_contents("res/indthemecnt/" . $downloadfile, $count, LOCK_EX);
				echo $count;
			}break;
			case "getsinglethemeDLcnt": {
				$downloadfile = $_POST['downloadfile'];
				$count = file_get_contents("res/indthemecnt/" . $downloadfile);
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
			case "increasemymenuifymoddownloads": {
				$count = $_POST['count'];
				if(file_exists($mymenuifymoddownloadsfile)) 
					$readCount = file_get_contents($mymenuifymoddownloadsfile);
				$count = $count + $readCount;
				file_put_contents($mymenuifymoddownloadsfile, $count, LOCK_EX);
				echo $count;
			}break;
			case "getmymenuifymoddownloads": {
				$count = file_get_contents($mymenuifymoddownloadsfile);
				echo $count;
			}break;
			case "increasewiithemerdownloads": {
				$count = $_POST['count'];
				if(file_exists($wiithemerdownloadsfile)) 
					$readCount = file_get_contents($wiithemerdownloadsfile);
				$count = $count + $readCount;
				file_put_contents($wiithemerdownloadsfile, $count, LOCK_EX);
				echo $count;
			}break;
			case "getwiithemerdownloads": {
				$count = file_get_contents($wiithemerdownloadsfile);
				echo $count;
			}break;
			case "removesessionfolder": {
				if(isset($_POST['selectedtheme'])) $selectedtheme = $_POST['selectedtheme'];
				if(isset($_POST["savesrc"])) {
					if($_POST['savesrc'] == "true") {
						$multistage_theme = checkfor2stagetheme($_POST['theme']);
						if(($selectedtheme >= 17) && ($selectedtheme <= 24) or $selectedtheme == 39)
						$themeNoext = substr($_POST['theme'], 0, strlen($_POST['theme']) - 5);
						else {
							if($multistage_theme)
								$themeNoext = $multistage_theme;
							else
							$themeNoext = substr($_POST['theme'], 0, strlen($_POST['theme']) - 4);
						}
						if (is_dir($sesId . "/" . $themeNoext)) {
							if ($dh = opendir($sesId . "/" . $themeNoext)){
								while (($file = readdir($dh)) !== false){
									if($file == "." or $file == "..")
										continue;
									$x = unlink($sesId . "/" . $themeNoext . "/" . $file);
								}
								closedir($dh);
							}
							usleep(1000);
							rmdir($sesId . "/" . $themeNoext);
						}
					}
				}
				if (is_dir($sesId)) {
					if ($dh = opendir($sesId)){
						while (($file = readdir($dh)) !== false){
							if($file == "." or $file == "..")
								continue;
							$x = unlink($sesId . "/" . $file);
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
					if(isset($_POST['selectedtheme'])) $selectedtheme = $_POST['selectedtheme'];
					$multistage_theme = checkfor2stagetheme($_POST['theme']);
					//echo $_POST['theme'] . "<br>" . $selectedtheme;
					//if(($selectedtheme >= 14) && ($selectedtheme <= 21)) 
					$theme = "mym/" . $_POST['theme'];
					$themenodir = $_POST['theme'];
					$copytheme = copy($theme, $sesId . "/" . $themenodir);
					if($copytheme)
						echo "Copy Theme OK ";
					else
						echo "Copy Theme ERROR ";
					if($_POST['savesrc'] == "true") {
						if(($selectedtheme >= 17) && ($selectedtheme <= 24) or $selectedtheme == 39) 
						$str2 = $sesId . "/" . substr($_POST['theme'], 0, strlen($_POST['theme']) - 5);
						else {
							if($multistage_theme)
								$str2 = $sesId . "/" . $multistage_theme;
							else $str2 = $sesId . "/" . substr($_POST['theme'], 0, strlen($_POST['theme']) - 4);
						}
						$copycomplete = copy($theme, $str2 . "/" . $themenodir);
					}
					
					
					
					if($_POST['spin'] == "fastspin") {
						$spinmym = "mym/spins/fastspin.mym";
					}
					else if($_POST['spin'] == "spin") {
						$spinmym = "mym/spins/spin.mym";
					}
					else if($_POST['spin'] == "nospin") {
						$spinmym = "mym/spins/nospin.mym";
					}
					$copyspin = copy($spinmym, $sesId . "/" . $_POST['spin'] . ".mym");
					if($copyspin)
						echo "Copy Spin OK";
					else
						echo "Copy Spin ERROR";
					if($multistage_theme) {
						$theme = "mym/" . $multistage_theme . "stage2.mym";
						$themenodir = $multistage_theme . "stage2.mym";
						$copytheme = copy($theme, $sesId . "/" . $themenodir);	
					}
					if($_POST['savesrc'] == "true") {
						if(($selectedtheme >= 17) && ($selectedtheme <= 24) or $selectedtheme == 39) 
						$str2 = $sesId . "/" . substr($_POST['theme'], 0, strlen($_POST['theme']) - 5);
						else {
							if($multistage_theme)
								$str2 = $sesId . "/" . $multistage_theme;
							else
							$str2 = $sesId . "/" . substr($_POST['theme'], 0, strlen($_POST['theme']) - 4);
						}
						$copycomplete = copy($spinmym, $str2 ."/".$_POST['spin'] . ".mym");
						//echo $str2 . "\n";
						if($multistage_theme) {
							$str2 = $sesId . "/" . $multistage_theme;
							$theme = "mym/" . $multistage_theme . "stage2.mym";
							$themenodir = $multistage_theme . "stage2.mym";
							$copycomplete = copy($theme, $str2 . "/" . $themenodir);
						}
					}
				}
			}break;
			case "makesesdir": {
				if(!empty($sesId)) {
					$multistage_theme = checkfor2stagetheme($_POST['name']);
					if(isset($_POST['selectedtheme'])) $selectedtheme = $_POST['selectedtheme'];
					if (!is_dir($sesId)) {
						mkdir($sesId);
						if($_POST['savesrc'] == "true") {
							if(($selectedtheme >= 17) && ($selectedtheme <= 24) or $selectedtheme == 39)
							$str = $sesId . "/" . substr($_POST['name'], 0, strlen($_POST['name']) - 5);
							else {
								if($multistage_theme) {
									$str = $sesId . "/" . $multistage_theme;
								}
								else $str = $sesId . "/" . substr($_POST['name'], 0, strlen($_POST['name']) - 4);
							}
							mkdir($str);
							//echo $str . "<br>";
						}
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
					
					echo " Complete .<br>";
				}
			}break;
			case "appfile": {
				if(isset($_POST['version'])) {
					$seccntr = NULL;
					$optimeout = 60;
					$multistage_theme = checkfor2stagetheme($_POST['name']); 
					if(isset($_POST['selectedtheme'])) $selectedtheme = $_POST['selectedtheme'];
					$version = $_POST['version'];
					getappndisplayname($version);
					$str = $sesId . "/000000" . $GLOBALS['app'];
					//echo $str;
					
					$myfile = file_exists($str);
					//echo $myfile;
					//return;
					if(!$myfile) {
						$homedir = getcwd();
						chdir($sesId);
						$str = "themewii " . $GLOBALS['app'] . " wiithemer_______Scooby74029";
						
						execInBackground($str);
						chdir($homedir);
						$str = null;
						//echo $str ;
						//return;
						$str = $sesId . "/000000" . $GLOBALS['app'];
						$myfile = file_exists($str);
						while((!$myfile and filesize($myfile) == 0) and ($seccntr < $optimeout)) {
							$myfile = file_exists($str);
							sleep(1);
							$seccntr += 1;
						}
						if(!$myfile and ($seccntr == $optimeout)) {
							echo "Error = downloadapp";
							return;
						}
						
						echo $GLOBALS['app'];
						if($_POST['savesrc'] == "true") {
							if(($selectedtheme >= 17) && ($selectedtheme <= 24) or $selectedtheme == 39)
							$str2 = $sesId . "/" . substr($_POST['name'], 0, strlen($_POST['name']) - 5);
							else {
								if($multistage_theme)
									$str2 = $sesId . "/" . $multistage_theme;
								else
								$str2 = $sesId . "/" . substr($_POST['name'], 0, strlen($_POST['name']) - 4);
							}
							copy($str, $str2 . "/000000" . $GLOBALS['app'] . ".app");
						}
					}
					clearstatcache();
				}
			}break;
			case "buildtheme": {
				if(isset($_POST['theme'])) {
					$seccntr = NULL;
					$optimeout = 60;
					$version = $_POST['version'];
					getappndisplayname($version);
					
					if($_POST['spin'] == "fastspin") {
						$spinmym = "mym/spins/fastspin.mym";
						$spindisplay = "_fastspin";
					}
					else if($_POST['spin'] == "spin") {
						$spinmym = "mym/spins/spin.mym";
						$spindisplay = "_spin";
					}
					else if($_POST['spin'] == "nospin") {
						$spinmym = "mym/spins/nospin.mym";
						$spindisplay = "_nospin";
					}
					$theme = $_POST['theme'];
					if(isset($_POST['selectedtheme'])) $selectedtheme = $_POST['selectedtheme'];
					$multistage_theme = checkfor2stagetheme($theme);
					if($multistage_theme){
						//echo "Found multistage theme .\n";
						$str = "themewii " . $_POST['theme'] . " " . $_POST['appfile'] . " 000000" . $_POST['appfile'] . ".app wiithemer_______Scooby74029";
						//echo "str = " . $str; return;
						$homedir = getcwd();
						chdir($sesId);
						execInBackground($str);
						chdir($homedir);
						$str = null;
						$str = $sesId . "/000000" . $_POST['appfile'] . ".app";
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
						$str = "themewii " . $multistage_theme . "stage2.mym " .  $_POST['appfile'] . ".app" .  " 000000" . $_POST['appfile'] . ".ap wiithemer_______Scooby74029";
						$homedir = getcwd();
						chdir($sesId);
						execInBackground($str);
						chdir($homedir);
						$str = null;
						$str = $sesId . "/000000" . $_POST['appfile'] . ".ap";
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
						$str = "themewii " . $_POST['spin'] . ".mym " . $_POST['appfile'] . ".ap ". $multistage_theme . $displayname . $spindisplay . ".csm wiithemer_______Scooby74029";
						$homedir = getcwd();
						chdir($sesId);
						execInBackground($str);
						chdir($homedir);
						$str = null;
						$str = $sesId . "/" . $multistage_theme . $displayname . $spindisplay . ".csm";
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
						for($i = 0; $i < 4; $i++) {
							if($theme == $runfirstthemes[$i]) {
								$runfirst = 1;
								break;
							}
							else
							$runfirst = 0;
						}
						if($runfirst) {
							$str = "themewii " . $_POST['spin'] . ".mym " . $_POST['appfile'] . " 000000" . $_POST['appfile'] . ".app wiithemer_______Scooby74029";
							//echo  "$runfirst/$runfirst/$str";
							//return;
							$homedir = getcwd();
							chdir($sesId);
							execInBackground($str);
							chdir($homedir);
							$str = null;
							$str = $sesId . "/000000" . $_POST['appfile'] . ".app";
							$myfile = file_exists($str);
							while(!$myfile and filesize($myfile) == 0) {
								$myfile = file_exists($str);
							}
							if(($selectedtheme >= 17) && ($selectedtheme <= 24) || ($selectedtheme == 39))  // dark wii themes full metal storm
							$themeNoext = substr($_POST['theme'], 0, strlen($theme) - 5);
							else $themeNoext = substr($_POST['theme'], 0, strlen($_POST['theme']) - 4);
							$str = null;
							if($multistage_theme){
								#echo "Found multistage theme .";
							}
							else {
								$str = "themewii " . $_POST['theme'] . " " . $_POST['appfile'] . ".app ". $themeNoext . $displayname . $spindisplay . ".csm wiithemer_______Scooby74029";
							}
							$homedir = getcwd();
							chdir($sesId);
							execInBackground($str);
							chdir($homedir);
							$str = null;
							$str = $sesId . "/" . $themeNoext . $displayname . $spindisplay . ".csm";
							$myfile = file_exists($str);
							while(!$myfile and filesize($myfile) == 0) {
								$myfile = file_exists($str);
							}
						}
						else {
							$str = "themewii " . $_POST['theme'] . " " . $_POST['appfile'] . " 000000" . $_POST['appfile'] . ".app wiithemer_______Scooby74029";
							//echo "str = " . $str; return;
							$homedir = getcwd();
							chdir($sesId);
							execInBackground($str);
							chdir($homedir);
							$str = null;
							$str = $sesId . "/000000" . $_POST['appfile'] . ".app";
							$myfile = file_exists($str);
							while((!$myfile and filesize($myfile) == 0) and $seccntr < $optimeout) {
								$myfile = file_exists($str);
								sleep(1);
								$seccntr += 1;
							}
							if(!$myfile and $seccntr == $optimeout) {
								echo "Error = building section 1";
								return;
							}
							if(($selectedtheme >= 17) && ($selectedtheme <= 24) || ($selectedtheme == 39))  // dark wii themes
							$themeNoext = substr($_POST['theme'], 0, strlen($theme) - 5);
							else $themeNoext = substr($_POST['theme'], 0, strlen($_POST['theme']) - 4);
							$str = null;
							
							$str = "themewii " . $_POST['spin'] . ".mym " . $_POST['appfile'] . ".app ". $themeNoext . $displayname . $spindisplay . ".csm wiithemer_______Scooby74029";
							//echo "str = " . $str; return;
							$homedir = getcwd();
							chdir($sesId);
							execInBackground($str);
							chdir($homedir);
							$str = null;
	
							$str = $sesId . "/" . $themeNoext . $displayname . $spindisplay . ".csm";
							$myfile = file_exists($str);
							while((!$myfile and filesize($myfile) == 0) and $seccntr < $optimeout) {
								$myfile = file_exists($str);
								sleep(1);
								$seccntr += 1;
							}
							if(!$myfile and $seccntr == $optimeout) {
								echo "Error = building section 2";
								return;
							}
						}
					}
					if($_POST['savesrc'] == "true") {
						if($multistage_theme) {
							$str = $sesId . "/" . $multistage_theme . $displayname . $spindisplay . ".csm";
							copy($str, $sesId . "/" . $multistage_theme . "/" . $multistage_theme . $displayname . $spindisplay . ".csm");
							#$makezipstr = "7z.exe a " . $themeNoext . ".zip -tzip c:/apache24/server/wiithemer/" . $sesId . "/" . $themeNoext . "/"; // non beta only
							$makezipstr = "7z.exe a " . $multistage_theme . ".zip -tzip c:/apache24/server/wiithemer/beta/" . $sesId . "/" . $multistage_theme . "/"; // beta only
						}
						else {
							$str = $sesId . "/" . $themeNoext . $displayname . $spindisplay . ".csm";
							copy($str, $sesId . "/" . $themeNoext . "/" . $themeNoext . $displayname . $spindisplay . ".csm");
							#$makezipstr = "7z.exe a " . $themeNoext . ".zip -tzip c:/apache24/server/wiithemer/" . $sesId . "/" . $themeNoext . "/"; // non beta only
							$makezipstr = "7z.exe a " . $themeNoext . ".zip -tzip c:/apache24/server/wiithemer/beta/" . $sesId . "/" . $themeNoext . "/"; // beta only
						}
						$homedir = getcwd();
						chdir($sesId);
						execInBackground($makezipstr);
						chdir($homedir);
						if($multistage_theme) echo $sesId . "/" . $multistage_theme . ".zip";
						else echo $sesId . "/" . $themeNoext . ".zip";
					}
					else{
						if($multistage_theme){
							echo "$sesId/$multistage_theme/$displayname$spindisplay";
						}
						else echo "$sesId/$themeNoext/$displayname$spindisplay";
					} 
				}
			}break;
		}
		return;
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
	function checkfor2stagetheme($input_mym) {
		$str = strstr($input_mym, "stage1", true);
		if($str) {
			return $str;
		}
		else return false;
	}