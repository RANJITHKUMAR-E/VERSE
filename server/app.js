const express = require("express");

const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
/*
app.get('/', (req,res)=> {
  const {name} = req.body;
  console.log("working");
  res.status(200).json({status: "success", data: name})
});
*/

require("./routes")(app);

module.exports = app;
