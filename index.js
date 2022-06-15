var heightofscreen = null;
var widthofscreen = null;
var themeposition = 1;
var menuType = 0;
var downloadtimer = "";
var remove = "";
var updatedlcount = ""
const Region = ["", "USA", "PAL", "JAP", "KOR"];
const regionAbbr = ["", "U", "E", "J", "K" ];
const version = ["", "4.3", "4.2", "4.1", "4.0"];
const themeVideo = [82, 'https://www.youtube.com/embed/_O_pPfQe5Do?autoplay=1&mute=1','https://www.youtube.com/embed/Nm_I4p-a4qo?autoplay=1&mute=1', 'https://www.youtube.com/embed/6o4L6axGsgU?autoplay=1&mute=1','', '', 'https://www.youtube.com/embed/425H8lC96es?autoplay=1&mute=1', '', 'https://www.youtube.com/embed/X38-YkQwEL4?autoplay=1&mute=1', '', '' ,'', 'https://www.youtube.com/embed/ckcWI1rsRqk?autoplay=1&mute=1', 'https://www.youtube.com/embed/oSMkswfXe_w?autoplay=1&mute=1', 'https://www.youtube.com/embed/Rn0CnTo5kRI?autoplay=1&mute=1', 'https://www.youtube.com/embed/g66UasiFEhg?autoplay=1&mute=1', 'https://www.youtube.com/embed/EZ1jtn58laM?autoplay=1&mute=1', 'https://www.youtube.com/embed/UKVbnIgZK5I?autoplay=1&mute=1', 'https://www.youtube.com/embed/9odLhr49Wak?autoplay=1&mute=1', 'https://www.youtube.com/embed/wrwDwTXkPUQ?autoplay=1&mute=1', 'https://www.youtube.com/embed/R9sX3SzzzKA?autoplay=1&mute=1', '', '', '', '', '', '', '', '', '', '', '', '', 'https://www.youtube.com/embed/bgmwbNsbT04?autoplay=1&mute=1', '', 'https://www.youtube.com/embed/yZsh5Eiys04?autoplay=1&mute=1', 'https://www.youtube.com/embed/_L1V84YnIi4?autoplay=1&mute=1', 'https://www.youtube.com/embed/kIQWI1lfvN8?autoplay=1&mute=1', 'https://www.youtube.com/embed/c69ct5P0P_o?autoplay=1&mute=1', 'https://www.youtube.com/embed/jaQh1RfxXI0?autoplay=1&mute=1', 'https://www.youtube.com/embed/g-PrcM-Qr80?autoplay=1&mute=1', 'https://www.youtube.com/embed/mbT0hzSG2AU?autoplay=1&mute=1', '', '', 'https://www.youtube.com/embed/X2qGmB8Bc9k?autoplay=1&mute=1', 'https://www.youtube.com/embed/mIn8GGGGZ8k?autoplay=1&mute=1', '', '', 'https://www.youtube.com/embed/vE0OAUJQ9DY?autoplay=1&mute=1', '', '', 'https://www.youtube.com/embed/X0LAu5pYY8w?autoplay=1&mute=1', '', '', '', 'https://www.youtube.com/embed/mJ5oMzBG1ZU?autoplay=1&mute=1', '', 'https://www.youtube.com/embed/7aFjlUc8qlo?autoplay=1&mute=1', '', 'https://www.youtube.com/embed/G_z6DopJRRo?autoplay=1&mute=1', '', 'https://www.youtube.com/embed/HojBuUxihp0?autoplay=1&mute=1', '', '', '', '', 'https://www.youtube.com/embed/yOXIGrcxR8A?autoplay=1&mute=1', '', 'https://www.youtube.com/embed/Akl4tZ9eJio?autoplay=1&mute=1', 'https://www.youtube.com/embed/FBqAhYI2eb0?autoplay=1&mute=1', '', '', 'https://www.youtube.com/embed/VB-v2TYAO0g?autoplay=1&mute=1', '', 'https://www.youtube.com/embed/h0OdHk8D0aQ?autoplay=1&mute=1', 'https://www.youtube.com/embed/6cF81fjLRO4?autoplay=1&mute=1', 'https://www.youtube.com/embed/-H16kD1wlKc?autoplay=1&mute=1', '', 'https://www.youtube.com/embed/9h0TWXmV80E?autoplay=1&mute=1', '','https://www.youtube.com/embed/CpMXYTumKEE?autoplay=1&mute=1', 'https://www.youtube.com/embed/S60LeJR6a54?autoplay=1&mute=1', 'https://www.youtube.com/embed/1NptoYk4ljA?autoplay=1&mute=1'];
const themeName = ["", "Batman", "Black Mage", "Black Pirate", "Bleach", "Boondock Saints", "Cars", "Car Theme", "Code Geass", "The Conduit v1", "The Conduit v2", "Constantine", "Dark Wii Original", "Dark Wii Blue", "Dark Wii Green", "Dark Wii Orange", "Dark Wii Pink", "Dark Wii Purple", "Dark Wii Red", "Dark Wii White", "Dark Wii Yellow", "DethKlok", "Dr. Who", "The Evil Dead", "Fantasy", "FireWii", "Full Metal Alchemist", "Gaara of the Sand", "Ghost Busters", "Golden Sun", "Halo", "The Hundred", "Import Cars", "Jurassic Park", "Kingdom Hearts", "Leopard", "Lime", "Luigi", "Mad World v1", "Mad World v2", "Majora's Mask", "Mario v1", "Mario v2", "Martin Abel", "Matrix", "Matrix Reloaded", "Metallica", "Metroid v1", "Metroid v2", "Msg Theme", "Mortal Kombat", "Muse", "Naruto", "Nightmare before Christmas", "Okami", "Old School Nintendo", "Pink Wii", "Psychedelic", "Punch Out", "Ratchet & Clank", "Robot Chicken", "Rock Band", "Samus' Visor v1", "Samus' Visor v2", "Saw", "Scarface", "Shadow the Hedge Hog v1", "Shadow the Hedge Hog v2", "The Simpsons", "Spider Man", "Lightning Storm", "Street Fighter", "Super Hero Squad v1", "Super Hero Squad v2", "Super Sonic", "The Teenage Mutant Ninja Turtles", "Tomb Raider", "Transformers", "True Blood", "Vista Theme", "Win XP Theme", "Wolverine", "Zelda Twilight Princess"];
const themeimage = [82, "previewpics/batman1.png", "previewpics/blackmage.png", "previewpics/blackpirate.png", "previewpics/bleach.png", "img/comingsoon.png", "previewpics/cars.png", "img/comingsoon.png", "previewpics/codegeass.png", "previewpics/conduit.png", "img/comingsoon.png", "previewpics/constantine.png", "previewpics/darkwiioriginal.png", "previewpics/blue.png", "previewpics/green.png", "previewpics/orange.png", "previewpics/pink.png", "previewpics/purple.png", "previewpics/red.png", "previewpics/white.png", "previewpics/yellow.png", "img/comingsoon.png", "previewpics/who.png", "previewpics/evil1.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/fullmetal.png", "previewpics/gaara.png", "img/comingsoon.png", "previewpics/goldensun.png", "previewpics/halo.png", "previewpics/hundred.png", "previewpics/imports.png", "previewpics/jurassicpark.png", "previewpics/kingdomhearts.png", "previewpics/leopard.png", "previewpics/lime.png", "previewpics/luigi.png", "previewpics/madworld1.png", "previewpics/madworld2.png", "previewpics/majorasmask.png", "previewpics/mario1.png", "img/comingsoon.png", "previewpics/martinabel.png", "previewpics/matrix.png", "previewpics/matrixreload.png", "img/comingsoon.png", "previewpics/metroid1.png", "previewpics/metroid2.png", "img/comingsoon.png", "previewpics/mortalkombat.png", "previewpics/muse.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/okami.png", "previewpics/oldschool.png", "img/comingsoon.png", "previewpics/psycho.png", "previewpics/punchout.png", "previewpics/clank.png", "img/comingsoon.png", "previewpics/rockband.png", "img/comingsoon.png", "img/comingsoon.png", "previewpics/saw.png", "img/comingsoon.png", "previewpics/shadowv1.png", "img/comingsoon.png", "previewpics/simpsons.png", "previewpics/spiderman.png", "previewpics/storm.png", "img/comingsoon.png", "previewpics/superhero.png", "img/comingsoon.png", "previewpics/supersonic.png", "previewpics/tmnt.png", "previewpics/tombraider.png", "previewpics/transformers.png", "previewpics/trueblood.png", "img/comingsoon.png","previewpics/xp.png", "previewpics/wolverine.png", "previewpics/zeldatp.png" ];

