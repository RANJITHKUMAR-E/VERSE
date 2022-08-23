const { Router } = require("express");
const router = Router();
const signup=require('../controller/signup')

router.get("/", signup.test);

module.exports = router;
