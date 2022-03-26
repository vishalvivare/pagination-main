const mongoose = require("mongoose");

// step 2 :- create a schema
const userSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    gender:{ type: String, required: true}
  },
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);

// step 3 :- create a model
module.exports = mongoose.model("user", userSchema); // user => users
