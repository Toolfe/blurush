const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./server/routes/routes");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("views", __dirname + "/public");
app.engine("html", require("ejs").renderFile);

// const JWTAuthourization = (req, res, next) => {
//   var authourization = req.headers["Authourization"];
//   if (token) {
//     var token = authourization?.split(" ");
//     jwt.verify(token, process.env.JWT_SECRET_KEY, (err, data) => {
//       if (err) {
//         res.send("Invalid access token");
//       } else {
//         console.log(data);
//         next();
//       }
//     });
//   } else {
//     res.status(HttpStatusCode.Forbidden.valueOf()).json({
//       ERROR: "UNAUTHOURIZED",
//     });
//   }
// };

app.use("/payment", router);

app.listen(process.env.PAYMENT_PORT, () => {
  console.log("PAYMENT API Started On:", process.env.PAYMENT_PORT);
});
