How to test each feature in this application: 
--------
1. **A simple Express server** -  part of initial setup, please see "Installation" in "Readme.MD"
2. **Module(s)** - this is run automatically when you run "app.js" (part of the initial setup mentioned above) 
and the output "This module works!" should be seen in the console. 
3. **A simple Express post request** -  You can test this with Postman. Just make a Post request to "127.0.0.1:3000/", 
set format to JSON and put an object "id" in the body, like this: 

   {
      	"id": "abcdefgh"
   }

You should get back a response and also a message in the console. 

4. **A simple promise** - tested automatically with a post request described above. 

5. **A json validator Ajv** - This one is also tested automatically with the post request. However, you can check it 
working with a post request that does not have a property called "id" in its body. It should throw an error in such case. 

6. **A template engine EJS** - You can change the contents of the HTML displayed in /views index.js. You can edit 
this file just like you would edit any other HTML file (or at least as far as I know). 

7. **A template engine Marko** - You can see this working automatically with a get request on "/marko" 
(e.g. http://localhost:3000/marko). You can change the contents of the HTML displayed in /views hello.marko. You can edit 
this file just like you would edit any other HTML file (or at least as far as I know). 
After running a relevant request, a hello.marko.js file is generated in the views folded based on the input from 
hello.marko

8. **A forEach() array method** - You can see this working automatically with a get request on "/" 
(e.g. http://localhost:3000/). You should see the items of the array output in the console. 

9. **NPM module Moment for displaying/formating dates** - You can see this working  with a get request on "/today" 
(e.g. http://localhost:3000/today). You should see the name of current day displayed in your browser. 

10. **bunyan logger** - You can see this working  with a get request on "/logger" (e.g. http://localhost:3000/logger). 
You should see a hello world message there and also, you should see some logs in your console. 

11. **bunyan-format** - See the previous item. This module makes the logs nicely formatted/colored. 

12. **Simple Express middleware** - you can see this in app.js as an "app.use" right above the app.get request on "/today". 
You can see this working  with a get request on "/today" (e.g. http://localhost:3000/today). You should see a message 
logged in the console. 

11. **ES6 Classes with inheritance, private property, setter etc.** - You have to test this separately, so in a sense, 
this is not a part of the core project. Just run "node sample-classes.js" instead of "node app.js" and you should see 
the output in the console. For more explanation on this results please see //comments in sample.classes.js . 

12. **A simple Mocha + Chai + ChaiHTTP test** - just run "npm test" and you should see the results of the test 
in the console. 

13. **ES6 Fat arrow functions** - run "node arrows.js" and you should see some output in the console. More importantly, 
read the comments in "arrows.js", which should be explanatory enough. 