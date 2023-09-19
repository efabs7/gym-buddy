const { MongoClient, Collection, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const uri = process.env.MONGO_STRING;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const cols = {};
async function run() {
  try {
    await client.connect();
    const gym = client.db("gym");
    const users = gym.collection("users");
    const workouts = gym.collection("workouts");
    cols.users = users;
    cols.workouts = workouts;
    console.log("pinged your database, connected");
  } catch (error) {
    console.log(error);
  } finally {
  }
}
run();

module.exports = cols;
