const express = require("express");
const app = express();
const cors = require("cors");
const { verify } = require("./utils/jwt");
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use(async (req, res, next) => {
  if (
    (req.method === "POST" && req.url === "/register") ||
    (req.method === "POST" && req.url === "/login")
  ) {
    return next();
  }

  console.log(req.headers.authorization);
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];

  console.log(token, "this is from the req headers");
  const data = verify(token);
  console.log(data);

  if (!data) {
    return res
      .status(401)
      .send(
        "Sorry; looks like you aren't allowed to use this service! Are you loggedin or registered? Maybe your token has expired!"
      );
  }
  const user = await getUserByIdService(data.id);
  req.user = user;
  console.log(user);

  if (user.name === "hermione" && user.nickname === "greatestWitchEver") {
    const permissionId = 1;
    res.status(200).send({ permissions: permissionId });
  } else {
    res.status(200).send({ permissions: 0 });
  }

  next();
});

app.use("/login", require("./routes/auth.route"));
app.use("/register", require("./routes/register.route"));
app.use("/users", require("./routes/users.route"));
app.use("/workouts", require("./routes/workouts.route"));

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
