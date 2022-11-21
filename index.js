var heightofscreen = null;
var widthofscreen = null;
var themeposition = 0;
var downloadtimer = "";
var remove = "";
var updatedlcount = "";
const appfiles43 = ["", "00000097", "000000", "000000", "000000"];
const Region = ["", "USA", "PAL", "JAP", "KOR"];
const regionAbbr = ["", "U", "E", "J", "K" ];
const version = ["", "4.3", "4.2", "4.1", "4.0"];
const themeVideo = ['https://www.youtube.com/embed/_O_pPfQe5Do?autoplay=1&mute=1','https://www.youtube.com/embed/Nm_I4p-a4qo?autoplay=1&mute=1', 'https://www.youtube.com/embed/6o4L6axGsgU?autoplay=1&mute=1', 'https://www.youtube.com/embed/425H8lC96es?autoplay=1&mute=1', 'https://www.youtube.com/embed/X38-YkQwEL4?autoplay=1&mute=1', 'https://www.youtube.com/embed/ckcWI1rsRqk?autoplay=1&mute=1', 'https://www.youtube.com/embed/oSMkswfXe_w?autoplay=1&mute=1', 'https://www.youtube.com/embed/Rn0CnTo5kRI?autoplay=1&mute=1', 'https://www.youtube.com/embed/g66UasiFEhg?autoplay=1&mute=1', 'https://www.youtube.com/embed/EZ1jtn58laM?autoplay=1&mute=1', 'https://www.youtube.com/embed/UKVbnIgZK5I?autoplay=1&mute=1', 'https://www.youtube.com/embed/9odLhr49Wak?autoplay=1&mute=1', 'https://www.youtube.com/embed/wrwDwTXkPUQ?autoplay=1&mute=1', 'https://www.youtube.com/embed/R9sX3SzzzKA?autoplay=1&mute=1', 'https://www.youtube.com/embed/bgmwbNsbT04?autoplay=1&mute=1', 'https://www.youtube.com/embed/yZsh5Eiys04?autoplay=1&mute=1', 'https://www.youtube.com/embed/_L1V84YnIi4?autoplay=1&mute=1', 'https://www.youtube.com/embed/kIQWI1lfvN8?autoplay=1&mute=1', 'https://www.youtube.com/embed/c69ct5P0P_o?autoplay=1&mute=1', 'https://www.youtube.com/embed/jaQh1RfxXI0?autoplay=1&mute=1', 'https://www.youtube.com/embed/g-PrcM-Qr80?autoplay=1&mute=1', 'https://www.youtube.com/embed/mbT0hzSG2AU?autoplay=1&mute=1', 'https://www.youtube.com/embed/X2qGmB8Bc9k?autoplay=1&mute=1', 'https://www.youtube.com/embed/mIn8GGGGZ8k?autoplay=1&mute=1', 'https://www.youtube.com/embed/vE0OAUJQ9DY?autoplay=1&mute=1', 'https://www.youtube.com/embed/X0LAu5pYY8w?autoplay=1&mute=1', 'https://www.youtube.com/embed/mJ5oMzBG1ZU?autoplay=1&mute=1', 'https://www.youtube.com/embed/7aFjlUc8qlo?autoplay=1&mute=1', 'https://www.youtube.com/embed/G_z6DopJRRo?autoplay=1&mute=1', 'https://www.youtube.com/embed/HojBuUxihp0?autoplay=1&mute=1', 'https://www.youtube.com/embed/yOXIGrcxR8A?autoplay=1&mute=1', 'https://www.youtube.com/embed/Akl4tZ9eJio?autoplay=1&mute=1', 'https://www.youtube.com/embed/FBqAhYI2eb0?autoplay=1&mute=1', 'https://www.youtube.com/embed/VB-v2TYAO0g?autoplay=1&mute=1', 'https://www.youtube.com/embed/h0OdHk8D0aQ?autoplay=1&mute=1', 'https://www.youtube.com/embed/6cF81fjLRO4?autoplay=1&mute=1', 'https://www.youtube.com/embed/-H16kD1wlKc?autoplay=1&mute=1', 'https://www.youtube.com/embed/9h0TWXmV80E?autoplay=1&mute=1','https://www.youtube.com/embed/CpMXYTumKEE?autoplay=1&mute=1', 'https://www.youtube.com/embed/S60LeJR6a54?autoplay=1&mute=1', 'https://www.youtube.com/embed/1NptoYk4ljA?autoplay=1&mute=1'];

