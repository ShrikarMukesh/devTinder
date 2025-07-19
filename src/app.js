const express = require("express"); // Import the Express library
const connectDB = require("./config/database");

const app = express(); // Create an Express application : Express is a web framework for Node.js
const port = 3000; // Define the port number for the server. My application will listen on this port for incoming requests
const User = require("./models/user");
const {use} = require("express/lib/application");
app.use(express.json());

/*
Creating a User endpoint
 */
app.post("/signup" , async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User created successfully");
  } catch (error) {
    res.status(400).send("Error creating user" + error.message);
  }
})

app.get ("/findByEmail" , async (req, res) =>{
    const findByEmail = req.body.emailId;

    try {
      const users = await User.findOne({emailId: findByEmail})
        res.send(users);
    } catch (error) {
      res.status(404).send("User Not found" + error.message);
    }

})

app.get ("/users" , async (req, res) =>{
  try {
    const users = await User.find({})
      res.status(200).send(users);
  } catch (error) {
    res.status(500).send("Error fetching user" + error.message);
  }
})

//update user endpoint
app.patch("/user/:userId" , async (req, res) => {

    const userId = req.params?.userId; // Assuming the user ID is sent in the request body
    const updateData = req.body;

    try {
        const ALLOWED_UPDATES = ["firstName", "about", "skills", "photoUrl", "lastName","userId"];
        const isUpdateAllowed = Object.keys(updateData).every( key => ALLOWED_UPDATES.includes(key));

        if (!isUpdateAllowed){
            throw new Error("update not allowed");
        }

        if (updateData?.skills?.length > 5){
            throw new Error("update not allowed");
        }
        await User.findByIdAndUpdate({_id: userId}, updateData,{
            returnDocument: "after", // Return the updated document
            runValidators: true // Ensure that the update respects the schema validation
        });
        res.send("User updated successfully");
    } catch (error) {
        res.status(400).send("Error updating user" + error.message);
    }
})

connectDB().then(() => {
  console.log("Database is connected");
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // Log a message to the console when the server starts
  });
})



