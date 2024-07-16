var themeposition = 0;
var closecntr = 180;
var minutesleft = 2;
var seccntr = 0;
var themeInfo = {};
var sessionid = null;
var themevideomode = false;
var completefileinfo = [null];
var timer = null;
var commenting = false;
var viewing = false;
var isWiiU = false;
const Region = ["", "U", "E", "J", "K"];
const regionkdarkredmessage = "Dark Wii Red was not offically made for the Korean region .<br>";
const version = ["", "4.3", "4.2", "4.1", "4.0", "vWii (WiiU)"];
const version40kmessage = "The Korean region did not have System Menu v4.0 .<br>";
const max_themes = 250;
const theme_count = 152;
const completethemeinfo = [
	{name:"Animal Crossing", background:"url('img/backgrounds/animalcrossing.png')", mainimg:"animalcrossing.avif", secondaryimg:"animalcrossing.png", mym:"animal_crossing.mym", video:"https://www.youtube.com/embed/2hZHkraXOpA?autoplay=0&mute=1", downloads:"animal_crossing.txt"},
	{name:"Aqua Teen Hunger Force", background:"url('img/backgrounds/ATHF.png')", mainimg:"aquateenhungerforce.avif", secondaryimg:"ATHF.png", mym:"aqua_teen_hunger_forcestage1.mym", video:"https://www.youtube.com/embed/HtIxy7EuSEA?si=OafY-qA2HJS3G5A5?autoplay=0&mute=1", downloads:"aqua_teen_hunger_force.txt"},
	{name:"Bakugan", background:"url('img/backgrounds/bakugan.png')", mainimg:"bakugan.avif", secondaryimg:"bakugan.png", mym:"bakugan.mym", video:"https://www.youtube.com/embed/1sje3UaUNK4?autoplay=0&mute=1", downloads:"bakugan.txt"},
	{name:"Batman v1", background:"url('img/backgrounds/batmanv1.png')", mainimg:"batmanv1.avif", secondaryimg:"batmanv1.png", mym:"batman_v1.mym", video:"https://www.youtube.com/embed/_O_pPfQe5Do?autoplay=0&mute=1", downloads:"batman_v1.txt"},
	{name:"Batman v2", background:"url('img/backgrounds/batmanv2.png')", mainimg:"batmanv2.avif", secondaryimg:"batmanv2.png", mym:"batman_v2.mym", video:"https://www.youtube.com/embed/RhfS_ZdaDVU?autoplay=0&mute=1", downloads:"batman_v2.txt"},
	{name:"Black Mage", background:"url('img/backgrounds/blackmage.png')", mainimg:"blackmage.avif", secondaryimg:"blackmage.png", mym:"black_mage.mym", video:"https://www.youtube.com/embed/Nm_I4p-a4qo?autoplay=0&mute=1", downloads:"black_mage.txt"},
	{name:"Black Pirate", background:"url('img/backgrounds/blackpirate.png')", mainimg:"blackpirate.avif", secondaryimg:"blackpirate.png", mym:"black_pirate.mym", video:"https://www.youtube.com/embed/6o4L6axGsgU?autoplay=0&mute=1", downloads:"black_pirate.txt"},
	{name:"Bleach", background:"url('img/backgrounds/bleach.png')", mainimg:"bleach.avif", secondaryimg:"bleach.png", mym:"bleach.mym", video:"https://www.youtube.com/embed/6R7Zgni2vbQ?autoplay=0&mute=1", downloads:"bleach.txt"},
	{name:"Boondock Saints", background:"url('img/backgrounds/boondocksaints.png')", mainimg:"boondocksaints.avif", secondaryimg:"boondocksaints.png", mym:"boondock_saints.mym", video:"https://www.youtube.com/embed/5tk08eRKYNI?autoplay=0&mute=1", downloads:"boondock_saints.txt"},
	{name:"Bowser", background:"url('img/backgrounds/bowser.png')", mainimg:"bowser.avif", secondaryimg:"bowser.png", mym:"bowser.mym", video:"https://www.youtube.com/embed/tdYdYU1KKdw?autoplay=0&mute=1", downloads:"bowser.txt"},
	{name:"Broly", background:"url('img/backgrounds/broly.png')", mainimg:"broly.avif", secondaryimg:"broly.png", mym:"broly.mym", video:"https://www.youtube.com/embed/-rd2YPJ9jOE?autoplay=0&mute=1", downloads:"broly.txt"},
	{name:"Call of Duty", background:"url('img/backgrounds/callofduty.png')", mainimg:"callofduty.avif", secondaryimg:"callofduty.png", mym:"call_of_duty.mym", video:"https://www.youtube.com/embed/zaHUh0pinlA?autoplay=0&mute=1", downloads:"call_of_duty.txt"},
	{name:"Car", background:"url('img/backgrounds/car.png')", mainimg:"car.avif", secondaryimg:"car.png", mym:"car.mym", video:"https://www.youtube.com/embed/425H8lC96es?autoplay=0&mute=1", downloads:"car.txt"},
	{name:"Cars", background:"url('img/backgrounds/cars.png')", mainimg:"cars.avif", secondaryimg:"cars.png", mym:"cars_stage1.mym", video:"https://www.youtube.com/embed/FNyt_khFHsI?autoplay=0&mute=1", downloads:"cars.txt"},
	{name:"Check Mii Out", background:"url('img/backgrounds/check_mii_out.png')", mainimg:"check_mii_out.avif", secondaryimg:"check_mii_out.png", mym:"check_mii_out.mym", video:"https://www.youtube.com/embed/Og-xmUTZt6o?si=Tv2DHxvW458-FGzN?autoplay=0&mute=1", downloads:"check_mii_out.txt"},
	{name:"Code Geass", background:"url('img/backgrounds/codegeass.png')", mainimg:"codegeass.avif", secondaryimg:"codegeass.png", mym:"code_geass.mym", video:"https://www.youtube.com/embed/X38-YkQwEL4?autoplay=0&mute=1", downloads:"code_geass.txt"},
	{name:"Constantine", background:"url('img/backgrounds/constantine.png')", mainimg:"constantine.avif", secondaryimg:"constantine.png", mym:"constantine.mym", video:"https://www.youtube.com/embed/fR8xS8I8vgU?autoplay=0&mute=1", downloads:"constantine.txt"},
	{name:"Dark Umbra v1", background:"url('img/backgrounds/dark_umbra_v1.png')", mainimg:"dark_umbra_v1.avif", secondaryimg:"dark_umbra_v1.png", mym:"dark_umbra_v1.mym", video:"https://www.youtube.com/embed/WD2SuUG4Mbs?si=8Gti_3j2T_DUnpsA?autoplay=0&mute=1", downloads:"dark_umbra_v1.txt"},
	{name:"Dark Umbra v2", background:"url('img/backgrounds/dark_umbra_v2.png')", mainimg:"dark_umbra_v2.avif", secondaryimg:"dark_umbra_v2.png", mym:"dark_umbra_v2.mym", video:"https://www.youtube.com/embed/YYZiJ_I8c4U?si=KHhGf5nvYFaLGQwH?autoplay=0&mute=1", downloads:"dark_umbra_v2.txt"},
	{name:"Dark Wii Original", background:"url('img/backgrounds/darkwiioriginal.png')", mainimg:"darkwiioriginal.avif", secondaryimg:"darkwiioriginal.png", mym:"dark_wii_original.mym", video:"https://www.youtube.com/embed/ckcWI1rsRqk?autoplay=0&mute=1", downloads:"dark_wii_original.txt"},
	{name:"Dark Wii Blue", background:"url('img/backgrounds/darkwiiblue.png')", mainimg:"darkwiiblue.avif", secondaryimg:"darkwiiblue.png", mym:"dark_wii_blue", video:"https://www.youtube.com/embed/oSMkswfXe_w?autoplay=0&mute=1", downloads:"dark_wii_blue.txt"},
	{name:"Dark Wii Green", background:"url('img/backgrounds/darkwiigreen.png')", mainimg:"darkwiigreen.avif", secondaryimg:"darkwiigreen.png", mym:"dark_wii_green", video:"https://www.youtube.com/embed/Rn0CnTo5kRI?autoplay=0&mute=1", downloads:"dark_wii_green.txt"},
	{name:"Dark Wii Orange", background:"url('img/backgrounds/darkwiiorange.png')", mainimg:"darkwiiorange.avif", secondaryimg:"darkwiiorange.png", mym:"dark_wii_orange", video:"https://www.youtube.com/embed/g66UasiFEhg?autoplay=0&mute=1", downloads:"dark_wii_orange.txt"},
	{name:"Dark Wii Pink", background:"url('img/backgrounds/darkwiipink.png')", mainimg:"darkwiipink.avif", secondaryimg:"darkwiipink.png", mym:"dark_wii_pink", video:"https://www.youtube.com/embed/EZ1jtn58laM?autoplay=0&mute=1", downloads:"dark_wii_pink.txt"},
	{name:"Dark Wii Purple", background:"url('img/backgrounds/darkwiipurple.png')", mainimg:"darkwiipurple.avif", secondaryimg:"darkwiipurple.png", mym:"dark_wii_purple", video:"https://www.youtube.com/embed/UKVbnIgZK5I?autoplay=0&mute=1", downloads:"dark_wii_purple.txt"},
	{name:"Dark Wii Red", background:"url('img/backgrounds/darkwiired.png')", mainimg:"darkwiired.avif", secondaryimg:"darkwiired.png", mym:"dark_wii_red", video:"https://www.youtube.com/embed/9odLhr49Wak?autoplay=0&mute=1", downloads:"dark_wii_red.txt"},
	{name:"Dark Wii White", background:"url('img/backgrounds/darkwiiwhite.png')", mainimg:"darkwiiwhite.avif", secondaryimg:"darkwiiwhite.png", mym:"dark_wii_white", video:"https://www.youtube.com/embed/wrwDwTXkPUQ?autoplay=0&mute=1", downloads:"dark_wii_white.txt"},
	{name:"Dark Wii Yellow", background:"url('img/backgrounds/darkwiiyellow.png')", mainimg:"darkwiiyellow.avif", secondaryimg:"darkwiiyellow.png", mym:"dark_wii_yellow", video:"https://www.youtube.com/embed/R9sX3SzzzKA?autoplay=0&mute=1", downloads:"dark_wii_yellow.txt"},
	{name:"Deth Klok", background:"url('img/backgrounds/dethklok.png')", mainimg:"dethklok.avif", secondaryimg:"dethklok.png", mym:"deth_klok.mym", video:"https://www.youtube.com/embed/gvJGiuJiEbA?autoplay=0&mute=1", downloads:"deth_klok.txt"},
	{name:"Diablo 3", background:"url('img/backgrounds/diablo_3.png')", mainimg: "diablo_3.avif", secondaryimg: "diablo_3.png", mym: "diablo_3.mym", video: "https://www.youtube.com/embed/kU6vIUunCBQ?si=0eAsALZ0pqZc9zAj?autoplay=0&mute=1", downloads: "diablo_3.txt"},
	{name:"Discord", background:"url('img/backgrounds/discord.png')", mainimg:"discord.avif", secondaryimg:"discord.png", mym:"discord.mym", video:"https://www.youtube.com/embed/HH1KZWWvdWU?autoplay=0&mute=1", downloads:"discord.txt"},
	{name:"Dragon Ball Z v1", background:"url('img/backgrounds/dragonballzv1.png')", mainimg:"dragonballzv1.avif", secondaryimg:"dragonballzv1.png", mym:"dragon_ball_z_v1.mym", video:"https://www.youtube.com/embed/pM2RB5cqVSw?autoplay=0&mute=1", downloads:"dragon_ball_z_v1.txt"},
	{name:"Dragon Ball Z v2", background:"url('img/backgrounds/dragonballzv2.png')", mainimg:"dragonballzv2.avif", secondaryimg:"dragonballzv2.png", mym:"dragon_ball_z_v2.mym", video:"https://www.youtube.com/embed/hLBvwN_Sj38?autoplay=0&mute=1", downloads:"dragon_ball_z_v2.txt"},
	{name:"Dr Who", background:"url('img/backgrounds/drwho.png')", mainimg:"drwho.avif", secondaryimg:"drwho.png", mym:"dr_who.mym", video:"https://www.youtube.com/embed/um4V5Wu8fq8?autoplay=0&mute=1", downloads:"dr_who.txt"},
	{name:"Earth Bound", background:"url('img/backgrounds/earthbound.png')", mainimg:"earthbound.avif", secondaryimg:"earthbound.png", mym:"earth_bound.mym", video:"https://www.youtube.com/embed/gO4k6ggnL0U?autoplay=0&mute=1", downloads:"earth_bound.txt"},
	{name:"Evil Dead", background:"url('img/backgrounds/evildead.png')", mainimg:"evildead.avif", secondaryimg:"evildead.png", mym:"evil_dead.mym", video:"https://www.youtube.com/embed/zKolRxAiJJs?autoplay=0&mute=1", downloads:"evil_dead.txt"},
	{name:"Excite Bots", background:"url('img/backgrounds/excitebots.png')", mainimg:"excitebots.avif", secondaryimg:"excitebots.png", mym:"excite_bots.mym", video:"https://www.youtube.com/embed/Uz4V-dlzzsY?autoplay=0&mute=1", downloads:"excite_bots.txt"},
	{name:"Eyes", background:"url('img/backgrounds/eyes.png')", mainimg:"eyes.avif", secondaryimg:"eyes.png", mym:"eyes.mym", video:"https://www.youtube.com/embed/8nxP5ox3aVE?autoplay=0&mute=1", downloads:"eyes.txt"},
	{name:"Fairly Odd Parents", background:"url('img/backgrounds/fairlyoddparents.png')", mainimg:"fairlyoddparents.avif", secondaryimg:"fairlyoddparents.png", mym:"fairly_odd_parentsstage1.mym", video:"https://www.youtube.com/embed/ev9kNqy1VXY?si=MQ0YD-mLlIfgqW5s?autoplay=0&mute=1", downloads:"fairlyoddparents.txt"},
	{name:"Family Guy", background:"url('img/backgrounds/familyguy.png')", mainimg:"familyguy.avif", secondaryimg:"familyguy.png", mym:"family_guy.mym", video:"https://www.youtube.com/embed/SHgd0t4BENI?autoplay=0&mute=1", downloads:"family_guy.txt"},
	{name:"Fantasy", background:"url('img/backgrounds/fantasy.png')", mainimg:"Fantasy.avif", secondaryimg:"fantasy.png", mym:"fantasy.mym", video:"https://www.youtube.com/embed/hGqk0wQL9Us?autoplay=0&mute=1", downloads:"fantasy.txt"},
	{name:"Fight Club", background:"url('img/backgrounds/fightclub.png')", mainimg:"FightClub.avif", secondaryimg:"fightclub.png", mym:"fight_club.mym", video:"https://www.youtube.com/embed/WVY8mcnJmu8?autoplay=0&mute=1", downloads:"fight_club.txt"},
	{name:"Final Fantasy 7", background:"url('img/backgrounds/finalfantasy7.png')", mainimg:"FinalFantasy7.avif", secondaryimg:"finalfantasy7.png", mym:"final_fantasy_7.mym", video:"https://www.youtube.com/embed/bymdnStOo9U?autoplay=0&mute=1", downloads:"final_fantasy_7.txt"},
	{name:"Fire Wii", background:"url('img/backgrounds/firewii.png')", mainimg:"firewii.avif", secondaryimg:"firewii.png", mym:"fire_wii.mym", video:"https://www.youtube.com/embed/eJLl2_ZMf6s?autoplay=0&mute=1", downloads:"fire_wii.txt"},
	{name:"Flower Power", background:"url('img/backgrounds/flowerpower.png')", mainimg:"flowerpower.avif", secondaryimg:"flowerpower.png", mym:"flower_powerstage1.mym", video:"https://www.youtube.com/embed/lpoNMkhUYhA?si=B4fltaw9eZfFDkQY?autoplay=0&mute=1", downloads:"flowerpower.txt"},
	{name:"Friday Night Funkin", background:"url('img/backgrounds/fridaynightfunkin.png')", mainimg:"fridaynightfunkin.avif", secondaryimg:"fridaynightfunkin.png", mym:"friday_night_funkin.mym", video:"https://www.youtube.com/embed/VkbcQsz57nM?si=yqN-PFAOKuyVn1EV?autoplay=0&mute=1", downloads:"fridaynightfunkin.txt"},
	{name:"Friday the 13th", background:"url('img/backgrounds/fridaythe13th.png')", mainimg:"fridaythe13th.avif", secondaryimg:"fridaythe13th.png", mym:"friday_the_13thstage1.mym", video:"https://www.youtube.com/embed/SKT-nmQC68o?si=fWW98k2AViFDSKAO?autoplay=0&mute=1", downloads:"fridaythe13th.txt"},
	{name:"Full Metal Alchemist", background:"url('img/backgrounds/fullmetalalchemist.png')", mainimg:"fullmetalalchemist.avif", secondaryimg:"fullmetalalchemist.png", mym:"full_metal_alchemist", video:"https://www.youtube.com/embed/ZpPcjebgEUY?autoplay=0&mute=1", downloads:"full_metal_alchemist.txt"},
	{name:"Futurama", background:"url('img/backgrounds/futurama.png')", mainimg:"futurama.avif", secondaryimg:"futurama.png", mym:"futurama.mym", video:"https://www.youtube.com/embed/x0mCDuiWYpA?autoplay=0&mute=1", downloads:"futurama.txt"},
	{name:"Gaara", background:"url('img/backgrounds/gaara.png')", mainimg:"gaara.avif", secondaryimg:"gaara.png", mym:"gaara.mym", video:"https://www.youtube.com/embed/nEofNIw_Xps?autoplay=0&mute=1", downloads:"gaara.txt"},
	{name:"Gears of War", background:"url('img/backgrounds/gearsofwar.png')", mainimg:"gearsofwar.avif", secondaryimg:"gearsofwar.png", mym:"gears_of_war.mym", video:"https://www.youtube.com/embed/0AUq2xqwlEc?autoplay=0&mute=1", downloads:"gears_of_war.txt"},
	{name:"Ghost Busters", background:"url('img/backgrounds/ghostbusters.png')", mainimg:"ghostbusters.avif", secondaryimg:"ghostbusters.png", mym:"ghost_busters.mym", video:"https://www.youtube.com/embed/q1Y3VAmsXxM?autoplay=0&mute=1", downloads:"ghost_busters.txt"},
	{name:"Golden Sun", background:"url('img/backgrounds/goldensun.png')", mainimg:"GoldenSun.avif", secondaryimg:"goldensun.png", mym:"golden_sun.mym", video:"https://www.youtube.com/embed/qZO74MDfGXY?autoplay=0&mute=1", downloads:"golden_sun.txt"},
	{name:"Gothic", background:"url('img/backgrounds/gothic.png')", mainimg:"gothic.avif", secondaryimg:"gothic.png", mym:"gothic.mym", video:"https://www.youtube.com/embed/Ko3ZcoCmwPI?si=QROVEdiG91ky82_V?autoplay=0&mute=1", downloads:"gothic.txt"},
	{name:"Hand Drawn", background:"url('img/backgrounds/handdrawn.png')", mainimg:"HandDrawn.avif", secondaryimg:"handdrawn.png", mym:"hand_drawn.mym", video:"https://www.youtube.com/embed/e19Hk1Zbp0c?autoplay=0&mute=1", downloads:"hand_drawn.txt"},
	{name:"Hello Kitty", background:"url('img/backgrounds/hellokitty.png')", mainimg:"HelloKitty.avif", secondaryimg:"hellokitty.png", mym:"hello_kitty.mym", video:"https://www.youtube.com/embed/Rh-_PneEKCY?autoplay=0&mute=1", downloads:"hello_kitty.txt"},
	{name:"He-Man", background:"url('img/backgrounds/heman.png')", mainimg:"heman.avif", secondaryimg:"heman.png", mym:"he-manstage1.mym", video:"https://www.youtube.com/embed/vUzusxTYj9w?si=UNjjoXBw-c4BJBWc?autoplay=0&mute=1", downloads:"heman.txt"},
	{name:"Heros", background:"url('img/backgrounds/heros.png')", mainimg:"heros.avif", secondaryimg:"heros.png", mym:"heros.mym", video: "https://www.youtube.com/embed/kM-Sgb2wRig?autoplay=0&mute=1",downloads:"heros.txt"},
	{name:"In Betweeners", background:"url('img/backgrounds/inbetweeners.png')", mainimg:"inbetweeners.avif", secondaryimg:"inbetweeners.png", mym:"in_betweeners.mym", video:"https://www.youtube.com/embed/Ng8-yaNi1gE?autoplay=0&mute=1", downloads:"in_betweeners.txt"},
	{name:"Insane Clown Posse", background:"url('img/backgrounds/icp.png')", mainimg:"icp.avif", secondaryimg:"icp.png", mym:"insane_clown_posse.mym", video:"https://www.youtube.com/embed/nKo90-C1d8U?autoplay=0&mute=1", downloads:"insane_clown_posse.txt"},
	{name:"Its A Me Mario", background:"url('img/backgrounds/itsamemario.png')", mainimg:"itsamemario.avif", secondaryimg:"itsamemario.png", mym:"itsamemario.mym", video:"https://www.youtube.com/embed/RXxxwKtNPJk?autoplay=0&mute=1", downloads:"itsamemario.txt"},
	{name:"Joker", background:"url('img/backgrounds/joker.png')", mainimg:"joker.avif", secondaryimg:"joker.png", mym:"jokerstage1.mym", video:"https://www.youtube.com/embed/cok8NmKGrQk?si=x43QProMRv3A1K35?autoplay=0&mute=1", downloads:"joker.txt"},
	{name:"Jurassic Park 3", background:"url('img/backgrounds/jurassicpark3.png')", mainimg:"jurassicpark3.avif", secondaryimg:"jurassicpark3.png", mym:"jurassic_park_3.mym", video:"https://www.youtube.com/embed/bgmwbNsbT04?autoplay=0&mute=1", downloads:"jurassic_park_3.txt"},
	{name:"Kingdom Hearts", background:"url('img/backgrounds/kingdomhearts.png')", mainimg:"kingdomhearts.avif", secondaryimg:"kingdomhearts.png", mym:"kingdom_hearts.mym", video:"https://www.youtube.com/embed/YQf3umMzGNs?autoplay=0&mute=1", downloads:"kingdom_hearts.txt"},
	{name:"Kirby", background:"url('img/backgrounds/kirby.png')", mainimg:"kirby.avif", secondaryimg:"kirby.png", mym:"kirby.mym", video:"https://www.youtube.com/embed/NoPUDwdQy8Q?autoplay=0&mute=1", downloads:"kirby.txt"},
	{name:"Korn", background:"url('img/backgrounds/korn.png')", mainimg:"korn.avif", secondaryimg:"korn.png", mym:"korn.mym", video:"https://www.youtube.com/embed/WJM0t8M3Q9s?autoplay=0&mute=1", downloads:"korn.txt"},
	{name:"Leopard OS", background:"url('img/backgrounds/leopardos.png')", mainimg:"leopardos.avif", secondaryimg:"leopardos.png", mym:"leopard_os.mym", video:"https://www.youtube.com/embed/yZsh5Eiys04?autoplay=0&mute=1", downloads:"leopard_os.txt"},
	{name:"Lime Wii", background:"url('img/backgrounds/limewii.png')", mainimg:"limewii.avif", secondaryimg:"limewii.png", mym:"lime_wii.mym", video:"https://www.youtube.com/embed/_L1V84YnIi4?autoplay=0&mute=1", downloads:"lime_wii.txt"},
	{name:"Looney Toons", background:"url('img/backgrounds/looneytoons.png')", mainimg:"looneytoons.avif", secondaryimg:"looneytoons.png", mym:"looney_toons.mym", video:"https://www.youtube.com/embed/D5dFtKsQhYE?autoplay=0&mute=1", downloads:"looney_toons.txt"},
	{name:"Lost", background:"url('img/backgrounds/lost.png')", mainimg:"lost.avif", secondaryimg:"lost.png", mym:"lost.mym", video:"https://www.youtube.com/embed/MGjEbT6j5U4?autoplay=0&mute=1", downloads:"lost.txt"},
	{name:"Luigi v1", background:"url('img/backgrounds/luigi.png')", mainimg:"luigi.avif", secondaryimg:"luigi.png", mym:"luigi_v1.mym", video:"https://www.youtube.com/embed/kIQWI1lfvN8?autoplay=0&mute=1", downloads:"luigi.txt"},
	{name:"Luigi v2", background:"url('img/backgrounds/luigiv2.png')", mainimg:"luigiv2.avif", secondaryimg:"luigiv2.png", mym:"luigi_v2stage1.mym", video:"https://www.youtube.com/embed/T-0HcukGFvs?si=kgnGp1US233zqxmo?autoplay=0&mute=1", downloads:"luigiv2.txt"},
	{name:"Mad World", background:"url('img/backgrounds/madworld.png')", mainimg:"madworld.avif", secondaryimg:"madworld.png", mym:"mad_world.mym", video:"https://www.youtube.com/embed/c69ct5P0P_o?autoplay=0&mute=1", downloads:"mad_world.txt"},
	{name:"Mad World v2", background:"url('img/backgrounds/mad_world_v2.png')", mainimg:"mad_world_v2.avif", secondaryimg:"mad_world_v2.png", mym:"mad_world_v2.mym", video:"https://www.youtube.com/embed/HQGRDcQkSqs?si=V3lzjzErAjXIgFUm?autoplay=0&mute=1", downloads:"mad_world_v2.txt"},
	{name:"Majoras Mask", background:"url('img/backgrounds/majorasmask.png')", mainimg:"majorasmask.avif", secondaryimg:"majorasmask.png", mym:"majoras_mask.mym", video:"https://www.youtube.com/embed/g-PrcM-Qr80?autoplay=0&mute=1", downloads:"majoras_mask.txt"},
	{name:"Mario", background:"url('img/backgrounds/mariojeb.png')", mainimg:"mario.avif", secondaryimg:"mariojeb.png", mym:"mario.mym", video:"https://www.youtube.com/embed/mbT0hzSG2AU?autoplay=0&mute=1", downloads:"mario.txt"},
	{name:"Mario Kart", background:"url('img/backgrounds/mariokart.png')", mainimg:"mariokart.avif", secondaryimg:"mariokart.png", mym:"mario_kart.mym", video:"https://www.youtube.com/embed/dCfbtnEWnLI?autoplay=0&mute=1", downloads:"mario_kart.txt"},
	{name:"Martin Abel Art", background:"url('img/backgrounds/martin_abel.png')", mainimg:"martin_abel.avif", secondaryimg:"martin_abel.png", mym:"martin_abel.mym", video:"https://www.youtube.com/embed/hiX6VQWN7W4?si=KRn_MEOQmLaBvFYO?autoplay=0&mute=1" , downloads:"martin_abel.txt"},
	{name:"Matrix", background:"url('img/backgrounds/matrix.png')", mainimg:"matrix.avif", secondaryimg:"matrix.png", mym:"matrix.mym", video:"https://www.youtube.com/embed/X2qGmB8Bc9k?autoplay=0&mute=1", downloads:"matrix.txt"},
	{name:"Matrix Reloaded", background:"url('img/backgrounds/matrixreloaded.png')", mainimg:"matrixreloaded.avif", secondaryimg:"matrixreloaded.png", mym:"matrix_reloaded.mym", video:"https://www.youtube.com/embed/mIn8GGGGZ8k?autoplay=0&mute=1", downloads:"matrix_reloaded.txt"},
	{name:"MegaMan", background:"url('img/backgrounds/megaman.png')", mainimg:"megaman.avif", secondaryimg:"megaman.png", mym:"megaman.mym", video:"https://www.youtube.com/embed/PFM5_FM2kwc?autoplay=0&mute=1", downloads:"megaman.txt"},
	{name:"Metal Gear Solid", background:"url('img/backgrounds/metalgearsolid.png')", mainimg:"metalgearsolid.avif", secondaryimg:"metalgearsolid.png", mym:"metal_gear_solid.mym", video:"https://www.youtube.com/embed/6VRbu8JYn88?autoplay=0&mute=1", downloads:"metal_gear_solid.txt"},
	{name:"Metallica", background:"url('img/backgrounds/metallica.png')", mainimg:"metallica.avif", secondaryimg:"metallica.png", mym:"metallica.mym", video:"https://www.youtube.com/embed/FnTMu9nb2Og?autoplay=0&mute=1", downloads:"metallica.txt"},
	{name:"Metroid", background:"url('img/backgrounds/metroid.png')", mainimg:"metroid.avif", secondaryimg:"metroid.png", mym:"metroid.mym", video:"https://www.youtube.com/embed/vE0OAUJQ9DY?autoplay=0&mute=1", downloads:"metroid.txt"},
	{name:"Mortal Kombat", background:"url('img/backgrounds/mortalkombat.png')", mainimg:"mortalkombat.avif", secondaryimg:"mortalkombat.png", mym:"mortal_kombat.mym", video:"https://www.youtube.com/embed/K0qxTtMF7E4?autoplay=0&mute=1", downloads:"mortal_kombat.txt"},
	{name:"Muse", background:"url('img/backgrounds/muse.png')", mainimg:"muse.avif", secondaryimg:"muse.png", mym:"muse.mym", video:"https://www.youtube.com/embed/X0LAu5pYY8w?autoplay=0&mute=1", downloads:"muse.txt"},
	{name:"Naruto", background:"url('img/backgrounds/naruto.png')", mainimg:"naruto.avif", secondaryimg:"naruto.png", mym:"naruto.mym", video:"https://www.youtube.com/embed/7gwaDaD3Xpo?autoplay=0&mute=1", downloads:"naruto.txt"},
	{name:"Nightmare B4 Xmas", background:"url('img/backgrounds/nightmareb4xmas.png')", mainimg:"nightmareb4xmas.avif", secondaryimg:"nightmareb4xmas.png", mym:"nightmare_b4_xmas.mym", video:"https://www.youtube.com/embed/yMMcV_JmZY8?autoplay=0&mute=1", downloads:"nightmare_b4_xmas.txt"},
	{name:"Okami", background:"url('img/backgrounds/okami.png')", mainimg:"okami.avif", secondaryimg:"okami.png", mym:"okami.mym", video:"https://www.youtube.com/embed/TkcnWGy-ujQ?autoplay=0&mute=1", downloads:"okami.txt"},
	{name:"Old School Nintendo", background:"url('img/backgrounds/oldschoolnintendo.png')", mainimg:"oldschoolnintendo.avif", secondaryimg:"oldschoolnintendo.png", mym:"old_school_nintendo.mym", video:"https://www.youtube.com/embed/mJ5oMzBG1ZU?autoplay=0&mute=1", downloads:"old_school_nintendo.txt"},
	{name:"Pearl Jam", background:"url('img/backgrounds/pearl_jam.png')", mainimg:"pearl_jam.avif", secondaryimg:"pearl_jam.png", mym:"pearl_jam.mym", video:"https://www.youtube.com/embed/3WXtD_oQ1pE?si=dpinABw4dM5yUWgl?autoplay=0&mute=1", downloads:"pearl_jam.txt"},
	{name:"Pikmin", background:"url('img/backgrounds/pikmin.png')", mainimg:"pikmin.avif", secondaryimg:"pikmin.png", mym:"pikmin.mym", video:"https://www.youtube.com/embed/243IWjOtVW0?autoplay=0&mute=1", downloads:"pikmin.txt"},
	{name:"Pink Wii", background:"url('img/backgrounds/pinkwii.png')", mainimg:"pinkwii.avif", secondaryimg:"pinkwii.png", mym:"pinkwii.mym", video:"https://www.youtube.com/embed/6KIc0Ti_yek?si=8Rm43KU7WHDQwgsV?autoplay=0&mute=1", downloads:"pinkwii.txt"},
	{name:"Predator", background:"url('img/backgrounds/predator.png')", mainimg:"predator.avif", secondaryimg:"predator.png", mym:"predator.mym", video:"https://www.youtube.com/embed/QmCt75ROOxc?si=T7b3hggOhc9acsE9?autoplay=0&mute=1" ,downloads:"predator.txt"},
	{name:"Princess Ariel v1", background:"url('img/backgrounds/princess_ariel_v1.png')", mainimg:"princess_ariel_v1.avif", secondaryimg:"princess_ariel_v1.png", mym:"princess_ariel_v1.mym", video:"https://www.youtube.com/embed/gTVq66QoR0k?si=Nb3yILXlOUIPYX6D?autoplay=0&mute=1", downloads:"princess_ariel_v1.txt"},
	{name:"Princess Ariel v2", background:"url('img/backgrounds/princess_ariel_v2.png')", mainimg:"princess_ariel_v2.avif", secondaryimg:"princess_ariel_v2.png", mym:"princess_ariel_v2.mym", video:"https://www.youtube.com/embed/OvJgxkaySdE?si=f4cuyHBvc87CmpJR?autoplay=0&mute=1", downloads:"princess_ariel_v2.txt"},
	{name:"Princess Ariel v3", background:"url('img/backgrounds/princess_ariel_v3.png')", mainimg:"princess_ariel_v3.avif", secondaryimg:"princess_ariel_v3.png", mym:"princess_ariel_v3.mym", video:"https://www.youtube.com/embed/1yUyvw0ltpE?si=OrKwlOtmE4xJB9xB?autoplay=0&mute=1", downloads:"princess_ariel_v3.txt"},
	{name:"Psychedelic", background:"url('img/backgrounds/psycedelic.png')", mainimg:"Psychedelic.avif", secondaryimg:"psycedelic.png", mym:"psychedelic.mym", video:"https://www.youtube.com/embed/7aFjlUc8qlo?autoplay=0&mute=1", downloads:"psychedelic.txt"},
	{name:"Punch Out", background:"url('img/backgrounds/punchout.png')", mainimg:"punch_out.avif", secondaryimg:"punchout.png", mym:"punch_out.mym", video:"https://www.youtube.com/embed/ZLUdB9Kcfsg?si=p1MxmyLtZtlQyghJ?autoplay=0&mute=1", downloads:"punch_out.txt"},
	{name:"The Punisher", background:"url('img/backgrounds/punisher.png')", mainimg:"punisher.avif", secondaryimg:"punisher.png", mym:"punisherstage1.mym", video:"https://www.youtube.com/embed/iSYrRCjLmCg?si=uVN5DKmzOxJYR_Ta?autoplay=0&mute=1", downloads:"punisher.txt"},
	{name:"Ratchet and Clank", background:"url('img/backgrounds/ratchetnclank.png')", mainimg:"ratchetandclank.avif", secondaryimg:"ratchetnclank.png", mym:"ratchet_and_clank.mym", video:"https://www.youtube.com/embed/G_z6DopJRRo?autoplay=0&mute=1", downloads:"ratchet_and_clank.txt"},
	{name:"Robot Chicken", background:"url('img/backgrounds/robotchicken.png')", mainimg:"robotchicken.avif", secondaryimg:"robotchicken.png", mym:"robot_chicken.mym", video:"https://www.youtube.com/embed/FNNp-U3oVoA?si=9i1qyazsGQwT5e0J?autoplay=0&mute=1", downloads:"robot_chicken.txt"},
	{name:"Rockband 2", background:"url('img/backgrounds/rockband2.png')", mainimg:"rockband2.avif", secondaryimg:"rockband2.png", mym:"rockband_2.mym", video:"https://www.youtube.com/embed/HojBuUxihp0?autoplay=0&mute=1", downloads:"rockband_2.txt"},
	{name:"Saw", background:"url('img/backgrounds/saw.png')", mainimg:"saw.avif", secondaryimg:"saw.png", mym:"saw.mym", video:"https://www.youtube.com/embed/eXwIhUHvR54?si=dfoML_2H9z_oAYtE?autoplay=0&mute=1", downloads:"saw.txt"},
	{name:"Shadow The Hedgehog", background:"url('img/backgrounds/shadowthehedgehog.png')", mainimg:"shadowthehedgehog.avif", secondaryimg:"shadowthehedgehog.png", mym:"shadow_the_hedgehog.mym", video:"https://www.youtube.com/embed/yOXIGrcxR8A?autoplay=0&mute=1", downloads:"shadow_the_hedgehog.txt"},
	{name:"Silver The Hedgehog", background:"url('img/backgrounds/silverthehedgehog.png')", mainimg:"silverthehedgehog.avif", secondaryimg:"silverthehedgehog.png", mym:"silver_the_hedgehog.mym", video:"https://www.youtube.com/embed/sUx2VXxMLr0?si=8_HUuPqHAL3ZFMRm?autoplay=0&mute=1", downloads:"silver_the_hedgehog.txt"},
	{name:"Smash Brothers Brawl", background:"url('img/backgrounds/smashbros.png')", mainimg:"smashbros.avif", secondaryimg:"smashbros.png", mym:"smash_brothers_brawl.mym", video:"https://www.youtube.com/embed/03U2w5wxjBI?si=Gx5DCBH652Cz0fUq?autoplay=0&mute=1", downloads:"smashbros.txt"},
	{name:"Snoopy", background:"url('img/backgrounds/snoopy.png')", mainimg:"snoopy.avif", secondaryimg:"snoopy.png", mym:"snoopy.mym", video:"https://www.youtube.com/embed/R4Q3qtGEdcY?si=GfMZojNlX3aaVe6L?autoplay=0&mute=1", downloads:"snoopy.txt"},
	{name:"Spawn", background:"url('img/backgrounds/spawn.png')", mainimg:"spawn.avif", secondaryimg:"spawn.png", mym:"spawn.mym", video:"https://www.youtube.com/embed/ty2cAYvhqwE?si=zOcqMAxxXFvFkW0v?autoplay=0&mute=1", downloads:"spawn.txt"},
	{name:"Spiderman", background:"url('img/backgrounds/spiderman.png')", mainimg:"spiderman.avif", secondaryimg:"spiderman.png", mym:"Spiderman.mym", video:"https://www.youtube.com/embed/FBqAhYI2eb0?autoplay=0&mute=1", downloads:"Spiderman.txt"},
	{name:"SpongeBob", background:"url('img/backgrounds/spongebob.png')", mainimg:"spongebob.avif", secondaryimg:"spongebob.png", mym:"spongebob.mym", video:"https://www.youtube.com/embed/9uTA4kcxy7s?si=L855-PxHBxFVYZAa?autoplay=0&mute=1", downloads:"spongebob.txt"},
	{name:"Squid Billies", background:"url('img/backgrounds/squidbillies.png')", mainimg:"squidbillies.avif", secondaryimg:"squidbillies.png", mym:"squid_billiesstage1.mym", video:"https://www.youtube.com/embed/Si1EK-0t_l4?si=xXq63txbpE2kF6Jo?autoplay=0&mute=1", downloads:"squidbillies.txt"},
	{name:"StarCraft", background:"url('img/backgrounds/starcraft.png')", mainimg:"starcraft.avif", secondaryimg:"starcraft.png", mym:"star_craft.mym", video:"https://www.youtube.com/embed/Skg45dVotEQ?si=3mqJ_jgB2bXH9Hn9?autoplay=0&mute=1", downloads:"starcraft.txt"},
	{name:"Star Gate", background:"url('img/backgrounds/stargate.png')", mainimg:"stargate.avif", secondaryimg:"stargate.png", mym:"star_gate.mym", video:"https://www.youtube.com/embed/6LwuadUQlME?si=kDPm8DudqC4U1401?autoplay=0&mute=1", downloads:"stargate.txt"},
	{name:"Star Wars", background:"url('img/backgrounds/starwars.png')", mainimg:"starwars.avif", secondaryimg:"starwars.png", mym:"star_wars.mym", video:"https://www.youtube.com/embed/DYSM94FogyE?si=Y_IWo8pldhinyw0o?autoplay=0&mute=1", downloads:"starwars.txt"},
	{name:"Star Wars Unleashed", background:"url('img/backgrounds/starwarsunleashed.png')", mainimg:"starwarsunleashed.avif", secondaryimg:"starwarsunleashed.png", mym:"star_wars_unleashed.mym", video:"https://www.youtube.com/embed/rEzDAw0MGDo?si=mFL6Jj29KfGEz3A9?autoplay=0&mute=1", downloads:"starwarsunleashed.txt"},
	{name:"Steel Wii", background:"url('img/backgrounds/steelwii.png')", mainimg:"steelwii.avif", secondaryimg:"steelwii.png", mym:"steel_wii.mym", video:"https://www.youtube.com/embed/xPt3KYIEG3s?si=tE6mo4fh9V-_q4Ci?autoplay=0&mute=1", downloads:"steelwii.txt"},
	{name:"Storms", background:"url('img/backgrounds/storms.png')", mainimg:"storms.avif", secondaryimg:"storms.png", mym:"storms", video:"https://www.youtube.com/embed/GEm3yC-wxYo?si=hMEv7iq9tuqThP_y?autoplay=0&mute=1", downloads:"storms.txt"},
	{name:"Street Fighter", background:"url('img/backgrounds/streetfighter.png')", mainimg:"streetfighter.avif", secondaryimg:"streetfighter.png", mym:"street_fighter.mym", video:"https://www.youtube.com/embed/KLXauIJOTDA?si=hk-rGcX3ZEwfoKXb?autoplay=0&mute=1", downloads:"streetfighter.txt"},
	{name:"Super Hero Squad", background:"url('img/backgrounds/superherosquad.png')", mainimg:"superherosquad.avif", secondaryimg:"superherosquad.png", mym:"super_hero_squad.mym", video:"https://www.youtube.com/embed/VB-v2TYAO0g?autoplay=0&mute=1", downloads:"super_hero_squad.txt"},
	{name:"Super Mario RPG", background:"url('img/backgrounds/supermariorpg.png')", mainimg:"supermarioRPG.avif", secondaryimg:"supermariorpg.png", mym:"super_mario_RPG.mym", video:"https://www.youtube.com/embed/wMuN_a_lNqU?autoplay=0&mute=1", downloads:"super_mario_RPG.txt"},
	{name:"Super Sonic", background:"url('img/backgrounds/supersonic.png')", mainimg:"supersonic.avif", secondaryimg:"supersonic.png", mym:"super_sonic.mym", video:"https://www.youtube.com/embed/h0OdHk8D0aQ?autoplay=0&mute=1", downloads:"super_sonic.txt"},
	{name:"The Simpsons v1", background:"url('img/backgrounds/simpsons_v1.png')", mainimg:"thesimpsons_v1.avif", secondaryimg:"simpsons_v1.png", mym:"the_simpsons_v1.mym", video:"https://www.youtube.com/embed/Akl4tZ9eJio?autoplay=0&mute=1", downloads:"the_simpsons_v1.txt"},
	{name:"The Simpsons v2", background:"url('img/backgrounds/simpsons_v2.png')", mainimg:"thesimpsons_v2.avif", secondaryimg:"simpsons_v2.png", mym:"the_simpsons_v2.mym", video:"https://www.youtube.com/embed/9mgBLlYSGh8?si=jKVxOEHhvAGYwhbn?autoplay=0&mute=1", downloads:"the_simpsons_v2.txt"},
	{name:"The Simpsons v3", background:"url('img/backgrounds/simpsons_v3.png')", mainimg:"thesimpsons_v3.avif", secondaryimg:"simpsons_v3.png", mym:"the_simpsons_v3.mym", video:"https://www.youtube.com/embed/CHfKSOvrlI0?si=cEb_ysPl5PzT2txB?autoplay=0&mute=1", downloads:"the_simpsons_v3.txt"},
	{name:"Tails", background:"url('img/backgrounds/tails.png')", mainimg:"tails.avif", secondaryimg:"tails.png", mym:"tailsstage1.mym", video:"https://www.youtube.com/embed/z5zAlItABAQ?si=SMjSBQ5WNZkofdUK?autoplay=0&mute=1", downloads:"tails.txt"},
	{name:"The Terminator", background:"url('img/backgrounds/terminator.png')", mainimg:"terminator.avif", secondaryimg:"terminator.png", mym:"terminator.mym", video:"https://www.youtube.com/embed/rMwms3XB1DQ?si=a-wTlhaFf9i6FT8d?autoplay=0&mute=1", downloads:"terminator.txt"},
	{name:"Thunder Cats", background:"url('img/backgrounds/thundercats.png')", mainimg:"thundercats.avif", secondaryimg:"thundercats.png", mym:"thunder_cats.mym", video:"https://www.youtube.com/embed/LJW-3B1Vooo?autoplay=0&mute=1", downloads:"thunder_cats.txt"},
	{name:"Teenage Mutant Ninja Turtles", background:"url('img/backgrounds/tmnt.png')", mainimg:"tmnt.avif", secondaryimg:"tmnt.png", mym:"tmnt.mym", video:"https://www.youtube.com/embed/6cF81fjLRO4?autoplay=0&mute=1", downloads:"tmnt.txt"},
	{name:"Tomb Raider", background:"url('img/backgrounds/tombraider.png')", mainimg:"tombraider.avif ", secondaryimg:"tombraider.png", mym:"tomb_raider.mym", video:"https://www.youtube.com/embed/-H16kD1wlKc?autoplay=0&mute=1", downloads:"tomb_raider.txt"},
	{name:"Toxic Toons", background:"url('img/backgrounds/toxictoons.png')", mainimg:"toxictoons.avif", secondaryimg:"toxictoons.png", mym:"toxic_toons.mym", video:"https://www.youtube.com/embed/IRLjeDzfiGQ?si=nuXELrmXGWmn7iV4?autoplay=0&mute=1", downloads:"toxictoons.txt"},
	{name:"Transformers", background:"url('img/backgrounds/transformers.png')", mainimg:"transformers.avif", secondaryimg:"transformers.png", mym:"transformers.mym", video:"https://www.youtube.com/embed/hdEywhMs8m0?si=rg3o7Ea3Lf5sHn3D?autoplay=0&mute=1", downloads:"transformers.txt"},
	{name:"Tri-Gun", background:"url('img/backgrounds/trigun.png')", mainimg:"trigun.avif", secondaryimg:"trigun.png", mym:"tri-gun.mym", video:"https://www.youtube.com/embed/M7r54ClgzbY?si=23MBlhmxBPjDoC45?autoplay=0&mute=1", downloads:"trigun.txt"},
	{name:"True Blood", background:"url('img/backgrounds/trueblood.png')", mainimg:"trueblood.avif", secondaryimg:"trueblood.png", mym:"true_blood.mym", video:"https://www.youtube.com/embed/9h0TWXmV80E?autoplay=0&mute=1", downloads:"true_blood.txt"},
	{name:"Ultimate Dark Wii", background:"url('img/backgrounds/ultimatedarkwii.png')", mainimg:"ultimatedarkwii.avif", secondaryimg:"ultimatedarkwii.png", mym:"ultimate_dark_wiistage1.mym", video:"https://www.youtube.com/embed/2-CDQr4YMJ4?si=qp3dj9ijyVunPuHG?autoplay=0&mute=1", downloads:"ultimatedarkwii.txt"},
	{name:"Vegeta", background:"url('img/backgrounds/vegeta.png')", mainimg:"vegeta.avif", secondaryimg:"vegeta.png", mym:"vegeta.mym", video:"https://www.youtube.com/embed/QO3Zf1XGBVs?si=Gxc3002G73FKOPbP?autoplay=0&mute=1", downloads:"vegeta.txt"},
	{name:"Vista", background:"url('img/backgrounds/vista.png')", mainimg:"vista.avif", secondaryimg:"vista.png", mym:"vista.mym", video:"https://www.youtube.com/embed/Il6_-qWc1FM?si=iOQATO9ISemWG7vR?autoplay=0&mute=1", downloads:"vista.txt"},
	{name:"Walleye", background:"url('img/backgrounds/walleye.png')", mainimg:"walleye.avif", secondaryimg:"walleye.png", mym:"walleye_stage1.mym", video:"https://www.youtube.com/embed/VD9qS8ZDQRA?si=y9wzIibaPgxiw9oJ?autoplay=0&mute=1", downloads:"walleye.txt"},
	{name:"Wario Ware", background:"url('img/backgrounds/warioware.png')", mainimg:"warioware.avif", secondaryimg:"warioware.png", mym:"wario_ware.mym", video:"https://www.youtube.com/embed/uAIRvmuH4-E?si=Y5eph5DHxIYvpIQr?autoplay=0&mute=1", downloads:"warioware.txt"},
	{name:"White Stripes", background:"url('img/backgrounds/whitestripes.png')", mainimg:"whitestripes.avif", secondaryimg:"whitestripes.png", mym:"white_stripesstage1.mym", video:"https://www.youtube.com/embed/f3ZobSsLBag?si=XlY3fp3KQq6ER-EW?autoplay=0&mute=1", downloads:"whitestripes.txt"},
	{name:"White Wii", background:"url('img/backgrounds/whitewii.png')", mainimg:"whitewii.avif", secondaryimg:"whitewii.png", mym:"white_wii.mym", video:"https://www.youtube.com/embed/GoGr3jLUy38?si=2kGrKcINQACVq-Tt?autoplay=0&mute=1", downloads:"whitewii.txt"},
	{name:"Wiid", background:"url('img/backgrounds/wiid.png')", mainimg:"wiid.avif", secondaryimg:"wiid.png", mym:"wiid.mym", video:"https://www.youtube.com/embed/Gf2VpyzUVS8?si=BUGS3t8C_jzSObPe?autoplay=0&mute=1", downloads:"wiid.txt"},
	{name:"Wii Fit", background:"url('img/backgrounds/wiifit.png')", mainimg:"wiifit.avif", secondaryimg:"wiifit.png", mym:"wii_fit.mym", video:"https://www.youtube.com/embed/-IZVm5xSKCY?si=4mlNRyPnoQwAbrkK?autoplay=0&mute=1", downloads:"wiifit.txt"},
	{name:"Wii Sports", background:"url('img/backgrounds/wiisports.png')", mainimg:"wiisports.avif", secondaryimg:"wiisports.png", mym:"wii_sports.mym", video:"https://www.youtube.com/embed/nijDjtXZwTE?si=W6Ayevn-1xZUNo1D?autoplay=0&mute=1", downloads:"wiisports.txt"},
	{name:"Wii U", background:"url('img/backgrounds/wiiu.png')", mainimg:"wiiu.avif", secondaryimg:"wiiu.png", mym:"wii_u.mym", video:"https://www.youtube.com/embed/eAwrGrJQa3I?si=p--wxO_ygmTeAox_?autoplay=0&mute=1", downloads:"wiiu.txt"},
	{name:"Win XP OS", background:"url('img/backgrounds/windowsxp.png')", mainimg:"winxpos.avif", secondaryimg:"windowsxp.png", mym:"win_xp_os.mym", video:"https://www.youtube.com/embed/CpMXYTumKEE?autoplay=0&mute=1", downloads:"win_xp_os.txt"},
	{name:"Wolverine", background:"url('img/backgrounds/wolverine.png')", mainimg:"wolverine.avif", secondaryimg:"wolverine.png", mym:"wolverine.mym", video:"https://www.youtube.com/embed/S60LeJR6a54?autoplay=0&mute=1", downloads:"wolverine.txt"},
	{name:"WWE Raw", background:"url('img/backgrounds/wweraw.png')", mainimg:"wweraw.avif", secondaryimg:"wweraw.png", mym:"wwe_raw.mym", video:"https://www.youtube.com/embed/-wOT9u73m1M?si=cJSm8nPVI90DaOMr?autoplay=0&mute=1", downloads:"wweraw.txt"},
	{name:"Xbox 360", background:"url('img/backgrounds/xbox360.png')", mainimg:"xbox360.avif", secondaryimg:"xbox360.png", mym:"xbox360.mym", video:"https://www.youtube.com/embed/X0If0IgP8uQ?si=9rrlUcNi_V833qXN?autoplay=0&mute=1", downloads:"xbox360.txt"},
	{name:"Yugi-oh", background:"url('img/backgrounds/yugioh.png')", mainimg:"yugioh.avif", secondaryimg:"yugioh.png", mym:"yugioh.mym", video:"https://www.youtube.com/embed/sAOFnf7aGfs?si=t7e2g2Kqfn57KR4J?autoplay=0&mute=1", downloads:"yugioh.txt"},
	{name:"Zelda" , background:"url('img/backgrounds/zelda.png')", mainimg:"zelda.avif", secondaryimg:"zelda.png", mym:"zelda.mym", video:"https://www.youtube.com/embed/1NptoYk4ljA?autoplay=0&mute=1", downloads:"zelda.txt" },
	{name:"ZombWii", background:"url('img/backgrounds/zombwii.png')", mainimg:"zombwii.avif", secondaryimg:"zombwii.png", mym:"zombwii.mym", video:"https://www.youtube.com/embed/3A-N2TKvvro?si=4osUusbbeCAC8rp9?autoplay=0&mute=1", downloads:"zombwii.txt"},
];
//{name: background: mainimg: secondaryimg: mym: video: downloads:},
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
function resetbuilding() {
	closecntr = 180;
	minutesleft = 2;
	seccntr = 0;
	timer = null;
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
	document.getElementById("theme").selectedIndex = themeposition;
	return;
}
function findpreviewpath(input) {
	return "previewpics/" + completethemeinfo[input].mainimg;
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
			data: { action: "updatesinglethemeDLcnt", count: 1, downloadfile: completethemeinfo[pos_in].downloads },
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
		data: { action: "getsinglethemeDLcnt", downloadfile: completethemeinfo[pos_in].downloads },
		success: function(data) {
			//alert(data);
			$("#downloadcnt").text(data + " Downloads");
		},
	});
	return;
}
function changebackground(startbackground) {
	var backgroundelement = document.getElementById("body");
	return (startbackground == 1) ? backgroundelement.style.backgroundImage = completethemeinfo[themeposition].background : backgroundelement.style.backgroundImage = "url('img/WiiSysMenu.avif')";
}
function changebackgroundrandom(theme_Cnt) {
	var backgroundelement = document.getElementById("body");
	var randomnumber = Math.floor(Math.random() * theme_Cnt);
	return backgroundelement.style.backgroundImage = completethemeinfo[randomnumber].background;
	
}
function showdualpics() {
	//alert("show here");
	$("#dualpicmodal").slideDown("slow");
	document.getElementById("dualpic1").src = "previewpics/" +  completethemeinfo[themeposition].mainimg;
	document.getElementById("dualpic2").src = "img/backgrounds/" + completethemeinfo[themeposition].secondaryimg;
	var modal_close = document.getElementsByClassName("close")[1];
	modal_close.onclick = function() {
		$("#dualpicmodal").slideUp("slow");
	}
	var modal = document.getElementById("dualpicmodal");
	window.onclick = function(event) {
		if (event.target == modal) {
			$("#dualpicmodal").slideUp("slow");
		}
	}
	return;
}
// comments  -----------------------------------------------------------
function leavecomment() {
	commenting = true;
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
	viewing = true;
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
		$("#preview1").fadeOut();
		showsinglethemeimg(themeposition);
		$("#preview1").fadeIn();
	}
	else {
		$("#preview1").hide();
		let ivideo = document.getElementById("videoframe");
		ivideo.src = completethemeinfo[themeposition].video;
		ivideo.width = 710;
		ivideo.height = 538;
		$("#themevideocontainer").show();
	}
	return;
}
function previewcontrol(input_control) {
	console.log("input_contrtol = " + input_control);
	themeposition = themeposition + input_control;
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
function showsinglethemeimg(input) {
	return document.getElementById("preview1").src = findpreviewpath(input);
}
// theme building ------------------------------------------------------
function getregiondisplay(regionin) {
	switch(regionin) {
		case 609:
		case 513:
		case 481:
		case 449:
		case 417:
			return "U";
		break;
		case 610:
		case 514:
		case 482:
		case 450:
		case 418:
			return "E"; 
		break;
		case 608:
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
		case 609:
			return "0000001f"; // U
		break;
		case 513: 
			return "00000097"; 
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
		case 610: 
			return "00000022"; // E
		break;
		case 514:
			return "0000009a";
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
		case 608:
			return "0000001c"; // J
		break;
		case 512:
			return "00000094"; 
		break;
		case 480:
			return "00000084";
		break;
		case 448:
			return "00000078";
		break;
		case 416:
			return "0000006f";
		break; 
		case 518:
			return "0000009d"; // K
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
		case 608:
			return "608_vWii_J";
		break;
		case 609:
			return "609_vWii_U";
		break;
		case 610:
			return "610_vWii_E";
		break;
		case 513: 
			return "4.3_U"; // U
		break;
		case 481:
			return "4.2_U";
		break;
		case 449:
			return "4.1_U";
		break;
		case 417:
			return "4.0_U";
		break;
		case 514:
			return "4.3_E";// E
		break;
		case 482:
			return "4.2_E";
		break;
		case 450:
			return "4.1_E";
		break;
		case 418:
			return "4.0_E"; 
		break;
		case 512:
			return "4.3_J"; // J
		break;
		case 480:
			return "4.2_J";
		break;
		case 448:
			return "4.1_J";
		break;
		case 416:
			return "4.0_J";
		break; 
		case 518:
			return "4.3_K";
		break;
		case 486:
			return "4.2_K";
		break;
		case 454: 
			return "4.1_K";
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
		},
	});
	return;
}
function closedownloadnoupdate() {
	$("#downloadtext").html("<br><p>Your download has expired .<br><br>Thank You for using Wii Themer .</p>");
	remove = setTimeout(removesessionfolder, 5000);
	clearInterval(timer);
	resetbuilding();
	return;
}
function closedownload() {
	if (themeInfo.versionselected == 5) {
		$("#downloadtext").html("<br><p>Thank You for using Wii Themer .</p><p>Remember to grab an install app from links on the main page .</p> <p>WARNING : vWii themes have not been tested . Make sure you have Priiloader installed . The Installers on this site are for Wii ONLY .</p>");
	}
	else {
		$("#downloadtext").html("<br><p>Thank You for using Wii Themer .</p><p>Remember to grab an install app from links on the main page .</p>");
	}
	
	setTimeout(removesessionfolder(), 5000);
	setTimeout(updatecountfiles(2), 1000);
	setTimeout(updatesingleDLcnt(themeInfo.themeselected), 1000);
	setTimeout(increaseregionDLcnt(themeInfo.regionselected), 1000);
	clearInterval(timer);
	resetbuilding();
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
					//document.getElementById("theme").selectedIndex = 0;
					//document.getElementById("menuversion").selectedIndex = 0;
					//document.getElementById("region").selectedIndex = 0;
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
						copymessage.innerHTML += "Building " + themeInfo.name + " " + getversiondisplay(themeInfo.version) + ".csm please wait ..... ";
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
	let mymfile = completethemeinfo[themeinput].mym;
	console.log("mymfile = " + mymfile + "\ninput = " + themeinput);
	
	if(((themeinput >= 20) && (themeinput <= 27)) || (themeinput == 47) || (themeinput ==117)) {
		let region = null;
		region = Region[regioninput];
		mymfile = mymfile + region + ".mym";
	}

	console.log("mymfile = " + mymfile);
	return mymfile;
}
function findversionregion(versioninput, regioninput) {
	console.log("versioninput " + versioninput + "regioninput " + regioninput);
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
			else if(versioninput == 5) { // vwii
				return 609;
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
			else if(versioninput == 4) { //4.0
				return 418;
			}
			else if(versioninput == 5) { //vwll
				return 610;
			}
			else return -1;
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
			else if(versioninput == 5) { // vwii
				return 608;
			}
			else return -1;
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
			else if(versioninput == 4) // 4.0
				return -100;
			else return -1;
		}break;
	}
	return -1;
}
function buildThemestart() {
	$("#continue").fadeOut("slow");
	themeInfo.themeselected = document.getElementById("theme").selectedIndex;
	themeInfo.versionselected = document.getElementById("menuversion").selectedIndex;
	themeInfo.regionselected = document.getElementById("region").selectedIndex;
	themeInfo.mymfile = findMYM(themeInfo.themeselected, themeInfo.regionselected);
	themeInfo.version = findversionregion(themeInfo.versionselected, themeInfo.regionselected);
	if((themeInfo.version == "undefined") || (themeInfo.version == -1)){
		console.log("no case for vwii yet .");
		return;
	}
	themeInfo.name = completethemeinfo[themeInfo.themeselected].name;
	let spinoption = document.getElementsByName('option');
	let src = document.getElementById('csmsourcebox');
	themeInfo.themesrc = src.checked;
	console.log("source files = " + themeInfo.themesrc);
	//debugger;
	for(let i = 0; i < spinoption.length; i++){
		if(spinoption[i].checked){
			themeInfo.spinselected = spinoption[i].value;
			//console.log("spinoption " + themeInfo.spinselected + "\ni =" + i);
		}
	}
	let modal = document.getElementById("downloadtextmodal");
	modal.style.display = "block";
	var modalclose = document.getElementsByClassName("close")[2]; 
	modalclose.onclick = function() {
		$("#downloadtextmodal").slideUp("slow");
		removesessionfolder();
		clearInterval(timer);
		getsingleDLcnt(0);
		resetbuilding();
		return;
	}
	let name = document.getElementById("themename");
	name.innerHTML = themeInfo.name;
	//$("#modal").slideUp("slow");
	$("#downloadtext").slideDown("slow");
		
		
		setsesdir();
	//});
	
	return;
}
function getselected(input) {
	let selectedregion = document.getElementById("region").selectedIndex;
	let selectedversion = document.getElementById("menuversion").selectedIndex;
	let selectedtheme = document.getElementById("theme").selectedIndex;
	console.log(selectedversion + " selected version")
	if(input == 3) {
		loadvideo_img();
		getsingleDLcnt(selectedtheme);
		changebackground(1);
	}
	if((selectedtheme >= 0) && (selectedversion > 0) && (selectedregion > 0)) {
		if((selectedregion == 4) && (selectedtheme == 25) && (selectedversion == 4)) {
			$("#continue").slideUp();
			$("#message").html(regionkdarkredmessage + version40kmessage);
			$("#message").show();
			document.getElementById("menuversion").selectedIndex = 0;
			document.getElementById("region").selectedIndex = 0;
		}
		else {
			if((selectedregion == 4) && (selectedversion == 4)) {
				$("#continue").slideUp();
				$("#message").html(version40kmessage);
				$("#message").show();
				document.getElementById("menuversion").selectedIndex = 0;
				document.getElementById("region").selectedIndex = 0;
			}
			else {
				if((selectedregion == 4) && (selectedtheme == 25)) {
					$("#continue").slideUp();
					$("#message").html(regionkdarkredmessage);
					$("#message").show();
					document.getElementById("menuversion").selectedIndex = 0;
					document.getElementById("region").selectedIndex = 0;
				}
				else {
					$("#continue").slideDown();
					$("#message").fadeOut();
				}
			}
		}
	}
	else {
		$("#continue").slideUp();
		$("#message").fadeOut();
	}
	if(selectedversion == 5) {
		isWiiU = removeKregion(isWiiU);
	}
	else {
		isWiiU = addKregion(isWiiU)
	}
	return;
}

