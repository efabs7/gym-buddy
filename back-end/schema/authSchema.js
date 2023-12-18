const schema = {
  type: "object",
  properties: {
    nickname: { type: "string", maxLength: 30, minLength: 1 },
    password: { type: "string", maxLength: 30, minLength: 5 },
  },
  required: ["nickname", "password"],
  additionalProperties: false,
};

module.exports = {
  authSchema: schema,
};
