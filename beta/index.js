var themeposition = 0;
var closecntr = 180;
var minutesleft = 2;
var seccntr = 0;
var themeInfo = {};
var sessionid = null;
var themevideomode = false;
var completefileinfo = [null];
var timer = null;
var commenting = 0;
var viewing = 0;
const Region = ["", "U", "E", "J", "K"];
const regionkdarkredmessage = "Dark Wii Red was not offically made for the Korean region .<br>";
const regionj40message = "4.0 themes not building at moment for J region .<br>The file size is 3.68 MB but should be over 6 MB .<br>Try again at a later date .<br>";
const version = ["", "4.3", "4.2", "4.1", "4.0", "vWii (WiiU)"];
const version40kmessage = "The Korean region did not have System Menu v4.0 .<br>";
const max_themes = 250;
const theme_count = 135;
const backgrounds = [
	"url('img/backgrounds/animalcrossing.png')",
	"url('img/backgrounds/ATHF.png')",
	"url('img/backgrounds/bakugan.png')",
	"url('img/backgrounds/batmanv1.png')",
	"url('img/backgrounds/batmanv2.png')",
	"url('img/backgrounds/blackmage.png')",
	"url('img/backgrounds/blackpirate.png')",
	"url('img/backgrounds/bleach.png')",
	"url('img/backgrounds/boondocksaints.png')",
	"url('img/backgrounds/bowser.png')",
	"url('img/backgrounds/broly.png')",
	"url('img/backgrounds/callofduty.png')",
	"url('img/backgrounds/car.png')",
	"url('img/backgrounds/cars.png')",
	"url('img/backgrounds/codegeass.png')",
	"url('img/backgrounds/constantine.png')",
	"url('img/backgrounds/darkwiioriginal.png')",
	"url('img/backgrounds/darkwiiblue.png')",
	"url('img/backgrounds/darkwiigreen.png')",
	"url('img/backgrounds/darkwiiorange.png')",
	"url('img/backgrounds/darkwiipink.png')",
	"url('img/backgrounds/darkwiipurple.png')",
	"url('img/backgrounds/darkwiired.png')",
	"url('img/backgrounds/darkwiiwhite.png')",
	"url('img/backgrounds/darkwiiyellow.png')",
	"url('img/backgrounds/dethklok.png')",
	"url('img/backgrounds/discord.png')",
	"url('img/backgrounds/dragonballzv1.png')",
	"url('img/backgrounds/dragonballzv2.png')",
	"url('img/backgrounds/drwho.png')",
	"url('img/backgrounds/earthbound.png')",
	"url('img/backgrounds/evildead.png')",
	"url('img/backgrounds/excitebots.png')",
	"url('img/backgrounds/eyes.png')",
	"url('img/backgrounds/fairlyoddparents.png')",
	"url('img/backgrounds/familyguy.png')",
	"url('img/backgrounds/fantasy.png')",
	"url('img/backgrounds/fightclub.png')",
	"url('img/backgrounds/finalfantasy7.png')",
	"url('img/backgrounds/firewii.png')",
	"url('img/backgrounds/flowerpower.png')",
	"url('img/backgrounds/fridaynightfunkin.png')",
	"url('img/backgrounds/fridaythe13th.png')",
	"url('img/backgrounds/fullmetalalchemist.png')",
	"url('img/backgrounds/futurama.png')",
	"url('img/backgrounds/gaara.png')",
	"url('img/backgrounds/gearsofwar.png')",
	"url('img/backgrounds/ghostbusters.png')",
	"url('img/backgrounds/goldensun.png')",
	"url('img/backgrounds/handdrawn.png')",
	"url('img/backgrounds/hellokitty.png')",
	"url('img/backgrounds/heman.png')",
	"url('img/backgrounds/heros.png')",
	"url('img/backgrounds/inbetweeners.png')",
	"url('img/backgrounds/icp.png')",
	"url('img/backgrounds/itsamemario.png')",
	"url('img/backgrounds/joker.png')",
	"url('img/backgrounds/jurassicpark3.png')",
	"url('img/backgrounds/kingdomhearts.png')",
	"url('img/backgrounds/kirby.png')",
	"url('img/backgrounds/korn.png')",
	"url('img/backgrounds/leopardos.png')",
	"url('img/backgrounds/limewii.png')",
	"url('img/backgrounds/looneytoons.png')",
	"url('img/backgrounds/lost.png')",
	"url('img/backgrounds/luigi.png')",
	"url('img/backgrounds/luigiv2.png')",
	"url('img/backgrounds/madworld.png')",
	"url('img/backgrounds/majorasmask.png')",
	"url('img/backgrounds/mariojeb.png')",
	"url('img/backgrounds/mariokart.png')",
	"url('img/backgrounds/matrix.png')",
	"url('img/backgrounds/matrixreloaded.png')",
	"url('img/backgrounds/megaman.png')",
	"url('img/backgrounds/metalgearsolid.png')",
	"url('img/backgrounds/metallica.png')",
	"url('img/backgrounds/metroid.png')",
	"url('img/backgrounds/mortalkombat.png')",
	"url('img/backgrounds/muse.png')",
	"url('img/backgrounds/naruto.png')",
	"url('img/backgrounds/nightmareb4xmas.png')",
	"url('img/backgrounds/okami.png')",
	"url('img/backgrounds/oldschoolnintendo.png')",
	"url('img/backgrounds/pikmin.png')",
	"url('img/backgrounds/pinkwii.png')",
	"url('img/backgrounds/psycedelic.png')",
	"url('img/backgrounds/punchout.png')",
	"url('img/backgrounds/punisher.png')",
	"url('img/backgrounds/ratchetnclank.png')",
	"url('img/backgrounds/robotchicken.png')",
	"url('img/backgrounds/rockband2.png')",
	"url('img/backgrounds/shadowthehedgehog.png')",
	"url('img/backgrounds/silverthehedgehog.png')",
	"url('img/backgrounds/smashbros.png')",
	"url('img/backgrounds/snoopy.png')",
	"url('img/backgrounds/spawn.png')",
	"url('img/backgrounds/spiderman.png')",
	"url('img/backgrounds/spongebob.png')",
	"url('img/backgrounds/squidbillies.png')",
	"url('img/backgrounds/starcraft.png')",
	"url('img/backgrounds/stargate.png')",
	"url('img/backgrounds/starwars.png')",
	"url('img/backgrounds/starwarsunleashed.png')",
	"url('img/backgrounds/steelwii.png')",
	"url('img/backgrounds/streetfighter.png')",
	"url('img/backgrounds/superherosquad.png')",
	"url('img/backgrounds/supermariorpg.png')",
	"url('img/backgrounds/supersonic.png')",
	"url('img/backgrounds/simpsons.png')",
	"url('img/backgrounds/tails.png')",
	"url('img/backgrounds/terminator.png')",
	"url('img/backgrounds/thundercats.png')",
	"url('img/backgrounds/tmnt.png')",
	"url('img/backgrounds/tombraider.png')",
	"url('img/backgrounds/toxictoons.png')",
	"url('img/backgrounds/transformers.png')",
	"url('img/backgrounds/trigun.png')",
	"url('img/backgrounds/trueblood.png')",
	"url('img/backgrounds/ultimatedarkwii.png')",
	"url('img/backgrounds/vegeta.png')",
	"url('img/backgrounds/vista.png')",
	"url('img/backgrounds/walleye.png')",
	"url('img/backgrounds/warioware.png')",
	"url('img/backgrounds/whitestripes.png')",
	"url('img/backgrounds/whitewii.png')",
	"url('img/backgrounds/wiid.png')",
	"url('img/backgrounds/wiifit.png')",
	"url('img/backgrounds/wiisports.png')",
	"url('img/backgrounds/wiiu.png')",
	"url('img/backgrounds/windowsxp.png')",
	"url('img/backgrounds/wolverine.png')",
	"url('img/backgrounds/wweraw.png')",
	"url('img/backgrounds/yugioh.png')",
	"url('img/backgrounds/zelda.png')",
	"url('img/backgrounds/zombwii.png')"
];
const theme_image_list2 = [
	"animalcrossing.png",
	"ATHF.png",
	"bakugan.png",
	"batmanv1.png",
	"batmanv2.png",
	"blackmage.png",
	"blackpirate.png",
	"bleach.png",
	"boondocksaints.png",
	"bowser.png",
	"broly.png",
	"callofduty.png",
	"car.png",
	"cars.png",
	"codegeass.png",
	"constantine.png",
	"darkwiioriginal.png",
	"darkwiiblue.png",
	"darkwiigreen.png",
	"darkwiiorange.png",
	"darkwiipink.png",
	"darkwiipurple.png",
	"darkwiired.png",
	"darkwiiwhite.png",
	"darkwiiyellow.png",
	"dethklok.png",
	"discord.png",
	"dragonballzv1.png",
	"dragonballzv2.png",
	"drwho.png",
	"earthbound.png",
	"evildead.png",
	"excitebots.png",
	"eyes.png",
	"fairlyoddparents.png",
	"familyguy.png",
	"fantasy.png",
	"fightclub.png",
	"finalfantasy7.png",
	"firewii.png",
	"flowerpower.png",
	"fridaynightfunkin.png",
	"fridaythe13th.png",
	"fullmetalalchemist.png",
	"futurama.png",
	"gaara.png",
	"gearsofwar.png",
	"ghostbusters.png",
	"goldensun.png",
	"handdrawn.png",
	"hellokitty.png",
	"heman.png",
	"heros.png",
	"inbetweeners.png",
	"icp.png",
	"itsamemario.png",
	"joker.png",
	"jurassicpark3.png",
	"kingdomhearts.png",
	"kirby.png",
	"korn.png",
	"leopardos.png",
	"limewii.png",
	"looneytoons.png",
	"lost.png",
	"luigi.png",
	"luigiv2.png",
	"madworld.png",
	"majorasmask.png",
	"mariojeb.png",
	"mariokart.png",
	"matrix.png",
	"matrixreloaded.png",
	"megaman.png",
	"metalgearsolid.png",
	"metallica.png",
	"metroid.png",
	"mortalkombat.png",
	"muse.png",
	"naruto.png",
	"nightmareb4xmas.png",
	"okami.png",
	"oldschoolnintendo.png",
	"pikmin.png",
	"pinkwii.png",
	"psycedelic.png",
	"punchout.png",
	"punisher.png",
	"ratchetnclank.png",
	"robotchicken.png",
	"rockband2.png",
	"shadowthehedgehog.png",
	"silverthehedgehog.png",
	"smashbros.png",
	"snoopy.png",
	"spawn.png",
	"spiderman.png",
	"spongebob.png",
	"squidbillies.png",
	"starcraft.png",
	"stargate.png",
	"starwars.png",
	"starwarsunleashed.png",
	"steelwii.png",
	"streetfighter.png",
	"superherosquad.png",
	"supermariorpg.png",
	"supersonic.png",
	"simpsons.png",
	"tails.png",
	"terminator.png",
	"thundercats.png",
	"tmnt.png",
	"tombraider.png",
	"toxictoons.png",
	"transformers.png",
	"trigun.png",
	"trueblood.png",
	"ultimatedarkwii.png",
	"vegeta.png",
	"vista.png",
	"walleye.png",
	"warioware.png",
	"whitestripes.png",
	"whitewii.png",
	"wiid.png",
	"wiifit.png",
	"wiisports.png",
	"wiiu.png",
	"windowsxp.png",
	"wolverine.png",
	"wweraw.png",
	"yugioh.png",
	"zelda.png",
	"zombwii.png"
];
const theme_image_list = [ 
	"animalcrossing.avif",
	"aquateenhungerforce.avif",
	"bakugan.avif",
	"batmanv1.avif",
	"batmanv2.avif",
	"blackmage.avif",
	"blackpirate.avif",
	"bleach.avif",
	"boondocksaints.avif",
	"bowser.avif",
	"broly.avif",
	"callofduty.avif",
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
	"fairlyoddparents.avif",
	"familyguy.avif",
	"Fantasy.avif",
	"FightClub.avif",
	"FinalFantasy7.avif",
	"firewii.avif",
	"flowerpower.avif",
	"fridaynightfunkin.avif",
	"fridaythe13th.avif",
	"fullmetalalchemist.avif",
	"futurama.avif",
	"gaara.avif",
	"gearsofwar.avif",
	"ghostbusters.avif",
	"GoldenSun.avif",
	"HandDrawn.avif",
	"HelloKitty.avif",
	"heman.avif",
	"heros.avif",
	"inbetweeners.avif",
	"icp.avif",
	"itsamemario.avif",
	"joker.avif",
	"jurassicpark3.avif",
	"kingdomhearts.avif",
	"kirby.avif",
	"korn.avif",
	"leopardos.avif",
	"limewii.avif",
	"looneytoons.avif",
	"lost.avif",
	"luigi.avif",
	"luigiv2.avif",
	"madworld.avif",
	"majorasmask.avif",
	"mario.avif",
	"mariokart.avif",
	"matrix.avif",
	"matrixreloaded.avif",
	"megaman.avif",
	"metalgearsolid.avif",
	"metallica.avif",
	"metroid.avif",
	"mortalkombat.avif",
	"muse.avif",
	"naruto.avif",
	"nightmareb4xmas.avif",
	"okami.avif",
	"oldschoolnintendo.avif",
	"pikmin.avif",
	"pinkwii.avif",
	"Psychedelic.avif",
	"punch_out.avif",
	"punisher.avif",
	"ratchetandclank.avif",
	"robotchicken.avif",
	"rockband2.avif",
	"shadowthehedgehog.avif",
	"silverthehedgehog.avif",
	"smashbros.avif",
	"snoopy.avif",
	"spawn.avif",
	"spiderman.avif",
	"spongebob.avif",
	"squidbillies.avif",
	"starcraft.avif",
	"stargate.avif",
	"starwars.avif",
	"starwarsunleashed.avif",
	"steelwii.avif",
	"streetfighter.avif",
	"superherosquad.avif",
	"supermarioRPG.avif",
	"supersonic.avif",
	"thesimpsons.avif",
	"tails.avif",
	"terminator.avif",
	"thundercats.avif",
	"tmnt.avif",
	"tombraider.avif ",
	"toxictoons.avif",
	"transformers.avif",
	"trigun.avif",
	"trueblood.avif",
	"ultimatedarkwii.avif",
	"vegeta.avif",
	"vista.avif",
	"walleye.avif",
	"warioware.avif",
	"whitestripes.avif",
	"whitewii.avif",
	"wiid.avif",
	"wiifit.avif",
	"wiisports.avif",
	"wiiu.avif",
	"winxpos.avif",
	"wolverine.avif",
	"wweraw.avif",
	"yugioh.avif",
	"zelda.avif",
	"zombwii.avif"
];
const theme_list = [ "Animal Crossing",
"Aqua Teen Hunger Force",
"Bakugan",
"Batman v1",
"Batman v2",
"Black Mage",
"Black Pirate",
"Bleach",
"Boondock Saints",
"Bowser",
"Broly",
"Call of Duty",
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
"Fairly Odd Parents",
"Family Guy",
"Fantasy",
"Fight Club",
"Final Fantasy 7",
"Fire Wii",
"Flower Power",
"Friday Night Funkin",
"Friday the 13th",
"Full Metal Alchemist",
"Futurama",
"Gaara",
"Gears of War",
"Ghost Busters",
"Golden Sun",
"Hand Drawn",
"Hello Kitty",
"He-Man",
"Heros",
"In Betweeners",
"Insane Clown Posse",
"Its A Me Mario",
"Joker",
"Jurassic Park 3",
"Kingdom Hearts",
"Kirby",
"Korn",
"Leopard OS",
"Lime Wii",
"Looney Toons",
"Lost",
"Luigi",
"Luigi v2",
"Mad World",
"Majoras Mask",
"Mario",
"Mario Kart",
"Matrix",
"Matrix Reloaded",
"MegaMan",
"Metal Gear Solid",
"Metallica",
"Metroid",
"Mortal Kombat",
"Muse",
"Naruto",
"Nightmare B4 Xmas",
"Okami",
"Old School Nintendo",
"Pikmin",
"Pink Wii",
"Psychedelic",
"Punch Out",
"The Punisher",
"Ratchet and Clank",
"Robot Chicken",
"Rockband 2",
"Shadow The Hedgehog",
"Silver The Hedgehog",
"Smash Brothers",
"Snoopy",
"Spawn",
"Spiderman",
"SpongeBob",
"Squid Billies",
"StarCraft",
"Star Gate",
"Star Wars",
"Star Wars Unleashed",
"Steel Wii",
"Street Fighter",
"Super Hero Squad",
"Super Mario RPG",
"Super Sonic",
"The Simpsons",
"Tails",
"The Terminator",
"Thunder Cats",
"Teenage Mutant Ninja Turtles",
"Tomb Raider",
"Toxic Toons",
"Transformers",
"Tri-Gun",
"True Blood",
"Ultimate Dark Wii",
"Vegeta",
"Vista",
"Walleye",
"Wario Ware",
"White Stripes",
"White Wii",
"Wiid",
"Wii Fit",
"Wii Sports",
"Wii U",
"Win XP OS",
"Wolverine",
"WWE Raw",
"Yugi-oh",
"Zelda" ,
"ZombWii"
];
const mym_file = [ "animal_crossing.mym",
"aqua_teen_hunger_forcestage1.mym",
"bakugan.mym",
"batman_v1.mym",
"batman_v2.mym",
"black_mage.mym",
"black_pirate.mym",
"bleach.mym",
"boondock_saints.mym",
"bowser.mym",
"broly.mym",
"call_of_duty.mym",
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
"fairly_odd_parentsstage1.mym",
"family_guy.mym",
"fantasy.mym",
"fight_club.mym",
"final_fantasy_7.mym",
"fire_wii.mym",
"flower_powerstage1.mym",
"friday_night_funkin.mym",
"friday_the_13thstage1.mym",
"full_metal_alchemist",
"futurama.mym",
"gaara.mym",
"gears_of_war.mym",
"ghost_busters.mym",
"golden_sun.mym",
"hand_drawn.mym",
"hello_kitty.mym",
"he-manstage1.mym",
"heros.mym",
"in_betweeners.mym",
"insane_clown_posse.mym",
"itsamemario.mym",
"jokerstage1.mym",
"jurassic_park_3.mym",
"kingdom_hearts.mym",
"kirby.mym",
"korn.mym",
"leopard_os.mym",
"lime_wii.mym",
"looney_toons.mym",
"lost.mym",
"luigi.mym",
"luigiv2stage1.mym",
"mad_world.mym",
"majoras_mask.mym",
"mario.mym",
"mario_kart.mym",
"matrix.mym",
"matrix_reloaded.mym",
"megaman.mym",
"metal_gear_solid.mym",
"metallica.mym",
"metroid.mym",
"mortal_kombat.mym",
"muse.mym",
"naruto.mym",
"nightmare_b4_xmas.mym",
"okami.mym",
"old_school_nintendo.mym",
"pikmin.mym",
"pinkwii.mym",
"psychedelic.mym",
"punch_out.mym",
"punisherstage1.mym",
"ratchet_and_clank.mym",
"robot_chicken.mym",
"rockband_2.mym",
"shadow_the_hedgehog.mym",
"silver_the_hedgehog.mym",
"smash_bros.mym",
"snoopy.mym",
"spawn.mym",
"Spiderman.mym",
"spongebob.mym",
"squid_billiesstage1.mym",
"star_craft.mym",
"star_gate.mym",
"star_wars.mym",
"star_wars_unleashed.mym",
"steel_wii.mym",
"street_fighter.mym",
"super_hero_squad.mym",
"super_mario_RPG.mym",
"super_sonic.mym",
"the_simpsons.mym",
"tailsstage1.mym",
"terminator.mym",
"thunder_cats.mym",
"tmnt.mym",
"tomb_raider.mym",
"toxic_toons.mym",
"transformers.mym",
"tri-gun.mym",
"true_blood.mym",
"ultimate_dark_wiistage1.mym",
"vegeta.mym",
"vista.mym",
"walleye.mym",
"wario_ware.mym",
"white_stripesstage1.mym",
"whitewii.mym",
"wiid.mym",
"wii_fit.mym",
"wii_sports.mym",
"wiiu.mym",
"win_xp_os.mym",
"wolverine.mym",
"wwe_raw.mym",
"yugioh.mym",
"zelda.mym",
"zombwii.mym"
 ];