function mainMenu(menuType) {
	$("#returnpreview").fadeOut("slow", function(){
			let navisVis = document.getElementById("nav").style.visibility;
			if(navisVis == "")
				$(".navinner").slideDown("slow");
		});
	if(menuType == 1) {
		let themecontainerisVis = document.getElementById("themepreviewcontainer").style.visibility;
		if(themecontainerisVis == "")
			$("#themepreviewcontainer").fadeOut("slow", function(){
				$(".arrows").hide();
			});
		let headerisVis = document.getElementById("pageHeader").style.visibility;
		if(headerisVis == "")
			$("#pageHeader").fadeIn("slow", function(){
				$("#infocontainer").fadeOut("slow", function(){
					$("#infocontainer").html("<h1 class='text-blue'>Wii System Menu Themes</h1><hr></hr><p>This site will help you build a Theme(.csm file) to install on the Nintendo Wii .</p><br></br><p class='text-center'><span class='text-red warninglight'><b><i><em>WARNING :</b></i></em></span> This file can <b><em>brick</em></b> your wii !!<br><br>Proceed at your <b><em>Own</em></b> risk !!</p>");
					$("#infocontainer").css("height", "35%");
					$("#infocontainer").fadeIn("slow");
				});
			});
		themeposition = 0;
	}
	else if (menuType == 2 || menuType == 3) {
		$("#returnabout").fadeOut("slow", function(){
			let navisVis = document.getElementById("nav").style.visibility;
			if(navisVis == "")
				$(".navinner").slideDown("slow");
		});
		$("#infocontainer").slideUp("slow", function(){
			$("#infocontainer").css("height", "350px");
			$("#infocontainer").html("<h1 class='text-blue'>Wii System Menu Themes</h1><hr></hr><p>This site will help you build a Theme(.csm file) to install on the Nintendo Wii .</p><br></br><p class='text-center'><span class='text-red warninglight'><b><i><em>WARNING :</b></i></em></span> This file can <b><em>brick</em></b> your wii !!<br><br>Proceed at your <b><em>Own</em></b> risk !!</p>");
			$("#infocontainer").css("height", "35%");
			$("#infocontainer").fadeIn("slow");
			//$("#themedlcounttext").fadeOut("slow");
			$("#statsbutton").fadeOut("slow");
		});
		
	}
	else if(menuType == 4) {
		$("#return").fadeOut("slow", function(){
			let navisVis = document.getElementById("nav").style.visibility;
			if(navisVis == "")
				$(".navinner").slideDown("slow");
		});
		let buildingcontainerisVis = document.getElementById("buildingcontainer").style.visibility;
		if(buildingcontainerisVis == "")
			$("#buildingcontainer").fadeOut("slow", function(){
				$("#downloadtext").hide();
				$("#appfilelabel").hide();
				$("#appfile").hide();
				$("#preview1").hide();
				$("#continue").hide();
				$("#themedlcounttext").fadeOut("slow");
				$("#infocontainer").fadeOut("slow", function(){
					$("#infocontainer").html("<h1 class='text-blue'>Wii System Menu Themes</h1><hr></hr><p>This site will help you build a Theme(.csm file) to install on the Nintendo Wii .</p><br></br><p class='text-center'><span class='text-red warninglight'><b><i><em>WARNING :</b></i></em></span> This file can <b><em>brick</em></b> your wii !!<br><br>Proceed at your <b><em>Own</em></b> risk !!</p>");
					$("#infocontainer").css("height", "35%");
					$("#infocontainer").fadeIn("slow");
				});
			});
		document.getElementById("theme").selectedIndex = 0;
		//unloadthemelist();
	}
	
	return;
}
function getregiondisplay(regionin) {
	switch(regionin) {
		case 513:
		case 481:
		case 449:
		case 417:
			return "U";
		break;
		case 514:
		case 482:
		case 450:
		case 418:
			return "E"; 
		break;
		case 512:
		case 480:
		case 448:
		case 416:
			return "J";
		break;
		case 518:
		case 486:
			return "K";
		break;
	}
}
function getversiondisplay(versionin) {
	switch(versionin) {
		case 513: 
			return "4.3U"; // U
		break;
		case 481:
			return "4.2U";
		break;
		case 449:
			return "4.1U";
		break;
		case 417:
			return "4.0U";
		break;
		case 514:
			return "4.3E";// E
		break;
		case 482:
			return "4.2E";
		break;
		case 450:
			return "4.1E";
		break;
		case 418:
			return "4.0E"; 
		break;
		case 512:
			return "4.3J"; // J
		break;
		case 480:
			return "4.2J";
		break;
		case 448:
			return "4.1J";
		break;
		case 416:
			return "4.0J";
		break; 
		case 518:
			return "4.3K";
		break;
		case 486:
			return "4.2K";
		break;
		// need to add korean here
	}
}
function showsinglethemeimg(input) {
	console.log("showing theme");
	
	var z = -1;
	document.getElementById("preview1").height = 300 + "px";
	document.getElementById("preview1").width = 400 + "px";
	
	z = findpreviewpath(input);
	console.log("z " + z);
	if(z == 10) {
		$("#preview1").slideUp("slow");
	}
	else {
		document.getElementById("preview1").src = z;
		$("#preview1").fadeIn("slow");		
	}	
	return;
}
function findpreviewpath(input) {
	console.log("input " + input);
	let a = themelist[input].replace(" ", "");
	a = themelist[input].replace(" ", "");
	let b  = a.toLowerCase();
	
	let c = "previewpics/" + b + ".png";
	let d = c.replace(" ", "");
	let e = d.replace(" ", "");
	return e;
}
function nav(navinput) {
	console.log("nav -- " + navinput);	
	//menuType = navinput;
	switch(navinput) {
		case 1: {
			//let z = -1;
			//while(themelist[themeposition] == null) {
			//	z = loadthemelist();
			//	console.log("loadthemelist() " + z);
			//}
			//loadunloadregionoptions(true);
			//loadversion(true);
			//$("#themepreviewcontainer").css("display", "flex");
			//$("#pageHeader").fadeOut(1000, function(){
				
			//});
			//$(".navinner").fadeOut("slow");
			$(".navinner").fadeOut("slow",function(){
				$("#infocontainer").slideUp(1000);
			//	$("#infocontainer").css("height", "40%");
				$(".arrows").fadeIn("slow");
				$("#returnpreview").fadeIn(1000);
				
			});
			
			
			document.getElementById("themeimg").src = findpreviewpath(themeposition);
			//let details = document.getElementById(("#themedetails");
			//details.innerHTML = ;
			$("#themedetails").html('<h3 class="text-blue text-center">' + themelist[themeposition] + '</h3><hr><p class="text-center">Watch the video for a demonstration .</p>');
			let ivideo = document.getElementById("videoframe");
			ivideo.src = themeVideo[themeposition];
			ivideo.width = 500;
			ivideo.height = 500;
			ivideo.title = themelist[themeposition];
			$("#themepreviewcontainer").fadeIn(3000, function(){
				$("#themeimg").fadeIn(1000);
			});
		}
		break
		case 2: {
			$(".navinner").fadeOut("slow");
			$("#infocontainer").slideUp("slow",function(){
				$("#infocontainer").css("height", "40%");
				$("#infocontainer").html("<h1 class='aboutheader text-blue smallcaps'>Wii Themer</h1><hr><h3>Wii Themer Usage ...</h3><hr><p>Press the 'Preview Themes' button to view all 41 themes available .<br>Press the 'Build A Theme' button to build the Theme, Wii System Menu Version and Region of your choice.<br>Press the 'About Wii Themer' button to see these instructions, website stats, etc...<br>Press the 'Contact Us' button to see the owner/operator's contact information.</p><br><h3>System Menu 4.3 All Regions ...</h3><hr><p>The User(You) must provide the 000000XX file from the system menu of the User's(Your) Wii region .<br>Ex. 00000097 for 4.3U(513) 0000009a for 4.3E(514) 00000094 for 4.3J(512) 0000009b for 4.3K(518)</p><br></br><br></br><button title='Return to Main Screen' id='returnabout' class='text-blue border-white border-radius border-shadow-white background-black text-white' onclick='mainMenu(2)' tabindex='5'>Return</button><button title='Click to see website stats .' id='statsbutton' class='text-blue border-white border-radius border-shadow-white background-black text-white' onclick='showstats()' tabindex='7'>Website Stats</button>");
				$("#infocontainer").slideDown("slow");
				getdlcount();
				$("#themedlcounttext").fadeIn("slow");
				$("#statsbutton").fadeIn("slow");
				$("#returnabout").fadeIn(1000);
			});
		}
		break
		case 3:
			showcontactinfo();
		break;
		case 4: {
			//loadthemelist();
			
			$(".navinner").fadeOut("slow", function(){
				$("#return").fadeIn();
			});
			$("#infocontainer").slideUp("slow", function(){
				$("#buildingcontainer").fadeIn("slow");
				showsinglethemeimg(0);
			});
			
		}
		break;
		case 5:
			showLinks();
		break;
	}
	return;
}
function previewcontrols(input) {
	var y;
	
	console.log("previewcontrols(input) " + input);
	y = themeposition + input;
	if(y >= themecount)
		y = 0;
	if(y < 0)
		y = themecount - 1;
	console.log("y " + y);
	themeposition = y;
	document.getElementById("themeimg").src = findpreviewpath(themeposition);
	$("#themedetails").html('<h3 class="text-blue text-center">' + themelist[themeposition] + '</h3><hr><p class="text-center">Watch the video for a demonstration .</p>');
	let ivideo = document.getElementById("videoframe");
	ivideo.src = themeVideo[themeposition];
	ivideo.width = 500;
	ivideo.height = 500;
	ivideo.title = themelist[themeposition];
	//.html("<iframe width='700' height='500' src='" +  + "' title='" +  + "' frameborder='0' allowfullscreen></iframe>");
	return;
}
function getfileinfo() {
	let text = "";
	let f = "";
	if (document.getElementById("appfile").validity.valueMissing) {
		text = "Missing";
	} 
	else {
		text = "OK";
		f = document.getElementById("appfile").innerHTML;
		
	} 
	//document.getElementById("demo").innerHTML = text;
	alert(text + "<br>" + f);
	return;
}
function getselectedtheme() {
	let z = document.getElementById("region").selectedIndex;
	let b = document.getElementById("menuversion").selectedIndex;
	let selectedtheme = document.getElementById("theme").selectedIndex;
	//console.log("selectedtheme = " + selectedtheme);
	showsinglethemeimg(selectedtheme);
	//$("#previewcontainer").css("display", "flex");
	$("#previewcontainer").show();
	//$("#menuversion").slideDown("slow");
		
	//console.log("getselectedregion() z = " + z);
	if((selectedtheme > 0) && (b > 0) && (z > 0)) 
		$("#continue").slideDown();
	else 
		$("#continue").slideUp();
	
	return;
}
var appfilecntr = 0;
function checkforappfile() {
	appfilecntr += 1;
	//console.log("APPCNTR = " + appfilecntr);
	if ($('#appfile')[0].files.length >= 1) {
		$("#uploadform").hide();
		return 1;
	}
	
	return -1;
}
function getselectedversion() {
	var selectedversion = document.getElementById("menuversion").selectedIndex;
	//console.log("selectedversion = " + selectedversion);
	let z = document.getElementById("region").selectedIndex;
	let a = document.getElementById("theme").selectedIndex;
	if(selectedversion != 0) {
		if(selectedversion == 1) 
			$("#uploadform").show();
		else 
			$("#uploadform").hide();
	}
	else 
		$("#uploadform").hide();
	if((a >= 0) && (z > 0) && (selectedversion > 0))
		$("#continue").slideDown();
	else 
		$("#continue").slideUp();
	return;
}
function getselectedregion() {
	let z = document.getElementById("region").selectedIndex;
	let a = document.getElementById("theme").selectedIndex;
	let b = document.getElementById("menuversion").selectedIndex;
	//console.log("getselectedregion()  = " + z);
	if((a >= 0) && (b > 0) && (z > 0))
		$("#continue").slideDown();
	else 
		$("#continue").slideUp();
	
	return;
}	
function findMYM(themeinput, regioninput) {
	//console.log("findMYM");
	//console.log(themeinput + "\n" + regioninput);
	alert("look now");
	let a = themelist[themeinput];
	let b = a.replace(" ", "");
	let c = b + ".mym";
	c = c.toLowerCase();
	//console.log(c);
	c = c.replace(" ", "");
	return c;
}
function findversionregion(versioninput, regioninput) {
	console.log("versioninput " + versioninput + "regioninput " + regioninput);
	switch(regioninput) {
		case 1: // U
			if(versioninput == 1) { // 4.3
				return 513;
			}
			else if(versioninput == 2) { // 4.2
				return 481;
			}
			else if(versioninput == 3) { // 4.1
				return 449;
			}
			else if(versioninput == 4) { // 4.0
				return 417;
			}
		break;
		case 2: // E
			if(versioninput == 1) { // 4.3
				return 514;
			}
			else if(versioninput == 2) { // 4.2 
				return 482;
			}
			else if(versioninput == 3) { // 4.1
				return 450;
			}
			if(versioninput == 4) { //4.0
				return 418;
			}
		break;
		case 3: // J
			if(versioninput == 1) { // 4.3
				return 512;
			}
			else if(versioninput == 2) { // 4.2
				return 480;
			}
			else if(versioninput == 3) { // 4.1
				return 448;
			}
			else if(versioninput == 4) { // 4.0
				return 416;
			}
		break;
		case 4: // K
			if(versioninput == 1) { // 4.3
				return 518;
			}
			else if(versioninput == 2) { // 4.2
				return 486;
			}
			else return -1;
		break;
	}
	return;
}	
var dataArray =[];
function phptheme(themeinput) {
	let copymessage = document.getElementById("downloadtext");
	$.ajax({
		url: "buildtheme.php",
		type: "POST",
		cache: false,
		data: { type: "buildtheme", theme: themeinput, appfile: appfileArray[1], version: themeInfo.version },
		success: function(data) {
			dataArray = data.split("/");
			document.getElementById("theme").selectedIndex = 0;
			document.getElementById("menuversion").selectedIndex = 0;
			document.getElementById("region").selectedIndex = 0;
			setbuildtheme();
			copymessage.innerHTML += " Complete .<br>";
			//setmessageview();
			//setclosedownload();
		},
	}); 
	return 1;
}

