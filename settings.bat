@echo off
:b
cls
echo =================
echo Settings
echo =================
echo.
cmdMenuSel f870 "1. Exit" "2. Restart" "3. Start CMD" "4. Adjust Date" "5. Adjust Time" "6. Start a SFC scan" "7. Start Task Manager" "8. loop mode" "9. Eval" "10. Emergency Evalator"
if %ERRORLEVEL% == 1 exit
if %ERRORLEVEL% == 2 start Load.bat
if %ERRORLEVEL% == 3 start
if %ERRORLEVEL% == 4 Date
if %ERRORLEVEL% == 5 Time
if %ERRORLEVEL% == 6 sfc /scannow
if %ERRORLEVEL% == 7 taskmgr
if %ERRORLEVEL% == 8 goto loop
if %ERRORLEVEL% == 9 goto eval
if %ERRORLEVEL% == 10 goto eval2
goto b

:loop
echo Loop mode will cause to loop the node even if a error occurred.
echo PRO TIP: You can use the Ctrl+V key to escape out of this, or just close the window.
echo Would you like to start Loop Mode?
cmdMenuSel f870 "1. No" "2. Yes" 
if %ERRORLEVEL% == 1 goto b
if %ERRORLEVEL% == 2 goto Start

:start
node bot.js
goto start

echo The Loop mode has been interrupted.
cmdMenuSel f870 "1. Continue" "2. Exit" "3. Settings"
if %ERRORLEVEL% == 1 goto start
if %ERRORLEVEL% == 2 exit
if %ERRORLEVEL% == 2 goto a

:a
echo This will abandon your process
cmdMenuSel f870 "1. Settings" "2. Continue" 
if %ERRORLEVEL% == 1 goto Settings
if %ERRORLEVEL% == 2 goto Start

:eval
node

:eval2
cls
echo =======================
echo EMERGENCY EVAL
echo =======================
node

:c
color 79
echo Welcome to recovery mode
echo An error occurred. Recovery Mode cannot be opened.
pause
echo Recovery mode will now close.
pause
goto b
echo Please select an option
cmdMenuSel f870 "> Help" "> System Wipe" "> SFC Scan" "> Reinstall the bot" "> Back"

if %ERRORLEVEL% == 1 goto d
if %ERRORLEVEL% == 2 goto e




:d
echo What the heck is this?
echo Recovery mode. It can fix the bot when ever there is a file missing. Sometimes it can't fix due to missing files.

echo What i can do here?
echo Help --- Shows this list
echo System Wipe --- It will start to commence the system wipe. and will removed all of the bots files. Please note: this will cause the bot to make it not function any more.
echo SFC Scan -- Scans the system for any problems
echo Reinstall the bot -- Reinstall the bots files
echo Back -- Exit the recover mode
cmdMenuSel f870 "> Back" 
if %ERRORLEVEL% == 1 goto c

:passpls
echo WARNING!
echo By going to system wipe. you agree that this will wipe EVERYTHING. NPM, etc... It may take some time to do this so please. I do recommend going back. I AM NOT RESPONSIBLE FOR THE DAMAGES THAT YOU DONE. THIS MEANS THAT YOU CANNOT RESTORE ANY OF THE FILES ONCE THEY ARE GONE!
echo Password is reqired. 
goto pass

:Pass
Set input=
set /p input= Password (input then press enter) :
if %input%==microsoft32hahahahahe5etdthgcfghc goto YES
if not %input%==microsoft32hahahahahe5etdthgcfghc goto NO

:YES
echo LAST WARNING. DO YOU WISH TO START?
cmdMenuSel f870 "> Back" 
if %ERRORLEVEL% == 1 goto c
:NO

Echo INCORRECT PASSWORD.
goto b