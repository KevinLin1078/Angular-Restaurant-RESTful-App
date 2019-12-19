echo 'If THIS script is causing error, do "sudo apt-get update; sudo apt install dos2unix -y", then "sudo dos2unix scripname" '
echo 'To INITIALIZE instance, type 1'
echo 'To INSTALL Angular, type 4'
echo 'To START an Angular project, type 5'
echo 'To INSTALL typescript, type 6'
echo 'To INSTALL Nginx for Angular, type 7'
echo 'To DEPLOY Angular Project in NGINX, type 8'
echo -e 'Option: \c' 
read option


if [ $option == 1 ]
then
	sudo apt-get update
	sudo apt install dos2unix -y
	echo 'y' | sudo ufw enable
	sudo ufw allow "OpenSSH"
	sudo ufw allow 80
	sudo ufw allow 8000
	sudo ufw allow 3000
	sudo /usr/bin/npm install -g typescript
elif [ $option == 4 ]
then
	sudo apt-get install software-properties-common
	curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
	sudo apt-get install nodejs -y
	sudo chmod 777 /usr/lib/node_modules/*
	echo 'y' | sudo /usr/bin/npm install -g @angular/cli
elif [ $option == 5 ]
then
	echo -e "What would you like to name your project? \c"	
	read project_name
	sudo ng new $project_name
elif [ $option == 6 ]
then
	sudo /usr/bin/npm install -g typescript
elif [ $option == 7 ]
then
	sudo apt-get update
	sudo apt-get install -y nginx
	sudo ufw allow 'Nginx HTTP'
	sudo systemctl retart nginx
	sudo systemctl status nginx
elif [ $option == 8 ]
then
	echo -e "Enter name of project you want to deploy"
	read name 

	cd $name 
	sudo npm run build
	file=/etc/nginx/sites-enabled/default
	angular_dir=/var/www/html/route
	if [ -e  $file ]
	then	
		sudo rm $file
	fi

	if [ -d  $angular_dir ]
	then	
		sudo rm $angular_dir -rf
	fi
	sudo mv ./dist/$name /var/www/html
	sudo cp ~/angular/default /etc/nginx/sites-enabled/
	sudo systemctl restart nginx
else
	echo 'To run typescript, "tsc filename --watch"  '
	echo 'To combine all tsc to a single file, "tsc ./* --out app.js" '
fi

