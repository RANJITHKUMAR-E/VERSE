const { Router } = require("express");
const router = Router();
const {addvehicles}=require('../controller/AddVehicles')


router.get("/", addvehicles);

module.exports = router;