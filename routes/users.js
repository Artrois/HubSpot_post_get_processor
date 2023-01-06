var express = require("express");
var router = express.Router();

/* POST users listing. */
router.post("/", function (req, res, next) {
  uuid = create_UUID();
  console.log("recevied body: " + req.body.data);
  console.log("sending: " + uuid);
  string2send = JSON.stringify({ usr_pwd: uuid });
  res.send(string2send);
});

module.exports = router;

function create_UUID() {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}
