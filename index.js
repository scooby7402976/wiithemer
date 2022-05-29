var heightofscreen = innerHeight;

var widthofscreen = innerWidth;
var themeposition = 1;
var menuType = 0;
var downloadtimer = "";
var remove = "";
var updatedlcount = ""
const Region = ["", "USA", "PAL", "JAP", "KOR"];
const regionAbbr = ["", "U", "E", "J", "K" ];
const version = ["", "4.3", "4.2", "4.1", "4.0"];
const themeName = ["", "Batman", "Black Mage", "Black Pirate", "Bleach", "Boondock Saints", "Cars", "Car Theme", "Code Geass", "The Conduit v1", "The Conduit v2", "Constantine", "Dark Wii Original", "Dark Wii Blue", "dark Wii Green", "Dark Wii Orange", "Dark Wii Pink", "Dark Wii Purple", "Dark Wii Red", "Dark Wii White", "Dark Wii Yellow", "DethKlok", "Dr. Who", "The Evil Dead", "Fantasy", "FireWii", "Full Metal Alchemist", "Gaara of the Sand", "Ghost Busters", "Golden Sun", "Halo", "The Hundred", "Import Cars", "Jurassic Park", "Kingdom Hearts", "Leopard", "Lime", "Luigi", "Mad World v1", "Mad World v2", "Majora's Mask", "Mario v1", "Mario v2", "Martin Abel", "Matrix", "Matrix Reloaded", "Metallica", "Metroid v1", "Metroid v2", "Msg Theme", "Mortal Kombat", "Muse", "Naruto", "Nightmare before Christmas", "Okami", "Old School Nintendo", "Pink Wii", "Psychedelic", "Punch Out", "Ratchet & Clank", "Robot Chicken", "Rock Band", "Samus' Visor v1", "Samus' Visor v2", "Saw", "Scarface", "Shadow the Hedge Hog v1", "Shadow the Hedge Hog v2", "The Simpsons", "Spider Man", "Lightning Storm", "Street Fighter", "Super Hero Squad v1", "Super Hero Squad v2", "Super Sonic", "The Teenage Mutant Ninja Turtles", "Tomb Raider", "Transformers", "True Blood", "Vista Theme", "Win XP Theme", "Wolverine", "Zelda Twilight Princess"];
const themeimage1 = [82, "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/bleach.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/conduit.png", "img/comingsoon.png", "previewpics/constantine.png", "img/comingsoon.png", "previewpics/blue.png", "previewpics/green.png", "previewpics/orange.png", "previewpics/pink.png", "previewpics/purple.png", "previewpics/red.png", "previewpics/white.png", "previewpics/yellow.png", "img/comingsoon.png", "previewpics/who.png", "previewpics/evil1.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/fullmetal", "previewpics/.gaara.png", "img/comingsoon.png", "previewpics/goldensun.png", "previewpics/halo.png", "previewpics/hundred.png", "previewpics/imports.png", "img/comingsoon.png", "previewpics/kingdomhearts.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/luigi.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/martinabel.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/metroid1.png", "previewpics/metroid2.png", "img/comingsoon.png", "previewpics/mortalkombat.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/okami.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/punchout.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/saw.png", "img/comingsoon.png", "previewpics/shadowv1.png", "img/comingsoon.png", "previewpics/simpsons.png", "img/comingsoon.png", "previewpics/storm.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/tmnt.png", "previewpics/tombraider.png", "previewpics/transformers.png", "img/comingsoon.png", "img/comingsoon.png","img/comingsoon.png", "previewpics/wolverine.png", "previewpics/zeldatp.png" ];
const themeimage2 = [];
const themeimage3 = [];
const themeimage4 = [];
const Themes = [ 82, , , , "previewpics/dr._who.png", "previewpics/evil1.png", "previewpics/DarkWii_White.png", "previewpics/imports.png", "previewpics/luigi.png", "previewpics/kingdomhearts.png", "previewpics/saw.png"];
const Themes2 = [ 82, "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/evil2.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png"];
const Themes3 = [ 82, "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/evil3.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png"];
const Themes4 = [ 82, "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/evil4.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png"];

