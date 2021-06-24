@echo off
echo ===================================================================
echo # This is for the startup folder. Loop Mode is enabled by default #
echo ===================================================================
:c
node index.js --unhandled-rejections=strict
echo Restarting...
goto c