const theme_video = [ "https://www.youtube.com/embed/2hZHkraXOpA?autoplay=0&mute=1",
"https://www.youtube.com/embed/HtIxy7EuSEA?si=OafY-qA2HJS3G5A5?autoplay=0&mute=1",
"https://www.youtube.com/embed/1sje3UaUNK4?autoplay=0&mute=1",
"https://www.youtube.com/embed/_O_pPfQe5Do?autoplay=0&mute=1",
"https://www.youtube.com/embed/RhfS_ZdaDVU?autoplay=0&mute=1",
"https://www.youtube.com/embed/Nm_I4p-a4qo?autoplay=0&mute=1",
"https://www.youtube.com/embed/6o4L6axGsgU?autoplay=0&mute=1",
"https://www.youtube.com/embed/6R7Zgni2vbQ?autoplay=0&mute=1",
"https://www.youtube.com/embed/5tk08eRKYNI?autoplay=0&mute=1",
"https://www.youtube.com/embed/tdYdYU1KKdw?autoplay=0&mute=1",
"https://www.youtube.com/embed/-rd2YPJ9jOE?autoplay=0&mute=1",
"https://www.youtube.com/embed/zaHUh0pinlA?autoplay=0&mute=1",
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
"https://www.youtube.com/embed/ev9kNqy1VXY?si=MQ0YD-mLlIfgqW5s?autoplay=0&mute=1",
"https://www.youtube.com/embed/SHgd0t4BENI?autoplay=0&mute=1",
"https://www.youtube.com/embed/hGqk0wQL9Us?autoplay=0&mute=1",
"https://www.youtube.com/embed/WVY8mcnJmu8?autoplay=0&mute=1",
"https://www.youtube.com/embed/bymdnStOo9U?autoplay=0&mute=1",
"https://www.youtube.com/embed/eJLl2_ZMf6s?autoplay=0&mute=1",
"https://www.youtube.com/embed/lpoNMkhUYhA?si=B4fltaw9eZfFDkQY?autoplay=0&mute=1",
"https://www.youtube.com/embed/VkbcQsz57nM?si=yqN-PFAOKuyVn1EV?autoplay=0&mute=1",
"https://www.youtube.com/embed/SKT-nmQC68o?si=fWW98k2AViFDSKAO?autoplay=0&mute=1",
"https://www.youtube.com/embed/ZpPcjebgEUY?autoplay=0&mute=1",
"https://www.youtube.com/embed/x0mCDuiWYpA?autoplay=0&mute=1",
"https://www.youtube.com/embed/nEofNIw_Xps?autoplay=0&mute=1",
"https://www.youtube.com/embed/0AUq2xqwlEc?autoplay=0&mute=1",
"https://www.youtube.com/embed/q1Y3VAmsXxM?autoplay=0&mute=1",
"https://www.youtube.com/embed/qZO74MDfGXY?autoplay=0&mute=1",
"https://www.youtube.com/embed/e19Hk1Zbp0c?autoplay=0&mute=1",
"https://www.youtube.com/embed/Rh-_PneEKCY?autoplay=0&mute=1",
"https://www.youtube.com/embed/vUzusxTYj9w?si=UNjjoXBw-c4BJBWc?autoplay=0&mute=1",
"https://www.youtube.com/embed/kM-Sgb2wRig?autoplay=0&mute=1",
"https://www.youtube.com/embed/Ng8-yaNi1gE?autoplay=0&mute=1",
"https://www.youtube.com/embed/nKo90-C1d8U?autoplay=0&mute=1",
"https://www.youtube.com/embed/RXxxwKtNPJk?autoplay=0&mute=1",
"https://www.youtube.com/embed/cok8NmKGrQk?si=x43QProMRv3A1K35?autoplay=0&mute=1",
"https://www.youtube.com/embed/bgmwbNsbT04?autoplay=0&mute=1",
"https://www.youtube.com/embed/YQf3umMzGNs?autoplay=0&mute=1",
"https://www.youtube.com/embed/NoPUDwdQy8Q?autoplay=0&mute=1",
"https://www.youtube.com/embed/WJM0t8M3Q9s?autoplay=0&mute=1",
"https://www.youtube.com/embed/yZsh5Eiys04?autoplay=0&mute=1",
"https://www.youtube.com/embed/_L1V84YnIi4?autoplay=0&mute=1",
"https://www.youtube.com/embed/D5dFtKsQhYE?autoplay=0&mute=1",
"https://www.youtube.com/embed/MGjEbT6j5U4?autoplay=0&mute=1",
"https://www.youtube.com/embed/kIQWI1lfvN8?autoplay=0&mute=1",
"https://www.youtube.com/embed/T-0HcukGFvs?si=kgnGp1US233zqxmo?autoplay=0&mute=1",
"https://www.youtube.com/embed/c69ct5P0P_o?autoplay=0&mute=1",
"https://www.youtube.com/embed/g-PrcM-Qr80?autoplay=0&mute=1",
"https://www.youtube.com/embed/mbT0hzSG2AU?autoplay=0&mute=1",
"https://www.youtube.com/embed/dCfbtnEWnLI?autoplay=0&mute=1",
"https://www.youtube.com/embed/X2qGmB8Bc9k?autoplay=0&mute=1",
"https://www.youtube.com/embed/mIn8GGGGZ8k?autoplay=0&mute=1",
"https://www.youtube.com/embed/PFM5_FM2kwc?autoplay=0&mute=1",
"https://www.youtube.com/embed/6VRbu8JYn88?autoplay=0&mute=1",
"https://www.youtube.com/embed/FnTMu9nb2Og?autoplay=0&mute=1",
"https://www.youtube.com/embed/vE0OAUJQ9DY?autoplay=0&mute=1",
"https://www.youtube.com/embed/K0qxTtMF7E4?autoplay=0&mute=1",
"https://www.youtube.com/embed/X0LAu5pYY8w?autoplay=0&mute=1",
"https://www.youtube.com/embed/7gwaDaD3Xpo?autoplay=0&mute=1",
"https://www.youtube.com/embed/yMMcV_JmZY8?autoplay=0&mute=1",
"https://www.youtube.com/embed/TkcnWGy-ujQ?autoplay=0&mute=1",
"https://www.youtube.com/embed/mJ5oMzBG1ZU?autoplay=0&mute=1",
"https://www.youtube.com/embed/243IWjOtVW0?autoplay=0&mute=1",
"https://www.youtube.com/embed/6KIc0Ti_yek?si=8Rm43KU7WHDQwgsV?autoplay=0&mute=1",
"https://www.youtube.com/embed/7aFjlUc8qlo?autoplay=0&mute=1",
"https://www.youtube.com/embed/ZLUdB9Kcfsg?si=p1MxmyLtZtlQyghJ?autoplay=0&mute=1",
"https://www.youtube.com/embed/iSYrRCjLmCg?si=uVN5DKmzOxJYR_Ta?autoplay=0&mute=1",
"https://www.youtube.com/embed/G_z6DopJRRo?autoplay=0&mute=1",
"https://www.youtube.com/embed/FNNp-U3oVoA?si=9i1qyazsGQwT5e0J?autoplay=0&mute=1",
"https://www.youtube.com/embed/HojBuUxihp0?autoplay=0&mute=1",
"https://www.youtube.com/embed/yOXIGrcxR8A?autoplay=0&mute=1",
"https://www.youtube.com/embed/sUx2VXxMLr0?si=8_HUuPqHAL3ZFMRm?autoplay=0&mute=1",
"https://www.youtube.com/embed/03U2w5wxjBI?si=Gx5DCBH652Cz0fUq?autoplay=0&mute=1",
"https://www.youtube.com/embed/R4Q3qtGEdcY?si=GfMZojNlX3aaVe6L?autoplay=0&mute=1",
"https://www.youtube.com/embed/ty2cAYvhqwE?si=zOcqMAxxXFvFkW0v?autoplay=0&mute=1",
"https://www.youtube.com/embed/FBqAhYI2eb0?autoplay=0&mute=1",
"https://www.youtube.com/embed/9uTA4kcxy7s?si=L855-PxHBxFVYZAa?autoplay=0&mute=1",
"https://www.youtube.com/embed/Si1EK-0t_l4?si=xXq63txbpE2kF6Jo?autoplay=0&mute=1",
"https://www.youtube.com/embed/Skg45dVotEQ?si=3mqJ_jgB2bXH9Hn9?autoplay=0&mute=1",
"https://www.youtube.com/embed/6LwuadUQlME?si=kDPm8DudqC4U1401?autoplay=0&mute=1",
"https://www.youtube.com/embed/DYSM94FogyE?si=Y_IWo8pldhinyw0o?autoplay=0&mute=1",
"https://www.youtube.com/embed/rEzDAw0MGDo?si=mFL6Jj29KfGEz3A9?autoplay=0&mute=1",
"https://www.youtube.com/embed/xPt3KYIEG3s?si=tE6mo4fh9V-_q4Ci?autoplay=0&mute=1",
"https://www.youtube.com/embed/KLXauIJOTDA?si=hk-rGcX3ZEwfoKXb?autoplay=0&mute=1",
"https://www.youtube.com/embed/VB-v2TYAO0g?autoplay=0&mute=1",
"https://www.youtube.com/embed/wMuN_a_lNqU?autoplay=0&mute=1",
"https://www.youtube.com/embed/h0OdHk8D0aQ?autoplay=0&mute=1",
"https://www.youtube.com/embed/Akl4tZ9eJio?autoplay=0&mute=1",
"https://www.youtube.com/embed/z5zAlItABAQ?si=SMjSBQ5WNZkofdUK?autoplay=0&mute=1",
"https://www.youtube.com/embed/rMwms3XB1DQ?si=a-wTlhaFf9i6FT8d?autoplay=0&mute=1",
"https://www.youtube.com/embed/LJW-3B1Vooo?autoplay=0&mute=1",
"https://www.youtube.com/embed/6cF81fjLRO4?autoplay=0&mute=1",
"https://www.youtube.com/embed/-H16kD1wlKc?autoplay=0&mute=1",
"https://www.youtube.com/embed/IRLjeDzfiGQ?si=nuXELrmXGWmn7iV4?autoplay=0&mute=1",
"https://www.youtube.com/embed/hdEywhMs8m0?si=rg3o7Ea3Lf5sHn3D?autoplay=0&mute=1",
"https://www.youtube.com/embed/M7r54ClgzbY?si=23MBlhmxBPjDoC45?autoplay=0&mute=1",
"https://www.youtube.com/embed/9h0TWXmV80E?autoplay=0&mute=1",
"https://www.youtube.com/embed/2-CDQr4YMJ4?si=qp3dj9ijyVunPuHG?autoplay=0&mute=1",
"https://www.youtube.com/embed/QO3Zf1XGBVs?si=Gxc3002G73FKOPbP?autoplay=0&mute=1",
"https://www.youtube.com/embed/Il6_-qWc1FM?si=iOQATO9ISemWG7vR?autoplay=0&mute=1",
"https://www.youtube.com/embed/VD9qS8ZDQRA?si=y9wzIibaPgxiw9oJ?autoplay=0&mute=1",
"https://www.youtube.com/embed/uAIRvmuH4-E?si=Y5eph5DHxIYvpIQr?autoplay=0&mute=1",
"https://www.youtube.com/embed/f3ZobSsLBag?si=XlY3fp3KQq6ER-EW?autoplay=0&mute=1",
"https://www.youtube.com/embed/GoGr3jLUy38?si=2kGrKcINQACVq-Tt?autoplay=0&mute=1",
"https://www.youtube.com/embed/Gf2VpyzUVS8?si=BUGS3t8C_jzSObPe?autoplay=0&mute=1",
"https://www.youtube.com/embed/-IZVm5xSKCY?si=4mlNRyPnoQwAbrkK?autoplay=0&mute=1",
"https://www.youtube.com/embed/nijDjtXZwTE?si=W6Ayevn-1xZUNo1D?autoplay=0&mute=1",
"https://www.youtube.com/embed/eAwrGrJQa3I?si=p--wxO_ygmTeAox_?autoplay=0&mute=1",
"https://www.youtube.com/embed/CpMXYTumKEE?autoplay=0&mute=1",
"https://www.youtube.com/embed/S60LeJR6a54?autoplay=0&mute=1",
"https://www.youtube.com/embed/-wOT9u73m1M?si=cJSm8nPVI90DaOMr?autoplay=0&mute=1",
"https://www.youtube.com/embed/sAOFnf7aGfs?si=t7e2g2Kqfn57KR4J?autoplay=0&mute=1",
"https://www.youtube.com/embed/1NptoYk4ljA?autoplay=0&mute=1",
"https://www.youtube.com/embed/3A-N2TKvvro?si=4osUusbbeCAC8rp9?autoplay=0&mute=1"
 ];
