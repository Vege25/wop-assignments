"use strict";
// Router ottaa pyynnön selaimelta lähettää sen controllerille joka hakee tiedon modelista, joka palauttaa controllerille arvon
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/authRoute");
const catRoute = require("./routes/catRoute");
const userRoute = require("./routes/userRoute");
const { httpError } = require("./utils/errors");
const passport = require("./utils/pass");
const app = express();
const port = 3000;

app.enable("trust proxy");

app.use((req, res, next) => {
  if (req.secure) {
    // request was via https, so do no special handling
    next();
  } else {
    // if express app run under proxy with sub path URL
    // e.g. http://www.myserver.com/app/
    // then, in your .env, set PROXY_PASS=/app
    // Adapt to your proxy settings!
    const proxypath = process.env.PROXY_PASS || "";
    // request was via http, so redirect to https
    res.redirect(301, `https://${req.headers.host}${proxypath}${req.url}`);
  }
});

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(passport.initialize());
app.use("/thumbnails", express.static("thumbnails"));

app.use(express.static("uploads"));

app.use("/auth", authRoute);
app.use("/cat", passport.authenticate("jwt", { session: false }), catRoute);
app.use("/user", passport.authenticate("jwt", { session: false }), userRoute);

app.use((req, res, next) => {
  const err = httpError("Not found", 404);
  next(err);
});

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal server error" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
