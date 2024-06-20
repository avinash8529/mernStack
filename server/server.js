require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./utils/db")
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router")
const getUsers = require("./router/admin-router")
const errorMiddleware = require("./middlewares/error-middleware");


const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, PATCH, DELETE",
    credentialS: true
}

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", getUsers);
// app.use(express.json()) ====> this line of code adds and express middleware that passes before any route which parses any request bodies with json payloads its important to place this before any route that need to handle json data in the request body this middleware is  reponsible for json data from request
app.use(errorMiddleware);

const PORT = 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server is listen on : ${PORT}`);
    });
})