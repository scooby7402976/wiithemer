<?php
	session_start();
	$sesId = session_id();
	$action = null;
	$arr_cookie_options = array (
        'path' => '/',
        'domain' => '.bartlesvilleok-am.com', // leading dot for compatibility or use subdomain
        'secure' => false,     // or false
        'httponly' => true,    // or false
        'samesite' => 'Strict' // None || Lax  || Strict
    );
	setcookie("sesId", $sesId, $arr_cookie_options);
	
	if(isset($_POST["action"])) {
		$ret = null;
		$themecount = getthemecount();
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
		
		switch($action) {
			case "getthemecount": {
				echo $themecount;
			}break;
			case "getthemelist": {
				$list = file_get_contents("res/themelist.txt");
				echo $list;
			}break;
			case "getsessionId": {
				echo $sesId;
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
				if($_POST['savesrc'] == "true") {
					$themeNoext = substr($_POST['theme'], 0, strlen($_POST['theme']) - 4);
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
				if (is_dir($sesId)){
					if ($dh = opendir($sesId)){
						while (($file = readdir($dh)) !== false){
							if($file == "." or $file == "..")
								continue;
							$x = unlink($sesId . "/" . $file);
						}
						closedir($dh);
					}
					usleep(1000);
					rmdir($sesId);
					//echo "file removal complete";
				}
			}break;
			case "getthemevideo": {
				$list = file_get_contents("res/videolist.txt");
				echo $list;
			}break;
			case "copythemetosessiondirectory": {
				if(isset($_POST['theme'])) {
					$theme = "mym/" . $_POST['theme'];
					$theme = str_replace(" ", "_", $theme);
					$themenospaces = str_replace(" ", "_", $_POST['theme']);
					$copycomplete = copy($theme, $sesId . "/" . $themenospaces);
					if($_POST['spin'] == "fastspin") {
						$spinmym = "mym/spins/fastspin.mym";
					}
					else if($_POST['spin'] == "spin") {
						$spinmym = "mym/spins/spin.mym";
					}
					else if($_POST['spin'] == "nospin") {
						$spinmym = "mym/spins/nospin.mym";
					}
					if($_POST['savesrc'] == "true") {
						$str2 = $sesId . "/" . substr($_POST['theme'], 0, strlen($_POST['theme']) - 4);
						$copycomplete = copy($theme, $str2 . "/" . $themenospaces);
						$copycomplete = copy($spinmym, $str2 ."/".$_POST['spin'] . ".mym");
						//echo $str2 . "\n";
					}
					if($copycomplete)
						echo "Copy OK";
					else
						echo "Copy ERROR";
				}
			}break;
			case "makesesdir": {
				if(!empty($sesId)) {
					if (!is_dir($sesId)) {
						mkdir($sesId);
						if($_POST['savesrc'] == "true") {
							$str = $sesId . "/" . substr($_POST['name'], 0, strlen($_POST['name']) - 4);
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
					$version = $_POST['version'];
					getappndisplayname($version);
					$str = $sesId . "/000000" . $GLOBALS['app'];
					//echo $str;
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
						echo $GLOBALS['app'];
						if($_POST['savesrc'] == "true") {
							$str2 = $sesId . "/" . substr($_POST['name'], 0, strlen($_POST['name']) - 4);
							copy($str, $str2 . "/000000" . $GLOBALS['app']);
						}
					}
				}
			}break;
			case "buildtheme": {
				if(isset($_POST['theme'])) {
					$version = $_POST['version'];
					getappndisplayname($version);
					$theme = $sesId . "/" .  $themedir . $_POST['theme'];
					if(substr($_POST['theme'], strlen($_POST['theme']) - 3, 3) == "mym")
						$themeNoext = substr($_POST['theme'], 0, strlen($_POST['theme']) - 4);
					$str = "themewii " . $_POST['theme'] . " " . "000000" . $_POST['appfile'] . " 000000" . $_POST['appfile'] . ".app";
					
					$homedir = getcwd();
					chdir($sesId);
					execInBackground($str);
					chdir($homedir);
					$str = $sesId . "/000000" . $_POST['appfile'] . ".app";
					
					$myfile = file_exists($str);
					while(!$myfile and filesize($myfile) == 0) {
						$myfile = file_exists($str);
					}
					
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
					$copycomplete = copy($spinmym, $sesId . "/" . $_POST['spin'] . ".mym");
					
					//return;
					$str = "themewii.exe " . $_POST['spin'] . ".mym 000000" . $_POST['appfile'] . ".app ". $themeNoext . $displayname . $spindisplay . ".csm";
					//echo $str . "/" . $str;
					$homedir = getcwd();
					chdir($sesId);
					execInBackground($str);
					chdir($homedir);
					$str = $sesId . "/" . $themeNoext . $displayname . $spindisplay . ".csm";
					
					$myfile = file_exists($str);
					while(!$myfile and filesize($myfile) == 0) {
						$myfile = file_exists($str);
					}
					if($_POST['savesrc'] == "true") {
						$str = $sesId . "/" . $themeNoext . $displayname . $spindisplay . ".csm";
						copy($str, $sesId . "/" . $themeNoext . "/" . $themeNoext . $displayname . $spindisplay . ".csm");
						$makezipstr = "7z.exe a " . $themeNoext . ".zip -tzip c:/apache24/server/wiithemer/" . $sesId . "/" . $themeNoext . "/";
						$homedir = getcwd();
						chdir($sesId);
						execInBackground($makezipstr);
						chdir($homedir);
						echo $sesId. "/" . $themeNoext . ".zip";
					}
					else echo "$sesId/$themeNoext/$displayname$spindisplay";
				}
			}break;
		}
		return;
	}
	function getthemecount() {
		$list = file( "res/themelist.txt", FILE_IGNORE_NEW_LINES);
		return count($list);
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