function mainMenu() {
	$("#return").slideUp("slow", function(){
	let navisVis = document.getElementById("nav").style.visibility;
		if(navisVis == "")
			$(".nav").slideDown("slow");
	});
	if(menuType == 1) {
		let themecontainerisVis = document.getElementById("themescontainer").style.visibility;
		if(themecontainerisVis == "")
			$("#themescontainer").fadeOut("slow", function(){
				$(".arrows").hide();
			});
		let headerisVis = document.getElementById("pageHeader").style.visibility;
		if(headerisVis == "")
			$("#pageHeader").fadeIn("slow", function(){
				$("#infocontainer").fadeOut("slow", function(){
					$("#infocontainer").html('<h2>Wii Menu Themes</h2><p>This site will help you build a Theme(.csm file) to install on the Nintendo Wii .</p><p><b><em>WARNING :</b></em> this file can brick your wii . Proceed at your own risk .</p>');
					$("#infocontainer").fadeIn("slow");
				});
			});
	}
	else if (menuType == 2 || menuType == 3) {
		$("#infocontainer").fadeOut("slow", function(){
			$("#infocontainer").html('<h2>Wii Menu Themes</h2><p>This site will help you build a Theme(.csm file) to install on the Nintendo Wii .</p><p><b><em>WARNING :</b></em> this file can brick your wii . Proceed at your own risk .</p>');
			$("#infocontainer").fadeIn("slow");
			$("#themedlcounttext").fadeOut("slow");
			
		});
		
	}
	else if(menuType == 4) {
		let buildingcontainerisVis = document.getElementById("buildingcontainer").style.visibility;
		if(buildingcontainerisVis == "")
			$("#buildingcontainer").fadeOut("slow", function(){
				$("#downloadtext").hide();
				$("#appfilelabel").hide();
				$("#appfile").hide();
				$("#preview1").hide();
				$("#themedlcounttext").fadeOut("slow");
				$("#infocontainer").fadeOut("slow", function(){
					$("#infocontainer").html('<h2>Wii Menu Themes</h2><p>This site will help you build a Theme(.csm file) to install on the Nintendo Wii .</p><p><b><em>WARNING :</b></em> this file can brick your wii . Proceed at your own risk .</p>');
					$("#infocontainer").fadeIn("slow");
				});
			});
	}
	themeposition = 1;
	return;
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
		// need to add korean here
	}
}
function showsinglethemeimg(input) {
	console.log("showing theme");
	//var x = document.getElementById("theme").selectedIndex;
	var z = -1;
			
	z = findpreviewpath(input);
	console.log("z " + z);
	if(z == 10) {
		$("#preview1").slideUp("slow");
		
		//$("#preview2").hide();
		//$("#preview3").hide();
	}
	else {
		//$("#preview1").fadeOut("slow");
		document.getElementById("preview1").src = z;
		$("#preview1").fadeIn("slow");		
	}	
	return;
}
function findpreviewpath(input) {
	console.log("input " + input);
	return themeimage1[input];
}
function nav(navinput) {
	console.log("nav -- " + navinput);	
	menuType = navinput;
	switch(navinput) {
		case 1: {
			$("#pageHeader").fadeOut(1000);
			$(".nav").fadeOut("slow", function(){
				$("#return").fadeIn(1000);
			});
			$("#infocontainer").slideUp(1000,function(){
				$(".arrows").fadeIn("slow");
			});
			let a = heightofscreen - (heightofscreen/10);
			let b = widthofscreen - 100 - (widthofscreen/10)/2;
			console.log("h= " + heightofscreen + "\nw= " + widthofscreen);
			$("#themescontainer").height(a);
			$("#themescontainer").width(b);
			$("#flipper1").height(a/2 - 10);
			$("#flipper1").width(b/2 - 20);
			$("#flipper2").height(a/2 - 10);
			$("#flipper2").width(b/2 - 20);
			$("#flipper3").height(a/2 - 10);
			$("#flipper3").width(b/2 - 20);
			$("#flipper4").height(a/2 - 10);
			$("#flipper4").width(b/2 - 20);
			document.getElementById("themeimg1").src = Themes[themeposition];
			document.getElementById("themeimg2").src = Themes2[themeposition];
			document.getElementById("themeimg3").src = Themes3[themeposition];
			document.getElementById("themeimg4").src = Themes4[themeposition];
			$("#themeimg1").height(a/2 - 10);
			$("#themeimg1").width(b/2 - 20);
			$("#themeimg2").height(a/2 - 10);
			$("#themeimg2").width(b/2 - 20);
			$("#themeimg3").height(a/2 - 10);
			$("#themeimg3").width(b/2 - 20);
			$("#themeimg4").height(a/2 - 10);
			$("#themeimg4").width(b/2 - 20);
			$("#themescontainer").fadeIn(2000, function(){
				$("#themeimg1").fadeIn(2000);
				$("#themeimg2").fadeIn(2000);
				$("#themeimg3").fadeIn(2000);
				$("#themeimg4").fadeIn(2000);
				let x = $("#flipper1").width();
				let y = x + "px";
				console.log("perspective = " + y);
				$("#flipcontainer").css("perspective", y);
			});
			$("#flipback1").html("<h2>Bleach</h2><h4>By The Wii Theme Team</h4><h5>Press A Screen</h5>");
			$("#flipback2").html("<h2>Bleach</h2><h4>By The Wii Theme Team</h4><h5>Main Menu Screen</h5>");
			$("#flipback3").html("<h2>Bleach</h2><h4>By The Wii Theme Team</h4><h5>Settings Screen</h5>");
			$("#flipback4").html("<h2>Bleach</h2><h4>By The Wii Theme Team</h4><h5>SD Menu Screen</h5>");
		}
		break
		case 2:
			$(".nav").fadeOut("slow", function(){
				$("#return").fadeIn();
			});
			$("#infocontainer").slideUp("slow",function(){
				$("#infocontainer").html("<h2>Wii Themer</h2><p><h4>Wii Themer Usage ...</h4><p><h6>Preview Theme Button</h6></p><br><br><h4>System Menu 4.3 All Regions ...</h4><p>The User(You) must provide the 000000XX file from the system menu of the User's(Your) Wii's region .<br>Ex. 00000097 for 4.3U(513) 000000xx for 4.3E(514) 000000xx for 4.3J(512) 000000xx for 4.3K(518)</p></p> ");
				$("#infocontainer").fadeIn("slow");
				getdlcount();
				$("#themedlcounttext").fadeIn("slow");
			});
		break
		case 3:
			$(".nav").fadeOut("slow", function(){
				$("#return").fadeIn("slow");
			});
			$("#infocontainer").slideUp("slow",function(){
				$("#infocontainer").html("Email address : <br><br><a href='mailto:nayte1976@gmail.com'><i>Owner: </i> Naythan Morey<br>nayte1976@gmail.com</a> ");
				$("#infocontainer").fadeIn("slow");
			});
		break;
		case 4:
			$(".nav").fadeOut("slow", function(){
				$("#return").fadeIn();
			});
			$("#infocontainer").slideUp("slow", function(){
				$("#buildingcontainer").fadeIn("slow");
				getdlcount();
				$("#themedlcounttext").fadeIn("slow");
			});
			getselectedtheme();
		break;
	}
	return;
}
function previewcontrols(input) {
	var y;
	
	console.log(input);
	y = themeposition + input;
	if(y > Themes[0])
		y = 1;
	if(y <= 0)
		y = Themes[0];
	console.log(y);
	themeposition = y;
	document.getElementById("themeimg1").src = Themes[themeposition];
	document.getElementById("themeimg2").src = Themes2[themeposition];
	document.getElementById("themeimg3").src = Themes3[themeposition];
	document.getElementById("themeimg4").src = Themes4[themeposition];
	$("#flipback1").html("<h2>" + ThemeName[themeposition] + "</h2><h4>By The Wii Theme Team</h4><h5>Press A Screen</h5>");
	$("#flipback2").html("<h2>" + ThemeName[themeposition] + "</h2><h4>By The Wii Theme Team</h4><h5>Main Menu Screen</h5>");
	$("#flipback3").html("<h2>" + ThemeName[themeposition] + "</h2><h4>By The Wii Theme Team</h4><h5>Settings Screen</h5>");
	$("#flipback4").html("<h2>" + ThemeName[themeposition] + "</h2><h4>By The Wii Theme Team</h4><h5>SD Menu Screen</h5>");
	return;
}
function getfileinfo() {
	let text = "";
	if (document.getElementById("appfile").validity.valueMissing) {
		text = "Missing";
	} 
	else {
		text = "OK";
	} 
	//document.getElementById("demo").innerHTML = text;
	alert(text);
	return;
}
function getselectedtheme() {
	
	var x = document.getElementById("theme").selectedIndex;
	console.log("x = " + x);			
	
	if(x != 0) {	
		showsinglethemeimg(x)
		$("#menuversion").slideDown("slow");	
	}
	else {
		$("#menuversion").slideUp("slow");
		$("#region").slideUp("slow");
		document.getElementById("menuversion").selectedIndex = 0;
		document.getElementById("region").selectedIndex = 0;
		$("#preview1").slideUp("slow");
		$("#continue").slideUp("slow");
	}
	return x;
}
function getselectedversion() {
	var a = document.getElementById("region");
	var y = document.getElementById("menuversion").selectedIndex;
	
	if(y == 1) {
		//alert("version 4.3");
		$("#appfilelabel").show();
		$("#appfile").show();
		let dd = document.getElementById("appfile").innerHtml;
		if ($('#appfile')[0].files.length >= 1)
		{
		  // Clicked on 'open' with file
			alert("open");
		} else {
		   // Clicked on 'cancel'
		   alert("cancel");
		}

		//Here, selectedFile is an input type=file.
				
	}
	else {
		$("#appfilelabel").hide();
		$("#appfile").hide();
	}
	if(y != 0) {
		$("#region").slideDown("slow");
	}
	else {
		$("#region").slideUp("slow");
		$("#continue").slideUp();
		
		document.getElementById("region").selectedIndex = 0;
	}
	
	return y;
}
function getselectedregion() {
	var z = document.getElementById("region").selectedIndex;
	let a = document.getElementById("theme").selectedIndex;
	let b = document.getElementById("menuversion").selectedIndex;
	console.log("getselectedregion() z = " + z);
	if(a > 0) {
		if(b > 0) {
			if(z > 0) {
				$("#continue").slideDown();
				return z;
			}
		}
	}
	else if(b > 0) {
		if(a > 0) {
			if(z > 0) {
				$("#continue").slideDown();
				return z;
			}
		}
	}
	$("#continue").slideUp();
	return z;
}	
function findMYM(themeinput, regioninput) {
	console.log("findMYM");
	console.log(themeinput);
	switch(themeinput) {
		case 1:
			return "bleach4.mym";
		break;
		case 2:
			return "conduit4.mym";
		break;
		case 3:
			return "constantine4.mym";
		break;
		case 4:
			return "drwho4.mym";
		break;
		case 5:
			return "evildead4.mym";
		break;
		case 6:
			if(regioninput == 1)
				return "darkwhite4U.mym"
			else if(regioninput == 2)
				return "darkwhite4E.mym"
			else if(regioninput == 3)
				return "darkwhite4J.mym"
			else if(regioninput == 4)
				return "darkwhite4K.mym";
		break;
		case 7:
			return "import4.mym";
		break;
		case 8:
			return "luigi4.mym";
		break;
		case 9:
			return "kingdomhearts4.mym";
		break;
		case 10:
			return "saw4.mym";
		break;
		default:
			return "Unknown Case ... " + themeinput;
		break;
	}
	$("#downloadtext").html("<p><b><em>Copying</em></b><i>" + themeinput + "</i>to temp dir .</p>");
	$("#downloadtext").show();
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
function phptheme(themeinput, versionregioninput) {
	$("#downloadtext").html("<p>Please Wait Downloading System Menu v" + getversiondisplay(versionregioninput) + "(" + versionregioninput + ")<br>Building .csm file ..... </p>");
	$("#downloadtext").show();
	$.ajax({
		url: "buildtheme.php",
		type: "POST",
		cache: false,
		data: { action: "build", theme: themeinput, version: versionregioninput},
		success: function(data) {
			//alert(data);
			$("#downloadtext").html(data);
			$("#downloadtext").show();
			document.getElementById("theme").selectedIndex = 0;
			document.getElementById("menuversion").selectedIndex = 0;
			document.getElementById("region").selectedIndex = 0;
			
		},
		error: function(errdata) {
			$("#downloadtext").html(errdata);
			$("#downloadtext").show();
		},
	});
	
	return 1;
}
function getdlcount() {
	$.ajax({
		url: "downloadcount.php",
		type: "POST",
		cache: false,
		data: { type: "updatecount" },
		success: function(data) {
			//alert(data);
			$("#themedlcount").html(data);
			//$("#downloadtext").show();
			
		},
	});
	
	return;
}
function updatedownloadcount() {
	$.ajax({
		url: "downloadcount.php",
		type: "POST",
		cache: false,
		data: { type: "increasecount", count: 1 },
		success: function(data) {
			//alert(data);
			$("#themedlcount").html(data);
			//$("#downloadtext").show();
			
		},
	});
	
	return;
}
function removefolder() {
	$.ajax({
		url: "remove.php",
		type: "POST",
		cache: false,
	});
	
	return;
}
function closedownload() {
	$("#downloadtext").fadeOut("slow");
	
	remove = setTimeout(removefolder(), 10000);
	updatedlcount = setTimeout(updatedownloadcount(), 1000);
	return;
}
function buildTheme() {
	$("#continue").fadeOut("slow");
	$("#preview1").fadeOut("slow");
	console.log("do checks then build it");
	var selectedtheme = document.getElementById("theme").selectedIndex;
	var selectedversion = document.getElementById("menuversion").selectedIndex;
	var selectedregion = document.getElementById("region").selectedIndex;
	
	var mymfile = findMYM(selectedtheme, selectedregion);
	
	var verreg = findversionregion(selectedversion, selectedregion);
	//downloadsystemmenu(b);
	//copythemetoroot(a);
	//copyappfiletoroot(b);
	phptheme(mymfile, verreg);
	//downloadtimer = setTimeout(closedownload(), 180000);
	return ;
}