function mainMenu() {
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
					$("#infocontainer").html("<h1 class='text-blue'>Wii Menu Themes</h1><hr></hr><p>This site will help you build a Theme(.csm file) to install on the Nintendo Wii .</p><br></br><p class='text-center'><span class='text-red warninglight'><b><i><em>WARNING :</b></i></em></span> This file can <b><em>brick</em></b> your wii !!<br><br>Proceed at your <b><em>Own</em></b> risk !!</p>");
					$("#infocontainer").css("height", "30%");
					$("#infocontainer").fadeIn("slow");
				});
			});
		themeposition = 1;
		loadunloadthemename(false);
	}
	else if (menuType == 2 || menuType == 3) {
		$("#returnabout").fadeOut("slow", function(){
			let navisVis = document.getElementById("nav").style.visibility;
			if(navisVis == "")
				$(".navinner").slideDown("slow");
		});
		$("#infocontainer").slideUp("slow", function(){
			$("#infocontainer").css("height", "350px");
			$("#infocontainer").html("<h1 class='text-blue'>Wii Menu Themes</h1><hr></hr><p>This site will help you build a Theme(.csm file) to install on the Nintendo Wii .</p><br></br><p class='text-center'><span class='text-red warninglight'><b><i><em>WARNING :</b></i></em></span> This file can <b><em>brick</em></b> your wii !!<br><br>Proceed at your <b><em>Own</em></b> risk !!</p>");
			$("#infocontainer").css("height", "30%");
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
					$("#infocontainer").html("<h1 class='text-blue'>Wii Menu Themes</h1><hr></hr><p>This site will help you build a Theme(.csm file) to install on the Nintendo Wii .</p><br></br><p class='text-center'><span class='text-red warninglight'><b><i><em>WARNING :</b></i></em></span> This file can <b><em>brick</em></b> your wii !!<br><br>Proceed at your <b><em>Own</em></b> risk !!</p>");
					$("#infocontainer").css("height", "30%");
					$("#infocontainer").fadeIn("slow");
				});
			});
		document.getElementById("theme").selectedIndex = 0;
		loadunloadthemename(false);
		loadunloadregionoptions(false);
		loadversion(false);
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
		// need to add korean here
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
	return themeimage[input];
}
function nav(navinput) {
	console.log("nav -- " + navinput);	
	menuType = navinput;
	switch(navinput) {
		case 1: {
			$("#themepreviewcontainer").css("display", "flex");
			$("#pageHeader").fadeOut(1000, function(){
				$("#returnpreview").fadeIn(1000);
			});
			//$(".navinner").fadeOut("slow");
			$("#infocontainer").slideUp(1000,function(){
				$("#infocontainer").css("height", "40%");
				$(".arrows").fadeIn("slow");
			});
			
			
			document.getElementById("themeimg").src = themeimage[themeposition];
			//let details = document.getElementById(("#themedetails");
			//details.innerHTML = ;
			$("#themedetails").html('<h3 class="text-blue text-center">' + themeName[themeposition] + '</h3><hr><p class="text-center">By The Wii Theme Team</p><p class="text-center">Press A Screen</p><p class="text-center">Watch the video for a demonstration .</p>');
			let ivideo = document.getElementById("videoframe");
			ivideo.src = themeVideo[themeposition];
			ivideo.width = 700;
			ivideo.height = 500;
			ivideo.title = themeName[themeposition];
			$("#themepreviewcontainer").fadeIn(3000, function(){
				$("#themeimg").fadeIn(1000);
			});
		}
		break
		case 2:
			$(".navinner").fadeOut("slow");
			$("#infocontainer").slideUp("slow",function(){
				$("#infocontainer").css("height", "40%");
				$("#infocontainer").html("<h1 class='aboutheader text-blue smallcaps'>Wii Themer</h1><hr><h3>Wii Themer Usage ...</h3><hr><p>Press the 'Preview Themes' button to view all 82 themes available .<br>Press the 'Build A Theme' button to build the Theme, Wii System Menu Version and Region of your choice.<br>Press the 'About Wii Themer' button to see these instructions, website stats, etc...<br>Press the 'Contact Us' button to see the owner/operator's contact information.</p><br><h3>System Menu 4.3 All Regions ...</h3><hr><p>The User(You) must provide the 000000XX file from the system menu of the User's(Your) Wii's region .<br>Ex. 00000097 for 4.3U(513) 0000009a for 4.3E(514) 00000094 for 4.3J(512) 000000xx for 4.3K(518)</p><br></br><br></br><button title='Return to Main Screen' id='returnabout' class='text-blue border-white border-radius border-shadow-white background-black text-white' onclick='mainMenu()' tabindex='5'>Return</button><button title='Click to see website stats .' id='statsbutton' class='text-blue border-white border-radius border-shadow-white background-black text-white' onclick='showstats()' tabindex='7'>Website Stats</button>");
				$("#infocontainer").slideDown("slow");
				getdlcount();
				$("#themedlcounttext").fadeIn("slow");
				$("#statsbutton").fadeIn("slow");
				$("#returnabout").fadeIn(1000);
			});
			
		break
		case 3:
			showcontactinfo();
		break;
		case 4:
			console.log("builttheme = " + builttheme);
			if(builttheme == true) {
				alert("Press F5 to refresh the page or wait for page to refresh before building another theme.");
				setrefreshtimer();
				return;
			}
			$(".navinner").fadeOut("slow", function(){
				$("#return").fadeIn();
			});
			$("#infocontainer").slideUp("slow", function(){
				$("#infocontainer").css("height", "40%");
				$("#buildingcontainer").css("display", "flex");
				$("#buildingcontainer").fadeIn("slow");
				$("#region").show();
			});
			getselectedversion();
		break;
		case 5:
			showLinks();
		break;
	}
	return;
}
function previewcontrols(input) {
	var y;
	
	console.log(input);
	y = themeposition + input;
	if(y > themeimage[0])
		y = 1;
	if(y <= 0)
		y = themeimage[0];
	console.log(y);
	themeposition = y;
	document.getElementById("themeimg").src = themeimage[themeposition];
	$("#themedetails").html('<h3 class="text-blue text-center">' + themeName[themeposition] + '</h3><hr><p class="text-center">By The Wii Theme Team</p><p class="text-center">Press A Screen</p><p class="text-center">Watch the video for a demonstration .</p>');
	let ivideo = document.getElementById("videoframe");
	ivideo.src = themeVideo[themeposition];
	ivideo.width = 700;
	ivideo.height = 500;
	ivideo.title = themeName[themeposition];
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
	
	var x = document.getElementById("theme").selectedIndex;
	console.log("x = " + x);			
	
	if(x != 0) {	
		
		showsinglethemeimg(x);
		$("#previewcontainer").css("display", "flex");
		$("#previewcontainer").show();
		//$("#menuversion").slideDown("slow");
		
	}
	else {
		//$("#menuversion").slideUp("slow");
		//$("#region").slideUp("slow");
		//document.getElementById("menuversion").selectedIndex = 0;
		//document.getElementById("region").selectedIndex = 0;
		$("#preview1").slideUp("slow");
		$("#continue").slideUp("slow");
	}
	return x;
}
var appfilecntr = 0;
function checkforappfile() {
	appfilecntr += 1;
	console.log("APPCNTR = " + appfilecntr);
	if ($('#appfile')[0].files.length >= 1) {
		$("#region").slideDown("slow");
		return 1;
	}
	
	return -1;
}
function getselectedversion() {
	var y = document.getElementById("menuversion").selectedIndex;
	var appfiletimer = null;
	console.log("y = " + y);
	appfiletimer = setTimeout(checkforappfile(), 1000);
	
	if(y != 0) {
		if(y == 1) {
			console.log("version 4.3\n");
			$("#uploadform").show();
			//$("#appfile").show();
			//$("#uploadbtn").show();
			//$("#fileuploadmessage").show();
			let dd = document.getElementById("appfile").innerHtml;
			console.log("dd = " + dd + "\n");
			if (checkforappfile() == 1) {
				$("#uploadform").hide();
				//$("#appfile").hide();
				//$("#uploadbtn").hide();
				//$("#fileuploadmessage").hide();
			}
		}
		else {
			//$("#region").slideDown("slow");
			$("#uploadform").hide();
			//$("#appfile").hide();
			//$("#uploadbtn").hide();
			//$("#fileuploadmessage").hide();
		}
	}
	else {
		//$("#region").slideUp("slow");
		//$("#continue").slideUp();	
		//document.getElementById("region").selectedIndex = 0;
	}
	
	
	
	
	return y;
}
function getselectedregion() {
	let z = document.getElementById("region").selectedIndex;
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
			return "bleach.mym";
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
			return "conduit.mym";
		break;
		case 10:
			return "conduitalt.mym";
		break;
		case 11:
			return "constantine.mym";
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
			return "drwho.mym";
		break;
		case 23:
			return "evildead.mym";
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
			return "gaara.mym";
		break;
		case 28:
			return "ghostbusters.mym";
		break;
		case 29:
			return "goldensun.mym";
		break;
		case 30:
			return "halo.mym";
		break;
		case 31:
			return "hundred.mym";
		break;
		case 32:
			return "import.mym";
		break;
		case 33:
			return "jurassicpark.mym";
		break;
		case 34:
			return "kingdomhearts.mym";
		break;
		case 35:
			return "leopard.mym";
		break;
		case 36:
			return "lime.mym";
		break;
		case 37:
			return "luigi.mym";
		break;
		case 38:
			return "madworld.mym";
		break;
		case 39:
			return "madworldalt.mym";
		break;
		case 40:
			return "majorasmask.mym";
		break;
		case 41:
			return "mario.mym";
		break;
		case 42:
			return "marioalt.mym";
		break;
		case 43:
			return "martinabel.mym";
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
			return "metroidalt.mym";
		break;
		case 49:
			return "msgtheme.mym";
		break;
		case 50:
			return "mortal.mym";
		break;
		case 51:
			return "muse.mym";
		break;
		case 52:
			return "naruto.mym";
		break;
		case 53:
			return "nightmareb4xmas.mym";
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
			return "samusvisoralt.mym";
		break;
		case 64:
			return "saw.mym";
		break;
		case 65:
			return "scarface.mym";
		break;
		case 66:
			return "shadow.mym";
		break;
		case 67:
			return "shadowalt.mym";
		break;
		case 68:
			return "simpsons.mym";
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
			return "streetfighter.mym";
		break;
		case 72:
			return "superherosquad.mym";
		break;
		case 73:
			return "superherosquadalt.mym";
		break;
		case 74:
			return "supersonic.mym";
		break;
		case 75:
			return "tmnt.mym";
		break;
		case 76:
			return "tomb.mym";
		break;
		case 77:
			return "transformers.mym";
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
			return "wolverine.mym";
		break;
		case 82:
			return "zeldatp.mym";
		break;
		default:
			return "Unknown Case ... " + themeinput;
		break;
	}
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
var builttheme = false;
var refresh_timer = null;
var refreshcntr = 0;

