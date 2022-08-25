const { Router } = require("express");
const router = Router();
const {createuser,validatedetails}=require('../controller/signup')

router.get("/",validatedetails, createuser);

module.exports = router;
