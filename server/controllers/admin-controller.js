const User = require("../models/user-model");
const Contact = require("../models/contact-model");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 });
        if (!users || users.length === 0) {
            res.status(400).json({ msg: "No users Found" });
        }
        res.status(200).json({ msg: users });
    } catch (error) {
        console.error(error);
    }
}

const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id });
        return res.status(200).json({ message: "user deleted successfully" });
    } catch (error) {
        next(error);
    }

}

const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const users = await User.findOne({ _id: userId }, { password: 0 });
        if (!users || users.length === 0) {
            res.status(400).json({ msg: "No users Found" });
        }
        res.status(200).json({ msg: users });
    } catch (error) {
        next(error);
    }

}

const updateUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const userDataUpdated = req.body;

        const updateUser = await User.updateOne(
            { _id: userId },
            {
                $set: userDataUpdated,
            });
        return res.status(200).json({ updatedData: updateUser });

    } catch (error) {
        next(error)
    }
}

const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        if (!contacts || contacts.length === 0) {
            res.status(400).json({ msg: "No users Found" });
        }
        res.status(200).json({ msg: contacts });
    } catch (error) {
        console.error(error);
    }
}

const deleteContactsById = async (req, res) => {
    try {
        const contactId = req.params.id;
        await Contact.deleteOne({ _id: contactId });
        return res.status(200).json({ message: "contact delete successfully" });
    } catch (error) {
        next(error);
    }
}
module.exports = { getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactsById };