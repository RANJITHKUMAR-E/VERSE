const signupRouter = require('./routes/signupRouter');
const loginRouter = require('./routes/loginRouter');
const addVehiclesRouter = require('./routes/addVehiclesRouter');

module.exports = function (app) {
  app.use("/signup", signupRouter);
  app.use("/login", loginRouter);
  app.use("/addVehicles", addVehiclesRouter);
};
