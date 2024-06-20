const Service = require("../models/service-model");

const services = async (req, res) => {
    try {
        const response = await Service.find();

        if (!response) {
            res.status(400).json({ msg: "something went wrong" });
        }
        res.status(200).json({ msg: response });
    } catch (error) {
        console.error(`service ${error}`);
    }
}

module.exports = services;