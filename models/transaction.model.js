import mongoose, { Schema } from "mongoose";

const transactionSchema = new mongoose.Schema({


  userId: {
    type: String,
    required: true,
  },

  plan: {
    type: String,
    required: true,
  },

  amount: {
    type: Number,
    required: true,
  },

  credits: {
    type: Number,
    required: true,
  },

  payment : {
    type : Boolean,
    default : false,
  },

  date: { type : Number },
});

//This will try to create databse again and agin. inorder to stop that, we use || operator.
const transactionModel =
  mongoose.models.transaction || mongoose.model("transaction", transactionSchema);

export default transactionModel;
