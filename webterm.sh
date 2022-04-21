#!/bin/bash

tmux new-session -d -s talk

ttyd -t fontSize=14 -t fontFamily="SpaceMono Nerd Font, Consolas, Liberation Mono, Menlo, Courier, monospace" -t scrollback="0" -p 6622 zsh -c 'tmux attach -t talk'

