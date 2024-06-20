const jwt = require("jsonwebtoken");
const User = require("../models/user-model");
const { ParseStatus } = require("zod");

const authTokenMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res
            .status(401)
            .json({ message: "Unauthorised HTTp, Token noyt provided" });
    }
    // console.log("token from auth middleware", token);
    const jwtToken = token.replace("Bearer ", "");
    // or================if you are not sure about space
    // const jwtToken = token.replace("Bearer","").trim();
    // console.log(jwtToken);

    try {

        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

        const userData = await User.findOne({ email: isVerified.email })
            .select({ password: 0 });
        // console.log(userData);

        req.user = userData;
        req.token = token;
        req.userID = userData._id;
        next();
    } catch (error) {

    }
}
module.exports = authTokenMiddleware;