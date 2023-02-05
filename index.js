var themeposition = 0;
var closecntr = 180;
var minutesleft = 2;
var seccntr = 0;
var themeInfo = {};
var themecount = 73;//getthemecount();
//var themelist = 

//var themevideo = loadthemevideo();
var sessionid = null;
var themevideomode = false;
var completefileinfo =[null];
var timer = null;
const Region = ["", "U", "E", "J", "K"];
const regionkdarkredmessage = "Dark Wii Red was not offically made for the Korean region .<br>";
const regionj40message = "4.0 themes not building at moment for J region .<br>The file size is 3.68 MB but should be over 6 MB .<br>Try again at a later date .<br>";
const version = ["", "4.3", "4.2", "4.1", "4.0"];
const version40kmessage = "The Korean region did not have System Menu v4.0 .<br>";
const max_themes = 250;
const theme_count = 73;
const theme_image_list = [ 
	"animalcrossing.avif",
	"bakugan.avif",
	"batmanv1.avif",
	"batmanv2.avif",
	"blackmage.avif",
	"blackpirate.avif",
	"bleach.avif",
	"bowser.avif",
	"broly.avif",
	"car.avif",
	"cars.avif",
	"codegeass.avif",
	"constantine.avif",
	"darkwiioriginal.avif",
	"darkwiiblue.avif",
	"darkwiigreen.avif",
	"darkwiiorange.avif",
	"darkwiipink.avif",
	"darkwiipurple.avif",
	"darkwiired.avif",
	"darkwiiwhite.avif",
	"darkwiiyellow.avif",
	"dethklok.avif",
	"discord.avif",
	"dragonballzv1.avif",
	"dragonballzv2.avif",
	"drwho.avif",
	"earthbound.avif",
	"evildead.avif",
	"excitebots.avif",
	"eyes.avif",
	"familyguy.avif",
	"Fantasy.avif",
	"FightClub.avif",
	"FinalFantasy7.avif",
	"futurama.avif",
	"gaara.avif",
	"ghostbusters.avif",
	"GoldenSun.avif",
	"HandDrawn.avif",
	"HelloKitty.avif",
	"jurassicpark3.avif",
	"kingdomhearts.avif",
	"leopardos.avif",
	"limewii.avif",
	"luigi.avif",
	"madworld.avif",
	"majorasmask.avif",
	"mario.avif",
	"mariokart.avif",
	"matrix.avif",
	"matrixreloaded.avif",
	"metroid.avif",
	"mortalkombat.avif",
	"muse.avif",
	"nightmareb4xmas.avif",
	"oldschoolnintendo.avif",
	"Psychedelic.avif",
	"ratchetandclank.avif",
	"rockband2.avif",
	"shadowthehedgehog.avif",
	"spiderman.avif",
	"superherosquad.avif",
	"supersonic.avif",
	"thesimpsons.avif",
	"thundercats.avif",
	"tmnt.avif",
	"tombraider.avif ",
	"trueblood.avif",
	"winxpos.avif",
	"wolverine.avif",
	"zelda.avif"
];
const theme_list = [ "Animal Crossing",
"Bakugan",
"Batman v1",
"Batman v2",
"Black Mage",
"Black Pirate",
"Bleach",
"Bowser",
"Broly",
"Car",
"Cars",
"Code Geass",
"Constantine",
"Dark Wii Original",
"Dark Wii Blue",
"Dark Wii Green",
"Dark Wii Orange",
"Dark Wii Pink",
"Dark Wii Purple",
"Dark Wii Red",
"Dark Wii White",
"Dark Wii Yellow",
"Deth Klok",
"Discord",
"Dragon Ball Z v1",
"Dragon Ball Z v2",
"Dr Who",
"Earth Bound",
"Evil Dead",
"Excite Bots",
"Eyes",
"Family Guy",
"Fantasy",
"Fight Club",
"Final Fantasy 7",
"Futurama",
"Gaara",
"Ghost Busters",
"Golden Sun",
"Hand Drawn",
"Hello Kitty",
"Heros",
"Jurassic Park 3",
"Kingdom Hearts",
"Leopard OS",
"Lime Wii",
"Luigi",
"Mad World",
"Majoras Mask",
"Mario",
"Mario Kart",
"Matrix",
"Matrix Reloaded",
"Metroid",
"Mortal Kombat",
"Muse",
"Nightmare B4 Xmas",
"Old School Nintendo",
"Psychedelic",
"Ratchet and Clank",
"Rockband 2",
"Shadow The Hedgehog",
"Spiderman",
"Super Hero Squad",
"Super Sonic",
"The Simpsons",
"Thunder Cats",
"TMNT",
"Tomb Raider",
"True Blood",
"Win XP OS",
"Wolverine",
"Zelda" ];
const mym_file = [ "animal_crossing.mym",
"bakugan.mym",
"batman_v1.mym",
"batman_v2.mym",
"black_mage.mym",
"black_pirate.mym",
"bleach.mym",
"bowser.mym",
"broly.mym",
"car.mym",
"cars.mym",
"code_geass.mym", 
"constantine.mym", // 10
"dark_wii_original.mym",
"dark_wii_blue",
"dark_wii_green",
"dark_wii_orange",
"dark_wii_pink",
"dark_wii_purple",
"dark_wii_red",
"dark_wii_white",
"dark_wii_yellow",
"deth_klok.mym",
"discord.mym",
"dragon_ball_z_v1.mym",
"dragon_ball_z_v2.mym",
"dr_who.mym",
"earth_bound.mym",
"evil_dead.mym",
"excite_bots.mym",
"eyes.mym",
"family_guy.mym",
"fantasy.mym",
"fight_club.mym",
"final_fantasy_7.mym",
"futurama.mym",
"gaara.mym",
"ghost_busters.mym",
"golden_sun.mym",
"hand_drawn.mym",
"hello_kitty.mym",
"heros.mym",
"jurassic_park_3.mym",
"kingdom_hearts.mym",
"leopard_os.mym",
"lime_wii.mym",
"luigi.mym",
"mad_world.mym",
"majoras_mask.mym",
"mario.mym",
"mario_kart.mym",
"matrix.mym",
"matrix_reloaded.mym",
"metroid.mym",
"mortal_kombat.mym",
"muse.mym",
"nightmare_b4_xmas.mym",
"old_school_nintendo.mym",
"psychedelic.mym",
"ratchet_and_clank.mym",
"rockband_2.mym",
"shadow_the_hedgehog.mym",
"Spiderman.mym",
"super_hero_squad.mym",
"super_sonic.mym",
"the_simpsons.mym",
"thunder_cats.mym",
"tmnt.mym",
"tomb_raider.mym",
"true_blood.mym",
"win_xp_os.mym",
"wolverine.mym",
"zelda.mym" ];
const theme_video = [ "https://www.youtube.com/embed/2hZHkraXOpA?autoplay=0&mute=1",
"https://www.youtube.com/embed/1sje3UaUNK4?autoplay=0&mute=1",
"https://www.youtube.com/embed/_O_pPfQe5Do?autoplay=0&mute=1",
"https://www.youtube.com/embed/RhfS_ZdaDVU?autoplay=0&mute=1",
"https://www.youtube.com/embed/Nm_I4p-a4qo?autoplay=0&mute=1",
"https://www.youtube.com/embed/6o4L6axGsgU?autoplay=0&mute=1",
"https://www.youtube.com/embed/6R7Zgni2vbQ?autoplay=0&mute=1",
"https://www.youtube.com/embed/tdYdYU1KKdw?autoplay=0&mute=1",
"https://www.youtube.com/embed/-rd2YPJ9jOE?autoplay=0&mute=1",
"https://www.youtube.com/embed/425H8lC96es?autoplay=0&mute=1",
"https://www.youtube.com/embed/FNyt_khFHsI?autoplay=0&mute=1",
"https://www.youtube.com/embed/X38-YkQwEL4?autoplay=0&mute=1",
"https://www.youtube.com/embed/fR8xS8I8vgU?autoplay=0&mute=1",
"https://www.youtube.com/embed/ckcWI1rsRqk?autoplay=0&mute=1",
"https://www.youtube.com/embed/oSMkswfXe_w?autoplay=0&mute=1",
"https://www.youtube.com/embed/Rn0CnTo5kRI?autoplay=0&mute=1",
"https://www.youtube.com/embed/g66UasiFEhg?autoplay=0&mute=1",
"https://www.youtube.com/embed/EZ1jtn58laM?autoplay=0&mute=1",
"https://www.youtube.com/embed/UKVbnIgZK5I?autoplay=0&mute=1",
"https://www.youtube.com/embed/9odLhr49Wak?autoplay=0&mute=1",
"https://www.youtube.com/embed/wrwDwTXkPUQ?autoplay=0&mute=1",
"https://www.youtube.com/embed/R9sX3SzzzKA?autoplay=0&mute=1",
"https://www.youtube.com/embed/gvJGiuJiEbA?autoplay=0&mute=1",
"https://www.youtube.com/embed/HH1KZWWvdWU?autoplay=0&mute=1",
"https://www.youtube.com/embed/pM2RB5cqVSw?autoplay=0&mute=1",
"https://www.youtube.com/embed/hLBvwN_Sj38?autoplay=0&mute=1",
"https://www.youtube.com/embed/um4V5Wu8fq8?autoplay=0&mute=1",
"https://www.youtube.com/embed/gO4k6ggnL0U?autoplay=0&mute=1",
"https://www.youtube.com/embed/zKolRxAiJJs?autoplay=0&mute=1",
"https://www.youtube.com/embed/Uz4V-dlzzsY?autoplay=0&mute=1",
"https://www.youtube.com/embed/8nxP5ox3aVE?autoplay=0&mute=1",
"https://www.youtube.com/embed/SHgd0t4BENI?autoplay=0&mute=1",
"https://www.youtube.com/embed/hGqk0wQL9Us?autoplay=0&mute=1",
"https://www.youtube.com/embed/WVY8mcnJmu8?autoplay=0&mute=1",
"https://www.youtube.com/embed/bymdnStOo9U?autoplay=0&mute=1",
"https://www.youtube.com/embed/x0mCDuiWYpA?autoplay=0&mute=1",
"https://www.youtube.com/embed/nEofNIw_Xps?autoplay=0&mute=1",
"https://www.youtube.com/embed/q1Y3VAmsXxM?autoplay=0&mute=1",
"https://www.youtube.com/embed/qZO74MDfGXY?autoplay=0&mute=1",
"https://www.youtube.com/embed/e19Hk1Zbp0c?autoplay=0&mute=1",
"https://www.youtube.com/embed/Rh-_PneEKCY?autoplay=0&mute=1",
"https://www.youtube.com/embed/kM-Sgb2wRig?autoplay=0&mute=1",
"https://www.youtube.com/embed/bgmwbNsbT04?autoplay=0&mute=1",
"https://www.youtube.com/embed/YQf3umMzGNs?autoplay=0&mute=1",
"https://www.youtube.com/embed/yZsh5Eiys04?autoplay=0&mute=1",
"https://www.youtube.com/embed/_L1V84YnIi4?autoplay=0&mute=1",
"https://www.youtube.com/embed/kIQWI1lfvN8?autoplay=0&mute=1",
"https://www.youtube.com/embed/c69ct5P0P_o?autoplay=0&mute=1",
"https://www.youtube.com/embed/g-PrcM-Qr80?autoplay=0&mute=1",
"https://www.youtube.com/embed/mbT0hzSG2AU?autoplay=0&mute=1",
"https://www.youtube.com/embed/dCfbtnEWnLI?autoplay=0&mute=1",
"https://www.youtube.com/embed/X2qGmB8Bc9k?autoplay=0&mute=1",
"https://www.youtube.com/embed/mIn8GGGGZ8k?autoplay=0&mute=1",
"https://www.youtube.com/embed/vE0OAUJQ9DY?autoplay=0&mute=1",
"https://www.youtube.com/embed/K0qxTtMF7E4?autoplay=0&mute=1",
"https://www.youtube.com/embed/X0LAu5pYY8w?autoplay=0&mute=1",
"https://www.youtube.com/embed/yMMcV_JmZY8?autoplay=0&mute=1",
"https://www.youtube.com/embed/mJ5oMzBG1ZU?autoplay=0&mute=1",
"https://www.youtube.com/embed/7aFjlUc8qlo?autoplay=0&mute=1",
"https://www.youtube.com/embed/G_z6DopJRRo?autoplay=0&mute=1",
"https://www.youtube.com/embed/HojBuUxihp0?autoplay=0&mute=1",
"https://www.youtube.com/embed/yOXIGrcxR8A?autoplay=0&mute=1",
"https://www.youtube.com/embed/FBqAhYI2eb0?autoplay=0&mute=1",
"https://www.youtube.com/embed/VB-v2TYAO0g?autoplay=0&mute=1",
"https://www.youtube.com/embed/h0OdHk8D0aQ?autoplay=0&mute=1",
"https://www.youtube.com/embed/Akl4tZ9eJio?autoplay=0&mute=1",
"https://www.youtube.com/embed/LJW-3B1Vooo?autoplay=0&mute=1",
"https://www.youtube.com/embed/6cF81fjLRO4?autoplay=0&mute=1",
"https://www.youtube.com/embed/-H16kD1wlKc?autoplay=0&mute=1",
"https://www.youtube.com/embed/9h0TWXmV80E?autoplay=0&mute=1",
"https://www.youtube.com/embed/CpMXYTumKEE?autoplay=0&mute=1",
"https://www.youtube.com/embed/S60LeJR6a54?autoplay=0&mute=1",
"https://www.youtube.com/embed/1NptoYk4ljA?autoplay=0&mute=1" ];

