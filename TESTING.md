How to test each feature in this application: 
--------
1. **A simple Express server** part of initial setup, please see "Installation" in "Readme.MD"
2. **Module(s)** this is run automatically when you run "app.js" (part of the initial setup mentioned above) and the output "This module works!" should be seen in the console. 
3. **A simple Express post request** You can test this with Postman. Just make a Post request to "127.0.0.1:3000/", set format to JSON and put an object "id" in the body, like this: 

   {
      	"id": "abcdefgh"
   }

You should get back a response "Hello World" and also the value of id in the console. 