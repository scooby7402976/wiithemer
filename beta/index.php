<?php
	session_start();
	$sesId = session_id();
	$arr_cookie_options = array (
        'path' => '/',
        'domain' => '.wiithemer.org', // leading dot for compatibility or use subdomain
        'secure' => false,     // or false
        'httponly' => true,    // or false
        'samesite' => 'Strict' // None || Lax  || Strict
    );
	setcookie("sesId", $sesId, $arr_cookie_options);
	$action = null;
	$runfirstthemes = array("black_pirate.mym", "matrix.mym", "matrix_reloaded.mym", "muse.mym", "lime_wii.mym", "diablo_3.mym");
	if(isset($_POST["action"])) {
		$ret = null;
		$themecount = 207;
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
		$vwii_downloads_file = "res/vwii_downloads.txt";
		$comment = null;
		$buildcomment = null;
		$regionDLcnt = null;
		$allfilesdeleted = null;
		
		switch($action) {
			case "getthemecount": {
				echo $themecount;
			}break;
			case "getsessionId": {
				echo $sesId;
			}break;
			case "writecomment": {
				$name = $_POST["name"];
				$message = $_POST["message"];
				$file = fopen($commentsfile, "a+");
				if($file) {
					fwrite($file, $message);
					fwrite($file, " - ");
					fwrite($file, $name);
					fwrite($file, "\n");
					fclose($file);
					
					$file = fopen($commentsfile, "r");
					if($file) {
						while(!feof($file)) {
							$comment .= fgets($file);
						}
					}
					fclose($file);
					echo '<span title="Close Window" id="closecomments" class="closecomments" style="" onclick="closecomments()">&times;</span><pre><span id="commentstr style="overflow:scroll;">' . $comment . '</span></pre>';
				}
			}break;
			case "readcomment": {
				
				$file = fopen($commentsfile, "r");
				if($file) {
					while(!feof($file)) {
						$comment .= fgets($file);
					}
				}
				fclose($file);
				echo '<span title="Close Window" id="closecomments" class="closecomments" style="" onclick="closecomments()">&times;</span><pre><span id="commentstr style="overflow:scroll;">' . $comment . '</span></pre>';
			}break;
			case "increaseregionDLcnt": {
				$region = $_POST['region'];
				$count = 1;
				switch($region) {
					case 1: {
						$regionDLcnt = "res/regions/U.txt";
					}break;
					case 2: {
						$regionDLcnt = "res/regions/E.txt";
					}break;
					case 3: {
						$regionDLcnt = "res/regions/J.txt";
					}break;
					case 4: {
						$regionDLcnt = "res/regions/K.txt";
					}break;
				}
				if(file_exists($regionDLcnt)) 
					$readCount = file_get_contents($regionDLcnt);
				$count = $count + $readCount;
				file_put_contents($regionDLcnt, $count, LOCK_EX);
				echo $count;
			}break;
			case "get_region_downloads": 
				$region = $_POST['region'];
				switch($region) {
					case 1: {
						$regionDLcnt = "res/regions/U.txt";
					}break;
					case 2: {
						$regionDLcnt = "res/regions/E.txt";
					}break;
					case 3: {
						$regionDLcnt = "res/regions/J.txt";
					}break;
					case 4: {
						$regionDLcnt = "res/regions/K.txt";
					}break;
				}
				$readCount = file_get_contents($regionDLcnt);
				echo $readCount;
			break;
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
						
						if(add_mym_Extension($selectedtheme))
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
									if(file_exists($sesId . "/" . $themeNoext . "/" . $file)) {
										$x = unlink($sesId . "/" . $themeNoext . "/" . $file);
										if($x == 0) {
											$allfilesdeleted += 1;
										}
										usleep(1000);
									}
								}
								closedir($dh);
							}
							usleep(1000);
							rmdir($sesId . "/" . $themeNoext);
							usleep(1000);
						}
					}
				}
				if (is_dir($sesId)) {
					if ($dh = opendir($sesId)){
						while (($file = readdir($dh)) !== false){
							if($file == "." or $file == "..")
								continue;
							$x = unlink($sesId . "/" . $file);
							if($x == 0) {
								$allfilesdeleted += 1;
							}
							usleep(1000);
						}
						closedir($dh);
					}
					usleep(1000);
					rmdir($sesId);
					//echo "file removal complete";
				}
				if($allfilesdeleted) {
					sleep(2);
					if (is_dir($sesId)) {
						if ($dh = opendir($sesId)){
							while (($file = readdir($dh)) !== false){
								if($file == "." or $file == "..")
									continue;
								$x = unlink($sesId . "/" . $file);
								if($x == 0) {
									$allfilesdeleted += 1;
								}
								usleep(1000);
							}
							closedir($dh);
						}
						usleep(1000);
						rmdir($sesId);
						//echo "file removal complete";
					}				
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
						if(add_mym_Extension($selectedtheme)) 
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
						if(add_mym_Extension($selectedtheme)) 
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
							if(add_mym_Extension($selectedtheme))
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
					$themething_Output = null;
					$optimeout = 60;
					$spin = $_POST['spin'] . ".mym";
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
						$str = "themething s " . $GLOBALS['app'] . " " . $_POST['name'] . " " . $spin . " Wii_Themer";
						//echo $str ;
						//return;
						//execInBackground($str);
						exec($str, $themething_Output);
						//echo $themething_Output;
						//flush();
						chdir($homedir);
						$str = null;
						
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
							if(add_mym_Extension($selectedtheme))
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
						$str = "themething " . $_POST['theme'] . " " . $_POST['appfile'] . " 000000" . $_POST['appfile'] . ".app";
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
						$str = null;
						$str = $sesId . "/" . "000000" . $_POST['appfile'];
						unlink($str);
						$str = null;
						$str = $sesId . "/" . "000000" . $_POST['appfile'] . ".app";
						rename($str, $sesId . "/" . "000000" . $_POST['appfile']);
						$str = "themething " . $multistage_theme . "stage2.mym " .  $_POST['appfile'] .  " 000000" . $_POST['appfile'] . ".ap";
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
						$str = $sesId . "/" . "000000" . $_POST['appfile'];
						unlink($str);
						$str = null;
						$str = $sesId . "/" . "000000" . $_POST['appfile'] . ".ap";
						rename($str, $sesId . "/" . "000000" . $_POST['appfile']);
						$str = null;
						$str = "themething " . $_POST['spin'] . ".mym 000000" . $_POST['appfile'] . " ". $multistage_theme . "_" . $displayname . $spindisplay . ".csm";
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
								$runfirst = 1;
								break;
							}
							else
							$runfirst = 0;
						}
						if($runfirst) {
							$str = "themething " . $_POST['spin'] . ".mym " . $_POST['appfile'] . " 000000" . $_POST['appfile'] . ".app";
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
							$str = null;
							$str = $sesId . "/" . "000000" . $_POST['appfile'];
							unlink($str);
							$str = null;
							$str = $sesId . "/" . "000000" . $_POST['appfile'] . ".app";
							rename($str, $sesId . "/" . "000000" . $_POST['appfile']);
							if(add_mym_Extension($selectedtheme))  // dark wii themes full metal storm
							$themeNoext = substr($_POST['theme'], 0, strlen($theme) - 5);
							else $themeNoext = substr($_POST['theme'], 0, strlen($_POST['theme']) - 4);
							$str = null;
							$str = "themething " . $_POST['theme'] . " " . $_POST['appfile'] . " ". $themeNoext . "_" . $displayname . $spindisplay . ".csm";
							
							$homedir = getcwd();
							chdir($sesId);
							execInBackground($str);
							chdir($homedir);
							$str = null;
							$str = $sesId . "/" . $themeNoext . "_" . $displayname . $spindisplay . ".csm";
							$myfile = file_exists($str);
							while(!$myfile and filesize($myfile) == 0) {
								$myfile = file_exists($str);
							}
						}
						else {
							$str = "themething " . $_POST['theme'] . " " . $_POST['appfile'] . " 000000" . $_POST['appfile'] . ".app";
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
							$str = null;
							$str = $sesId . "/" . "000000" . $_POST['appfile'];
							unlink($str);
							$str = null;
							$str = $sesId . "/" . "000000" . $_POST['appfile'] . ".app";
							rename($str, $sesId . "/" . "000000" . $_POST['appfile']);
							if(add_mym_Extension($selectedtheme))// dark wii themes
							$themeNoext = substr($_POST['theme'], 0, strlen($theme) - 5);
							else $themeNoext = substr($_POST['theme'], 0, strlen($_POST['theme']) - 4);
							$str = null;
							
							$str = "themething " . $_POST['spin'] . ".mym 000000" . $_POST['appfile'] . " " . $themeNoext . "_" .$displayname . $spindisplay . ".csm";
							//echo "str = " . $str; return;
							$homedir = getcwd();
							chdir($sesId);
							execInBackground($str);
							chdir($homedir);
							$str = null;
	
							$str = $sesId . "/" . $themeNoext . "_" .$displayname . $spindisplay . ".csm";
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
							$str = $sesId . "/" . $multistage_theme . "_" . $displayname . $spindisplay . ".csm";
							copy($str, $sesId . "/" . $multistage_theme . "/" . $multistage_theme . "_" .  $displayname . $spindisplay . ".csm");
							#$makezipstr = "7z.exe a " . $themeNoext . ".zip -tzip c:/apache24/server/wiithemer/" . $sesId . "/" . $themeNoext . "/"; // non beta only
							$makezipstr = "7z.exe a " . $multistage_theme . ".zip -tzip c:/apache24/server/wiithemer/beta/" . $sesId . "/" . $multistage_theme . "/"; // beta only
						}
						else {
							$str = $sesId . "/" . $themeNoext . "_" . $displayname . $spindisplay . ".csm";
							copy($str, $sesId . "/" . $themeNoext . "/" . $themeNoext . "_" .  $displayname . $spindisplay . ".csm");
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
							echo "$sesId/$multistage_theme/_$displayname$spindisplay";
						}
						else echo "$sesId/$themeNoext/_$displayname$spindisplay";
					} 
				}
			}break;
			case "write_Titles": {
				//echo $_POST['title_str'];
				$x = 0;
				$file = fopen("theme_titles.txt", "a+");
				$array = explode(chr(10), $_POST['title_str']);
				while($array[$x] != null) {
					echo $array[$x] . "\n"; 
					if($file) {
						fwrite($file, $array[$x]);
						fwrite($file, "\n");
					}
					$x++;
				}
				fclose($file);
			}break;
			case "get_vwii_downloads": {
				$vwii_downloads = file_get_contents($vwii_downloads_file);
				echo $vwii_downloads;
			}break;
			case "increase_vwii_downloads": {
				$count = $_POST['count'];
				if(file_exists($vwii_downloads_file)) 
					$readCount = file_get_contents($vwii_downloads_file);
				$count = $count + $readCount;
				file_put_contents($vwii_downloads_file, $count, LOCK_EX);
				echo $count;
			}break;
			case "increase_vwii_region_downloads": {
				$region = $_POST['region'];
				$count = 1;
				switch($region) {
					case 1: {
						$regionDLcnt = "res/regions/vwii_U.txt";
					}break;
					case 2: {
						$regionDLcnt = "res/regions/vwii_E.txt";
					}break;
					case 3: {
						$regionDLcnt = "res/regions/vwii_J.txt";
					}break;
				}
				if(file_exists($regionDLcnt)) 
					$readCount = file_get_contents($regionDLcnt);
				$count = $count + $readCount;
				file_put_contents($regionDLcnt, $count, LOCK_EX);
				echo $count;
			}break;
			case "get_vwii_region_downloads": {
				$region = $_POST['region'];
				switch($region) {
					case 1: {
						$regionDLcnt = "res/regions/vwii_U.txt";
					}break;
					case 2: {
						$regionDLcnt = "res/regions/vwii_E.txt";
					}break;
					case 3: {
						$regionDLcnt = "res/regions/vwii_J.txt";
					}break;
				}
				$readCount = file_get_contents($regionDLcnt);
				echo $readCount;
			}break;
		}
		return;
	}
	function execInBackground($cmd) {
		if (substr(php_uname(), 0, 7) == "Windows"){
			pclose(popen($cmd, "r"));
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
	if((($theme_Selected >= 28) && $theme_Selected <= 35 ) || ($theme_Selected == 63) || ($theme_Selected == 157))
		return true;
	return false;
}
?>