const downloadcntfile = [ "animal_crossing.txt",
"aqua_teen_hunger_force.txt",
"bakugan.txt",
"batman_v1.txt",
"batman_v2.txt",
"black_mage.txt",
"black_pirate.txt",
"bleach.txt",
"boondock_saints.txt",
"bowser.txt",
"broly.txt",
"call_of_duty.txt",
"car.txt",
"cars.txt",
"code_geass.txt", 
"constantine.txt", // 10
"dark_wii_original.txt",
"dark_wii_blue.txt",
"dark_wii_green.txt",
"dark_wii_orange.txt",
"dark_wii_pink.txt",
"dark_wii_purple.txt",
"dark_wii_red.txt",
"dark_wii_white.txt",
"dark_wii_yellow.txt",
"deth_klok.txt",
"discord.txt",
"dragon_ball_z_v1.txt",
"dragon_ball_z_v2.txt",
"dr_who.txt",
"earth_bound.txt",
"evil_dead.txt",
"excite_bots.txt",
"eyes.txt",
"fairlyoddparents.txt",
"family_guy.txt",
"fantasy.txt",
"fight_club.txt",
"final_fantasy_7.txt",
"fire_wii.txt",
"flowerpower.txt",
"fridaynightfunkin.txt",
"fridaythe13th.txt",
"full_metal_alchemist.txt",
"futurama.txt",
"gaara.txt",
"gears_of_war.txt",
"ghost_busters.txt",
"golden_sun.txt",
"hand_drawn.txt",
"hello_kitty.txt",
"heman.txt",
"heros.txt",
"in_betweeners.txt",
"insane_clown_posse.txt",
"itsamemario.txt",
"joker.txt",
"jurassic_park_3.txt",
"kingdom_hearts.txt",
"kirby.txt",
"korn.txt",
"leopard_os.txt",
"lime_wii.txt",
"looney_toons.txt",
"lost.txt",
"luigi.txt",
"luigiv2.txt",
"mad_world.txt",
"majoras_mask.txt",
"mario.txt",
"mario_kart.txt",
"matrix.txt",
"matrix_reloaded.txt",
"megaman.txt",
"metal_gear_solid.txt",
"metallica.txt",
"metroid.txt",
"mortal_kombat.txt",
"muse.txt",
"naruto.txt",
"nightmare_b4_xmas.txt",
"okami.txt",
"old_school_nintendo.txt",
"pikmin.txt",
"pinkwii.txt",
"psychedelic.txt",
"punch_out.txt",
"punisher.txt",
"ratchet_and_clank.txt",
"robot_chicken.txt",
"rockband_2.txt",
"shadow_the_hedgehog.txt",
"silver_the_hedgehog.txt",
"smashbros.txt",
"snoopy.txt",
"spawn.txt",
"Spiderman.txt",
"spongebob.txt",
"squidbillies.txt",
"starcraft.txt",
"stargate.txt",
"starwars.txt",
"starwarsunleashed.txt",
"steelwii.txt",
"streetfighter.txt",
"super_hero_squad.txt",
"super_mario_RPG.txt",
"super_sonic.txt",
"the_simpsons.txt",
"tails.txt",
"terminator.txt",
"thunder_cats.txt",
"tmnt.txt",
"tomb_raider.txt",
"toxictoons.txt",
"transformers.txt",
"trigun.txt",
"true_blood.txt",
"ultimatedarkwii.txt",
"vegeta.txt",
"vista.txt",
"walleye.txt",
"warioware.txt",
"whitestripes.txt",
"whitewii.txt",
"wiid.txt",
"wiifit.txt",
"wiisports.txt",
"wiiu.txt",
"win_xp_os.txt",
"wolverine.txt",
"wweraw.txt",
"yugioh.txt",
"zelda.txt" ,
"zombwii.txt"
];

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
	$("#themevideocontainer").hide();
	showsinglethemeimg(themeposition);
	changebackground(0);
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
		break
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
function increaseregionDLcnt(region_in) {
	setTimeout(function() {
		$.ajax({
			url: "index.php",
			type: "POST",
			cache: false,
			data: { action: "increaseregionDLcnt", region: region_in},
			success: function(data) {
				//alert(data);
			},
		});
	}, 500);
	return;
}
function updatesingleDLcnt(pos_in) {
	setTimeout(function() {
		$.ajax({
			url: "index.php",
			type: "POST",
			cache: false,
			data: { action: "updatesinglethemeDLcnt", count: 1, downloadfile: downloadcntfile[pos_in] },
			success: function(data) {
				//alert(data);
				$("#downloadcnt").text(data + " Downloads");
			},
		});
	}, 500);
	return;
}
function getsingleDLcnt(pos_in) {
	$.ajax({
		url: "index.php",
		type: "POST",
		cache: false,
		data: { action: "getsinglethemeDLcnt", downloadfile: downloadcntfile[pos_in] },
		success: function(data) {
			//alert(data);
			$("#downloadcnt").text(data + " Downloads");
		},
	});
	return;
}
function changebackground(startbackground) {
	var backgroundelement = document.getElementById("body");
	if(startbackground != 0) 
	backgroundelement.style.backgroundImage = backgrounds[themeposition];
	else
	backgroundelement.style.backgroundImage = "url('img/WiiSysMenu.avif')";
	return;
}
function changebackgroundrandom() {
	var backgroundelement = document.getElementById("body");
	var randomnumber = Math.floor(Math.random() * 113);
	backgroundelement.style.backgroundImage = backgrounds[randomnumber];
	return;
}
function showdualpics() {
	//alert("show here");
	$("#dualpicmodal").slideDown("slow");
	document.getElementById("dualpic1").src = "previewpics/" +  theme_image_list[themeposition];
	document.getElementById("dualpic2").src = "img/backgrounds/" + theme_image_list2[themeposition];
	var modal_close = document.getElementsByClassName("close")[5];
	modal_close.onclick = function() {
		$("#dualpicmodal").slideUp("slow");
	}
	var modal = document.getElementById("dualpicmodal");
	window.onclick = function(event) {
		if (event.target == modal) {
			$("#dualpicmodal").slideUp("slow");
		}
	}
}
// comments  -----------------------------------------------------------
function leavecomment() {
	commenting = 1;
	$("#commenttext").slideUp("slow");
	$("#commentview").slideUp("slow", function(){
		$("#commentcontainer").css("height", "230px");
		$("#closecomment").slideDown("slow");
		$("#commentuser").slideDown("slow", function(){
			$("#commentcomment").slideDown("slow");
			$("#enterbuttoncomment").slideDown("slow");
		});
	});
	$("#commentusercomment").keypress(function(e) {
		if (e.which == 13) {
			writecomment();
		}
	});
	return;
}
function showcommentsection() {
	var x = document.getElementById("commentcontainer");
	var z = document.getElementById("messagebutton");
	console.log(x.style.display)
  if ((x.style.display === "none") || (x.style.display === "")) {
    x.style.display = "block";
	z.title = "Close Comment Section";
  } else {
    x.style.display = "none";
	z.title = "Open Comment Section";
	if(commenting) closecommenting();
	if(viewing) closecomments();
  }
  return;
}
function closecommenting() {
	$("#commentuser").slideUp("slow");
	$("#enterbuttoncomment").slideUp("slow");
	$("#closecomment").slideUp("slow");
	$("#commentcomment").slideUp("slow", function(){
		$("#commentcontainer").css("height", "auto");
		$("#commenttext").slideDown("slow");
		$("#commentview").slideDown("slow");
		$("#usercomments").slideUp("slow");
	});
	commenting = 0;
	document.getElementById("commentusername").value = "";
	document.getElementById("commentusercomment").value ="";
	return;
}
function writecomment() {
	var username = document.getElementById("commentusername").value;
	var comment = document.getElementById("commentusercomment").value;
	//alert(username + "\n" + comment);
	if((comment == "") || (username == "")) {
		if(username == "")  {alert("Please Type a Username .") 
			return;
		}
		if(comment == "") { alert("Please Type a Comment .") 
			return;
		}
	}
	$.ajax({
		url: "index.php",
		type: "POST",
		cache: false,
		data: { action: "writecomment", name: username, message: comment },
		success: function(data) {
			//alert(data);
			$("#usercomments").html(data);
			
		},
	});
	$("#commentuser").slideUp("slow");
	$("#enterbuttoncomment").slideUp("slow");
	$("#commentcomment").slideUp("slow");
	$("#closecomment").slideUp("slow");
	document.getElementById("commentusername").value = "";
	document.getElementById("commentusercomment").value ="";
	setTimeout(scrolldelay(), 1500);
	$("#usercomments").slideDown("slow");
	return;
}
function closecomments() {
	$("#usercomments").slideUp("slow", function(){
		$("#userparagraph").text("");
		$("#commentcontainer").css("height", "auto");
		$("#commenttext").slideDown("slow");
		$("#commentview").slideDown("slow");
	});
	viewing = 0;
	return;
}
function viewcomment() {
	viewing = 1;
	$("#commentview").slideUp("slow");
	$("#commenttext").slideUp("slow", function(){
		$.ajax({
			url: "index.php",
			type: "POST",
			cache: false,
			data: { action: "readcomment" },
			success: function(data) {
				
				$("#usercomments").html(data);
				
			},
		});
		$("#commentcontainer").css("height", "230px");
		$("#usercomments").slideDown("slow");
		setTimeout(scrolldelay(), 1500);
	});
	return;
}
function scrolldelay() {
	var element = document.getElementById("usercomments");
	var observer = new MutationObserver(scrollToBottom);
	var config = {childList: true};
	observer.observe(element, config);
	return;
}
function scrollToBottom() {
	var element = document.getElementById("usercomments");
	element.scrollTop = element.scrollHeight;
  }
