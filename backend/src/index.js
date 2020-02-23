const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

//Env variables
dotenv.config();

//Connecting to DB
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log("Connected to db.")
);

//Routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/privateRoutes/user");
const eventsRoute = require("./routes/privateRoutes/events");

//enable cors requests from react a port 3000
// app.use(cors({ origin: "http://localhost:3000" }));
app.use(cors());

//Enable parsing json requests
app.use(express.json());

//Routes
app.use("/", authRoute);
app.use("/user", userRoute);
app.use("/events", eventsRoute);

//Listening in port 3333
app.listen(3333, () => console.log("Server up at port 3333!"));
