const asyncHandler = require("../middleware/asyncHandler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

//Auth user & get token
//Post /api/users/login
//Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "30d",
        });

        //set JWT as HTTP only cookie
        res.cookie("jwt", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
        });

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
