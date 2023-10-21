import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
      default:
        "https://cdn2.iconfinder.com/data/icons/random-outline-3/48/random_14-512.png",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
