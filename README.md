# Accordion — AngularJS app
This project is representation of Accordion with side navigation using Angular JS and CSS animations.

This project contains a sample AngularJS application with flexbox UI and is preconfigured to install the Angular framework.

It just shows how to define component and views.

# Getting Started
To get you started you can simply clone the Accordion repository and install the dependencies.

# Install Dependencies
We have preconfigured npm to automatically run bower so we can simply do:
npm install
Behind the scenes this will also call bower install. After that, you should find out that you have two new folders in your project.
•	node_modules - contains the npm packages for the tools we need
•	app/bower_components - contains the Angular framework files
Note that the bower_components folder would normally be installed in the root folder but Accordion changes this location through the .bowerrc file. Putting it in the app folder makes it easier to serve the files by a web server.

# Run the Application
We have preconfigured the project with a simple development web server. The simplest way to start this server is:

npm start
Now browse to the app at http://localhost:3000

# Directory Layout

app/                    --> all of the source files for the application   
  assets/               --> define assets of application  
     css/	              --> define stylesheet  
        style.css        --> default stylesheet  
   components/           --> version related components 
     index.js 	          --> component declaration  
     view/               --> load component view 
        Accordion.html	  --> component layout view  
  controller/	          --> Application bind controller  
     Index.js            --> declare controller logic  
index.js	              --> main application modules 
index.html	            --> app layout file (the main html template file of the app) 
