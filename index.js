var themeposition = 0;
var closecntr = 180;
var minutesleft = 2;
var seccntr = 0;
var themeInfo = {};
var spinselected = null;
var themecount = getthemecount();
var themelist = loadthemelist();
var themevideo = loadthemevideo();
var appfile = null;
var completefileinfo =[null];
var timer = null;
const Region = ["", "U", "E", "J", "K"];
const regionkdarkredmessage = "Dark Wii Red was not offically made for the Korean region .<br>";
const regionj40message = "4.0 themes not working at moment for J region .<br>Try again at a later date .<br>";
const version = ["", "4.3", "4.2", "4.1", "4.0"];
const version40kmessage = "The Korean region did not have System Menu v4.0 .<br>";
const infocontainer = '<h1 class="text-blue smallcaps">Wii System Menu Themes</h1><hr></hr><p>This site will help you build a Theme(.csm file) to install on the Nintendo Wii .</p><br></br><p class="text-center"><span class="text-red warninglight"><b><i><em>WARNING :</b></i></em></span> This file can <b><em>brick</em></b> your wii .<br><br>Proceed at your <b><em>Own</em></b> risk !!</p>';
// misc ---------------------------------------------------------------
function resetglobals() {
	themeposition = 0;
	dataArray =[];
	closecntr = 180;
	minutesleft = 2;
	seccntr = 0;
	timer = null;
	appfile = null;
	themeInfo = {};
	spinselected = null;
	let spinoption = document.getElementsByName('option');
	if(spinoption[2].checked == false)
		spinoption[2].checked = true;
	document.getElementById("region").selectedIndex = 0;
	document.getElementById("menuversion").selectedIndex = 0;
	document.getElementById("theme").selectedIndex = 0;
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
function returntomainMenu(menuType) {
	if(menuType == 1) {
		$("#returnpreview").fadeOut("slow", function(){
			let navisVis = document.getElementById("nav").style.visibility;
			if(navisVis == "")
				$(".navinner").slideDown("slow");
		});
		let themecontainerisVis = document.getElementById("themepreviewcontainer").style.visibility;
		if(themecontainerisVis == "")
			$("#themepreviewcontainer").fadeOut("slow", function(){
				$(".arrows").hide();
			});
		let headerisVis = document.getElementById("pageHeader").style.visibility;
		if(headerisVis == "")
			$("#pageHeader").fadeIn("slow", function(){
				$("#infocontainer").fadeOut("slow", function(){
					$("#infocontainer").html(infocontainer);
					//$("#infocontainer").css("height", "40%");
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
			$("#infocontainer").html(infocontainer);
			//$("#infocontainer").css("height", "40%");
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
		if(buildingcontainerisVis == "") {
			$("#buildingcontainer").fadeOut("slow", function(){
				$("#downloadtext").hide();
				$("#appfilelabel").hide();
				$("#appfile").hide();
				$("#preview1").hide();
				$("#continue").hide();
				$("#themedlcounttext").fadeOut("slow");
				$("#infocontainer").fadeOut("slow", function(){
					$("#infocontainer").html(infocontainer);
					//$("#infocontainer").css("height", "40%");
					$("#infocontainer").fadeIn("slow");
				});
			});
			resetglobals();
		}
	}
	
	return;
}
// theme preview -------------------------------------------------------
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
	document.getElementById("themeimg").src = findpreviewpath(y);
	$("#themedetails").html('<h3 class="text-blue text-center">' + themelist[y] + '</h3><hr><p class="text-center">Watch the video for a demonstration .</p>');
	//findthemevideo(y); //themeVideo[themeposition];
	let ivideo = document.getElementById("videoframe");
	ivideo.src = themevideo[themeposition];
	ivideo.width = 500;
	ivideo.height = 500;
	ivideo.title = themelist[y];
	
	return;
}
// theme building ------------------------------------------------------
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
		case 454:
			return "K";
		break;
	}
}
function getappfiledisplayname(versionin) {
	switch(versionin) {
		case 513: 
			return "00000097"; // U
		break;
		case 481:
			return "00000087";
		break;
		case 449:
			return "0000007b";
		break;
		case 417:
			return "00000072";
		break;
		case 514:
			return "0000009a";// E
		break;
		case 482:
			return "0000008a";
		break;
		case 450:
			return "0000007e";
		break;
		case 418:
			return "00000075"; 
		break;
		case 512:
			return "00000094"; // J
		break;
		case 480:
			return "00000084";
		break;
		case 448:
			return "00000078";
		break;
		case 416:
			return "00000070";
		break; 
		case 518:
			return "0000009d";
		break;
		case 486:
			return "0000008d";
		break;
		case 454: 
			return "00000081";
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
		case 454: 
			return "4.1K";
		break;
	}
}
function removesessionfolder() {
	$.ajax({
		url: "index.php",
		type: "POST",
		cache: false,
		data: { action: "removesessionfolder" },
		success: function(data) {
			if(timer) clearInterval(timer);
			resetglobals();
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
			if(updatedlcount) clearTimeout(updatedlcount);
		},
	});
	return;
}
function closedownloadnoupdate() {
	$("#downloadtext").html("<br><p>Your download has expired .<br><br>Thank You for using Wii Themer .</p>");
	remove = setTimeout(removesessionfolder, 5000);
	clearInterval(timer);
	return;
}
function closedownload() {
	$("#downloadtext").html("<br><p>Thank You for using Wii Themer .</p>");
	remove = setTimeout(removesessionfolder, 5000);
	updatedlcount = setTimeout(updatedownloadcount, 1000);
	clearInterval(timer);
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
	$("#downloadtext").html("<br><br><p><a title='click to download your theme' class='glow text-center border-white border-radius border-shadow-black background-black text-white' onclick='closedownload()' href='" + completefileinfo[0] + "/" + completefileinfo[1] + completefileinfo[2] + ".csm' id='csmfile'><b><i>" + completefileinfo[1] + completefileinfo[2] + ".csm</b></i></a></p><br><br><p>Your download will expire in </p>");
	
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
	$("#close").show();
	return;
}
function setclosedownload() {
	timer = setInterval(closetimer, 1000);
	return;
}
async function phptheme(themeinput) {
	let thepromise = new Promise( function(resolve) {
		setTimeout( function() { 
			resolve($.ajax({
				url: "index.php",
				type: "POST",
				cache: false,
				data: { action: "buildtheme", theme: themeinput, appfile: appfile, version: themeInfo.version, spin: spinselected },
				success: function(data) {
					console.log(data);
					completefileinfo = data.split("/");
					let copymessage = document.getElementById("downloadtext");
					document.getElementById("theme").selectedIndex = 0;
					document.getElementById("menuversion").selectedIndex = 0;
					document.getElementById("region").selectedIndex = 0;
					//setbuildtheme();
					copymessage.innerHTML += " Complete .<br>";
					//setmessageview();
					setclosedownload();
				},
				error: function(error) {
					copymessage.innerHTML += "Failed ! .<br>";
					copymessage.innerHTML += error;
					
				},
			}))
		}, 3000);
	});
	 
	return 1;
}
async function copythemetoroot() {
	let thepromise = new Promise( function(resolve) {
		setTimeout( function() { 
			resolve($.ajax({
				url: "index.php",
				type: "POST",
				cache: false,
				data: { action: "copythemetosessiondirectory", theme: themeInfo.mymfile },
				success: function(data) {
					console.log(data);
					let copymessage = document.getElementById("downloadtext");
					if(data == "Copy OK") {
						copymessage.innerHTML += "Complete .<br>";
						copymessage.innerHTML += "Building " + themeInfo.name + " " +getversiondisplay(themeInfo.version) + ".csm please wait ..... ";
						phptheme(themeInfo.mymfile);
					}
					else if(data == "Copy ERROR") {
						copymessage.innerHTML += "Failed .<br>";
						copymessage.innerHTML += "An Error has occured please try again .<br>";
						closedownloadnoupdate();
					}
				},
			}))
		}, 3000);
	});
	return;
}
async function downloadappfile(versionin) {
	let thepromise = new Promise( function(resolve) {
		setTimeout( function() { 
			resolve($.ajax({
				url: "index.php",
				type: "POST",
				cache: false,
				data: { action: "newappfile", version: versionin },
				success: function(data) {
					console.log(data);
					
					let copymessage = document.getElementById("downloadtext");
					appfile = data; 
					copymessage.innerHTML += "Complete .<br>";
					copymessage.innerHTML += "Copying " + themeInfo.name + ".mym to the working directory ..... ";
					copythemetoroot();
				},
			}))
		}, 3000);
	});
	
	return;
}
async function setsesdir() {
	let thepromise = new Promise( function(resolve) {
		setTimeout( function() { 
			resolve($.ajax({
				url: "index.php",
				type: "POST",
				cache: false,
				data: { action: "makesesdir" },
				success: function(data) {
					let downloadtext = document.getElementById("downloadtext");
					downloadtext.innerHTML += data;
					downloadtext.innerHTML += "Downloading appfile " + getappfiledisplayname(themeInfo.version) + " from System Menu v" + getversiondisplay(themeInfo.version) + " .....  ";
					downloadappfile(themeInfo.version);
				},
				error: function(error) {
					copymessage.innerHTML += "Failed ! .<br>";
					copymessage.innerHTML += error;
					
				},
			}))
		}, 3000);
	});
	
	return;
}
function findMYM(themeinput, regioninput) {
	//console.log("findMYM");
	//console.log(themeinput + "\n" + regioninput);
	//alert("look now");
	if((themeinput >= 6) && (themeinput <= 13)) {
		//alert(themelist[themeinput]);
		let x = null;
		switch(regioninput) {
			case 1:
				x = "U";
			break;
			case 2:
				x = "E";
			break;
			case 3:
				x = "J";
			break;
			case 4:
				x = "K";
			break;
		}
		let a = themelist[themeinput] + x;
		let b = a.toLowerCase();
		b = b.replace(" ", "");
		b = b.replace(" ", "");
		let c = b + ".mym";
		return c;
	}
	else {
		let a = themelist[themeinput];
		let b = a.replace(" ", "");
		b = b.replace(" ", "");
		let c = b + ".mym";
		c = c.toLowerCase();
		//console.log(c);
		
		return c;
	}
}
function findversionregion(versioninput, regioninput) {
	//console.log("versioninput " + versioninput + "regioninput " + regioninput);
	switch(regioninput) {
		case 1: {// U
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
		}break;
		case 2: {// E
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
		}break;
		case 3: {// J
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
		}break;
		case 4: {// K
			if(versioninput == 1) { // 4.3
				return 518;
			}
			else if(versioninput == 2) { // 4.2
				return 486;
			}
			else if(versioninput == 3)
				return 454;
			else return -1;
		}break;
	}
	return;
}
function buildThemestart() {
	$("#continue").fadeOut("slow");
	$("#return").fadeOut("slow");
	themeInfo.themeselected = document.getElementById("theme").selectedIndex;
	themeInfo.versionselected = document.getElementById("menuversion").selectedIndex;
	themeInfo.regionselected = document.getElementById("region").selectedIndex;
	themeInfo.mymfile = findMYM(themeInfo.themeselected, themeInfo.regionselected);
	themeInfo.version = findversionregion(themeInfo.versionselected, themeInfo.regionselected);
	themeInfo.name = themelist[themeInfo.themeselected];
	
	let spinoption = document.getElementsByName('option');
	for(let i = 0; i < spinoption.length; i++){
		if(spinoption[i].checked){
			spinselected = spinoption[i].value;
			console.log("spinoption " + spinselected + "\ni =" + i);
		}
	}
	
	let modal = document.getElementById("downloadtextmodal");
	modal.style.display = "block";
	var modalclose = document.getElementsByClassName("close")[3]; 
	modalclose.onclick = function() {
		$("#downloadtextmodal").slideUp("slow");
		removesessionfolder();
		clearInterval(timer);
		resetglobals();
	}
	
	$("#downloadtext").html("<br>Please Wait .....<br>Setting session directory and copying needed files ..... ");
	
	$("#downloadtext").slideDown("slow");
	setsesdir();
	return;
}
function getselected(input) {
	let selectedregion = document.getElementById("region").selectedIndex;
	let selectedversion = document.getElementById("menuversion").selectedIndex;
	let selectedtheme = document.getElementById("theme").selectedIndex;
	
	if(input == 3)
		showsinglethemeimg(selectedtheme);
	if((selectedtheme >= 0) && (selectedversion > 0) && (selectedregion > 0)) {
		if((selectedregion == 4) && (selectedtheme == 11) && (selectedversion == 4)) {
			$("#continue").slideUp();
			$("#message").html(regionkdarkredmessage + version40kmessage);
			$("#message").fadeIn();
		}
		else {
			if((selectedregion == 4) && (selectedversion == 4)) {
				$("#continue").slideUp();
				$("#message").html(version40kmessage);
				$("#message").fadeIn();
			}
			else {
				if((selectedregion == 4) && (selectedtheme == 11)) {
					$("#continue").slideUp();
					$("#message").html(regionkdarkredmessage);
					$("#message").fadeIn();
				}
				else {
					if((selectedregion == 3) && (selectedversion == 4)) {
						$("#continue").slideUp();
						$("#message").html(regionj40message);
						$("#message").fadeIn();
					}
					else {
						$("#continue").slideDown();
						$("#message").fadeOut();
					}
				}
			}
		}
		
	}
	else 
		$("#continue").slideUp();
	
	return;
}
function showsinglethemeimg(input) {
	var z = -1;
	z = findpreviewpath(input);
	console.log("z " + z);
	$("#preview1").slideUp("slow", function() {
		document.getElementById("preview1").src = z;
		$("#preview1").fadeIn("slow");
	});
	
	return;
}
// page start -----------------------------------------------------------
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
function showstats() {
	getpageloadcount();
	getdlcount();
	var modal = document.getElementById("statsmodal");
	modal.style.display = "block";
	var modal_close = document.getElementsByClassName("close")[1]; 
	modal_close.onclick = function() {
	  $("#statsmodal").slideUp("slow");
	}
	window.onclick = function(event) {
	  if (event.target == modal) {
		$("#statsmodal").slideUp("slow");
	  }
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
	//console.log(input);
	if(cookie) 
		input = 0;
	if(input == 1)
		t = "addtopageloadscount";
	else
		t = "updatepageloadscount";
	//console.log(t);
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
function nav(navinput) {
	switch(navinput) {
		case 1: {
			$(".navinner").slideUp("slow");
			document.getElementById("themeimg").src = findpreviewpath(themeposition);
			$("#themedetails").html('<h3 class="text-blue text-center">' + themelist[themeposition] + '</h3><hr><p class="text-center">Watch the video for a demonstration .</p>');
			let ivideo = document.getElementById("videoframe");
			ivideo.src = themevideo[themeposition];
			ivideo.width = 500;
			ivideo.height = 500;
			ivideo.title = themelist[themeposition];

			$("#infocontainer").fadeOut("slow",function(){
				$(".arrows").fadeIn("slow");
				$("#returnpreview").fadeIn("slow");
				$("#themeimg").fadeIn("slow");
				$("#themepreviewcontainer").fadeIn("slow");
			});
		}
		break
		case 2: {
			$(".navinner").fadeOut("slow");
			$("#infocontainer").slideUp("slow",function(){
				$("#infocontainer").html("<h1 class='aboutheader text-blue smallcaps'>Wii Themer</h1><hr><h3>Wii Themer Usage ...</h3><hr><p>Press 'Preview Themes' button to view all " + themecount + " themes available .<br>Press 'Build A Theme' button to build the Theme, Wii System Menu Version and Region of your choice.<br>Press 'About Wii Themer' button to see these instructions, website stats, etc...<br>Press 'Contact Us' button to see the owner/operator's contact information.</p></p><button title='Return to Main Screen' id='returnabout' class='text-blue border-white border-radius border-shadow-white background-black text-white' onclick='returntomainMenu(2)' tabindex='5'>Return</button><button title='Click to see website stats .' id='statsbutton' class='text-blue border-white border-radius border-shadow-white background-black text-white' onclick='showstats()' tabindex='7'>Website Stats</button>");
				$("#infocontainer").slideDown("slow");
				$("#statsbutton").fadeIn("slow");
				$("#returnabout").fadeIn("slow");
			});
		}
		break
		case 3:
			showcontactinfo();
		break;
		case 4: {
			$(".navinner").fadeOut("slow");
			$("#infocontainer").slideUp("slow", function(){
				$("#buildingcontainer").fadeIn("slow");
				showsinglethemeimg(themeposition);
				$("#return").fadeIn();
			});
			loadregions();
			loadversions();
		}
		break;
		case 5:
			showLinks();
		break;
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
function getthemecount() {
	
	$.ajax({
		url: "index.php",
		type: "POST",
		cache: false,
		data: { action: "getthemecount" },
		success: function(data) {
			//console.log("data = " + data);
			themecount = data;
		},
	});
	return themecount;
}
function loadthemevideo() {
	$.ajax({
		url: "index.php",
		type: "POST",
		cache: false,
		data: { action: "loadthemevideo" },
		success: function(data) {
			//console.log(data);
			
			themevideo = data.split("\n");
		},
	});
	return themevideo;
}
function loadthemelist() {
	
	//console.log("themecount = " + themecount);
	$.ajax({
		url: "index.php",
		type: "POST",
		cache: false,
		data: { action: "loadthemelist" },
		success: function(data) {
			//console.log(data);
			
			themelist = data.split("\n");
		},
		complete: function() {
			for (let i = 0; i < themecount; i++) { 
				$('#theme').append($('<option>',
				{
					value: i,
					text : themelist[i] 
				}
				));
			}
		},
	});
	
	return themelist;
}