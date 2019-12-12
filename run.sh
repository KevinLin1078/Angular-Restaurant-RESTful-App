echo 'sudo apt-get update'
echo 'sudo apt install dos2unix'
echo 'To initialize instance, type 1'
echo 'To install angularJS, type 4'
echo 'To start an angular project, type 5'
echo 'To insatll typescript, type 6'
echo -e 'Option: \c' 
read option


if [ $option == 1 ]
then
	sudo apt-get update
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
fi

