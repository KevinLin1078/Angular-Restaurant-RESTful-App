# Kitchen EATS by Kevin Lin
Kitchen Eats is a AWS cloud-enabled, AngularJS powered, and DJANGO Rest integrated application.

### This application has its separate front-end and back-end. 

### Django backend : https://github.com/KevinLin1078/Kitchen-Django-App
### Angular frontend: https://github.com/KevinLin1078/Kitchen-Angular-RESTful

# Features
  - Allows users to buy food from restuarants. 
  - Allows sellers/providers to create their restaurant web presence by registering kitchen.

# Usage
    - To start this application, simply launch a Ubuntu 18 or higher cloud instance on AWS EC2 or any other cloud service providers.
    - Clone this github repository
    - Simply go into this repository and type "bash install.sh"
        - This will AUTOMATICALLY deploy the application to APACHE on the web!!

### Tech
Kitchen EATS uses a number of open source projects to work properly:
* [AngularJS]
* Python 3.7 or higher
* [Django] 
* [Apache] 
* [Nginx]

HINT: Don't worry about not having these tech stacks, everything will be AUTOMATICALLY installed for you once you run the .sh script

### Installing and Deploying Django Rest
```sh
$ cd $HOME ; sudo git clone https://github.com/KevinLin1078/Kitchen-Shopping-App
$ sudo mv Kitchen-Shopping-App kitchen
$ cd kitchen
$ echo 2 | bash install.sh
```

### Installing and Deploying Django Rest
```
$ cd $HOME; sudo git clone https://github.com/KevinLin1078/angular
$ cd angular
$ echo 1 | bash run.sh
$ echo 4 | bash run.sh  
$ echo 7 | bash run.sh 
$ echo 8 | bash run.sh 
```

### If .sh file causes error , to fix it follow this
$ sudo apt-get install dos2unix
$ sudo dos2unix  run.sh
$ sudo dos2unix  install.sh  



### Development
Want to contribute? Great!


