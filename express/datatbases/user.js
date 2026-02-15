import mongoose from "mongoose";
const Schema = mongoose.model;

const User = Schema("User", {
  name: String,
  username: String,
  password: String,
});

export default User;
