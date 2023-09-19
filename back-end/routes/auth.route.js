const { findUserByEmailService } = require("../services/usersService");
const { sign } = require("../utils/jwt");

route.post("/", validateSchema(authSchema), async (req, res) => {
  const { email, password } = req.body;

  const user = await findUserByEmailService(email);
  if (!user) {
    return res
      .status(400)
      .send("Sorry, we can't find a user with this email. Try signing up!");
  }
  bcrypt.compare(password, user.password, function (err, valid) {
    if (valid) {
      const data = { id: user._id.toString() };

      const token = sign(data);
      console.log(token);
      res.send({ access_token: token });
    } else {
      return res.status(400).send("not a valid password; try again please!");
    }
  });
});

module.exports = route;
