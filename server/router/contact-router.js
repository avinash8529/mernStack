const express = require("express");
const router = express.Router();
const contactForm = require("../controllers/contact-controller");


//===========contact route
router
    .route("/contactUs")
    .post(contactForm)
//===========contact route //==> =============

module.exports = router;