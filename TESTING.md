How to test each feature in this application: 
--------
1. **A simple Express server** -  part of initial setup, please see "Installation" in "Readme.MD"
2. **Module(s)** - this is run automatically when you run "app.js" (part of the initial setup mentioned above) and the output "This module works!" should be seen in the console. 
3. **A simple Express post request** -  You can test this with Postman. Just make a Post request to "127.0.0.1:3000/", set format to JSON and put an object "id" in the body, like this: 

   {
      	"id": "abcdefgh"
   }

You should get back a response and also a message in the console. 

4. **A simple promise** - tested automatically with a post request described above. 

5. **A json validator Ajv** - This one is also tested automatically with the post request. However, you can check it working with a post request that does not have a property called "id" in its body. It should throw an error in such case. 

6. **A template engine EJS** - You can see this working automatically with a get request on "/" (e.g. http://localhost:3000/). You can change the contents of the HTML displayed in /views index.js. You can edit this file just like you would edit any other HTML file (or at least as far as I know). 