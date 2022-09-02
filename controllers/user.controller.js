const {v4: uuidv4} = require("uuid");
const User = require("../models/users.model");


const getAllUsers = async(req, res) => {
  try {
    const users = await User.find(); // Get All Users Data
    res.status(200).json(users)
  } catch (error) {
    res.status(500).send(error.message);
  }
    // res.status(200).json({
    //  message: "All users",
    // });
  };

  // Get Individual One User
  const getOneUser = async(req, res) => {
   try {
    const user = await User.findOne({id: req.params.id});
    res.status(200).json(user);
   } catch (error) {
    res.status(500).send(error.message);
   }
  };

  // Create User
  const createUser = async(req, res) => {
    try {
      const newUser = new User({
        id: uuidv4(),
        name: req.body.name,
        age: Number(req.body.age)
      });
      await newUser.save(); // Save Data in DB
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  // Update User
    const updateUser = async(req, res) => {
      // res.status(200).json({
      //   message: "User Updated Successfully",
      // });
      try {
        const user = await User.findOne({id: req.params.id});
        user.name = req.body.name;
        user.age = Number(req.body.age);
        await user.save(); // Save Data in DB
        res.status(201).json(user);
      } catch (error) {
        res.status(500).send(error.message);
      }
    };


  // Delete User
  const deleteUser = async(req, res) => {
    try {
     await User.deleteOne({id: req.params.id});
     res.status(200).json({message: "User Deleted Successfully"});
    } catch (error) {
     res.status(500).send(error.message);
    }
   };

  module.exports = { getAllUsers, getOneUser, createUser, updateUser, deleteUser };