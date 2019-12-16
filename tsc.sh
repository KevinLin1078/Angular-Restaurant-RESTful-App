#! /bin/bash

# echo 'alias ts="bash ~/angular/tsc.sh"' >> ~/.bashrc
# source ~/.bashrc


echo -e "Hi, bored? Wait until I process your file :) ... \n\n "
filename="$(cut -d'.' -f1 <<< "$1" )"  
extension=".js"   
file="${filename}${extension}"

#compile typescript
sudo tsc $1
node $file