function refreshtimer() {
	refreshcntr += 1;
	console.log("refreshcntr = " + refreshcntr);
	if(refreshcntr == 5) {
		clearInterval(refresh_timer);
		window.location.assign("bartlesvilleok-am.com/wiithemer");
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
	console.log("copycntr = " + copycntr);
	if(copycntr == 3) {
		clearInterval(copythemetimer);
	}
	return;
}
var copycntr = 0;
function copythemetoroot() {
	let copymessage = document.getElementById("downloadtext");
	$.ajax({
		url: "buildtheme.php",
		type: "POST",
		cache: false,
		data: { type: "gettheme", theme: themeInfo.mymfile },
		success: function(data) {
			console.log(data);
			copythemesesdir();
			copymessage.innerHTML += "Complete .<br>";
			setmessageview();
			copymessage.innerHTML += "Building " + themeInfo.name + ".csm please wait ..... ";
			phptheme(themeInfo.mymfile);
		},
	});
	return;
}
buildthemecntr = 0;
function buildtheme() {
	buildthemecntr += 1;
	console.log("buildthemecntr = " + buildthemecntr);
	if(buildthemecntr == 3) {
		clearInterval(buildthemetimer);
		setmessageview();
			setclosedownload();
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
var appfileArray = [];
function downloadsystemmenu(versionin) {
	let copymessage = document.getElementById("downloadtext");
	$.ajax({
		url: "buildtheme.php",
		type: "POST",
		cache: false,
		data: { type: "getappfile", version: versionin },
		success: function(data) {
			console.log(data);
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
	themeInfo.name = themeName[selectedtheme];
	var spinoption = document.getElementsByName('option');
	var spinselected;
	for(var i = 0; i < spinoption.length; i++){
		if(spinoption[i].checked){
			spinselected = spinoption[i].value;
			console.log("spinoption " + spinselected);
		}
	}
	$("#downloadtext").html("<br>Please Wait .....<br>Setting session directory and copying needed files ..... ");
	$("#downloadtext").show();
	setsesdir();
	return;
}
messageviewcntr = 0;
function setmessageview() {
	messageviewcntr += 1;
	console.log("messageviewtimer = " + messageviewcntr);
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

function loadunloadthemename(inputtheme) {
	console.log("input ( " + inputtheme + " )");
	if(inputtheme) {
		for (let i = 0; i < 83; i++) { 
			$('#theme').append($('<option>',
			{
				value: i,
				text : themeName[i] 
			}
			));
		}
	}
	else {
		for (let i = 0; i < 83; i++) { 
			$('#theme').remove($('<option>'));
		}
	}
	return;
}
function loadunloadregionoptions(inputregion) {
	if(inputregion) {
		for(let i = 0;i < 5; i++) {
			$('#region').append($('<option>',
			{
				value: i,
				text : Region[i] 
			}
			));
		}
	}
	else {
		for(let i = 0;i < 5; i++) {
			$('#region').remove($('<option>'));
		}
	}
	return;
}
function loadversion(inputversion) {
	if(inputversion) {
		for(let i = 0; i < 5; i++) { 
			$('#menuversion').append($('<option>',
			{
				value: i,
				text : version[i] 
			}
			));
		}
	}
	else {
		for(let i = 0; i < 5; i++) { 
			$('#menuversion').remove($('<option>'));
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
