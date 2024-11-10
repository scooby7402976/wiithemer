var themeposition = 0;
var closecntr = 180;
var minutesleft = 2;
var seccntr = 0;
var themeInfo = {};
var sessionid = null;
var themevideomode = false;
var completefileinfo = [null];
var timer = null;
var isWiiU = false;
const Region = ["", "U", "E", "J", "K"];
const region_wii = ["", "wii_U", "wii_E", "wii_J", "wii_K"];
const region_vWii = ["", "vwii_U", "vwii_E", "vwii_J"];
const regionkdarkredmessage = "Dark Wii Red was not offically made for the Korean region .<br>";
const version = ["", "4.3", "4.2", "4.1", "4.0", "vWii (WiiU)"];
const version40kmessage = "The Korean region did not have System Menu v4.0 .<br>";
const vWii_regions = "vWii has no Korean Region .";
const max_themes = 300;

//{name:"", background:"", mainimg:"", secondaryimg:"", mym:"", video:"", downloads:""},
const completethemeinfo = [
	{name:"Among Us v1", background:"", mainimg: "amongusv1.avif", secondaryimg:"amongusv1.png", mym:"amongusv1.mym", video:"https://www.youtube.com/embed/nO1V_81oC1g?si=3ejJl9qmBal_R8r5?autoplay=0&mute=1", downloads:"amongusv1.txt"},
	{name:"Among Us v2", background:" ", mainimg: "amongusv2.avif", secondaryimg:"amongusv2.png", mym:"amongusv2.mym", video:"https://www.youtube.com/embed/1DZQG9F25Y4?si=pBM1xC9MpFdPeKtB?autoplay=0&mute=1", downloads:"amongusv2.txt"},
	{name:"Animal Crossing", background:"url('img/backgrounds/animalcrossing.png')", mainimg:"animalcrossing.avif", secondaryimg:"animalcrossing.png", mym:"animal_crossing.mym", video:"https://www.youtube.com/embed/2hZHkraXOpA?autoplay=0&mute=1", downloads:"animal_crossing.txt"},
	{name:"Animal Crossing v2", background:"", mainimg:"animalcrossingv2.avif", secondaryimg:"animalcrossingv2.png", mym:"animal_crossing_v2.mym", video:"https://www.youtube.com/embed/zs9OcnVkpTY?si=tEd2FZ2UjyRJCc0Y?autoplay=0&mute=1", downloads:"animal_crossing_v2.txt"},
	{name:"Apple", background:"", mainimg:"apple.avif", secondaryimg:"apple.png", mym:"apple.mym", video:"https://www.youtube.com/embed/oZXzGzkOwZs?si=K4Mlcb6mbeWOZIax?autoplay=0&mute=1", downloads:"apple.txt"},
	{name:"Aqua Teen Hunger Force", background:"url('img/backgrounds/ATHF.png')", mainimg:"aquateenhungerforce.avif", secondaryimg:"ATHF.png", mym:"aqua_teen_hunger_forcestage1.mym", video:"https://www.youtube.com/embed/HtIxy7EuSEA?si=OafY-qA2HJS3G5A5?autoplay=0&mute=1", downloads:"aqua_teen_hunger_force.txt"},
	{name:"Bakugan", background:"url('img/backgrounds/bakugan.png')", mainimg:"bakugan.avif", secondaryimg:"bakugan.png", mym:"bakugan.mym", video:"https://www.youtube.com/embed/1sje3UaUNK4?autoplay=0&mute=1", downloads:"bakugan.txt"},
	{name:"Batman v1", background:"url('img/backgrounds/batmanv1.png')", mainimg:"batmanv1.avif", secondaryimg:"batmanv1.png", mym:"batman_v1.mym", video:"https://www.youtube.com/embed/_O_pPfQe5Do?autoplay=0&mute=1", downloads:"batman_v1.txt"},
	{name:"Batman v2", background:"url('img/backgrounds/batmanv2.png')", mainimg:"batmanv2.avif", secondaryimg:"batmanv2.png", mym:"batman_v2.mym", video:"https://www.youtube.com/embed/RhfS_ZdaDVU?autoplay=0&mute=1", downloads:"batman_v2.txt"},
	{name:"Notorious B.I.G.", background:"", mainimg:"biggie.avif", secondaryimg:"biggie.png", mym:"biggie_stage1.mym", video:"https://www.youtube.com/embed/2mJFuiNnAo8?si=RLjpDy2p4Wbira0F?autoplay=0&mute=1", downloads:"biggie.txt"},
	{name:"Billy Mays", background:"", mainimg:"billymays.avif", secondaryimg:"billymays.png", mym:"billy_mays.mym", video:"https://www.youtube.com/embed/8lxUIOhhyY4?si=b9EtProCCiJ94XjG?autoplay=0&mute=1", downloads:"billymays.txt"},
	{name:"Black Gold", background:"", mainimg:"blackgold.avif", secondaryimg:"blackgold.png", mym:"blackgold.mym", video:"https://www.youtube.com/embed/S8FYX8l09Tg?si=gbfexY4AjjUCu3fN?autoplay=0&mute=1", downloads:"blackgold.txt"},
	{name:"Black Mage", background:"url('img/backgrounds/blackmage.png')", mainimg:"blackmage.avif", secondaryimg:"blackmage.png", mym:"black_mage.mym", video:"https://www.youtube.com/embed/Nm_I4p-a4qo?autoplay=0&mute=1", downloads:"black_mage.txt"},
	{name:"Black Pirate", background:"url('img/backgrounds/blackpirate.png')", mainimg:"blackpirate.avif", secondaryimg:"blackpirate.png", mym:"black_pirate.mym", video:"https://www.youtube.com/embed/6o4L6axGsgU?autoplay=0&mute=1", downloads:"black_pirate.txt"},
	{name:"Bleach", background:"url('img/backgrounds/bleach.png')", mainimg:"bleach.avif", secondaryimg:"bleach.png", mym:"bleach.mym", video:"https://www.youtube.com/embed/6R7Zgni2vbQ?autoplay=0&mute=1", downloads:"bleach.txt"},
	{name:"BoBoBo", background:" ", mainimg:"bobobo.avif", secondaryimg:"bobobo.png", mym:"bobobo_stage1.mym",  video:"https://www.youtube.com/embed/owSsTt5E19c?si=rC0VFf1FUHF6GU73?autoplay=0&mute=1", downloads:"bobobo.txt"},
	{name:"Boondock Saints", background:"url('img/backgrounds/boondocksaints.png')", mainimg:"boondocksaints.avif", secondaryimg:"boondocksaints.png", mym:"boondock_saints.mym", video:"https://www.youtube.com/embed/5tk08eRKYNI?autoplay=0&mute=1", downloads:"boondock_saints.txt"},
	{name:"Bowser", background:"url('img/backgrounds/bowser.png')", mainimg:"bowser.avif", secondaryimg:"bowser.png", mym:"bowser.mym", video:"https://www.youtube.com/embed/tdYdYU1KKdw?autoplay=0&mute=1", downloads:"bowser.txt"},
	{name:"Broly", background:"url('img/backgrounds/broly.png')", mainimg:"broly.avif", secondaryimg:"broly.png", mym:"broly.mym", video:"https://www.youtube.com/embed/-rd2YPJ9jOE?autoplay=0&mute=1", downloads:"broly.txt"},
	{name:"Call of Duty", background:"url('img/backgrounds/callofduty.png')", mainimg:"callofduty.avif", secondaryimg:"callofduty.png", mym:"call_of_duty.mym", video:"https://www.youtube.com/embed/zaHUh0pinlA?autoplay=0&mute=1", downloads:"call_of_duty.txt"},
	{name:"Car", background:"url('img/backgrounds/car.png')", mainimg:"car.avif", secondaryimg:"car.png", mym:"car.mym", video:"https://www.youtube.com/embed/425H8lC96es?autoplay=0&mute=1", downloads:"car.txt"},
	{name:"Cars", background:"url('img/backgrounds/cars.png')", mainimg:"cars.avif", secondaryimg:"cars.png", mym:"cars_stage1.mym", video:"https://www.youtube.com/embed/FNyt_khFHsI?autoplay=0&mute=1", downloads:"cars.txt"},
	{name:"Check Mii Out", background:"url('img/backgrounds/check_mii_out.png')", mainimg:"check_mii_out.avif", secondaryimg:"check_mii_out.png", mym:"check_mii_out.mym", video:"https://www.youtube.com/embed/Og-xmUTZt6o?si=Tv2DHxvW458-FGzN?autoplay=0&mute=1", downloads:"check_mii_out.txt"},
	{name:"Chrono Trigger", background:"", mainimg:"chronotrigger.avif", secondaryimg:"chronotrigger.png", mym:"chronotrigger.mym", video:"https://www.youtube.com/embed/98X7CwDem_8?si=m-SBfPqR3tmt9ohw?autoplay=0&mute=1", downloads:"chronotrigger.txt"},
	{name:"Clock Work Orange", background:"", mainimg:"clockworkorange.avif", secondaryimg:"clockworkorange.png", mym:"clockwork_orange.mym", video:"https://www.youtube.com/embed/uIRzAfn0CE0?si=bjUfrDRLTfDkpSp0?autoplay=0&mute=1", downloads:"clockworkorange.txt"},
	{name:"Club Penguin", background:"", mainimg:"clubpenguin.avif", secondaryimg:"clubpenguin.png", mym:"clubpenguin.mym", video:"https://www.youtube.com/embed/QwJMxmJ4tqg?si=EPT7yC-o_K9JViug?autoplay=0&mute=1", downloads:"clubpenguin.txt"},
	{name:"Code Geass", background:"url('img/backgrounds/codegeass.png')", mainimg:"codegeass.avif", secondaryimg:"codegeass.png", mym:"code_geass.mym", video:"https://www.youtube.com/embed/X38-YkQwEL4?autoplay=0&mute=1", downloads:"code_geass.txt"},
	{name:"Conduit", background:"", mainimg:"conduit.avif", secondaryimg:"conduit.png", mym:"conduit.mym", video:"https://www.youtube.com/embed/z2Tu0qbCgg0?si=7t8ZT5OpR-ngUjUu?autoplay=0&mute=1", downloads:"conduit.txt"},
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
	{name:"Dog Man", background:"", mainimg:"dogman.avif", secondaryimg:"dogman.png", mym:"dogman.mym", video:"https://www.youtube.com/embed/kH1IuIKQK8M?si=-8WgDFUMr9P6KVC9?autoplay=0&mute=1", downloads:"dogman.txt"},
	{name:"Dragon Ball Z v1", background:"url('img/backgrounds/dragonballzv1.png')", mainimg:"dragonballzv1.avif", secondaryimg:"dragonballzv1.png", mym:"dragon_ball_z_v1.mym", video:"https://www.youtube.com/embed/pM2RB5cqVSw?autoplay=0&mute=1", downloads:"dragon_ball_z_v1.txt"},
	{name:"Dragon Ball Z v2", background:"url('img/backgrounds/dragonballzv2.png')", mainimg:"dragonballzv2.avif", secondaryimg:"dragonballzv2.png", mym:"dragon_ball_z_v2.mym", video:"https://www.youtube.com/embed/hLBvwN_Sj38?autoplay=0&mute=1", downloads:"dragon_ball_z_v2.txt"},
	{name:"Dr Who", background:"url('img/backgrounds/drwho.png')", mainimg:"drwho.avif", secondaryimg:"drwho.png", mym:"dr_who.mym", video:"https://www.youtube.com/embed/um4V5Wu8fq8?autoplay=0&mute=1", downloads:"dr_who.txt"},
	{name:"De-Generation X", background:"", mainimg:"dx.avif", secondaryimg:"dx.png", mym:"dx.mym", video:"https://www.youtube.com/embed/Ikiv1vkJd1w?si=RriJhX94ADqf8iHK?autoplay=0&mute=1", downloads:"dx.txt"},
	{name:"Eagles", background:"", mainimg:"eagles.avif", secondaryimg:"eagles.png", mym:"eagles.mym", video:"https://www.youtube.com/embed/H2zvZ1b9dHo?si=6HrAJUG0BwuJsNKi?autoplay=0&mute=1", downloads:"eagles.txt"},
	{name:"Earth Bound", background:"url('img/backgrounds/earthbound.png')", mainimg:"earthbound.avif", secondaryimg:"earthbound.png", mym:"earth_bound.mym", video:"https://www.youtube.com/embed/gO4k6ggnL0U?autoplay=0&mute=1", downloads:"earth_bound.txt"},
	{name:"Earth Bound v2", background:"", mainimg:"earthboundv2.avif", secondaryimg:"earthboundv2.png", mym:"earth_boundv2.mym", video:"https://www.youtube.com/embed/Oim0ewCMzlg?si=XOlP0tHsydIr9zfN?autoplay=0&mute=1", downloads:"earth_boundv2.txt"},
	{name:"Emo Blue", background:"", mainimg:"emoblue.avif", secondaryimg:"emoblue.png", mym:"emoblue.mym", video:"https://www.youtube.com/embed/7EpLqmqxwes?si=wYUqFxKmwEZ0Yw-h?autoplay=0&mute=1", downloads:"emoblue.txt"},
	{name:"Emo Green", background:"", mainimg:"emogreen.avif", secondaryimg:"emogreen.png", mym:"emogreen.mym", video:"https://www.youtube.com/embed/j4oaXwXi9Zg?si=rtxSbP-DeTcrsaZx?autoplay=0&mute=1", downloads:"emogreen.txt"},
	{name:"Emo Pink", background:"", mainimg:"emopink.avif", secondaryimg:"emopink.png", mym:"emopink.mym", video:"https://www.youtube.com/embed/GG2aRdXmgic?si=gl_deznBXMXAtB8g?autoplay=0&mute=1", downloads:"emopink.txt"},
	{name:"Emo Purple", background:"", mainimg:"emopurple.avif", secondaryimg:"emopurple.png", mym:"emopurple.mym", video:"https://www.youtube.com/embed/HUHCEhV-rdU?si=NEdQP5H_2B4xJqzS?autoplay=0&mute=1", downloads:"emopurple.txt"},
	{name:"Emo Red", background:"", mainimg:"emored.avif", secondaryimg:"emored.png", mym:"emored.mym", video:"https://www.youtube.com/embed/Q8Qhn8lsNmY?si=az5eCq_0ZMTC7iM5?autoplay=0&mute=1", downloads:"emored.txt"},
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
	{name:"Garfield", background:"", mainimg:"garfield.avif", secondaryimg:"garfield.png", mym:"garfield.mym", video:"https://www.youtube.com/embed/lZZ3f6G_Mhs?si=xBNAGvmT06-w9llh?autoplay=0&mute=1", downloads:"garfield.txt"},
	{name:"Gears of War", background:"url('img/backgrounds/gearsofwar.png')", mainimg:"gearsofwar.avif", secondaryimg:"gearsofwar.png", mym:"gears_of_war.mym", video:"https://www.youtube.com/embed/0AUq2xqwlEc?autoplay=0&mute=1", downloads:"gears_of_war.txt"},
	{name:"Ghost Busters", background:"url('img/backgrounds/ghostbusters.png')", mainimg:"ghostbusters.avif", secondaryimg:"ghostbusters.png", mym:"ghost_busters.mym", video:"https://www.youtube.com/embed/q1Y3VAmsXxM?autoplay=0&mute=1", downloads:"ghost_busters.txt"},
	{name:"Golden Sun", background:"url('img/backgrounds/goldensun.png')", mainimg:"GoldenSun.avif", secondaryimg:"goldensun.png", mym:"golden_sun.mym", video:"https://www.youtube.com/embed/qZO74MDfGXY?autoplay=0&mute=1", downloads:"golden_sun.txt"},
	{name:"Gothic", background:"url('img/backgrounds/gothic.png')", mainimg:"gothic.avif", secondaryimg:"gothic.png", mym:"gothic.mym", video:"https://www.youtube.com/embed/Ko3ZcoCmwPI?si=QROVEdiG91ky82_V?autoplay=0&mute=1", downloads:"gothic.txt"},
	{name:"Grateful Dead", background:"", mainimg:"gratefuldead.avif", secondaryimg:"gratefuldead.png", mym:"gratefuldead.mym", video:"https://www.youtube.com/embed/LURcBb9sF98?si=oebw46IB5hS1hxDU?autoplay=0&mute=1", downloads:"gratefuldead.txt"},
	{name:"Hand Drawn", background:"url('img/backgrounds/handdrawn.png')", mainimg:"HandDrawn.avif", secondaryimg:"handdrawn.png", mym:"hand_drawn.mym", video:"https://www.youtube.com/embed/e19Hk1Zbp0c?autoplay=0&mute=1", downloads:"hand_drawn.txt"},
	{name:"Hello Kitty", background:"url('img/backgrounds/hellokitty.png')", mainimg:"HelloKitty.avif", secondaryimg:"hellokitty.png", mym:"hello_kitty.mym", video:"https://www.youtube.com/embed/Rh-_PneEKCY?autoplay=0&mute=1", downloads:"hello_kitty.txt"},
	{name:"He-Man", background:"url('img/backgrounds/heman.png')", mainimg:"heman.avif", secondaryimg:"heman.png", mym:"he-manstage1.mym", video:"https://www.youtube.com/embed/vUzusxTYj9w?si=UNjjoXBw-c4BJBWc?autoplay=0&mute=1", downloads:"heman.txt"},
	{name:"Hell's Kitchen", background:"", mainimg:"hellskitchen.avif", secondaryimg:"hellskitchen.png", mym:"hellskitchen.mym", video:"https://www.youtube.com/embed/rhZvXoDqJx4?si=dsfWlztTT2Fz_RR3?autoplay=0&mute=1", downloads:"hellskitchen.txt"},
	{name:"Heros", background:"url('img/backgrounds/heros.png')", mainimg:"heros.avif", secondaryimg:"heros.png", mym:"heros.mym", video: "https://www.youtube.com/embed/kM-Sgb2wRig?autoplay=0&mute=1",downloads:"heros.txt"},
	{name:"The Hundreds", background:"", mainimg:"hundreds.avif", secondaryimg:"hundreds.png", mym:"hundreds.mym", video:"https://www.youtube.com/embed/mCGMAJkoQp4?si=qq2S6uyJYOkl3mBk?autoplay=0&mute=1", downloads:"hundreds.txt"},
	{name:"Imports", background:"", mainimg:"imports.avif", secondaryimg:"imports.png", mym:"imports.mym", video:"https://www.youtube.com/embed/49LLOgWKxJI?si=ZaPDRGHkUVw4QDTb?autoplay=0&mute=1", downloads:"imports.txt"},
	{name:"In Betweeners", background:"url('img/backgrounds/inbetweeners.png')", mainimg:"inbetweeners.avif", secondaryimg:"inbetweeners.png", mym:"in_betweeners.mym", video:"https://www.youtube.com/embed/Ng8-yaNi1gE?autoplay=0&mute=1", downloads:"in_betweeners.txt"},
	{name:"Insane Clown Posse", background:"url('img/backgrounds/icp.png')", mainimg:"icp.avif", secondaryimg:"icp.png", mym:"insane_clown_posse.mym", video:"https://www.youtube.com/embed/nKo90-C1d8U?autoplay=0&mute=1", downloads:"insane_clown_posse.txt"},
	{name:"Illusions of Gaia", background:"", mainimg:"illusionsofgaia.avif", secondaryimg:"illusionsofgaia.png", mym:"illusionsofgaia.mym", video:"https://www.youtube.com/embed/nPaNCfmKKIA?si=yN1ldPBI9TR4uOBH?autoplay=0&mute=1", downloads:"illusionsofgaia.txt"},
	{name:"Its A Me Mario", background:"url('img/backgrounds/itsamemario.png')", mainimg:"itsamemario.avif", secondaryimg:"itsamemario.png", mym:"itsamemario.mym", video:"https://www.youtube.com/embed/RXxxwKtNPJk?autoplay=0&mute=1", downloads:"itsamemario.txt"},
	{name:"Jet Set Radio", background:"", mainimg:"jetsetradio.avif", secondaryimg:"jetsetradio.png", mym:"jetsetradio.mym", video:"https://www.youtube.com/embed/3KtwBglT7OI?si=kPvE5kMgZwc78GAW?autoplay=0&mute=1", downloads:"jetsetradio.txt"},
	{name:"Jimmy Neutron", background:"", mainimg:"jimmyneutron.avif", secondaryimg:"jimmyneutron.png", mym:"jimmyneutron.mym", video:"https://www.youtube.com/embed/j1JtKOE1XgA?si=eoPN5xB5H-Wu3h98?autoplay=0&mute=1", downloads:"jimmyneutron.txt"},
	{name:"Joker", background:"url('img/backgrounds/joker.png')", mainimg:"joker.avif", secondaryimg:"joker.png", mym:"jokerstage1.mym", video:"https://www.youtube.com/embed/cok8NmKGrQk?si=x43QProMRv3A1K35?autoplay=0&mute=1", downloads:"joker.txt"},
	{name:"Jurassic Park 3", background:"url('img/backgrounds/jurassicpark3.png')", mainimg:"jurassicpark3.avif", secondaryimg:"jurassicpark3.png", mym:"jurassic_park_3.mym", video:"https://www.youtube.com/embed/bgmwbNsbT04?autoplay=0&mute=1", downloads:"jurassic_park_3.txt"},
	{name:"Kid Icarus", background:"", mainimg:"kidicarus.avif", secondaryimg:"kidicarus.png", mym:"kidicarus.mym", video:"https://www.youtube.com/embed/FAe1W-cGYh4?si=o5WJO-gvG_AAB1Pl?autoplay=0&mute=1", downloads:"kidicarus.txt"},
	{name:"Kingdom Hearts", background:"url('img/backgrounds/kingdomhearts.png')", mainimg:"kingdomhearts.avif", secondaryimg:"kingdomhearts.png", mym:"kingdom_hearts.mym", video:"https://www.youtube.com/embed/YQf3umMzGNs?autoplay=0&mute=1", downloads:"kingdom_hearts.txt"},
	{name:"Kirby", background:"url('img/backgrounds/kirby.png')", mainimg:"kirby.avif", secondaryimg:"kirby.png", mym:"kirby.mym", video:"https://www.youtube.com/embed/NoPUDwdQy8Q?autoplay=0&mute=1", downloads:"kirby.txt"},
	{name:"Kirby Adventures", background:"", mainimg:"kirbyadventures.avif", secondaryimg:"kirbyadventures.png", mym:"kirbyadventures.mym", video:"https://www.youtube.com/embed/ziexDcITbbc?si=6VfHLGeO4r8hftD1?autoplay=0&mute=1", downloads:"kirbyadventures.txt"},
	{name:"Kiss", background:"", mainimg:"kiss.avif", secondaryimg:"kiss.png", mym:"kiss_stage1.mym", video:"https://www.youtube.com/embed/hyQfXng5CyI?si=v23yevJjLo4leCBH?autoplay=0&mute=1", downloads:"kiss.txt"},
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
	{name:"Man Hunt", background:"", mainimg:"manhunt.avif", secondaryimg:"manhunt.png", mym:"manhunt_stage1.mym", video:"https://www.youtube.com/embed/3GkjVRkuW4M?si=dkzuR71Xh7qN_gOa?autoplay=0&mute=1", downloads:"manhunt.txt"},
	{name:"Maria", background:"", mainimg:"maria.avif", secondaryimg:"maria.png", mym:"maria_stage1.mym", video:"https://www.youtube.com/embed/LG2A1xP9-rI?si=hJWOit_pJvwQGuER?autoplay=0&mute=1", downloads:"maria.txt"},
	{name:"Mario", background:"url('img/backgrounds/mariojeb.png')", mainimg:"mario.avif", secondaryimg:"mariojeb.png", mym:"mario.mym", video:"https://www.youtube.com/embed/mbT0hzSG2AU?autoplay=0&mute=1", downloads:"mario.txt"},
	{name:"Mario Kart", background:"url('img/backgrounds/mariokart.png')", mainimg:"mariokart.avif", secondaryimg:"mariokart.png", mym:"mario_kart.mym", video:"https://www.youtube.com/embed/dCfbtnEWnLI?autoplay=0&mute=1", downloads:"mario_kart.txt"},
	{name:"Martin Abel Art", background:"url('img/backgrounds/martin_abel.png')", mainimg:"martin_abel.avif", secondaryimg:"martin_abel.png", mym:"martin_abel.mym", video:"https://www.youtube.com/embed/hiX6VQWN7W4?si=KRn_MEOQmLaBvFYO?autoplay=0&mute=1" , downloads:"martin_abel.txt"},
	{name:"Matrix", background:"url('img/backgrounds/matrix.png')", mainimg:"matrix.avif", secondaryimg:"matrix.png", mym:"matrix.mym", video:"https://www.youtube.com/embed/X2qGmB8Bc9k?autoplay=0&mute=1", downloads:"matrix.txt"},
	{name:"Matrix Reloaded", background:"url('img/backgrounds/matrixreloaded.png')", mainimg:"matrixreloaded.avif", secondaryimg:"matrixreloaded.png", mym:"matrix_reloaded.mym", video:"https://www.youtube.com/embed/mIn8GGGGZ8k?autoplay=0&mute=1", downloads:"matrix_reloaded.txt"},
	{name:"MegaMan", background:"url('img/backgrounds/megaman.png')", mainimg:"megaman.avif", secondaryimg:"megaman.png", mym:"megaman.mym", video:"https://www.youtube.com/embed/PFM5_FM2kwc?autoplay=0&mute=1", downloads:"megaman.txt"},
	{name:"Melancholy of Haruhi", background:"", mainimg:"melonofharuhi.avif", secondaryimg:"melonofharuhi.png", mym:"melonofharuhi_stage1.mym", video:"https://www.youtube.com/embed/KcwLfjQuU0s?si=5Cj4FpN42DaB1441?autoplay=0&mute=1", downloads:"melonofharuhi.txt"},
	{name:"Metal Gear Solid", background:"url('img/backgrounds/metalgearsolid.png')", mainimg:"metalgearsolid.avif", secondaryimg:"metalgearsolid.png", mym:"metal_gear_solid.mym", video:"https://www.youtube.com/embed/6VRbu8JYn88?autoplay=0&mute=1", downloads:"metal_gear_solid.txt"},
	{name:"Metallica", background:"url('img/backgrounds/metallica.png')", mainimg:"metallica.avif", secondaryimg:"metallica.png", mym:"metallica.mym", video:"https://www.youtube.com/embed/FnTMu9nb2Og?autoplay=0&mute=1", downloads:"metallica.txt"},
	{name:"Metroid", background:"url('img/backgrounds/metroid.png')", mainimg:"metroid.avif", secondaryimg:"metroid.png", mym:"metroid.mym", video:"https://www.youtube.com/embed/vE0OAUJQ9DY?autoplay=0&mute=1", downloads:"metroid.txt"},
	{name:"Metroid: Samus's Visor", background:"", mainimg:"metroid_samusvisor.avif", secondaryimg:"metroid_samusvisor.png", mym:"metroid_samus_visor.mym", video:"https://www.youtube.com/embed/-3yRj55z_FY?si=GwnRB730HdOWELw-?autoplay=0&mute=1", downloads:"metroid_samusvisor.txt"},
	{name:"Mist Forest", background:"", mainimg:"mistforest.avif", secondaryimg:"mistforest.png", mym:"mistforest.mym", video:"https://www.youtube.com/embed/ON0jmvFGWSk?si=YGUJ9oMMmPsH0iRZ?autoplay=0&mute=1", downloads:"mistforest.txt"},
	{name:"M and M's", background:"", mainimg:"mms.avif", secondaryimg:"mms.png", mym:"mandms.mym", video:"https://www.youtube.com/embed/VcZUvRK86kU?si=pdLsIldmqIbRAAgR?autoplay=0&mute=1", downloads:"mms.txt"},
	{name:"Mortal Kombat", background:"url('img/backgrounds/mortalkombat.png')", mainimg:"mortalkombat.avif", secondaryimg:"mortalkombat.png", mym:"mortal_kombat.mym", video:"https://www.youtube.com/embed/K0qxTtMF7E4?autoplay=0&mute=1", downloads:"mortal_kombat.txt"},
	{name:"Muse", background:"url('img/backgrounds/muse.png')", mainimg:"muse.avif", secondaryimg:"muse.png", mym:"muse.mym", video:"https://www.youtube.com/embed/X0LAu5pYY8w?autoplay=0&mute=1", downloads:"muse.txt"},
	{name:"Naruto", background:"url('img/backgrounds/naruto.png')", mainimg:"naruto.avif", secondaryimg:"naruto.png", mym:"naruto.mym", video:"https://www.youtube.com/embed/7gwaDaD3Xpo?autoplay=0&mute=1", downloads:"naruto.txt"},
	{name:"Nightmare B4 Xmas", background:"url('img/backgrounds/nightmareb4xmas.png')", mainimg:"nightmareb4xmas.avif", secondaryimg:"nightmareb4xmas.png", mym:"nightmare_b4_xmas.mym", video:"https://www.youtube.com/embed/yMMcV_JmZY8?autoplay=0&mute=1", downloads:"nightmare_b4_xmas.txt"},
	{name:"Nights into Dreams", background:"", mainimg:"nightsintodreams.avif", secondaryimg:"nightsintodreams.png", mym:"nightsintodreams.mym", video:"https://www.youtube.com/embed/3m-5V1dOulE?si=7mWW_tPKZJ6LuLjw?autoplay=0&mute=1", downloads:"nightsintodreams.txt"},
	{name:"No More Heros", background:"", mainimg:"nomoreheros.avif", secondaryimg:"nomoreheros.png", mym:"nomoreheros.mym", video:"https://www.youtube.com/embed/LPYyUlV0s1c?si=63AWQCPk7FohM7Ou?autoplay=0&mute=1", downloads:"nomoreheros.txt"},
	{name:"Okami", background:"url('img/backgrounds/okami.png')", mainimg:"okami.avif", secondaryimg:"okami.png", mym:"okami.mym", video:"https://www.youtube.com/embed/TkcnWGy-ujQ?autoplay=0&mute=1", downloads:"okami.txt"},
	{name:"Old School Nintendo", background:"url('img/backgrounds/oldschoolnintendo.png')", mainimg:"oldschoolnintendo.avif", secondaryimg:"oldschoolnintendo.png", mym:"old_school_nintendo.mym", video:"https://www.youtube.com/embed/mJ5oMzBG1ZU?autoplay=0&mute=1", downloads:"old_school_nintendo.txt"},
	{name:"Outlaw Star", background:"", mainimg:"outlawstar.avif", secondaryimg:"outlawstar.png", mym:"outlawstar.mym", video:"https://www.youtube.com/embed/io4mdaMfeVY?si=OXdT9P49YZ9MDm2T?autoplay=0&mute=1", downloads:"outlawstar.txt"},
	{name:"Pearl Jam", background:"url('img/backgrounds/pearl_jam.png')", mainimg:"pearl_jam.avif", secondaryimg:"pearl_jam.png", mym:"pearl_jam.mym", video:"https://www.youtube.com/embed/3WXtD_oQ1pE?si=dpinABw4dM5yUWgl?autoplay=0&mute=1", downloads:"pearl_jam.txt"},
	{name:"Penguins of Madagascar", background:"", mainimg:"penguinsofmad.avif", secondaryimg:"penguinsofmad.png", mym:"penguins_of_madagascar_stage1.mym", video:"https://www.youtube.com/embed/aPajUbxTHrc?si=AL1oim4RmvRDfALz?autoplay=0&mute=1", downloads:"penguinsofmad.txt"},
	{name:"Phoenix Wright", background:"", mainimg:"phoenixwright.avif", secondaryimg:"phoenixwright.png", mym:"phoenixwright.mym", video:"https://www.youtube.com/embed/0XphLNZ0Gvs?si=-iAzRj3L4lnzKBBX?autoplay=0&mute=1", downloads:"phoenixwright.txt"},
	{name:"Pikmin", background:"url('img/backgrounds/pikmin.png')", mainimg:"pikmin.avif", secondaryimg:"pikmin.png", mym:"pikmin.mym", video:"https://www.youtube.com/embed/243IWjOtVW0?autoplay=0&mute=1", downloads:"pikmin.txt"},
	{name:"Pink Floyd", background:"", mainimg:"pinkfloyd.avif", secondaryimg:"pinkfloyd.png", mym:"pinkfloyd_stage1.mym", video:"https://www.youtube.com/embed/QifE1VJskB4?si=j1bR3fmv7Oa7J1mX?autoplay=0&mute=1", downloads:"pinkfloyd.txt"},
	{name:"Pink Wii", background:"url('img/backgrounds/pinkwii.png')", mainimg:"pinkwii.avif", secondaryimg:"pinkwii.png", mym:"pinkwii.mym", video:"https://www.youtube.com/embed/6KIc0Ti_yek?si=8Rm43KU7WHDQwgsV?autoplay=0&mute=1", downloads:"pinkwii.txt"},
	{name:"Pirate Skulls", background:"", mainimg:"pirateskulls.avif", secondaryimg:"piratesskulls.png", mym:"pirateskulls_stage1.mym", video:"https://www.youtube.com/embed/_92PsnJB0N4?si=2S3TqVFy-X23KAJH?autoplay=0&mute=1", downloads:"pirateskulls.txt"},
	{name:"Pizza Tower", background:"", mainimg:"pizzatower.avif", secondaryimg:"pizzatower.png", mym:"pizzatower.mym", video:"https://www.youtube.com/embed/f_cW-8lp1b4?si=932VvV03RpKo0cfy?autoplay=0&mute=1", downloads:"pizzatower.txt"},
	{name:"Predator", background:"url('img/backgrounds/predator.png')", mainimg:"predator.avif", secondaryimg:"predator.png", mym:"predator.mym", video:"https://www.youtube.com/embed/QmCt75ROOxc?si=T7b3hggOhc9acsE9?autoplay=0&mute=1" ,downloads:"predator.txt"},
	{name:"Princess Ariel v1", background:"url('img/backgrounds/princess_ariel_v1.png')", mainimg:"princess_ariel_v1.avif", secondaryimg:"princess_ariel_v1.png", mym:"princess_ariel_v1.mym", video:"https://www.youtube.com/embed/gTVq66QoR0k?si=Nb3yILXlOUIPYX6D?autoplay=0&mute=1", downloads:"princess_ariel_v1.txt"},
	{name:"Princess Ariel v2", background:"url('img/backgrounds/princess_ariel_v2.png')", mainimg:"princess_ariel_v2.avif", secondaryimg:"princess_ariel_v2.png", mym:"princess_ariel_v2.mym", video:"https://www.youtube.com/embed/OvJgxkaySdE?si=f4cuyHBvc87CmpJR?autoplay=0&mute=1", downloads:"princess_ariel_v2.txt"},
	{name:"Princess Ariel v3", background:"url('img/backgrounds/princess_ariel_v3.png')", mainimg:"princess_ariel_v3.avif", secondaryimg:"princess_ariel_v3.png", mym:"princess_ariel_v3.mym", video:"https://www.youtube.com/embed/1yUyvw0ltpE?si=OrKwlOtmE4xJB9xB?autoplay=0&mute=1", downloads:"princess_ariel_v3.txt"},
	{name:"Psychedelic", background:"url('img/backgrounds/psycedelic.png')", mainimg:"Psychedelic.avif", secondaryimg:"psycedelic.png", mym:"psychedelic.mym", video:"https://www.youtube.com/embed/7aFjlUc8qlo?autoplay=0&mute=1", downloads:"psychedelic.txt"},
	{name:"Punch Out", background:"url('img/backgrounds/punchout.png')", mainimg:"punch_out.avif", secondaryimg:"punchout.png", mym:"punch_out.mym", video:"https://www.youtube.com/embed/ZLUdB9Kcfsg?si=p1MxmyLtZtlQyghJ?autoplay=0&mute=1", downloads:"punch_out.txt"},
	{name:"The Punisher", background:"url('img/backgrounds/punisher.png')", mainimg:"punisher.avif", secondaryimg:"punisher.png", mym:"punisherstage1.mym", video:"https://www.youtube.com/embed/iSYrRCjLmCg?si=uVN5DKmzOxJYR_Ta?autoplay=0&mute=1", downloads:"punisher.txt"},
	{name:"Randy Orton", background:"", mainimg:"randyorton.avif", secondaryimg:"randyorton.png", mym:"randy_orton.mym", video:"https://www.youtube.com/embed/sX6NZOU9nKI?si=qP_lEihTrqgqm31g?autoplay=0&mute=1", downloads:"randyorton.txt"},
	{name:"Ratchet and Clank", background:"url('img/backgrounds/ratchetnclank.png')", mainimg:"ratchetandclank.avif", secondaryimg:"ratchetnclank.png", mym:"ratchet_and_clank.mym", video:"https://www.youtube.com/embed/G_z6DopJRRo?autoplay=0&mute=1", downloads:"ratchet_and_clank.txt"},
	{name:"Reconnect 24 Blue", background:"", mainimg:"rc24_blue.avif", secondaryimg:"rc24blue.png", mym:"rc24_blue.mym", video:"https://www.youtube.com/embed/DAjytOLv1r0?si=__5iuVTUmvWLDa2m?autoplay=0&mute=1", downloads:"rc24_blue.txt"},
	{name:"Reconnect 24 Red", background:"", mainimg:"rc24_red.avif", secondaryimg:"rc24red.png", mym:"rc24_red.mym", video:"https://www.youtube.com/embed/CF2R3WsNga0?si=MA3yerCcYqtqJjKL?autoplay=0&mute=1", downloads:"rc24_red.txt"},
	{name:"Rhythm Heaven", background:"", mainimg:"rhythmheaven.avif", secondaryimg:"rhythmheaven.png", mym:"rhythm_heaven.mym", video:"https://www.youtube.com/embed/8JJ4CpvZuog?si=riGPHoFJIcn804nD?autoplay=0&mute=1", downloads:"rhythmheaven.txt"},
	{name:"Rick and Morty", background:"", mainimg:"ricknmorty.avif", secondaryimg:"ricknmorty.png", mym:"ricknmorty.mym", video:"https://www.youtube.com/embed/ut2-QJWKy8s?si=G8aKdj3r_ysDp-xm?autoplay=0&mute=1", downloads:"ricknmorty.txt"},
	{name:"Robot Chicken", background:"url('img/backgrounds/robotchicken.png')", mainimg:"robotchicken.avif", secondaryimg:"robotchicken.png", mym:"robot_chicken.mym", video:"https://www.youtube.com/embed/FNNp-U3oVoA?si=9i1qyazsGQwT5e0J?autoplay=0&mute=1", downloads:"robot_chicken.txt"},
	{name:"Rockband 2", background:"url('img/backgrounds/rockband2.png')", mainimg:"rockband2.avif", secondaryimg:"rockband2.png", mym:"rockband_2.mym", video:"https://www.youtube.com/embed/HojBuUxihp0?autoplay=0&mute=1", downloads:"rockband_2.txt"},
	{name:"Saw", background:"url('img/backgrounds/saw.png')", mainimg:"saw.avif", secondaryimg:"saw.png", mym:"saw.mym", video:"https://www.youtube.com/embed/eXwIhUHvR54?si=dfoML_2H9z_oAYtE?autoplay=0&mute=1", downloads:"saw.txt"},
	{name:"ScarFace", background:"", mainimg:"scarface.avif", secondaryimg:"scarface.png", mym:"scarface.mym", video:"https://www.youtube.com/embed/9RhlWGcj2kE?si=pewzRUj42jsPAiAd?autoplay=0&mute=1", downloads:"scarface.txt"},
	{name:"Secrets of Mana", background:"", mainimg:"secretsofmana.avif", secondaryimg:"secretsofmana.png", mym:"secretsofmana.mym", video:"https://www.youtube.com/embed/aZhR4HabUio?si=Ie0k3oNUYqWFP021?autoplay=0&mute=1", downloads:"secretsofmana.txt"},
	{name:"Seinfeld", background:"", mainimg:"Seinfeld.avif", secondaryimg:"seinfeld.png", mym:"Seinfeld.mym", video:"https://www.youtube.com/embed/eOaZT1FxPpg?si=uIcRH1bDJj5cRluR?autoplay=0&mute=1", downloads:"Seinfeld.txt"},
	{name:"Sendo World", background:"", mainimg:"sendo.avif", secondaryimg:"sendo.png", mym:"sendo.mym", video:"https://www.youtube.com/embed/0V8MT5j6IXw?si=zJqP_NIE6TEGX557?autoplay=0&mute=1", downloads:"sendo.txt"},
	{name:"Shadow The Hedgehog", background:"url('img/backgrounds/shadowthehedgehog.png')", mainimg:"shadowthehedgehog.avif", secondaryimg:"shadowthehedgehog.png", mym:"shadow_the_hedgehog.mym", video:"https://www.youtube.com/embed/yOXIGrcxR8A?autoplay=0&mute=1", downloads:"shadow_the_hedgehog.txt"},
	{name:"Silver The Hedgehog", background:"url('img/backgrounds/silverthehedgehog.png')", mainimg:"silverthehedgehog.avif", secondaryimg:"silverthehedgehog.png", mym:"silver_the_hedgehog.mym", video:"https://www.youtube.com/embed/sUx2VXxMLr0?si=8_HUuPqHAL3ZFMRm?autoplay=0&mute=1", downloads:"silver_the_hedgehog.txt"},
	{name:"Smash Brothers Brawl", background:"url('img/backgrounds/smashbros.png')", mainimg:"smashbros.avif", secondaryimg:"smashbros.png", mym:"smash_brothers_brawl.mym", video:"https://www.youtube.com/embed/03U2w5wxjBI?si=Gx5DCBH652Cz0fUq?autoplay=0&mute=1", downloads:"smashbros.txt"},
	{name:"Smokers", background:"", mainimg:"smokers.avif", secondaryimg:"smokers.png", mym:"smokers.mym", video:"https://www.youtube.com/embed/J_GIWMGx17c?si=ndYpnAAtm542Q7H9?autoplay=0&mute=1", downloads:"smokers.txt"},
	{name:"Snoopy", background:"url('img/backgrounds/snoopy.png')", mainimg:"snoopy.avif", secondaryimg:"snoopy.png", mym:"snoopy.mym", video:"https://www.youtube.com/embed/R4Q3qtGEdcY?si=GfMZojNlX3aaVe6L?autoplay=0&mute=1", downloads:"snoopy.txt"},
	{name:"Sonic 3", background:"", mainimg:"sonic3.avif", secondaryimg:"sonic3.png", mym:"sonic3.mym", video:"https://www.youtube.com/embed/0msM2kAnPh4?si=_eXGLbMZIrB0_pGI?autoplay=0&mute=1", downloads:"sonic3.txt"},
	{name:"Sonic Frontiers", background:"", mainimg:"sonicfrontiers.avif", secondaryimg:"sonicfrontiers.png", mym:"sonicfrontiers.mym", video:"https://www.youtube.com/embed/M0O_gZVsvD8?si=yiKvqA03X17y8k1b?autoplay=0&mute=1", downloads:"sonicfrontiers.txt"},
	{name:"Sonic Riders", background:"", mainimg:"sonicriders.avif", secondaryimg:"sonicriders.png", mym:"sonicriders.mym", video:"https://www.youtube.com/embed/amt6z0G3XxM?si=pkHn7BI-wyPp_4hn?autoplay=0&mute=1", downloads:"sonicriders.txt"},
	{name:"Sons of Anarchy", background:"", mainimg:"sonsofanarchy.avif", secondaryimg:"sonsofanarchy.png", mym:"sonsofanarchy_stage1.mym", video:"https://www.youtube.com/embed/5PS-w8NF-ZU?si=M1l1WqFuCtTuQj4Y?autoplay=0&mute=1", downloads:"sonsofanarchy.txt"},
	{name:"South Park", background:"", mainimg:"southpark.avif", secondaryimg:"southpark.png", mym:"southpark.mym", video:"https://www.youtube.com/embed/hGaZ6dzp7A0?si=Ft6dZ78gAII1_Lqv?autoplay=0&mute=1", downloads:"southpark.txt"},
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
	{name:"Super Mario Brothers 3", background:"", mainimg:"supermariobros3.avif", secondaryimg:"supermariobros3.png", mym:"supermariobros3.mym", video:"https://www.youtube.com/embed/268nYJglv4U?si=0KEaeCwJYvEijF11?autoplay=0&mute=1", downloads:"supermariobros3.txt"},
	{name:"Super Mario RPG", background:"url('img/backgrounds/supermariorpg.png')", mainimg:"supermarioRPG.avif", secondaryimg:"supermariorpg.png", mym:"super_mario_RPG.mym", video:"https://www.youtube.com/embed/wMuN_a_lNqU?autoplay=0&mute=1", downloads:"super_mario_RPG.txt"},
	{name:"Super Mario Sunshine", background:"", mainimg:"supermariosunshine.avif", secondaryimg:"supermariosunshine.png", mym:"supermariosunshine.mym", video:"https://www.youtube.com/embed/wq_LWUynBx0?si=zRKrg60DvGEq_R7X?autoplay=0&mute=1", downloads:"supermariosunshine.txt"},
	{name:"Super Paper Mario", background:"", mainimg:"superpapermario.avif", secondaryimg:"superpapermario.png", mym:"superpapermario.mym", video:"https://www.youtube.com/embed/C89isBnmq6Q?si=oIaDZhf2nVaQJf3o?autoplay=0&mute=1", downloads:"superpapermario.txt"},
	{name:"Super Sonic", background:"url('img/backgrounds/supersonic.png')", mainimg:"supersonic.avif", secondaryimg:"supersonic.png", mym:"super_sonic.mym", video:"https://www.youtube.com/embed/h0OdHk8D0aQ?autoplay=0&mute=1", downloads:"super_sonic.txt"},
	{name:"The Simpsons v1", background:"url('img/backgrounds/simpsons_v1.png')", mainimg:"thesimpsons_v1.avif", secondaryimg:"simpsons_v1.png", mym:"the_simpsons_v1.mym", video:"https://www.youtube.com/embed/Akl4tZ9eJio?autoplay=0&mute=1", downloads:"the_simpsons_v1.txt"},
	{name:"The Simpsons v2", background:"url('img/backgrounds/simpsons_v2.png')", mainimg:"thesimpsons_v2.avif", secondaryimg:"simpsons_v2.png", mym:"the_simpsons_v2.mym", video:"https://www.youtube.com/embed/9mgBLlYSGh8?si=jKVxOEHhvAGYwhbn?autoplay=0&mute=1", downloads:"the_simpsons_v2.txt"},
	{name:"The Simpsons v3", background:"url('img/backgrounds/simpsons_v3.png')", mainimg:"thesimpsons_v3.avif", secondaryimg:"simpsons_v3.png", mym:"the_simpsons_v3.mym", video:"https://www.youtube.com/embed/CHfKSOvrlI0?si=cEb_ysPl5PzT2txB?autoplay=0&mute=1", downloads:"the_simpsons_v3.txt"},
	{name:"Tails", background:"url('img/backgrounds/tails.png')", mainimg:"tails.avif", secondaryimg:"tails.png", mym:"tailsstage1.mym", video:"https://www.youtube.com/embed/z5zAlItABAQ?si=SMjSBQ5WNZkofdUK?autoplay=0&mute=1", downloads:"tails.txt"},
	{name:"The Terminator", background:"url('img/backgrounds/terminator.png')", mainimg:"terminator.avif", secondaryimg:"terminator.png", mym:"terminator.mym", video:"https://www.youtube.com/embed/rMwms3XB1DQ?si=a-wTlhaFf9i6FT8d?autoplay=0&mute=1", downloads:"terminator.txt"},
	{name:"Terra Nigma", background:"", mainimg:"terranigma.avif", secondaryimg:"terranigma.png", mym:"terranigma.mym", video:"https://www.youtube.com/embed/LazxNXpRXvw?si=p-itpgveVeMGe5XD?autoplay=0&mute=1", downloads:"terranigma.txt"},
	{name:"Thunder Cats", background:"url('img/backgrounds/thundercats.png')", mainimg:"thundercats.avif", secondaryimg:"thundercats.png", mym:"thunder_cats.mym", video:"https://www.youtube.com/embed/LJW-3B1Vooo?autoplay=0&mute=1", downloads:"thunder_cats.txt"},
	{name:"Teenage Mutant Ninja Turtles", background:"url('img/backgrounds/tmnt.png')", mainimg:"tmnt.avif", secondaryimg:"tmnt.png", mym:"tmnt.mym", video:"https://www.youtube.com/embed/6cF81fjLRO4?autoplay=0&mute=1", downloads:"tmnt.txt"},
	{name:"Tomb Raider", background:"url('img/backgrounds/tombraider.png')", mainimg:"tombraider.avif ", secondaryimg:"tombraider.png", mym:"tomb_raider.mym", video:"https://www.youtube.com/embed/-H16kD1wlKc?autoplay=0&mute=1", downloads:"tomb_raider.txt"},
	{name:"Total Drama Action", background:"", mainimg:"totaldrama.avif", secondaryimg:"totaldrama.png", mym:"totaldrama_stage1.mym", video:"https://www.youtube.com/embed/6geeeRfETOM?si=rPwH-iQnAjpBHSdy?autoplay=0&mute=1", downloads:"totaldrama.txt"},
	{name:"Toxic Toons", background:"url('img/backgrounds/toxictoons.png')", mainimg:"toxictoons.avif", secondaryimg:"toxictoons.png", mym:"toxic_toons.mym", video:"https://www.youtube.com/embed/IRLjeDzfiGQ?si=nuXELrmXGWmn7iV4?autoplay=0&mute=1", downloads:"toxictoons.txt"},
	{name:"Toy Story", background:"", mainimg:"toystory.avif", secondaryimg:"toystory.png", mym:"toystory.mym", video:"https://www.youtube.com/embed/1iOu1xbeCvQ?si=J153NgntABefMKe4?autoplay=0&mute=1", downloads:"toystory.txt"},
	{name:"Transformers", background:"url('img/backgrounds/transformers.png')", mainimg:"transformers.avif", secondaryimg:"transformers.png", mym:"transformers.mym", video:"https://www.youtube.com/embed/hdEywhMs8m0?si=rg3o7Ea3Lf5sHn3D?autoplay=0&mute=1", downloads:"transformers.txt"},
	{name:"Trials of Mana", background:"", mainimg:"trialsofmana.avif", secondaryimg:"trialsofmana.png", mym:"trialsofmana.mym", video:"https://www.youtube.com/embed/-LWgqb-Q14A?si=1w3dW_3SU5IMmibV?autoplay=0&mute=1", downloads:"trialsofmana.txt"},
	{name:"Tri-Gun", background:"url('img/backgrounds/trigun.png')", mainimg:"trigun.avif", secondaryimg:"trigun.png", mym:"tri-gun.mym", video:"https://www.youtube.com/embed/M7r54ClgzbY?si=23MBlhmxBPjDoC45?autoplay=0&mute=1", downloads:"trigun.txt"},
	{name:"Tropical Teal", background:"", mainimg:"tropicalteal.avif", secondaryimg:"tropicalteal.png", mym:"tropicalteal.mym", video:"https://www.youtube.com/embed/kjqP3xHl02I?si=TXvwIOrQ4xv0KSiE?autoplay=0&mute=1", downloads:"tropicalteal.txt"},
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
	{name:"Wii Party", background:"", mainimg:"wiiparty.avif", secondaryimg:"wiiparty.png", mym:"wiiparty.mym", video:"https://www.youtube.com/embed/Tty1Kfv0Hmc?si=w6YWKjMjFCpJeNPZ?autoplay=0&mute=1", downloads:"wiiparty.txt"},
	{name:"Wii Party v2", background:"", mainimg:"wiipartyv2.avif", secondaryimg:"wiipartyv2.png", mym:"wiipartyv2.mym", video:"https://www.youtube.com/embed/tfBqRua-dD4?si=GJXSxsYqam6OQPwY?autoplay=0&mute=1", downloads:"wiipartyv2.txt"},
	{name:"Wii Sports", background:"url('img/backgrounds/wiisports.png')", mainimg:"wiisports.avif", secondaryimg:"wiisports.png", mym:"wii_sports.mym", video:"https://www.youtube.com/embed/nijDjtXZwTE?si=W6Ayevn-1xZUNo1D?autoplay=0&mute=1", downloads:"wiisports.txt"},
	{name:"Wii U", background:"url('img/backgrounds/wiiu.png')", mainimg:"wiiu.avif", secondaryimg:"wiiu.png", mym:"wii_u.mym", video:"https://www.youtube.com/embed/eAwrGrJQa3I?si=p--wxO_ygmTeAox_?autoplay=0&mute=1", downloads:"wiiu.txt"},
	{name:"Win XP OS", background:"url('img/backgrounds/windowsxp.png')", mainimg:"winxpos.avif", secondaryimg:"windowsxp.png", mym:"win_xp_os.mym", video:"https://www.youtube.com/embed/CpMXYTumKEE?autoplay=0&mute=1", downloads:"win_xp_os.txt"},
	{name:"Wolverine", background:"url('img/backgrounds/wolverine.png')", mainimg:"wolverine.avif", secondaryimg:"wolverine.png", mym:"wolverine.mym", video:"https://www.youtube.com/embed/S60LeJR6a54?autoplay=0&mute=1", downloads:"wolverine.txt"},
	{name:"WWE Raw", background:"url('img/backgrounds/wweraw.png')", mainimg:"wweraw.avif", secondaryimg:"wweraw.png", mym:"wwe_raw.mym", video:"https://www.youtube.com/embed/-wOT9u73m1M?si=cJSm8nPVI90DaOMr?autoplay=0&mute=1", downloads:"wweraw.txt"},
	{name:"Xbox 360", background:"url('img/backgrounds/xbox360.png')", mainimg:"xbox360.avif", secondaryimg:"xbox360.png", mym:"xbox360.mym", video:"https://www.youtube.com/embed/X0If0IgP8uQ?si=9rrlUcNi_V833qXN?autoplay=0&mute=1", downloads:"xbox360.txt"},
	{name:"Yugi-oh", background:"url('img/backgrounds/yugioh.png')", mainimg:"yugioh.avif", secondaryimg:"yugioh.png", mym:"yugioh.mym", video:"https://www.youtube.com/embed/sAOFnf7aGfs?si=t7e2g2Kqfn57KR4J?autoplay=0&mute=1", downloads:"yugioh.txt"},
	{name:"Zelda" , background:"url('img/backgrounds/zelda.png')", mainimg:"zelda.avif", secondaryimg:"zelda.png", mym:"zelda.mym", video:"https://www.youtube.com/embed/1NptoYk4ljA?autoplay=0&mute=1", downloads:"zelda.txt" },
	{name:"Zelda: A Link to the Past", background:"", mainimg:"zelda2.avif", secondaryimg:"zelda2.png", mym:"zelda2.mym", video:"https://www.youtube.com/embed/OErVHh9H03o?si=aXNTZq0-d6U2fK9p?autoplay=0&mute=1", downloads:"zelda2.txt"},
	{name:"ZombWii", background:"url('img/backgrounds/zombwii.png')", mainimg:"zombwii.avif", secondaryimg:"zombwii.png", mym:"zombwii.mym", video:"https://www.youtube.com/embed/3A-N2TKvvro?si=4osUusbbeCAC8rp9?autoplay=0&mute=1", downloads:"zombwii.txt"},
];
const theme_count = completethemeinfo.length;

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
	let ided = false;
	if(checkCookie("Id")) ided = true;
	return ided;
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
	input_in = true;
	return input_in;
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
function container_bubble(which_bubble, show) {
    console.log(which_bubble);
    let y = null;
    y = "#container_" + which_bubble + "_bubble";
    if(show) $(y).css("display", "block");
    else $(y).css("display", "none");
    return;
}
function showmodal(modaltype) {
    var modal = document.getElementById("modal");
    var modal_close = document.getElementsByClassName("close")[0];

    switch(modaltype) {
        case 1: {
            $("#modaltitle").css("color", "red");
			$("#modaltitle").text("Warning");
			$(".modal-body").html('<div id="infocontainer" class="text-center"></div><h1 class="text-blue text-center smallcaps">Wii System Menu Theme Builder</h1><hr></hr><p class="text-center">This site will help you build a Theme(.csm file) to install on the Nintendo Wii .</p><br></br><p class="text-center"><span class="warninglight"><b><i><em>WARNING :</b></i></em></span> This file can <b><em>BRICK</em></b> your wii .<br><br>Proceed at your <b><em>OWN</em></b> risk !!</p><br></br></div>');
			setTimeout(function(){
				$("#modaltitle").css("color", "black");
			$("#modaltitle").text("Build A Custom Theme");
            $(".modal-body").html('<div id="buildingcontainer" class=" text-white background-black border-white border-radius border-white-shadow"><div id="previewcontainer" class=""><img title="Click to show Images of Theme ." class="preview" id="preview1" src="" alt="preview picture 1" onclick="show_dual_pictures()"></img><div id="themevideocontainer" class="border-radius hidden" ><iframe id="videoframe" class="border-radius" src="" title="" frameborder="0" allowfullscreen></iframe></div><div title="Previous Theme" id="larrow" class="text-center border-radius clearfix" onclick="image_controls(-1)">&lt;&lt;</div><div title="Next Theme" id="rarrow" class="text-center border-radius clearfix" onclick="image_controls(1)">&gt;&gt;</div><div title="Check out a video of the theme" id="checkpreview" class="text-center border-radius" onclick="swap_mode()">Theme Video Preview</div></div><div id="building" class=""><label for="themeset" id="themelabel"class="border-yellow border-radius border-yellow-shadow buildlabel ">Select Theme :</label><select title="Select a Theme" class="buildselect border-orange border-radius border-orange-shadow" name="themeset" id="theme" onchange="get_build_options(3)">	</select><br></br><label for="menuversionset" id="menuversionlabel" class="border-yellow border-radius border-yellow-shadow buildlabel ">Select System Menu Version :</label><select title="Select a Menu Version" class="buildselect border-orange border-radius border-orange-shadow" name="menuversionset" id="menuversion" onchange="get_build_options(1)"></select><br></br><label for="regionset" id="regionlabel" class="border-yellow border-radius border-yellow-shadow buildlabel ">Select System Region :</label><select title="Select a Region" class="buildselect border-orange border-radius border-orange-shadow" name="regionset" id="region" onchange="get_build_options(2)"></select><br></br><button title="Build and Download Theme" id="continue" class="text-white background-black border-green border-radius border-green-shadow" onclick="build_theme()">Build Theme</button></div><div id="spinoption" class=""><div id="csmsourcelabel" class="border-orange border-radius border-orange-shadow buildlabel"><b><i>Optional</i></b> :</div><br><br><input type="checkbox" name="csmsource" id="csmsourcebox"></input><label for="csmsourcebox" title="check box to download zip file with theme source files{.mym, .app, spintype.mym} and theme file(.csm) ." id="csmsourceboxlabel">Theme source files</label><div id="optionlabel" class="border-orange border-radius border-orange-shadow buildlabel"><b><i>Optional</i></b> :</div><br><br><input type="radio" name="option" id="fastspin" value="fastspin"></input><label for="fastspin" id="fastspinlabel" title="A fast spinning channel outline">Fast Spin Channels</label><br><br><input type="radio" name="option" id="spin" value="spin"></input><label for="spin" id="spinlabel" title="A spinning chanel outline">Spin Channels</label><br><br><input type="radio" name="option" id="nospin" value="nospin" checked></input><label for="nospin" id="nospinlabel" title="A none spinning channel outline">No Spin Channels</label><br><br><div title="Your Selection Error Info." id="message" class="border-yellow border-radius border-yellow-shadow background-black text-white hidden"></div><div id="downloadcnt">0 Downloads</div></div></div>');
			loadthemelist();
			loadversions();
			loadregions();
			load_media();
			get_data_File(completethemeinfo[themeposition].downloads);
			//getsingleDLcnt(themeposition);
			let spinoption = document.getElementsByName('option');
			if(spinoption[2].checked == false)
				spinoption[2].checked = true;
		},4000);
        }break;
        case 2: {
            $("#modaltitle").text("Helpful Links");
            
            $(".modal-body").html("<div id='links_container'><br /><div class='links'><a target='blank' href='https://gbatemp.net'>GBAtemp</a> &gt;&gt;&gt; The best gaming community .</div><br /><div class='links'><a target='blank' href='https://gbatemp.net/threads/wii-themer-org.628144/'>Wii Themer</a> &gt;&gt;&gt; on GBATemp .</div><br /><div class='links'><a target='blank' href='https://gbatemp.net/threads/best-way-to-mod-any-wii-modmii-for-windows-official-support-thread.207126/page-486'>ModMii</a> &gt;&gt;&gt; on GBATemp . The best way to mod a wii .</div><br /><hr /><br /><div class='links'><a target='blank' href='https://gbatemp.net/threads/wii-theme-team-creations.260327/'> Wii Theme Team</a> &gt;&gt;&gt; The team that made all the Dark Wii Colored themes . </div><br /><div class='links'><a target='blank' href='https://www.youtube.com/user/McDiddy81/videos'>Diddy81 Youtube Channel</a> &gt;&gt;&gt; One of the main members of the Wii Theme Team .</div><br /><div class='links'><a target='blank' href='https://gbatemp.net/threads/wii-themes.174895/'>Frylok's Themes</a> &gt;&gt;&gt; More themes .</div><br /><div class='links'><a target='blank' href='http://wiithemer.org/mym/'>Theme Database</a> &gt;&gt;&gt; A database of all the available theme .mym files .</div><br /><hr /><br /><div class='links'><a target='blank' href='https://wii.guide/themes'>Wii Guide</a> &gt;&gt;&gt; Guide : Installing Wii Menu Themes </div><br /><div class='links'><a target='blank' href='https://wiibrew.org/wiki/System_Menu'>Wii Brew</a> &gt;&gt;&gt; A great place to learn about the Wii's tech .</div><br /></div>");
        }break;
        case 3: {
            $("#modaltitle").text("Wii Themer Info");
            //for(let i = 0; i < 3; ++i)
			//	get_installer_Downloads(i);
		   //	for(let i = 0; i < 3; ++i)
		   //		get_count_files(i);
			//for(let i = 0; i < 5; ++i)
			//	get_region_DLcnt(i);
			//get_vwii_downloads();
			//for(let i = 0; i < 4; ++i)
			//	get_vwii_region_downloads(i);
			get_data_File("visitors");
			get_data_File("wiithemer");
			get_data_File("mymenuifymod");
			get_data_File("csminstaller");
			get_data_File("wii_downloads");
			get_data_File("vwii_downloads");
			get_data_File("vwii_U");
			get_data_File("vwii_E");
			get_data_File("vwii_J");
			get_data_File("wii_U");
			get_data_File("wii_E");
			get_data_File("wii_J");
			get_data_File("wii_K");
            $(".modal-body").html('<div id ="usage_title"><p>Currently <span id="themecounttext"></span> Themes Available .</p></div><div id="about_container"><div id="about_left"><p>Click "Disc Channel" to visit Dolphin Wii Emuator Website .</p><p>Click "HomeBrew Channel" to visit the Website .</p><p>Click "Theme Building Channel" to choose a theme, version, and region for your theme .</p><p>Click "ModMii Channel" to visit the Website .</p><p>Click "WiiThemer Channel" to download WiiThemer .</p><p>Click "Csm-Installer Channel" to download Csm-Installer .</p><p>Click "MyMenuifyMod Channel" to download MyMenuifyMod .</p><hr /><p>Click "SD Card" for some great websites .</p><p>Click "?" button to see these instructions, website stats, etc...</p><p>Click "Contact" button to see the owner/operator contact information.</p></div><div id="about_right"><p>Site Visitors <span id="visitors"></span></p><hr /><p>Wii Themer Downloads .<span id="wiithemerdownloads"></span></p><p>MyMenuifyMod Downloads .<span id="mymenuifymoddownloads"></span></p><p>Csm-Installer Downloads .<span id="csminstallerdownloads"></span></p><hr /><p>Wii Themes Downloaded <span id="wii_downloads"></span></p><p>U Region Downloads <span id="u_region"></span></p><p>E Region Downloads <span id="e_region"></span></p><p>J Region Downloads <span id="j_region"></span></p><p>K Region Downloads <span id="k_region"></span></p><hr /><p>vWii Themes Downloaded <span id="vwii_downloads"></span></p><p>U Region Downloads <span id="vwii_u_region"></span></p><p>E Region Downloads <span id="vwii_e_region"></span></p><p>J Region Downloads <span id="vwii_j_region"></span></p></div></div>');
            //<p><span id=""></span></p>
            $("#themecounttext").text(theme_count);
        }break;
        case 4: {
            $("#modaltitle").text("Contact Info");
            $(".modal-body").html('<div id="contact_container"><p>Contact Naythan with site issues and/or questions .</p><p>Email :<a href="mailto:nayte1976@gmail.com"><i>Naythan Morey</i></a>@ gmail</p><p>Email :<a href="mailto:scooby74029@yahoo.com"><i>Scooby74029 </i></a>from GbaTemp</p><p>Email :<a href="mailto:admin@wiithemer.org"><i>admin </i></a>@ wiithemer.org</p></div>');
            }break;
    }
    $("#modal").slideDown("slow");
    
    modal_close.onclick = function() {
        $("#modal").slideUp("slow");
    }
    window.onclick = function(event) {
		if(modaltype == 1) return;
		if (event.target == modal) {
			$("#modal").slideUp("slow");
		}
	}

    return;
}
function swap_mode() {
	if(!themevideomode) themevideomode = true;
	else themevideomode = false;
	load_media();
	return;
}
function load_media() {
	themeposition = document.getElementById("theme").selectedIndex;
	if(!themevideomode) {
		$("#themevideocontainer").hide();
		$("#preview1").fadeOut("slow", function() {
			show_image(themeposition);
			$("#preview1").fadeIn("slow");
		});
		$("#checkpreview").text("Theme Picture Preview");
	}
	else {
		$("#preview1").hide();
		$("#themevideocontainer").hide();
		let ivideo = document.getElementById("videoframe");
		ivideo.src = completethemeinfo[themeposition].video;
		ivideo.width = 1150;
		ivideo.height = 536;
		$("#themevideocontainer").fadeIn("slow");
		$("#checkpreview").text("Theme Video Preview");
	}
	return;
}
function image_controls(input_control) {
	console.log("input_contrtol = " + input_control);
	themeposition = themeposition + input_control;
	if(themeposition < 0)
		themeposition = theme_count - 1;
	if(themeposition >= theme_count)
		themeposition = 0;
	console.log("themeposition = " + themeposition);
	document.getElementById("theme").selectedIndex = themeposition;
	load_media();
	get_data_File(completethemeinfo[themeposition].downloads);
	return;
}
function show_image(input) {
	return document.getElementById("preview1").src = find_image_path(input);
}
function find_image_path(input) {
	return "previewpics/" + completethemeinfo[input].mainimg;
}
function get_build_options(input) {
	let selectedregion = document.getElementById("region").selectedIndex;
	let selectedversion = document.getElementById("menuversion").selectedIndex;
	let selectedtheme = document.getElementById("theme").selectedIndex;
	console.log(selectedversion + " selected version")
	console.log(selectedtheme + " selected theme")
	if(input == 3) {
		load_media();
		get_data_File(completethemeinfo[selectedtheme].downloads);
	}
	if((selectedtheme >= 0) && (selectedversion > 0) && (selectedregion > 0)) {
		if((selectedregion == 4) && (selectedtheme == 37) && (selectedversion == 4)) {
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
				if((selectedregion == 4) && (selectedtheme == 37)) {
					$("#continue").slideUp();
					$("#message").html(regionkdarkredmessage);
					$("#message").show();
					document.getElementById("menuversion").selectedIndex = 0;
					document.getElementById("region").selectedIndex = 0;
				}
				else {
						if((selectedregion == 4) && (selectedversion == 5)) {
							$("#continue").slideUp();
							$("#message").html(vWii_regions);
							$("#message").show();
							document.getElementById("menuversion").selectedIndex = 0;
							document.getElementById("region").selectedIndex = 0;
							//addKregion(true);
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
	if(selectedversion == 5) {
		isWiiU = removeKregion(isWiiU);
	}
	else {
		isWiiU = addKregion(isWiiU);
	}
	if(region.length == 6) isWiiU = removeKregion(isWiiU);
	return;
}
function build_theme() {
	$("#continue").fadeOut("slow");
	themeInfo.themeselected = document.getElementById("theme").selectedIndex;
	themeInfo.versionselected = document.getElementById("menuversion").selectedIndex;
	themeInfo.regionselected = document.getElementById("region").selectedIndex;
	themeInfo.mymfile = find_MYM(themeInfo.themeselected, themeInfo.regionselected);
	themeInfo.version = find_build_version(themeInfo.versionselected, themeInfo.regionselected);
	
	themeInfo.name = completethemeinfo[themeInfo.themeselected].name;
	let spinoption = document.getElementsByName('option');
	let src = document.getElementById('csmsourcebox');
	themeInfo.themesrc = src.checked;
	console.log("source files = " + themeInfo.themesrc);
	
	for(let i = 0; i < spinoption.length; i++){
		if(spinoption[i].checked){
			themeInfo.spinselected = spinoption[i].value;
			console.log("spinoption " + themeInfo.spinselected + "\ni = " + i);
		}
	}
	let modal = document.getElementById("downloadtextmodal");
	modal.style.display = "block";
	var modalclose = document.getElementsByClassName("close")[2]; 
	modalclose.onclick = function() {
		$("#downloadtextmodal").slideUp("slow");
		setTimeout(function() {
			remove_folder();
		}, 5000);
		clearInterval(timer);
		get_data_File(completethemeinfo[themeposition].downloads);
		reset_building();
		return;
	}
	let name = document.getElementById("themename");
	name.innerHTML = themeInfo.name;
	$("#downloadtext").slideDown("slow");	
	set_session_directory();
	return;
}
function find_MYM(themeinput, regioninput) {
	let mymfile = completethemeinfo[themeinput].mym;
	console.log("mymfile = " + mymfile + "\ninput = " + themeinput);
	
	if(((themeinput >= 32) && (themeinput <= 39)) || (themeinput == 68) || (themeinput == 178)) {
		let region = null;
		region = Region[regioninput];
		mymfile = mymfile + region + ".mym";
	}

	console.log("mymfile = " + mymfile);
	return mymfile;
}
function find_build_version(versioninput, regioninput) {
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
function get_content_name(versionin) {
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
function version_display_name(versionin) {
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
function remove_folder() {
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
function close_download_no_update() {
	$("#downloadtext").html("<br><p>Your download has expired .<br><br>Thank You for using Wii Themer .</p>");
	remove = setTimeout(function() {
		remove_folder();
	}, 5000);
	clearInterval(timer);
	reset_building();
	return;
}
function close_download() {
	clearInterval(timer);
	if (themeInfo.versionselected == 5) {
		$("#downloadtext").html("<br><p>Thank You for using Wii Themer .</p><p>Remember to grab an install app from links on the main page .</p> <p>WARNING : vWii themes have not been tested . Make sure you have Priiloader installed .</p>");
		setTimeout(function() {
			increase_data_File("vWii_downloads");
		}, 1000);
		setTimeout(function() {
			increase_data_File(region_vWii[themeInfo.regionselected]);
		}, 1500);
	}
	else {
		$("#downloadtext").html("<br><p>Thank You for using Wii Themer .</p><p>Remember to grab an install app from links on the main page .</p>");
		setTimeout(function() {
			increase_data_File("wii_downloads");
		}, 1000);
		setTimeout(function() {
			increase_data_File(region_wii[themeInfo.regionselected]);
		}, 1500);	
	}
	console.log("selected version = " + themeInfo.versionselected);
	setTimeout(function() {
		increase_data_File(completethemeinfo[themeInfo.themeselected].downloads);
	}, 2000);
	setTimeout(function() {
		remove_folder();
	}, 5000);
	
	//resetbuilding();
	return;
}
function close_timer() {
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
		$("#downloadtext").html("<br><br><p><a title='click to download your theme' class='glowtext text-center border-orange border-radius border-shadow-orange background-black text-white' onclick='close_download()' href='" + completefileinfo[0] + "/" + completefileinfo[1] + completefileinfo[2] + ".csm' id='csmfile'><b><i>" + completefileinfo[1] + completefileinfo[2] + ".csm</b></i></a></p><br><br><p>Your download will expire in </p>");
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
		close_download_no_update();
		clearInterval(timer);
	}
	$("#close").show();
	return;
}
function set_close_download() {
	timer = setInterval(close_timer, 1000);
	return;
}
async function php_build_theme() {
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
					copymessage.innerHTML += "Complete .<br>";
					set_close_download();
				},
			}))
		}, 1000);
	});
	return 1;
}
async function copy_theme_to_folder() {
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
						download_content();
					}
					else if((data == "Copy Theme ERROR Copy Spin ERROR") || (data == "Copy Theme OK Copy Spin ERROR") || (data == "Copy Theme ERROR Copy Spin OK") ){
						copymessage.innerHTML += "Failed .<br>";
						copymessage.innerHTML += "An Error has occured please try again .<br>";
						close_download_no_update();
					}
					//alert(data);
					//else console.log("ret from copy = " + data)
				},
			}))
		}, 500);
	});
	return;
}
async function download_content() {
	let copymessage = document.getElementById("downloadtext");
	copymessage.innerHTML += "Downloading Content " + get_content_name(themeInfo.version) + " from System Menu v" + version_display_name(themeInfo.version) + " .....  ";
	let thepromise = new Promise( function(resolve) {
		setTimeout( function() { 
			resolve($.ajax({
				url: "index.php",
				type: "POST",
				cache: false,
				data: { action: "get_content", version: themeInfo.version , savesrc: themeInfo.themesrc, name: themeInfo.mymfile, selectedtheme: themeInfo.themeselected, spin: themeInfo.spinselected },
				success: function(_data) {
					//alert(data);
					let copymessage = document.getElementById("downloadtext");
					themeInfo.appfile = _data; 
					console.log("app = " + themeInfo.appfile);
					copymessage.innerHTML += "Complete .<br>";
					
					
				},
				complete: function(){
					let copymessage = document.getElementById("downloadtext");
					copymessage.innerHTML += "Building " + themeInfo.name + " " +version_display_name(themeInfo.version) + ".csm ..... ";
						php_build_theme();
				},
			}))
		}, 500);
	});
	return;
}
async function set_session_directory() {
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
					let copymessage = document.getElementById("downloadtext");
					copymessage.innerHTML += "Copying " + themeInfo.mymfile + " to the working directory ..... ";
					copy_theme_to_folder();

				},
				error: function() {
					alert("Error \n");
				},
			}))
		}, 500);
	});
	return;
}
function show_dual_pictures() {
	//alert("show here");
	$("#dualpicmodal").slideDown("slow");
	document.getElementById("dualpic1").src = "previewpics/" +  completethemeinfo[themeposition].mainimg;
	document.getElementById("dualpic1").style.height = (screen.availHeight/4) * 3;
	document.getElementById("dualpic2").src = "img/backgrounds/" + completethemeinfo[themeposition].secondaryimg;
	document.getElementById("dualpic2").style.height = (screen.availHeight/4) * 3;
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
function reset_globals() {
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
	show_image(themeposition);
	get_data_File(completethemeinfo[themeposition].downloads);
	return;
}
function reset_building() {
	closecntr = 180;
	minutesleft = 2;
	seccntr = 0;
	timer = null;
	let spinoption = document.getElementsByName('option');
	if(spinoption[2].checked == false)
		spinoption[2].checked = true;
	document.getElementById("region").selectedIndex = 0;
	document.getElementById("menuversion").selectedIndex = 0;
	document.getElementById('csmsourcebox').checked = false;
	document.getElementById('continue').style.display = "none";
	$("#themevideocontainer").hide();
	show_image(themeposition);
	document.getElementById("theme").selectedIndex = themeposition;
	get_data_File(completethemeinfo[themeposition].downloads);
	return;
}
function write_Titles(write) {
	var titles = "";
	if(!write) return;
	console.log("writing theme_titles.txt");
	for(let i = 0; i < theme_count; i++){
		titles += completethemeinfo[i].name + "\n";
	}
	console.log(titles);
	$.ajax({
		url: "index.php",
		type: "POST",
		cache: false,
		data: { action: "write_Titles", title_str: titles },
		success: function(data) {
			alert(data);
		},
	});
	return;
}
function load_channel_Website(which_website) {
	let website = null;

	switch(which_website) {
		case "dolphin":
			website = "https://dolphin-emu.org/";
		break;
		case "hombrewchannel":
			website = "https://hbc.hackmii.com/";
		break;
		case "modmii":
			website = "https://modmii.github.io/";
		break;
		case "wiithemer":
			website = "https://wiithemer.org/downloads/wiithemer.zip";
			increase_data_File("wiithemer");
		break;
		case "mymenuifymod":
			website = "https://wiithemer.org/downloads/mymenuifymod.zip";
			increase_data_File('mymenuifymod');
		break;
		case "csminstaller":
			website = "https://github.com/Naim2000/csm-installer/releases/download/v1.4/csm-installer.zip";
			increase_data_File('csminstaller');
		break;
	}
	
	return window.open(website,  '_blank');
}
function increase_data_File(which_file) {
	console.log("which_file = " + which_file);
	$.ajax({
		url: "index.php",
		type: "POST",
		data: { action: "increase", data_file: which_file},
		success: function(data) {
			//alert(data);
			console.log(data);
		},
	});
	return;
}
function get_data_File(which_file) {
	console.log("which_file = " + which_file);
	$.ajax({
		url: "index.php",
		type: "POST",
		data: { action: "get", data_file: which_file},
		success: function(data) {
			//alert(data);
			switch(which_file) {
				case "visitors":
					$("#visitors").text(data);
				break;
				case "wiithemer":
					$("#wiithemerdownloads").text(data);
				break;
				case "mymenuifymod":
					$("#mymenuifymoddownloads").text(data);
				break;
				case "csminstaller":
					$("#csminstallerdownloads").text(data);
				break;
				case "wii_downloads":
					$("#wii_downloads").text(data);
				break;
				case "vwii_downloads":
					$("#vwii_downloads").text(data);
				break;
				case "vwii_U":
					$("#vwii_u_region").text(data);
				break;
				case "vwii_E":
					$("#vwii_e_region").text(data);
				break;
				case "vwii_J":
					$("#vwii_j_region").text(data);
				break;
				case "wii_U":
					$("#u_region").text(data);
				break;
				case "wii_E":
					$("#e_region").text(data);
				break;
				case "wii_J":
					$("#j_region").text(data);
				break;
				case "wii_K":
					$("#k_region").text(data);
				break;
				default:
					$("#downloadcnt").text(data + " Downloads");
				break;
			}
		},
	});
	return;
}