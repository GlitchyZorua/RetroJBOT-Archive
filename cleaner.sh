#!/usr/bin/env sh

while true; do
  inotifywait -qq -e close_write invert.png
  rm -f invert.png
done