//loadthemelist();
// misc ---------------------------------------------------------------
function resetglobals() {
	themeposition = 0;
	completefileinfo =[null];
	closecntr = 180;
	minutesleft = 2;
	seccntr = 0;
	timer = null;
	themeInfo = {};
	let spinoption = document.getElementsByName('option');
	if(spinoption[2].checked == false)
		spinoption[2].checked = true;
	document.getElementById("region").selectedIndex = 0;
	document.getElementById("menuversion").selectedIndex = 0;
	document.getElementById("theme").selectedIndex = 0;
	document.getElementById('csmsourcebox').checked = false;
	document.getElementById('continue').style.display = "none";
	showsinglethemeimg(themeposition);
	return;
}
function findpreviewpath(input) {
	return "previewpics/" + theme_image_list[input];
}
function updatecountfiles(type) {
	let act = null;

	switch(type) {
		case 1:
			act = "increasepageloadscount";
		break;
		case 2:
			act = "increasedownloadcount";
		break;
		case 3:
			act = "increasemymenuifymoddownloads";
		break;
		case 4:
			act = "increasewiithemerdownloads";
		break;
	}
	setTimeout(function() {
		$.ajax({
			url: "index.php",
			type: "POST",
			cache: false,
			data: { action: act, count: 1 },
			success: function(data) {
				switch(type) {
					case 1:
						$("#pageloadcount").text(data);;
					break;
					case 2:
						$("#themedlcount").text(data);;
					break;
					case 3:
						$("#mymenuifymoddownloads").text(data + " downloads");;
					break;
					case 4:
						$("#wiithemerdownloads").text(data + " downloads");;
					break;
				}
			},
		})
	}, 500);
	return;
}
function getcountfiles(type) {
	let act = null;

	switch(type) {
		case 1:
			act = "getpageloadscount";
		break;
		case 2:
			act = "updatedownloadcount";
		break;
		case 3:
			act = "getmymenuifymoddownloads";
		break;
		case 4:
			act = "getwiithemerdownloads";
		break;
	}
	setTimeout(function() {
		$.ajax({
			url: "index.php",
			type: "POST",
			cache: false,
			data: { action: act, count: 1 },
			success: function(data) {
				switch(type) {
					case 1:
						$("#pageloadcount").text(data);;
					break;
					case 2:
						$("#themedlcount").text(data);;
					break;
					case 3:
						$("#mymenuifymoddownloads").text(data + " downloads");;
					break;
					case 4:
						$("#wiithemerdownloads").text(data + " downloads");;
					break;
				}
			},
		})
	}, 500);
	return;
}
// theme preview -------------------------------------------------------
function loadvideo() {
	if(!themevideomode) {
		themevideomode = true;
		$("#themevideocontainer").show();
		$("#checkpreview").text("Theme Picture Preview");
		document.getElementById("preview1").style.display = "none";
		
	}
	else {
		themevideomode = false;
		$("#themevideocontainer").hide();
		$("#checkpreview").text("Theme Video Preview");
		document.getElementById("preview1").style.display = "block";
		themeposition = document.getElementById("theme").selectedIndex;
		
	}
	loadvideo_img();
	return;
}
function loadvideo_img() {
	themeposition = document.getElementById("theme").selectedIndex;
	if(!themevideomode) {
		showsinglethemeimg(themeposition);
	}
	else {
		let ivideo = document.getElementById("videoframe");
		ivideo.src = theme_video[themeposition];
		ivideo.width = 640;
		ivideo.height = 450;
	}
	return;
}
function previewcontrol(input_control) {
	console.log("input_contrtol = " + input_control);
	themeposition = themeposition + input_control;
	console.log("themeposition = " + themeposition);
	if(themeposition < 0)
		themeposition = themecount - 1;
	if(themeposition >= themecount)
		themeposition = 0;
	console.log("themeposition = " + themeposition);
	document.getElementById("theme").selectedIndex = themeposition;
	loadvideo_img();

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
		data: { action: "removesessionfolder", theme: themeInfo.mymfile, savesrc: themeInfo.themesrc, selectedtheme: themeInfo.themeselected },
		success: function(data) {
			console.log(data);
			if(timer) clearInterval(timer);
			resetglobals();
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
	$("#downloadtext").html("<br><p>Thank You for using Wii Themer .</p><p>Remember to grab an install app from helpful links on the main page .</p> ");
	remove = setTimeout(removesessionfolder, 5000);
	updatedlcount = setTimeout(updatecountfiles(2), 1000);
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
	if(themeInfo.themesrc == true) {
		$("#downloadtext").html("<br><br><p><a title='click to download your theme' class='glow text-center border-white border-radius border-shadow-black background-black text-white' onclick='closedownload()' href='" + completefileinfo[0] + "/" + completefileinfo[1] + "' id='csmfile'><b><i>" + completefileinfo[1] + "</b></i></a></p><br><br><p>Your download will expire in </p>");
	}
	else {
		$("#downloadtext").html("<br><br><p><a title='click to download your theme' class='glow text-center border-white border-radius border-shadow-black background-black text-white' onclick='closedownload()' href='" + completefileinfo[0] + "/" + completefileinfo[1] + completefileinfo[2] + ".csm' id='csmfile'><b><i>" + completefileinfo[1] + completefileinfo[2] + ".csm</b></i></a></p><br><br><p>Your download will expire in </p>");
		}
	$("#downloadtext").slideDown("slow");
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
	$("#close").show();
	return;
}
function setclosedownload() {
	timer = setInterval(closetimer, 1000);
	return;
}
async function phptheme() {
	let thepromise = new Promise( function(resolve) {
		setTimeout( function() { 
			resolve($.ajax({
				url: "index.php",
				type: "POST",
				cache: false,
				data: { action: "buildtheme", theme: themeInfo.mymfile, appfile: themeInfo.appfile, version: themeInfo.version, spin: themeInfo.spinselected, savesrc: themeInfo.themesrc, selectedtheme: themeInfo.themeselected },
				success: function(data) {
					completefileinfo = data.split("/");
					let copymessage = document.getElementById("downloadtext");
					document.getElementById("theme").selectedIndex = 0;
					document.getElementById("menuversion").selectedIndex = 0;
					document.getElementById("region").selectedIndex = 0;
					copymessage.innerHTML += " Complete .<br>";
					setclosedownload();
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
				data: { action: "copythemetosessiondirectory", theme: themeInfo.mymfile, spin: themeInfo.spinselected, savesrc: themeInfo.themesrc, selectedtheme: themeInfo.themeselected },
				success: function(data) {
					let copymessage = document.getElementById("downloadtext");
					if(data == "Copy Theme OK Copy Spin OK") {
						copymessage.innerHTML += "Complete .<br>";
						copymessage.innerHTML += "Building " + themeInfo.name + " " +getversiondisplay(themeInfo.version) + ".csm please wait ..... ";
						phptheme();
					}
					else if((data == "Copy Theme ERROR Copy Spin ERROR") || (data == "Copy Theme OK Copy Spin ERROR") || (data == "Copy Theme ERROR Copy Spin OK") ){
						copymessage.innerHTML += "Failed .<br>";
						copymessage.innerHTML += "An Error has occured please try again .<br>";
						closedownloadnoupdate();
					}
					else alert(data);
					//else console.log("ret from copy = " + data)
				},
			}))
		}, 3000);
	});
	return;
}
async function downloadappfile() {
	let thepromise = new Promise( function(resolve) {
		setTimeout( function() { 
			resolve($.ajax({
				url: "index.php",
				type: "POST",
				cache: false,
				data: { action: "appfile", version: themeInfo.version , savesrc: themeInfo.themesrc, name: themeInfo.mymfile, selectedtheme: themeInfo.themeselected },
				success: function(data) {
					//alert(data);
					let copymessage = document.getElementById("downloadtext");
					themeInfo.appfile = data; 
					console.log("app = " + themeInfo.appfile);
					copymessage.innerHTML += "Complete .<br>";
					copymessage.innerHTML += "Copying " + themeInfo.mymfile + " to the working directory ..... ";
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
				data: { action: "makesesdir", savesrc: themeInfo.themesrc, name: themeInfo.mymfile, selectedtheme: themeInfo.themeselected },
				success: function(data) {
					console.log("version = " + themeInfo.version);
					//alert(data);
					let copymessage = document.getElementById("downloadtext");
					copymessage.innerHTML += data;
					copymessage.innerHTML += "Downloading appfile " + getappfiledisplayname(themeInfo.version) + " from System Menu v" + getversiondisplay(themeInfo.version) + " .....  ";
					downloadappfile();
				},
			}))
		}, 3000);
	});
	return;
}
function findMYM(themeinput, regioninput) {
	let mymfile = mym_file[themeinput];
	console.log("mymfile = " + mymfile);
	
	if((themeinput >= 14) && (themeinput <= 21)) {
		let region = null;
		region = Region[regioninput];
		mymfile = mymfile + region + ".mym";
	}
	else mymfile = mym_file[themeinput];

	console.log("mymfile = " + mymfile);
	return mymfile;
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
			else if(versioninput == 3) // 4.1
				return 454;
			else return -1;
		}break;
	}
	return;
}
function buildThemestart() {
	$("#continue").fadeOut("slow");
	themeInfo.themeselected = document.getElementById("theme").selectedIndex;
	themeInfo.versionselected = document.getElementById("menuversion").selectedIndex;
	themeInfo.regionselected = document.getElementById("region").selectedIndex;
	themeInfo.mymfile = findMYM(themeInfo.themeselected, themeInfo.regionselected);
	themeInfo.version = findversionregion(themeInfo.versionselected, themeInfo.regionselected);
	themeInfo.name = theme_list[themeInfo.themeselected];
	let spinoption = document.getElementsByName('option');
	let src = document.getElementById('csmsourcebox');
	themeInfo.themesrc = src.checked;
	console.log(themeInfo.themesrc);
	//debugger;
	for(let i = 0; i < spinoption.length; i++){
		if(spinoption[i].checked){
			themeInfo.spinselected = spinoption[i].value;
			//console.log("spinoption " + themeInfo.spinselected + "\ni =" + i);
		}
	}
	let modal = document.getElementById("downloadtextmodal");
	modal.style.display = "block";
	var modalclose = document.getElementsByClassName("close")[4]; 
	modalclose.onclick = function() {
		$("#downloadtextmodal").slideUp("slow");
		removesessionfolder();
		clearInterval(timer);
		resetglobals();
	}
	let name = document.getElementById("themename");
	name.innerHTML = themeInfo.name;
	$("#downloadtext").html("<br>Please Wait .....<br>Setting session directory and copying needed files ..... ");
	$("#downloadtext").slideDown("slow");
	setsesdir();
	return;
}
function getselected(input) {
	let selectedregion = document.getElementById("region").selectedIndex;
	let selectedversion = document.getElementById("menuversion").selectedIndex;
	let selectedtheme = document.getElementById("theme").selectedIndex;
	
	if(input == 3) {
		loadvideo_img();
	}
	if((selectedtheme >= 0) && (selectedversion > 0) && (selectedregion > 0)) {
		if((selectedregion == 4) && (selectedtheme == 12) && (selectedversion == 4)) {
			$("#continue").slideUp();
			$("#message").html(regionkdarkredmessage + version40kmessage);
			//$("#message").fadeIn();
		}
		else {
			if((selectedregion == 4) && (selectedversion == 4)) {
				$("#continue").slideUp();
				$("#message").html(version40kmessage);
				//$("#message").fadeIn();
			}
			else {
				if((selectedregion == 4) && (selectedtheme == 12)) {
					$("#continue").slideUp();
					$("#message").html(regionkdarkredmessage);
					//$("#message").fadeIn();
				}
				else {
					if((selectedregion == 3) && (selectedversion == 4)) {
						$("#continue").slideUp();
						$("#message").html(regionj40message);
						//$("#message").fadeIn();
					}
					else {
						$("#continue").slideDown();
						$("#message").html("");
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
	$("#preview1").fadeOut("slow", function() {
		document.getElementById("preview1").src = z;
		$("#preview1").fadeIn("slow");
	});
	
	return;
}
// page start -----------------------------------------------------------
function showcontactinfo() {
	var modal = document.getElementById("contactmodal");
	var modal_close = document.getElementsByClassName("close")[3];
	$("#infocontainer").slideUp("slow", function(){
		$("#contactmodal").slideDown("slow");
	});
	modal_close.onclick = function() {
		$("#contactmodal").slideUp("slow", function(){
			$("#infocontainer").slideDown("slow");
		});
	}
	window.onclick = function(event) {
	  if (event.target == modal) {
		$("#contactmodal").slideUp("slow", function(){
			$("#infocontainer").slideDown("slow");
		});
	  }
	}
	return;
}
function showstats() {
	var modal = document.getElementById("statsmodal");
	var modal_close = document.getElementsByClassName("close")[2];
	getcountfiles(1);
	getcountfiles(2);
	$("#infocontainer").slideUp("slow", function(){
		$(".navinner").slideUp("slow");
		$("#themecounttext").text(themecount);
		$("#statsmodal").slideDown("slow");
	});
	modal_close.onclick = function() {
	  $("#statsmodal").slideUp("slow", function(){
		$(".navinner").slideDown("slow");
		$("#infocontainer").slideDown("slow");
	  });
	}
	window.onclick = function(event) {
	  if (event.target == modal) {
		$("#statsmodal").slideUp("slow", function(){
			$(".navinner").slideDown("slow");
			$("#infocontainer").slideDown("slow");
		});
	  }
	}
	return;
}
function showLinks() {
	var modal = document.getElementById("linksmodal");
	var modal_close = document.getElementsByClassName("close")[1];
	getcountfiles(3);
	getcountfiles(4);
	$("#infocontainer").slideUp("slow");
	$("#linksmodal").slideDown("slow");
	modal_close.onclick = function() {
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
function showbuilding() {
	$(".navinner").fadeOut("slow");
	$("#infocontainer").slideUp("slow");
	var modal = document.getElementById("buildmodal");
	var modal_close = document.getElementsByClassName("close")[0];
	showsinglethemeimg(themeposition);
	$("#infocontainer").slideUp("slow");
	$("#buildmodal").slideDown("slow");
	
	modal_close.onclick = function() {
	  $("#buildmodal").slideUp("slow");
	  $(".navinner").fadeIn("slow");
	  $("#infocontainer").slideDown("slow");
	  $("#themevideocontainer").hide();
	  resetglobals();
	}
	return;
}
function startphpsession() {
	$.ajax({
		url: "index.php",
		type: "POST",
		cache: false,
		data: { action: "getsessionId" },
		success: function(data) {
			sessionid = data;
			setCookie("Id", data);
		},
	});
	return sessionid;
}
function checkpageload() {
	if(checkCookie("Id")) {
		//console.log(document.cookie);
		getcountfiles(1);
	}
	else {
		let id = startphpsession();
		//console.log(id);
		updatecountfiles(1);
	}
	return;
}
function nav(navinput) {
	switch(navinput) {
		case 1:
			showbuilding();
		break;
		case 2:
			showLinks();
		break;
		case 3:
			showstats();
		break
		case 4:
			showcontactinfo();
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
	/*$.ajax({
		url: "index.php",
		type: "POST",
		cache: false,
		data: { action: "getthemevideo" },
		success: function(data) {
			//console.log(data);
			
			themevideo = data.split("\n");
		},
	});*/



	return;
}
function loadthemelist() {
	
	//console.log("themecount = " + themecount);
	/*$.ajax({
		url: "index.php",
		type: "POST",
		cache: false,
		data: { action: "getthemelist" },
		success: function(data) {
			themelist = data.split("\n");
		},
		complete: function() {
			
		},
	});*/
	
	for (let i = 0; i < themecount; i++) { 
		$('#theme').append($('<option>',
		{
			value: i,
			text : theme_list[i] 
		}
		));
	}

	return;
}
function setCookie(cname, cvalue) {
	document.cookie = cname + "=" + cvalue + ";" + "Samesite=Strict";
	return;
}
function getCookie(cname) {
	let id = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
  	let ca = decodedCookie.split(';');
 	for(let i = 0; i <ca.length; i++) {
	  	let c = ca[i];
	  	while (c.charAt(0) == ' ') {
 		 	c = c.substring(1);
	  	}
	  	if (c.indexOf(id) == 0) {
			return c.substring(id.length, c.length);
 		}
  	}
	return "";
}
function checkCookie(input) {
	let ret = null;
	let id = getCookie(input);
	if (id != "") {
		//console.log("session id set = " + id);
		ret = true;
	} 
	else {
		//console.log("first load set cookie");
		ret = false;
	}
	return ret;
}