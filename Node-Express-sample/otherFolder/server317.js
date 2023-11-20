/*
    Express is a backend framework that is built off of Node.js. It allows you to do
    various things with Node.js. For examples:
        - Middleware
        - Routing
        - Request handling
        - And more
    In this class we will focus on using middleware, routing, and request handling.

    Express, by default, uses HTTP protocol to handle requests. Reminder, the requests
    we will be using are:
        - GET: Used to grab information/resource from a database/server
        - POST: Used to add information to a server database
        - PUT: Used to update information from a server database
*/


//In order to use Express, you need to require the express module. See below:
const express = require("express");

/*
    Then you need to create an instance of the express object. 
    Usually the object is stored in a variable named "app".
    See below:
*/
const app = express();

/*
    Below we are importing another module called "path". We are importing it
    to to use the join() method from the path object
*/
const path = require('path');

/*
    Below we are using the join() method from the path object we created above.
    The join() method will take arguments and turn them into a path (string).
    You can see that we use the __dirname global variable, which is a variable that
    holds the path to the current file you are in. We also pass "public" as an argument.
    This will result in a returned string that looks like the followng:
    /path/to/the/file/public. We store this path in the "absolutePath" variable.
*/
var absolutePath = path.join(__dirname, "public")


/*
    Below we are using middleware. You can think of middleware as the
    "settings" for your server. You can change the "settings" for your server.
    The method is called .use(). 
    As an argument, we pass the express.static method with the "absolutePath" argument.
    This makes it so when the user goes to the home page of your website, localhost:3000,
    the server will look for a file called "index.html" in the path inside of the "public" folder.

*/
app.use(express.static(absolutePath));


/*
    The route below is a route we created. When the user makes a GET request to the /about endpoint, in other words if
    they type "localhost/3000/about" in the url web browser, this code determines how the request gets handled.
    The first argument is the endpoint that is being handled and the second argument is the a function that 
    tells the server how to handle the GET request to the /about endpoint. Notice the second argument has two 
    objects which are the req (request) and the res (response). The req object has information about
    the request that was made. The res object is what we use to handle the request and send information and or
    resources to the client.
    
    Lets think about how we might want to handle this request. If a user types "localhost:3000/about" in the
    URL bar, that means they want to go to the about page of the website. Therefore if would make sense to
    write code that will have the server send a file that shows the about page.
    
    The way we handle the GET request to the /about endpoint is by setting the status code to 200 (OK)
    and sending the HTML file that dispays the about page. We do this below.
        - res object has a method called .status() that lets use set a status code
        - The .sendFile() method lets the server send a file to the client. The argument to the 
          .sendFile() method must be an absolute path to the file that you want the server to send to the client.
*/
app.get("/about", (req,res) =>{
    res.status(200);        
    res.sendFile(__dirname + "/public/about.html"); 

})

/*
    The route below is a route we created. When the user makes a GET request to the /signup endpoint, in other words if
    they type "localhost/3000/signup" in the url web browser, this code determines how the request gets handled.
    The first argument is the endpoint that is being handled and the second argument is the a function that 
    tells the server how to handle the GET request to the /signup endpoint. Notice the second argument still has two 
    objects which are the req (request) and the res (response). The req object has information about
    the request that was made. The res object is what we use to handle the request and send information and or
    resources to the client.
    
    Lets think about how we might want to handle this request. If a user types "localhost:3000/signup" in the
    URL bar, that means they want to go to the signup page of the website, or if the user presses a "Create an account"
    button, then it could be made so a GET request gets made to the /signup endpoint.
    Therefore if would make sense to write code that will have the server send a file that shows the signup page.
    
    The way we handle the GET request to the /signup endpoint is by setting the status code to 200 (OK)
    and sending the HTML file that dispays the sign up page. We do this below.
        - res object has a method called .status() that lets use set a status code
        - The .sendFile() method lets the server send a file to the client. The argument to the 
          .sendFile() method must be an absolute path to the file that you want the server to send to the client.
*/
app.get("/signup", (req, res) =>{
    res.status(200);
    res.sendFile(__dirname + "/public/signup.html");  //The signup.html page does not exit, just wanted to give an example

})

/*
   Will go more into detail as to what this is when I make a video on it
*/
app.post("/signup", (req, res)=>{
   let userName =  req.body.name
   let userAge = req.body.number

   //Writd code to add the information into the database

   res.status(200);
   res.send("Your account has been created!")
})


/*
    Below is the code that makes your server actually run. If you dont have the code below in your server
    and you to go to localhost:3000 you will not see your website.
    The .listen() function is what makes your server run. The first argument shoul be the port you want
    your website to be hosted on. In our case it would be 3000, which is why you go to localhost:3000
    The second argument is the function that runs when your server starts running. The message 
    "The server is running on port 3000" will be displayed to the console when the server is ran.
*/
app.listen(3000, ()=> {
    console.log("The server is running on port 3000!");
})