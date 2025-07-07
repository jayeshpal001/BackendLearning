const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); 
const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Name is required"], 
        minlength: [3, "Name must be at least 3 characters"], 
        trim: true   // Remove unwanted space 
    }, 
    email: {
        type: String, 
        required: [true, "Email is required"], 
        unique: true, 
        trim: true, 
        lowercase: true, 
        match: [/\S+@\S+\.\S+/, "Invalid email format"]  // regex for email format
    },
    password:{
        type: String, 
        required: [true, "Password is required"], 
        minlength: [6, "Password must be at least 6 Characters"]
        
    },
    createAt: {
      type: Date, 
      default: Date.now   
    }
}); 

userSchema.pre('save', async function (next) {
    // Only hash if password was modified (not during update)
    if (!this.isModified("password")) {
        return next(); 
    }
    try {
        const salt = await bcrypt.genSalt(10); 
        this.password = await bcrypt.hash(this.password, salt); 
        next(); 
    } catch (error) {
        return next(error); 
    }
})

const User = mongoose.model('User', userSchema); 

module.exports = User; 