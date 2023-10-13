const express = require("express");
const router = express.Router();
var ccavReqHandler = require("../utils/ccavRequestHandler.js"),
  ccavResHandler = require("../utils/ccavResponseHandler.js");

router.get("/about", function (req, res) {
  res.render("dataFrom.html");
});

router.post("/ccavRequestHandler", function (request, response) {
  ccavReqHandler.postReq(request, response);
});

router.post("/ccavResponseHandler", function (request, response) {
  ccavResHandler.postRes(request, response);
});

module.exports = router;
