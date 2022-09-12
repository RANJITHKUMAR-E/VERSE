const { Router } = require("express");
const router = Router();
const {login}=require('../controller/login')

router.get("/",login);

module.exports = router;
