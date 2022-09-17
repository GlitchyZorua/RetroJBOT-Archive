#!/usr/bin/env sh

printf "This is for the startup folder. Loop Mode is enabled by default\n\n"

while true; do
  sudo node index.js --unhandled-rejections=strict
done