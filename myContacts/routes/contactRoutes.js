const express = require('express');
const router = express.Router();


router.route("/").get((req, res)=> {
  res.sen("Contacts Page")
}).post(
  (req, res) => {
    console.log(req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
      return res.send("필수값이 입력되지 않았습니다.");
    }
  }
)

module.exports = router;