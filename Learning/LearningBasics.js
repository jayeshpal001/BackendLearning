const express = require('express');
const app = express();

const PORT = 5000; 

/* Middleware functions are functions that have access to the request object(req), the response object(res), and the next 
middleware funtions in the application's request-response cycle. The next middleware funcitons is commonly 
denoted by a variable named text */

app.use(express.json()); // Middleware to handle JSON data or Parse JSON body from requests

// Get --->  Request for a web page or an object from server
// Get data from the server

app.get('/', (req, res)=>{ // fetch data
    res.send("<h1>Hellow jayesh, Welcome to backend server<h1/>")
})

app.get('/user', (req, res)=>{
    res.send("Getting user Data....");
})

app.get('search', (req, res)=>{
    const {keyword, page} = req.query; // Jab tum URL ke end me ?key=value format me data bhejte ho → wo req.query me milta hai.
    res.send(`Search: ${keyword}, Page: ${page}`); 
})

// Post:- Data bhejna, create new things
// Data is send from frontend to backend 
app.post('/user',(req, res)=>{
    const {name, email} = req.body; // Req.body: Wo data jo user POST ya PUT request se body me bhejta hai, aur
    // use backend access karta hai means user ka data read krne me help krta hai
    console.log(req.body);
    
    res.send(`Welcome ${name}! this is Your Email ${email}`); // Send response to the user 

})

// Put:-  Used to update something- like editing profile or cart item
app.put('/user/:id', (req, res)=>{
    const {id} = req.params; //When we are send the ID or dynamic value to the url, It will get through the req.params

    const {name} = req.body;
    console.log(`this is the put method ${req.params.id}`);
    app.get('/user/:id',(req, res)=>{
        res.send(` This is id:- ${req.params.id} and this is name:- ${name}`)
    } )
    
    res.send(`User ${id} updated to ${name}`);  
})


// Used to delete something - like removing user, product, cart item. 
app.delete('/user/:id', (req, res)=>{
    const {id} = req.params; 
    res.send(`User ${id} deleted`) ;
})
// listen ----> Tells your app to "Start listing" for incoming requests on a specific post. 
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})
