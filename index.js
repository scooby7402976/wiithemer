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
const themeimage1 = [82, "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/bleach.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/conduit.png", "img/comingsoon.png", "previewpics/constantine.png", "img/comingsoon.png", "previewpics/blue.png", "previewpics/green.png", "previewpics/orange.png", "previewpics/pink.png", "previewpics/purple.png", "previewpics/red.png", "previewpics/white.png", "previewpics/yellow.png", "img/comingsoon.png", "previewpics/who.png", "previewpics/evil1.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/fullmetal", "previewpics/gaara.png", "img/comingsoon.png", "previewpics/goldensun.png", "previewpics/halo.png", "previewpics/hundred.png", "previewpics/imports.png", "img/comingsoon.png", "previewpics/kingdomhearts.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/luigi.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/martinabel.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/metroid1.png", "previewpics/metroid2.png", "img/comingsoon.png", "previewpics/mortalkombat.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/okami.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/punchout.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/saw.png", "img/comingsoon.png", "previewpics/shadowv1.png", "img/comingsoon.png", "previewpics/simpsons.png", "img/comingsoon.png", "previewpics/storm.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/tmnt.png", "previewpics/tombraider.png", "previewpics/transformers.png", "img/comingsoon.png", "img/comingsoon.png","img/comingsoon.png", "previewpics/wolverine.png", "previewpics/zeldatp.png" ];
const themeimage2 = [82, "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/evil2.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png" ];
const themeimage3 = [82, "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/evil3.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png"];
const themeimage4 = [82, "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/evil4.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png", "img/comingsoon.png"];

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
		themeposition = 1;
	}
	else if (menuType == 2 || menuType == 3) {
		$("#infocontainer").fadeOut("slow", function(){
			$("#infocontainer").html('<h2>Wii Menu Themes</h2><p>This site will help you build a Theme(.csm file) to install on the Nintendo Wii .<br></br><b><em>WARNING :</em></b> This file can brick your wii . Proceed at your own risk .</p>');
			$("#infocontainer").fadeIn("slow");
			$("#themedlcounttext").fadeOut("slow");
			
		});
		$("#statsbutton").fadeOut("slow");
	}
	else if(menuType == 4) {
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
					$("#infocontainer").html('<h2>Wii Menu Themes</h2><p>This site will help you build a Theme(.csm file) to install on the Nintendo Wii .</p><p><b><em>WARNING :</b></em> this file can brick your wii . Proceed at your own risk .</p>');
					$("#infocontainer").fadeIn("slow");
				});
			});
		document.getElementById("theme").selectedIndex = 0;
	}
	
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
	var z = -1;
	document.getElementById("preview1").height = heightofscreen*.50;
	document.getElementById("preview1").width = widthofscreen*.75;
	
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
			document.getElementById("themeimg1").src = themeimage1[themeposition];
			document.getElementById("themeimg2").src = themeimage2[themeposition];
			document.getElementById("themeimg3").src = themeimage3[themeposition];
			document.getElementById("themeimg4").src = themeimage4[themeposition];
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
			$("#flipback1").html("<h2>Batman</h2><h4>By The Wii Theme Team</h4><h5>Press A Screen</h5>");
			$("#flipback2").html("<h2>Batman</h2><h4>By The Wii Theme Team</h4><h5>Main Menu Screen</h5>");
			$("#flipback3").html("<h2>Batman</h2><h4>By The Wii Theme Team</h4><h5>Settings Screen</h5>");
			$("#flipback4").html("<h2>Batman</h2><h4>By The Wii Theme Team</h4><h5>SD Menu Screen</h5>");
		}
		break
		case 2:
			$(".nav").fadeOut("slow", function(){
				$("#return").fadeIn();
			});
			$("#infocontainer").slideUp("slow",function(){
				$("#infocontainer").html("<h2 class='aboutheader'>Wii Themer</h2><h4>Wii Themer Usage ...</h4><p>Press the 'Preview Themes' button to view all 82 themes available .<br>Press the 'Build A Theme' button to build the Theme, Wii System Menu Version and Region of your choice.<br>Press the 'About Wii Themer' button to see these instructions, website stats, etc...<br>Press the 'Contact Us' button to see the owner/operator's contact information.</p><br><h4>System Menu 4.3 All Regions ...</h4><p>The User(You) must provide the 000000XX file from the system menu of the User's(Your) Wii's region .<br>Ex. 00000097 for 4.3U(513) 0000009a for 4.3E(514) 00000094 for 4.3J(512) 000000xx for 4.3K(518)</p> ");
				$("#infocontainer").fadeIn("slow");
				$("#themedlcounttext").fadeIn("slow");
				$("#statsbutton").fadeIn("slow");
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
	if(y > themeimage1[0])
		y = 1;
	if(y <= 0)
		y = themeimage1[0];
	console.log(y);
	themeposition = y;
	document.getElementById("themeimg1").src = themeimage1[themeposition];
	document.getElementById("themeimg2").src = themeimage2[themeposition];
	document.getElementById("themeimg3").src = themeimage3[themeposition];
	document.getElementById("themeimg4").src = themeimage4[themeposition];
	$("#flipback1").html("<h2>" + themeName[themeposition] + "</h2><h4>By The Wii Theme Team</h4><h5>Press A Screen</h5>");
	$("#flipback2").html("<h2>" + themeName[themeposition] + "</h2><h4>By The Wii Theme Team</h4><h5>Main Menu Screen</h5>");
	$("#flipback3").html("<h2>" + themeName[themeposition] + "</h2><h4>By The Wii Theme Team</h4><h5>Settings Screen</h5>");
	$("#flipback4").html("<h2>" + themeName[themeposition] + "</h2><h4>By The Wii Theme Team</h4><h5>SD Menu Screen</h5>");
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
			return "batman.mym";
		break;
		case 2:
			return "blackmage.mym";
		break;
		case 3:
			return "blackpirate.mym"
		break;
		case 4:
			return "bleach4.mym";
		break;
		case 5:
			return "boondocksaints.mym";
		break;
		case 6:
			return "cars.mym";
		break;
		case 7:
			return "cartheme.mym";
		break;
		case 8:
			return "codegeass.mym";
		break;
		case 9:
			return "conduit4.mym";
		break;
		case 10:
			return "conduitalt.mym";
		break;
		case 11:
			return "constantine4.mym";
		break;
		case 12:
			return "darkwiiorig.mym";
		break;
		case 13:
			if(regioninput == 1)
				return "darkblue4U.mym";
			else if(regioninput == 2)
				return "darkblue4E.mym";
			else if(regioninput == 3)
				return "darkblue4J.mym";
			else if(regioninput == 4)
				return "darkblue4K.mym";
		break;
		case 14:
			if(regioninput == 1)
				return "darkgreen4U.mym";
			else if(regioninput == 2)
				return "darkgreen4E.mym";
			else if(regioninput == 3)
				return "darkgreen4J.mym";
			else if(regioninput == 4)
				return "darkgreen4K.mym";
		break;
		case 15:
			if(regioninput == 1)
				return "darkorange4U.mym";
			else if(regioninput == 2)
				return "darkorange4E.mym";
			else if(regioninput == 3)
				return "darkorange4J.mym";
			else if(regioninput == 4)
				return "darkorange4K.mym";
		break;
		case 16:
			if(regioninput == 1)
				return "darkpink4U.mym";
			else if(regioninput == 2)
				return "darkpink4E.mym";
			else if(regioninput == 3)
				return "darkpink4J.mym";
			else if(regioninput == 4)
				return "darkpink4K.mym";
		break;
		case 17:
			if(regioninput == 1)
				return "darkpurple4U.mym";
			else if(regioninput == 2)
				return "darkpurple4E.mym";
			else if(regioninput == 3)
				return "darkpurple4J.mym";
			else if(regioninput == 4)
				return "darkpurple4K.mym";
		break;
		case 18:
			if(regioninput == 1)
				return "darkred4U.mym";
			else if(regioninput == 2)
				return "darkred4E.mym";
			else if(regioninput == 3)
				return "darkred4J.mym";
			else
				return -1;
		break;
		case 19:
			if(regioninput == 1)
				return "darkwhite4U.mym";
			else if(regioninput == 2)
				return "darkwhite4E.mym";
			else if(regioninput == 3)
				return "darkwhite4J.mym";
			else if(regioninput == 4)
				return "darkwhite4K.mym";
		break;
		case 20:
			if(regioninput == 1)
				return "darkyellow4U.mym";
			else if(regioninput == 2)
				return "darkyellow4E.mym";
			else if(regioninput == 3)
				return "darkyellow4J.mym";
			else if(regioninput == 4)
				return "darkyellow4K.mym";
		break;
		case 21:
			return "dethklok.mym";
		break;
		case 22:
			return "drwho4.mym";
		break;
		case 23:
			return "evildead4.mym";
		break;
		case 24:
			return "fantasy.mym";
		break;
		case 25:
			return "firewii.mym";
		break;
		case 26:
			if(regioninput == 1)
				return "fullmetal4U.mym";
			else if(regioninput == 2)
				return "fullmetal4E.mym";
			else if(regioninput == 3)
				return "fullmetal4J.mym";
			else if(regioninput == 4)
				return "fullmetal4K.mym";
		break;
		case 27:
			return "gaara4.mym";
		break;
		case 28:
			return "ghostbusters.mym";
		break;
		case 29:
			return "goldensun4.mym";
		break;
		case 30:
			return "halo4.mym";
		break;
		case 31:
			return "hundred4.mym";
		break;
		case 32:
			return "import4.mym";
		break;
		case 33:
			return "jurassicpark.mym";
		break;
		case 34:
			return "kingdomhearts4.mym";
		break;
		case 35:
			return "leopard.mym";
		break;
		case 36:
			return "lime.mym";
		break;
		case 37:
			return "luigi4.mym";
		break;
		case 38:
			return "madworld.mym";
		break;
		case 39:
			return "madworld2.mym";
		break;
		case 40:
			return "majorasmask.mym";
		break;
		case 41:
			return "mario.mym";
		break;
		case 42:
			return "mariojeb.mym";
		break;
		case 43:
			return "martinabel4.mym";
		break;
		case 44:
			return "matrix.mym";
		break;
		case 45:
			return "matrixreloaded.mym";
		break;
		case 46:
			return "metallica.mym";
		break;
		case 47:
			return "metroid1.mym";
		break;
		case 48:
			return "metroidblue.mym";
		break;
		case 49:
			return "msgtheme.mym";
		break;
		case 50:
			return "mortal4.mym";
		break;
		case 51:
			return "muse.mym";
		break;
		case 52:
			return "naruto.mym";
		break;
		case 53:
			return "nightmarebeforexmas.mym";
		break;
		case 54:
			return "okami.mym";
		break;
		case 55:
			return "oldschoolnintendo.mym";
		break;
		case 56:
			return "pinkwii.mym";
		break;
		case 57:
			return "psycedelic.mym";
		break;
		case 58:
			return "punchout.mym";
		break;
		case 59:
			return "ratchet&clank.mym";
		break;
		case 60:
			return "robotchicken.mym";
		break;
		case 61:
			return "rockband.mym";
		break;
		case 62:
			return "samusvisor.mym";
		break;
		case 63:
			return "samusvisor4.mym";
		break;
		case 64:
			return "saw4.mym";
		break;
		case 65:
			return "scarface.mym";
		break;
		case 66:
			return "shadow4.mym";
		break;
		case 67:
			return "shadowtheme2.mym";
		break;
		case 68:
			return "simpsons4.mym";
		break;
		case 69:
			return "spiderman.mym";
		break;
		case 70:
			if(regioninput == 1)
				return "storm4U.mym";
			else if(regioninput == 2)
				return "storm4E.mym";
			else if(regioninput == 3)
				return "storm4J.mym";
			else if(regioninput == 4)
				return "storm4K.mym";
		break;
		case 71:
			return "streetfighter,mym";
		break;
		case 72:
			return "superherosquadv1,mym";
		break;
		case 73:
			return "superherosquadv2.mym";
		break;
		case 74:
			return "supersonic,mym";
		break;
		case 75:
			return "tmnt4.mym";
		break;
		case 76:
			return "tomb4.mym";
		break;
		case 77:
			return "transformers4.mym";
		break;
		case 78:
			return "trueblood.mym";
		break;
		case 79:
			return "vistatheme.mym";
		break;
		case 80:
			return "winxp.mym";
		break;
		case 81:
			return "wolverine4.mym";
		break;
		case 82:
			return "zeldatp4.mym";
		break;
		default:
			return "Unknown Case ... " + themeinput;
		break;
	}
}
function findversionregion(versioninput, regioninput) {
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
	$("#downloadtext").html("<p>Please Wait Downloading System Menu<br>Building .csm file ..... </p>");
	$("#downloadtext").show();
	$.ajax({
		url: "buildtheme.php",
		type: "POST",
		cache: false,
		data: { type: "buildtheme", theme: themeinput, appfile: appfileArray[1] },
		success: function(data) {
			dataArray = data.split("/");
			document.getElementById("theme").selectedIndex = 0;
			document.getElementById("menuversion").selectedIndex = 0;
			document.getElementById("region").selectedIndex = 0;
			setclosedownload();
		},
		error: function(errdata) {
			$("#downloadtext").html(errdata);
			$("#downloadtext").show();
		},
	});
	return 1;
}
function getpageloadcount() {
	$.ajax({
		url: "pageloads.php",
		type: "POST",
		cache: false,
		data: { type: "updatecount" },
		success: function(data) {
			$("#pageloadcount").html(data);
		},
	});
	return;
}
function getdlcount() {
	$.ajax({
		url: "downloadcount.php",
		type: "POST",
		cache: false,
		data: { type: "updatecount" },
		success: function(data) {
			$("#themedlcount").html(data);
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
			$("#themedlcount").html(data);
			clearInterval(updatedlcount);
		},
	});
	return;
}
function removefolder() {
	$.ajax({
		url: "remove.php",
		type: "POST",
		cache: false,
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
function closetimer() {
	closecntr -= 1;
	seccntr += 1;
	let b = 60 - seccntr;
	if(b < 0) {
		seccntr = 1;
		b = 59;
		minutesleft -= 1;
	}
	$("#downloadtext").html("<br><br><span><a title='click to download your theme' onclick='closedownload()' href='" + dataArray[0] + "/" + dataArray[1] + "csm' id='csmfile' download><b><i>" + dataArray[1] + "csm</i></b></a><br><br><br>Your download will expire in </span>");
	$("#downloadtext").show();
	let x = document.getElementById("downloadtext").innerHTML;
	if(b < 10) {
		if(minutesleft < 1)
			x += "0 minutes" + " : 0" + b + "seconds .";
		else
			x += " " + minutesleft + "minutes : 0" + b + "seconds .";
	}
	else {
		if(minutesleft < 1)
			x += "0 minutes" + " : " + b + "seconds .";
		else
			x += " " + minutesleft + "minutes : " + b + "seconds .";
	}
	$("#downloadtext").html(x);
	if(closecntr == 0) {
		closedownloadnoupdate();
		clearInterval(timer);
	}
	return;
}
var sescntr = 0;
function makesesdir() {
	sescntr += 1;
	if(sescntr == 10) {
		clearInterval(sesdirtimer);
		let selectedversion = document.getElementById("menuversion").selectedIndex;
		let selectedregion = document.getElementById("region").selectedIndex;
		
		let verreg = findversionregion(selectedversion, selectedregion);
		downloadsystemmenu(verreg);
		copythemesesdir();
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
	copythemetimer = setInterval(copythemetoroot, 1000);
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
	$("#downloadtext").html("<p>Your download expired .<br>Thank You for using Wii Themer .</p>");
	remove = setInterval(removefolder, 5000);	
	return;
}
function closedownload() {
	$("#downloadtext").html("<p>Download Complete .<br>Thank You for using Wii Themer .</p>");
	remove = setInterval(removefolder, 5000);
	updatedlcount = setInterval(updatedownloadcount, 1000);
	clearInterval(timer);
	return;
}
var copycntr = 0;
function copythemetoroot() {
	copycntr += 1;
	if(copycntr == 30) {
		clearInterval(copythemetimer);
		var selectedtheme = document.getElementById("theme").selectedIndex;
		var selectedregion = document.getElementById("region").selectedIndex;
		var mymfile = findMYM(selectedtheme, selectedregion);
		$.ajax({
			url: "buildtheme.php",
			type: "POST",
			cache: false,
			data: { type: "gettheme", theme: mymfile },
			success: function(data) {
				console.log(data);
				setbuildtheme();
			},
		});
	}
	return;
}
buildthemecntr = 0;
function buildtheme() {
	buildthemecntr += 1;
	if(buildthemecntr == 30) {
		clearInterval(buildthemetimer);
		let selectedtheme = document.getElementById("theme").selectedIndex;
		let selectedregion = document.getElementById("region").selectedIndex;
		let mymfile = findMYM(selectedtheme, selectedregion);
		phptheme(mymfile);
	}
	return;
}
function setsesdir() {
	$.ajax({
		url: "buildtheme.php",
		type: "POST",
		cache: false,
		data: { type: "makesesdir" },
		success: function(data) {
			console.log(data);
			setsesdirtimer();
		},
	});
	return;
}
appfileArray = [];
function downloadsystemmenu(versionin) {
	$.ajax({
		url: "buildtheme.php",
		type: "POST",
		cache: false,
		data: { type: "getappfile", version: versionin },
		success: function(data) {
			console.log(data);
			appfileArray = data.split("/");
		},
	});
	return;
}
function buildThemestart() {
	$("#continue").fadeOut("slow");
	$("#preview1").fadeOut("slow");
	return;
}
function showstats() {
	//alert("showstats");
	getpageloadcount();
	getdlcount();
	var modal = document.getElementById("statsmodal");
	modal.style.display = "block";
	var span = document.getElementsByClassName("close")[0]; 
	span.onclick = function() {
	  modal.style.display = "none";
	}
	window.onclick = function(event) {
	  if (event.target == modal) {
		modal.style.display = "none";
	  }
	}
	return;
}
function startphpsession() {
	$.ajax({
		url: "pageloads.php",
		type: "POST",
		cache: false,
		data: { type: "getId" },
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
		url: "pageloads.php",
		type: "POST",
		cache: false,
		data: { type: t, count: 1 },
		success: function(data) {
			//alert(data);
		},
	});
	return;
}
