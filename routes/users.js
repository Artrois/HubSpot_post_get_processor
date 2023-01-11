var express = require("express");
var router = express.Router();

/* POST users listing. */
router.post("/", function (req, res, next) {
  uuid = create_UUID();
  console.log("recevied body: " + req.body.email);
  console.log("sending: " + uuid);

  msgnoerrors = {
    succeeded: true,
    result: {
      email: req.body.email,
      password: uuid,
    },
    errors: [],
  };

  msgwitherrors = {
    succeeded: false,
    result: {
      email: req.body.email,
      password: uuid,
    },
    errors: [
      {
        id: 0,
        message: "TEST ERROR MESSAGE",
      },
    ],
  };

  res.send(JSON.stringify(msgnoerrors));
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
