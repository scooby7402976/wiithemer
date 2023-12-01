﻿#NoEnv
#Persistent
#singleinstance ignore

SendMode Input
SetWorkingDir %A_ScriptDir%

dir := ""
csmstr := ""
zipstr := ""

deletesessionfolder()

settimer, deletefolder, 3600000

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
			if(dir == "C:\Apache24\server\wiithemer\beta\tools")
				continue
			if(timenow < 5)
				continue
			FileRemoveDir, %dir% , 1
			
			soundbeep
		}
		else if(csmstr == ".csm") {
			FileGetTime, timecreated ,, C
			timenow := a_now
			envsub, timenow, %timecreated%, minutes
			if(timenow < 5)
				continue
			dir := A_LoopFileDir
			FileRemoveDir, %dir% , 1
			
			soundbeep
		}
		else if(zipstr == ".zip") {
			if(A_Loopfilename == "mymenuifymod.zip")
				continue
			if(A_Loopfilename == "WiiThemer.zip")
				continue
			if(A_Loopfilename == "wiithememanagerimages.zip")
				continue
			FileGetTime, timecreated ,, C
			timenow := a_now
			envsub, timenow, %timecreated%, minutes
			if(timenow < 5)
				continue
			
			dir := A_LoopFileDir
			FileRemoveDir, %dir% , 1
			
			soundbeep
		}
		else if(mymstr == ".ini") {
			neededpos := 
			deletedirname := 
			
			FileGetTime, timecreated ,, C
			timenow := a_now
			envsub, timenow, %timecreated%, minutes
			if(timenow < 5)
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
			soundbeep
		}
	}
	
	return
}
