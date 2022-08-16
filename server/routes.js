module.exports = function (app) {
  app.use("/signup", signupRouter);
  app.use("/login", loginRouter);
};
