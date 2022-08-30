const { Router } = require("express");
const router = Router();
const {createuser,validatedetails,vendorbranch}=require('../controller/signup')

router.get("/",validatedetails, createuser,vendorbranch);

module.exports = router;
