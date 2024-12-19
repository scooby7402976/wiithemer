#NoEnv
#Persistent
#singleinstance ignore

SendMode Input
SetWorkingDir %A_ScriptDir%

dir := ""
csmstr := ""
zipstr := ""

deletesessionfolder()

settimer, deletefolder, 300000

return

deletefolder:
	deletesessionfolder()
return

deletesessionfolder() {
	timecreated := 
	timenow := 
	
	loop, files,  %A_ScriptDir%\*.*, R 
	{
		csmstr := SubStr(A_Loopfilename, strlen(A_Loopfilename)-3 , 4)
		zipstr := SubStr(A_Loopfilename, strlen(A_Loopfilename)-3 , 4)
		mymstr := SubStr(A_Loopfilename, strlen(A_Loopfilename)-3 , 4)
		if(A_Loopfilename == "themewii.exe") {
			dir := A_LoopFileDir
			FileGetTime, timecreated ,, C
			timenow := a_now
			envsub, timenow, %timecreated%, minutes
			if(dir == "C:\Apache24\server\wiithemer\tools")
				continue
			if(dir == "C:\Apache24\server\wiithemer\v2_beta_1\tools")
				continue
			if(timenow < 4)
				continue
			FileRemoveDir, %dir% , 1
			
			soundbeep, 90, 1000
		}
		else if(csmstr == ".csm") {
			FileGetTime, timecreated ,, C
			timenow := a_now
			envsub, timenow, %timecreated%, minutes
			if(timenow < 4)
				continue
			dir := A_LoopFileDir
			FileRemoveDir, %dir% , 1
			
			soundbeep, 150, 1500
		}
		else if(zipstr == ".zip") {
			if(A_Loopfilename == "modmiithemesigner.zip")
				continue
			if(A_Loopfilename == "mymenuifymod.zip")
				continue
			if(A_Loopfilename == "WiiThemer.zip")
				continue
			if(A_Loopfilename == "wiithememanagerimages.zip")
				continue
			if(A_Loopfilename == "mymenuifymodv3.zip")
				continue
			FileGetTime, timecreated ,, C
			timenow := a_now
			envsub, timenow, %timecreated%, minutes
			if(timenow < 4)
				continue
			
			dir := A_LoopFileDir
			if(dir == "C:\Apache24\server\wiithemer\v2_beta_1\downloads")
				continue
			else if(dir == "C:\Apache24\server\wiithemer\downloads")
				continue
			FileRemoveDir, %dir% , 1
			
			soundbeep, 210, 2000
		}
		else if(mymstr == ".ini") {
			neededpos := 
			deletedirname := 
			
			FileGetTime, timecreated ,, C
			timenow := a_now
			envsub, timenow, %timecreated%, minutes
			if(timenow < 4)
				continue
			
			dir := A_LoopFileDir
			loop, parse, dir, \
			{
				if(a_loopfield == "wiithemer")
					neededpos := a_index + 1
			}
			loop, parse, dir, \
			{
				if(a_index == neededpos)
					deletedirname := a_loopfield
			}
			deletedirectory = %A_ScriptDir%\%deletedirname%
			FileRemoveDir, %deletedirectory%, 1
			soundbeep, 500, 2500
		}
	}
	
	return
}
