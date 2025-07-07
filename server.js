const express = require('express')
const app = express(); 
 
const dotenv = require('dotenv').config();
const connectDb = require('./config/db')

const PORT = process.env.PORT;

connectDb(); 

//Middleware to parse JSON
app.use(express.json());

// Import routes
const userRoutes = require('./routes/userRoutes'); 

// Mount routes with prefix 

app.use('/', userRoutes); 

app.listen(PORT,()=>{
    console.log(`Server running at PORT ${PORT}`);
    
})

