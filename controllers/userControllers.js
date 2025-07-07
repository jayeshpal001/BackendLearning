const User = require('../models/User')

exports.getUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(201).json(users);
        console.log(`Get user work correctly ${req.json(user)}`);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
exports.searchUser = (req, res) => {
    const { keyword, page } = req.query;
    res.send(`Search: ${keyword}, Page: ${page}`);
}
exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = await User.create({ name, email, password });
        res.status(201).json({
            message: "User created successfully",
            user: newUser
        })
        // res.send(`The user name is ${name} and Email is ${email}`);  
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error.message);
        
    }
}
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;         // URL me se ID get karo
        const { name, email } = req.body;  // Body se updated values lo

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { name, email },
            { new: true }  // Taaki updated value return ho
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found!" });
        }

        res.status(200).json({
            message: "User updated successfully!",
            user: updatedUser
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deleteUser = async(req, res) => {
   try {
     const { id } = req.params;
     const deleteUser = await User.findByIdAndDelete(id); 
     if (!deleteUser) {
      return  res.status(404).json({message: "User not found!"}); 
     }
     res.status(200).json({
        message: "User deleted successfully", 
        user: deleteUser
     });     
   } catch (error) {
     res.status(500).json({erro: error.message}); 
   }
}
