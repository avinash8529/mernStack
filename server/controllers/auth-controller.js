const { response } = require("express");
const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const home = async (req, res) => {
    try {
        res
            .status(200)
            .send("welcome to the world of server using controllers");

    } catch (error) {
        console.log(error);
    }
}

// ==============registration logic =============

const registration = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(400).json({ msg: "User already exist" });
        }
        else {

            // const saltRound = 10;
            // const hashPassword = await bcrypt.hash(password, saltRound);
            const userCreated = await User.create({
                username,
                email,
                phone,
                password
            });
            return res.status(201).json({
                msg: "Registration Successful Thankyou...!!",
                // response: userCreated,

            });
        }

    } catch (error) {
        return res.status(500).json("internal server error");

    }
}

// ===================login logic=====================

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const registered = await User.findOne({ email: email });
        if (!registered) {
            return res.status(400).send({ message: "please register yourself" });
        }
        else {
            const userTrue = await registered.validateUser(password);
            if (userTrue) {
                res.status(200).send({
                    meg: "login successfull",
                    token: await registered.generateToken(),
                    userId: registered._id.toString(),
                });
            }
            else {
                res.status(401).send({
                    msg: "Invalid Creditials",
                });
            }
        }
    } catch (error) {
        console.log(error);
        return res.status(500);

    }
}

//=================user data logic ============================
const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        res.status(200).json({ userData });

    } catch (error) {
        console.log(`error from user route ${error}`);
    }

}

module.exports = { home, registration, login, user };