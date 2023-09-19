const db = require("../utils/mongo");

const { ObjectId } = require("mongodb");

const getAllWorkoutsService = async () => {
  const workouts = await db.workouts.find().toArray();
  return workouts;
};

const getWorkoutByIdService = async (id) => {
  const workout = await db.workouts.findOne({
    _id: new ObjectId(id),
  });
  return workout;
};

const addWorkoutService = async (workout) => {
  const resp = await db.workouts.insertOne(workout);
  return resp;
};

const saveWorkoutToUserSavedListService = async (workoutId, userId) => {
  const workout = await getWorkoutByIdService(workoutId);
  const resp = await db.users.updateOne(
    { _id: new ObjectId(userId) },
    {
      $push: {
        userSavedWorkouts: workout,
      },
    }
  );
  return resp;
};

const removeWorkoutFromUserSavedListService = async (workoutId, userId) => {
  const workout = await getWorkoutByIdService(workoutId);
  const userUpdated = await db.users.updateOne(
    { _id: new ObjectId(userId) },
    {
      $pull: {
        userSavedWorkouts: workout,
      },
    }
  );
  return userUpdated;
};

module.exports = {
  getAllWorkoutsService,
  getWorkoutByIdService,
  addWorkoutService,
  saveWorkoutToUserSavedListService,
  removeWorkoutFromUserSavedListService,
};
