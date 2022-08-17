const signupRouter = require('./routes/signupRouter');
const loginRouter = require('./routes/loginRouter');

module.exports = function (app) {
  app.use("/signup", signupRouter);
  app.use("/login", loginRouter);
};
