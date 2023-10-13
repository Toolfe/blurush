var http = require("http"),
  fs = require("fs"),
  ccav = require("./ccavutil.js"),
  qs = require("querystring");

exports.postReq = function (request, response) {
  var body = "",
    workingKey = process.env.CCAVENUE_WORKING_KEY, //Put in the 32-Bit key shared by CCAvenues.
    accessCode = process.env.CCAVENUE_ACCESS_CODE, //Put in the Access Code shared by CCAvenues.
    encRequest = "",
    formbody = "";

  if (request?.body?.data) {
    body += request.body.data;
    encRequest = ccav.encrypt(body, workingKey);
    formbody =
      '<form id="nonseamless" method="post" name="redirect" action="https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction"/> <input type="hidden" id="encRequest" name="encRequest" value="' +
      encRequest +
      '"><input type="hidden" name="access_code" id="access_code" value="' +
      accessCode +
      '"><script language="javascript">document.redirect.submit();</script></form>';
    response.writeHeader(200, { "Content-Type": "text/html" });
    response.write(formbody);
    response.end();
  } else {
    response.status(400).json({
      status: "400",
      error: "data missing",
    });
  }

  return;
};