function getpageloadcount() {
	$.ajax({
		url: "index.php",
		type: "POST",
		cache: false,
		data: { action: "updatepageloadscount" },
		success: function(data) {
			$("#pageloadcount").html(data);
			
		},
	});
	return;
}
function getdlcount() {
	$.ajax({
		url: "index.php",
		type: "POST",
		cache: false,
		data: { action: "updatedownloadcount" },
		success: function(data) {
			$("#themedlcount").html(data);
		},
	});
	return;
}
function updatedownloadcount() {
	$.ajax({
		url: "index.php",
		type: "POST",
		cache: false,
		data: { action: "increasedownloadcount", count: 1 },
		success: function(data) {
			$("#themedlcount").html(data);
			clearInterval(updatedlcount);
		},
	});
	return;
}
function removesessionfolder() {
	$.ajax({
		url: "index.php",
		type: "POST",
		cache: false,
		data: { action: "removesessionfolder" },
		success: function(data) {
			clearInterval(remove);
			clearInterval(updatedlcount);
		},
	});
	return;
}
var closecntr = 180;
var minutesleft = 2;
var seccntr = 0;
var builttheme = false;
var refresh_timer = null;
var refreshcntr = 0;

function refreshtimer() {
	refreshcntr += 1;
//	console.log("refreshcntr = " + refreshcntr);
	if(refreshcntr == 5) {
		clearInterval(refresh_timer);
		window.location.assign("");
	}
	
	return;
}
function setrefreshtimer() {
	refresh_timer = setInterval(refreshtimer, 1000);
	return;
}
function closetimer() {
	closecntr -= 1;
	seccntr += 1;
	let b = 60 - seccntr;
	if(b < 0) {
		seccntr = 1;
		b = 59;
		minutesleft -= 1;
	}
	$("#downloadtext").html("<br><br><p><a title='click to download your theme' class='glow text-center border-white border-radius border-shadow-black background-black text-white' onclick='closedownload()' href='" + dataArray[0] + "/" + dataArray[1] + dataArray[2] + ".csm' id='csmfile'><b><i>" + dataArray[1] + dataArray[2] + ".csm</b></i></a></p><br><br><p>Your download will expire in </p>");
	//  getversiondisplay(themeInfo.version) +     ========= needs added in buildtheme.php =================
	$("#downloadtext").show();
	let x = document.getElementById("downloadtext").innerHTML;
	if(b < 10) {
		if(minutesleft < 1)
			x += "0 " + " minutes : 0" + b + " seconds .<br>";
		else
			x += " " + minutesleft + " minutes : 0" + b + " seconds .<br>";
	}
	else {
		if(minutesleft < 1)
			x += "0 " + " minutes : " + b + " seconds .<br>";
		else
			x += " " + minutesleft + " minutes : " + b + " seconds .<br>";
	}
	$("#downloadtext").html(x);
	if(closecntr == 0) {
		closedownloadnoupdate();
		clearInterval(timer);
	}
	$("#return").slideDown("slow");
	
	builttheme = true;
	$("#close").show();
	return;
}
var sescntr = 0;
function makesesdir() {
	sescntr += 1;
	if(sescntr == 3) {
		clearInterval(sesdirtimer);
		let downloadtext = document.getElementById("downloadtext");
		downloadtext.innerHTML += " Complete .<br>";
		setmessageviewtimer();
		downloadtext.innerHTML += "Downloading System Menu v" + getversiondisplay(themeInfo.version) + "(" + themeInfo.version + ") .....  ";
		downloadsystemmenu(themeInfo.version);
	}
	return;
}
var buildthemetimer = null;
function setbuildtheme() {
	buildthemetimer = setInterval(buildtheme, 1000);	
	return;
}
var copythemetimer = null;
function copythemesesdir() {
	copythemetimer = setInterval(copytheme, 1000);	
	return;
}
var sesdirtimer = null;
function setsesdirtimer() {
	sesdirtimer = setInterval(makesesdir, 1000);
	return;
}
var timer = null;
function setclosedownload() {
	timer = setInterval(closetimer, 1000);
	return;
}
function closedownloadnoupdate() {
	$("#downloadtext").html("<br><p>Your download has expired .<br><br>Thank You for using Wii Themer .</p>");
	remove = setInterval(removefolder, 5000);
	return;
}
function closedownload() {
	$("#downloadtext").html("<br><p>Thank You for using Wii Themer .</p>");
	remove = setInterval(removefolder, 5000);
	updatedlcount = setInterval(updatedownloadcount, 1000);
	clearInterval(timer);
	return;
}
function copytheme() {
	copycntr += 1;
	//console.log("copycntr = " + copycntr);
	if(copycntr == 3) {
		clearInterval(copythemetimer);
	}
	return;
}
var copycntr = 0;
function copythemetoroot() {
	let copymessage = document.getElementById("downloadtext");
	$.ajax({
		url: "index.php",
		type: "POST",
		cache: false,
		data: { action: "copythemetosessiondirectory", theme: themeInfo.mymfile },
		success: function(data) {
			console.log(data);
			copythemesesdir();
			copymessage.innerHTML += "Complete .<br>";
			setmessageview();
			copymessage.innerHTML += "Building " + themeInfo.name + getversiondisplay(themeInfo.version) + ".csm please wait ..... ";
			phptheme(themeInfo.mymfile);
		},
	});
	return;
}
buildthemecntr = 0;
function buildtheme() {
	buildthemecntr += 1;
	//console.log("buildthemecntr = " + buildthemecntr);
	if(buildthemecntr == 3) {
		clearInterval(buildthemetimer);
		setmessageview();
		setclosedownload();
	}
	return;
}
function setsesdir() {
	$.ajax({
		url: "index.php",
		type: "POST",
		cache: false,
		data: { action: "makesesdir" },
		success: function(data) {
			//console.log(data);
			setsesdirtimer();
		},
	});
	return;
}
var appfileArray = [];
function downloadsystemmenu(versionin) {
	let copymessage = document.getElementById("downloadtext");
	$.ajax({
		url: "buildtheme.php",
		type: "POST",
		cache: false,
		data: { type: "getappfile", version: versionin },
		success: function(data) {
			//console.log(data);
			appfileArray = data.split("/"); 
			copymessage.innerHTML += "Complete .<br>";
			setmessageview();
			copymessage.innerHTML += "Copying " + themeInfo.name + ".mym to the working directory ..... ";
			copythemetoroot();
		},
	});
	return;
}
var themeInfo = {};
var addspin = false;
function buildThemestart() {
	//e.preventDefault();
	$("#continue").fadeOut("slow");
	$("#return").fadeOut("slow");
	//$("#preview1").fadeOut("slow");
	//$("#buildingcontainer").fadeOut("slow");
	let selectedtheme = document.getElementById("theme").selectedIndex;
	let selectedversion = document.getElementById("menuversion").selectedIndex;
	let selectedregion = document.getElementById("region").selectedIndex;
	let mymfile = findMYM(selectedtheme, selectedregion);
	let verreg = findversionregion(selectedversion, selectedregion);
	themeInfo.mymfile = mymfile;
	themeInfo.version = verreg;
	themeInfo.themeselected = selectedtheme;
	themeInfo.versionselected = selectedversion;
	themeInfo.regionselected = selectedregion;
	themeInfo.name = themelist[selectedtheme];
	var spinoption = document.getElementsByName('option');
	var spinselected;
	for(var i = 0; i < spinoption.length; i++){
		if(spinoption[i].checked){
			spinselected = spinoption[i].value;
			console.log("spinoption " + spinselected);
		}
	}
	let modal = document.getElementById("downloadtextmodal");
	modal.style.display = "block";
	var span = document.getElementsByClassName("close")[3]; 
	span.onclick = function() {
	  $("#downloadtextmodal").slideUp("slow");
	  removesessionfolder();
	}
	
	$("#downloadtext").html("<br>Please Wait .....<br>Setting session directory and copying needed files ..... ");
	
	$("#downloadtext").show();
	setsesdir();
	return;
}
messageviewcntr = 0;
function setmessageview() {
	messageviewcntr += 1;
//	console.log("messageviewtimer = " + messageviewcntr);
	if(messageviewcntr = 5) {
		clearInterval(messageviewtimer);
	}
	
	return;
}
var messageviewtimer = null;
function setmessageviewtimer() {
	messageviewtimer = setInterval(setmessageview, 1000);
	return;
}
function showcontactinfo() {
	$("#infocontainer").slideUp("slow");
	var modal = document.getElementById("contactmodal");
	modal.style.display = "block";
	var span = document.getElementsByClassName("close")[2]; 
	span.onclick = function() {
	  $("#contactmodal").slideUp("slow");
	  $("#infocontainer").slideDown("slow");
	}
	window.onclick = function(event) {
	  if (event.target == modal) {
		$("#contactmodal").slideUp("slow");
		$("#infocontainer").slideDown("slow");
	  }
	}
	
	return;
}
function showstats() {
	//alert("showstats");
	getpageloadcount();
	getdlcount();
	var modal = document.getElementById("statsmodal");
	modal.style.display = "block";
	var span = document.getElementsByClassName("close")[1]; 
	span.onclick = function() {
	  $("#statsmodal").slideUp("slow");
	}
	window.onclick = function(event) {
	  if (event.target == modal) {
		$("#statsmodal").slideUp("slow");
	  }
	}
	return;
}
function startphpsession() {
	$.ajax({
		url: "index.php",
		type: "POST",
		cache: false,
		data: { action: "getsessionId" },
	});
	return;
}
function updatepageloads(input) {
	let cookie = document.cookie;
	if(cookie == "") startphpsession();
	let t = null;
	
	if(cookie) 
		input = 0;
	if(input == 1)
		t = "addtocount";
	else
		t = "updatecount";
	$.ajax({
		url: "index.php",
		type: "POST",
		cache: false,
		data: { action: t, count: 1 },
		success: function(data) {
			//alert(data);
		},
	});
	return;
}
function unloadthemelist() {
	for (let i = 0; i < themecount; i++) { 
		$('#theme').remove($('<option>', i));
	}
	return;
}
function loadregions() {
	
	for(let i = 0;i < 5; i++) {
		$('#region').append($('<option>',
		{
			value: i,
			text : Region[i] 
		}
		));
	}
	return;
}
function loadversions() {
	for(let i = 0; i < 5; i++) { 
		$('#menuversion').append($('<option>',
		{
			value: i,
			text : version[i] 
		}
		));
	}
	return;
}
function showLinks() {
	$("#infocontainer").slideUp("slow");
	var modal = document.getElementById("linksmodal");
	modal.style.display = "block";
	var span = document.getElementsByClassName("close")[0]; 
	span.onclick = function() {
	  $("#linksmodal").slideUp("slow");
	  $("#infocontainer").slideDown("slow");
	}
	window.onclick = function(event) {
	  if (event.target == modal) {
		$("#linksmodal").slideUp("slow");
		$("#infocontainer").slideDown("slow");
	  }
	}
	return;
}
var themecount = null;
var themelist = null;
function loadthemelist() {
	let x = null;
	
	$.ajax({
		url: "index.php",
		type: "POST",
		cache: false,
		data: { action: "loadthemelist" },
		success: function(data) {
			//console.log(data);
			x = data.split("%");
			themecount = x[0];
			let list =  x[1];
			themelist = list.split("\n");
			for (let i = 0; i < themecount; i++) { 
				$('#theme').append($('<option>',
				{
					value: i,
					text : themelist[i] 
				}
				));
			}
		},
		error: function(error) {
			alert("error  " + error);
			return 0;
		},
	});
	
	return 1;
}
