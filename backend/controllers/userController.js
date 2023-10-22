const asyncHandler = require("../middleware/asyncHandler");
const User = require("../models/userModel");

//Auth user & get token
//Post /api/users/login
//Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});

//Register a new user
//Post /api/users
//Public
const registerUser = asyncHandler(async (req, res) => {
    res.send("Register User");
});

//Logout User / clear cookie
//Post /api/users/logout
//Private
const logoutUser = asyncHandler(async (req, res) => {
    res.send("Logout User");
});

//Get user profile
//Get /api/users/profile
//Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.send("Get User Profile");
});

//Update user profile
//Put /api/users/profile
//Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send("Update User Profile");
});

//Get all users
//Get /api/users
//Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    res.send("Get Users");
});

//Get user by id
//Get /api/users/:id
//Private/Admin
const getUserById = asyncHandler(async (req, res) => {
    res.send("Get User By Id");
});

//Delete user
//Delete /api/users/:id
//Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
    res.send("Delete User");
});

//Update user
//Put /api/users/:id
//Private/Admin
const updateUser = asyncHandler(async (req, res) => {
    res.send("Update User");
});

module.exports = {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserById,
    deleteUser,
    updateUser,
};
