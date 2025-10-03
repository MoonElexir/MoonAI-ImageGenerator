import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      index : true,
    },

    password: {
      type: String,
      required: true,
    },

    creditBalance: {
      type: Number,
      default: 5,
    },
  },
  { timestamps: true }
);


//This will try to create databse again and agin. inorder to stop that, we use || operator.
const userModel = mongoose.models.user ||  mongoose.model("user", userSchema);

export default userModel;
