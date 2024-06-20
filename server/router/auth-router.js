const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");
const { registrationSchema, loginSchema } = require("../validator/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authTokenMiddleware = require("../middlewares/authToken-middleware");

// router.get("/", (req, res) => {
//     res
//         .status(200)
//         .send("welcome to the world of node servers using routers");
// });

router.route("/").get(authController.home);


// router.get("/registration", (req, res) => {
//     res.status(200).send("welcome to registration page");
// });

//===========registration route
router
    .route("/registration")
    .post(validate(registrationSchema), authController.registration);
//===========registration route //===========

//===========login route
router.route("/login")
    .post(validate(loginSchema), authController.login);
//===========login route //==> =============

// =========user route============>
router.route("/user")
    .get(authTokenMiddleware, authController.user);
// =========user route============>


module.exports = router;