// page start -----------------------------------------------------------
function showmodal(modaltype) {
	var modal = document.getElementById("modal");
	var modal_close = document.getElementsByClassName("close")[0];

	$("#infocontainer").fadeOut("slow");
		$(".navinner").fadeOut("slow", function(){
			$(".modal-body").html('<div id="buildingcontainer" class=" text-white background-black border-white border-radius border-white-shadow"></div>');
			switch(modaltype) {
				case 1: {
					$("#modaltitle").text("Build Your Custom Theme");
					$(".modal-body").html('<div id="buildingcontainer" class=" text-white background-black border-white border-radius border-white-shadow"><div id="previewcontainer" class=""><img title="Click to show Images of Theme ." class="preview" id="preview1" src="" alt="preview picture 1" onclick="showdualpics()"></img><div id="themevideocontainer" class="border-radius hidden" ><iframe id="videoframe" class="border-radius" src="" title="" frameborder="0" allowfullscreen></iframe></div><div title="Previous Theme" id="larrow" class="text-center border-radius clearfix" onclick="previewcontrol(-1)">&lt;&lt;</div><div title="Next Theme" id="rarrow" class="text-center border-radius clearfix" onclick="previewcontrol(1)">&gt;&gt;</div><div title="Check out a video of the theme" id="checkpreview" class="text-center border-radius" onclick="loadvideo()">Theme Video Preview</div></div><div id="building" class=""><label for="themeset" id="themelabel"class="border-yellow border-radius border-yellow-shadow buildlabel ">Select Theme :</label><select title="Select a Theme" class="buildselect border-orange border-radius border-orange-shadow" name="themeset" id="theme" onchange="getselected(3)">	</select><br></br><label for="menuversionset" id="menuversionlabel" class="border-yellow border-radius border-yellow-shadow buildlabel ">Select System Menu Version :</label><select title="Select a Menu Version" class="buildselect border-orange border-radius border-orange-shadow" name="menuversionset" id="menuversion" onchange="getselected(1)"></select><br></br><label for="regionset" id="regionlabel" class="border-yellow border-radius border-yellow-shadow buildlabel ">Select System Region :</label><select title="Select a Region" class="buildselect border-orange border-radius border-orange-shadow" name="regionset" id="region" onchange="getselected(2)"></select><br></br><button title="Build and Download Theme" id="continue" class="text-white background-black border-green border-radius border-green-shadow" onclick="buildThemestart()">Build Theme</button></div><div id="spinoption" class=""><div id="downloadcnt">0 Downloads</div><div id="csmsourcelabel" class="border-orange border-radius border-orange-shadow buildlabel"><b><i>Optional</i></b> :</div><br><br><input title="check box to download zip file with theme source files and theme file ." type="checkbox" name="csmsource" id="csmsourcebox"></input><label for="csmsourcebox" title="check box to download zip file with theme source files{.mym, .app, spintype.mym} and theme file(.csm) .">Theme source files</label><div id="optionlabel" class="border-orange border-radius border-orange-shadow buildlabel"><b><i>Optional</i></b> :</div><br><br><input type="radio" name="option" id="fastspin" value="fastspin"></input><label for="fastspin">Fast Spin Channels</label><br><br><input type="radio" name="option" id="spin" value="spin"></input><label for="spin">Spin Channels</label><br><br><input type="radio" name="option" id="nospin" value="nospin" checked></input><label for="nospin">No Spin Channels</label><br><br><div title="Your Selection Error Info." id="message" class="border-yellow border-radius border-yellow-shadow background-black text-white hidden"></div></div></div>');
					var modalcolor = document.getElementsByClassName("modal-content")[0]; 
					modalcolor.style.border = "1px solid red";
					modalcolor.style.boxShadow = "2px 4px 15px red";
					loadthemelist();
					loadversions();
					loadregions();
					loadvideo_img();
					getsingleDLcnt(themeposition);
					changebackground(1);
					let spinoption = document.getElementsByName('option');
					if(spinoption[2].checked == false)
						spinoption[2].checked = true;
				}break;
				case 2: {
					$("#modaltitle").text("Helpful Links");
					getcountfiles(3);
					getcountfiles(4);
					$(".modal-body").html("<div class='links'><a target='blank' href='https://gbatemp.net'>GBAtemp</a>The best gaming community . <a target='blank' href='https://gbatemp.net/threads/wii-theme-team-creations.260327/'> Wii Theme Team</a>The team that made all the Dark Wii Colored themes . </div><div class='links'><a target='blank' href='https://wiibrew.org/wiki/System_Menu'>Wii Brew</a>A great place to learn about the Wii's tech .</div><div class='links'><a target='blank' href='https://www.youtube.com/user/McDiddy81/videos'>Diddy81 Youtube Channel</a>One of the main members of the Wii Theme Team .</div><div class='links'><a target='blank' href='https://gbatemp.net/threads/wii-themes.174895/'>Frylok's Themes</a>More themes .</div><div class='links'><a target='blank' href='https://gbatemp.net/threads/best-way-to-mod-any-wii-modmii-for-windows-official-support-thread.207126/page-486'>ModMii</a>The best way to mod a wii .</div><div class='links'><a target='blank' href='https://wii.guide/themes'>Wii Guide</a>Guide : Installing Wii Menu Themes </div><div class='links'><a target='blank' href='https://gbatemp.net/threads/mymenuifymod.301019/'>MyMenuifyMod</a>A wii app to install themes .<a href='http://wiithemer.org/downloads/mymenuifymod.zip' onclick='updatecountfiles(3)'>Download</a> MyMenuifyMod(v2.0) .<span id='mymenuifymoddownloads'></span></div><div class='links'><a target='blank' href='https://gbatemp.net/threads/wii-themer-a-tool-to-install-custom-themes.346675/'>Wii Themer</a>A wii app to install themes .<a href='http://wiithemer.org/downloads/wiithemer.zip' onclick='updatecountfiles(4)'>Download</a> Wii Themer(v2.0) .<span id='wiithemerdownloads'></span></div><div class='links'><a target='blank' href='http://wiithemer.org/mym/'>Theme Database</a>A database of all the available theme .mym files .</div>");
					var modalcolor = document.getElementsByClassName("modal-content")[0]; 
					modalcolor.style.border = "1px solid orange";
					modalcolor.style.boxShadow = "2px 4px 15px orange";
				}break;
				case 3: {
					$("#modaltitle").text("Wii Themer Usage");
					getcountfiles(1);
					getcountfiles(2);
					$(".modal-body").html('<p>Currently <span id="themecounttext"></span> Themes Available .</p><p>Press "Build" button to choose a theme, version, and region .</p><p>Press "Links" button for some great websites and apps .</p><p>Press "About" button to see these instructions, website stats, etc...</p><p>Press "Contact" button to see the owner/operator contact information.</p><p>This website also processes requests for the Wii app Wii Theme Manager (Unreleased).</p><p>Visitors - <span id="pageloadcount"></span></p><p>Themes Served - <span id="themedlcount"></span></p>');
					$("#themecounttext").text(theme_count);
					var modalcolor = document.getElementsByClassName("modal-content")[0]; 
					modalcolor.style.border = "1px solid yellow";
					modalcolor.style.boxShadow = "2px 4px 15px yellow";
				}break;
				case 4: {
					$("#modaltitle").text("Contact Info");
					$(".modal-body").html('<p>Contact Naythan with site issues and/or questions .</p><p>Email :<a href="mailto:nayte1976@gmail.com"><i>Naythan Morey</i></a>@ gmail</p><p>Email :<a href="mailto:scooby74029@yahoo.com"><i>Scooby74029 </i></a>from GbaTemp</p><p>Email :<a href="mailto:admin@wiithemer.org"><i>admin </i></a>@ wiithemer.org</p>');
					var modalcolor = document.getElementsByClassName("modal-content")[0]; 
					modalcolor.style.border = "1px solid green";
					modalcolor.style.boxShadow = "2px 4px 15px green";
				}break;
			}
			$("#modal").slideDown("slow");
		});
	
	modal_close.onclick = function() {
		$("#modal").slideUp("slow", function(){
			$(".navinner").fadeIn("slow");
			$("#infocontainer").fadeIn("slow");
			if(modaltype == 1) resetglobals();
		});
	}
	window.onclick = function(event) {
		if(modaltype == 1) return;
		if (event.target == modal) {
			$("#modal").slideUp("slow", function(){
				$(".navinner").fadeIn("slow", function() {
					$("#infocontainer").fadeIn("slow");
				});
			});
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
		success: function(data) {
			sessionid = data;
			setCookie("Id", data);
		},
	});
	return sessionid;
}
function checkvisitor() {
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
	return	showmodal(navinput);
}
function loadregions() {
	for(let i = 0; i < Region.length; i++) {
		$('#region').append($('<option>',
			{
				value: i,
				text : Region[i] 
			}
		));
	}
	return;
}
function addKregion(input_in) {
	console.log("add() before len = " + Region.length);
	if(input_in) {
		$('#region').append($('<option>',
				{
					value: 4,
					text : "K" 
				}
		));
		input_in = false;
	}
	console.log("add() after len = " + Region.length);

	return input_in;
}
function removeKregion(input_in) {
	console.log(" remove() before len = " + Region.length);
	document.getElementById("region").remove(4);
	console.log(" remove() after len = " + Region.length);
	
	return input_in = true;
}
function loadversions() {
	for(let i = 0; i < version.length; i++) { 
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
			text : completethemeinfo[i].name
		}
		));
	}

	return;
}
function setCookie(cname, cvalue) {
	document.cookie = cname + "=" + cvalue + ";" + "Samesite=Strict;";
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
