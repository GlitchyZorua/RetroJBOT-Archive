@echo off
:d
echo ==================================
echo :  JACOBS NODE.JS CODE EXPLORER  :
echo ==================================
echo v2.0
echo What would you like to do? (use mouse or keyboard)
cmdMenuSel f870 "1. Start NPM" "2. Exit" "3. Settings"
if %ERRORLEVEL% == 1 goto a
if %ERRORLEVEL% == 2 exit
if %ERRORLEVEL% == 3 settings


:a
echo Enable Loop Mode Or halt when crash?
cmdMenuSel f870 "1. loop mode (recommended)" "2. Halt when crash" "3. Cancel"
if %ERRORLEVEL% == 1 goto c
if %ERRORLEVEL% == 2 goto b
if %ERRORLEVEL% == 3 goto d

:b
echo Running Node...
node index.js --unhandled-rejections=strict
cmdMenuSel f870 "1. Restart" "2. Exit" "3. Settings"
if %ERRORLEVEL% == 1 goto a
if %ERRORLEVEL% == 2 exit
if %ERRORLEVEL% == 3 settings

:settings
settings.bat

:c
node index.js --unhandled-rejections=strict
echo Restarting...
goto c