// theme preview -------------------------------------------------------
function loadvideo() {
	if(!themevideomode) {
		themevideomode = true;
		//
		$("#checkpreview").text("Theme Picture Preview");
		document.getElementById("preview1").style.display = "none";
		$("#preview1").hide();
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
		$("#themevideocontainer").fadeOut();
		showsinglethemeimg(themeposition);
		$("#preview1").fadeIn();
	}
	else {
		$("#preview1").hide();
		let ivideo = document.getElementById("videoframe");
		ivideo.src = theme_video[themeposition];
		ivideo.width = 710;
		ivideo.height = 538;
		$("#themevideocontainer").show();
	}
	return;
}
function previewcontrol(input_control) {
	console.log("input_contrtol = " + input_control);
	themeposition = themeposition + input_control;
	console.log("themeposition = " + themeposition);
	if(themeposition < 0)
		themeposition = theme_count - 1;
	if(themeposition >= theme_count)
		themeposition = 0;
	console.log("themeposition = " + themeposition);
	document.getElementById("theme").selectedIndex = themeposition;
	loadvideo_img();
	getsingleDLcnt(themeposition);
	changebackground(1);
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
	$("#downloadtext").html("<br><p>Thank You for using Wii Themer .</p><p>Remember to grab an install app from links on the main page .</p> ");
	setTimeout(removesessionfolder(), 5000);
	setTimeout(updatecountfiles(2), 1000);
	setTimeout(updatesingleDLcnt(themeInfo.themeselected), 1000);
	setTimeout(increaseregionDLcnt(themeInfo.regionselected), 1000);
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
		$("#downloadtext").html("<br><br><p><a title='click to download your theme' class='glowtext text-center border-orange border-radius border-shadow-orange background-black text-white' onclick='closedownload()' href='" + completefileinfo[0] + "/" + completefileinfo[1] + "' id='csmfile'><b><i>" + completefileinfo[1] + "</b></i></a></p><br><br><p>Your download will expire in </p>");
	}
	else {
		$("#downloadtext").html("<br><br><p><a title='click to download your theme' class='glowtext text-center border-orange border-radius border-shadow-orange background-black text-white' onclick='closedownload()' href='" + completefileinfo[0] + "/" + completefileinfo[1] + completefileinfo[2] + ".csm' id='csmfile'><b><i>" + completefileinfo[1] + completefileinfo[2] + ".csm</b></i></a></p><br><br><p>Your download will expire in </p>");
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
					//alert(data);
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
					//alert(data);
					//else console.log("ret from copy = " + data)
				},
			}))
		}, 3000);
	});
	return;
}
async function downloadappfile() {
	let copymessage = document.getElementById("downloadtext");
	copymessage.innerHTML += "Downloading appfile " + getappfiledisplayname(themeInfo.version) + " from System Menu v" + getversiondisplay(themeInfo.version) + " .....  ";
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
					
					
				},
				complete: function(){
					copymessage.innerHTML += "Copying " + themeInfo.mymfile + " to the working directory ..... ";
					copythemetoroot();
				},
			}))
		}, 3000);
	});
	return;
}
async function setsesdir() {
	$("#downloadtext").html("<br>Please Wait .....<br>Setting session directory and copying needed files ..... ");
	let thepromise = new Promise( function(resolve) {
		setTimeout( function() { 
			resolve($.ajax({
				url: "index.php",
				type: "POST",
				cache: false,
				data: { action: "makesesdir", savesrc: themeInfo.themesrc, name: themeInfo.mymfile, selectedtheme: themeInfo.themeselected },
				success: function(data) {
					console.log("version = " + themeInfo.version);
					let copymessage = document.getElementById("downloadtext");
					copymessage.innerHTML += data;
					//alert(data);
				},
				complete: function(){
					
					downloadappfile();

				},
				error: function() {
					alert("Error \n");
				},
			}))
		}, 3000);
	});
	return;
}
function findMYM(themeinput, regioninput) {
	let mymfile = mym_file[themeinput];
	console.log("mymfile = " + mymfile + "\ninput = " + themeinput);
	
	if((themeinput >= 17) && (themeinput <= 24) || (themeinput == 43)) {
		let region = null;
		region = Region[regioninput];
		mymfile = mymfile + region + ".mym";
	}
	//else mymfile = mym_file[themeinput];

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
		getsingleDLcnt(0);
		resetglobals();
		return;
	}
	let name = document.getElementById("themename");
	name.innerHTML = themeInfo.name;
	
	$("#downloadtext").slideDown("slow");
	setsesdir();
	return;
}
function getselected(input) {
	let selectedregion = document.getElementById("region").selectedIndex;
	let selectedversion = document.getElementById("menuversion").selectedIndex;
	let selectedtheme = document.getElementById("theme").selectedIndex;
	//console.log(selectedtheme + " selected theme")
	if(input == 3) {
		loadvideo_img();
		getsingleDLcnt(selectedtheme);
		changebackground(1);
	}
	if((selectedtheme >= 0) && (selectedversion > 0) && (selectedregion > 0)) {
		if((selectedregion == 4) && (selectedtheme == 22) && (selectedversion == 4)) {
			$("#continue").slideUp();
			$("#message").html(regionkdarkredmessage + version40kmessage);
			$("#message").show();
		}
		else {
			if((selectedregion == 4) && (selectedversion == 4)) {
				$("#continue").slideUp();
				$("#message").html(version40kmessage);
				$("#message").show();
			}
			else {
				if((selectedregion == 4) && (selectedtheme == 22)) {
					$("#continue").slideUp();
					$("#message").html(regionkdarkredmessage);
					$("#message").show();
				}
				else {
					if((selectedregion == 3) && (selectedversion == 4)) {
						$("#continue").slideUp();
						$("#message").html(regionj40message);
						$("#message").show();
					}
					else {
						$("#continue").slideDown();
						$("#message").fadeOut();
					}
				}
			}
		}
	}
	else {
		$("#continue").slideUp();
		$("#message").fadeOut();
	}
	return;
}
function showsinglethemeimg(input) {
	var z = -1;
	z = findpreviewpath(input);
	console.log("z " + z);
	document.getElementById("preview1").src = z;
	return;
}
// page start -----------------------------------------------------------
function showcontactinfo() {
	var modal = document.getElementById("contactmodal");
	var modal_close = document.getElementsByClassName("close")[3];
	$("#infocontainer").slideUp("slow", function(){
		$(".navinner").slideUp("slow");
		$("#contactmodal").slideDown("slow");
	});
	modal_close.onclick = function() {
		$("#contactmodal").slideUp("slow", function(){
			$(".navinner").slideDown("slow");
			$("#infocontainer").slideDown("slow");
		});
	}
	window.onclick = function(event) {
	  if (event.target == modal) {
		$("#contactmodal").slideUp("slow", function(){
			$(".navinner").slideDown("slow");
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
		$("#themecounttext").text(theme_count);
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
	$("#infocontainer").slideUp("slow", function() {
		$(".navinner").slideUp("slow");
		$("#linksmodal").slideDown("slow");
	});
	modal_close.onclick = function() {
	  $("#linksmodal").slideUp("slow");
	  $(".navinner").slideDown("slow");
	  $("#infocontainer").slideDown("slow");
	}
	window.onclick = function(event) {
	  if (event.target == modal) {
		$("#linksmodal").slideUp("slow");
		$(".navinner").slideDown("slow");
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
	loadvideo_img();
	getsingleDLcnt(themeposition);
	$("#buildmodal").slideDown("slow");
	$("#messagebutton").hide();
	$("#wiibutton").hide();
	modal_close.onclick = function() {
	  	$("#buildmodal").slideUp("slow", function(){
			$(".navinner").fadeIn("slow");
			$("#infocontainer").slideDown("slow");
			$("#themevideocontainer").hide();
			$("#messagebutton").show();
			$("#wiibutton").show();
		});
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
			changebackground(1);
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
	return theme_count;
}
function loadthemelist() {
	for (let i = 0; i < theme_count; i++) { 
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