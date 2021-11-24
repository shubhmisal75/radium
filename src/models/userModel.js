const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email:{
      type:String,
      required:true
    },
    mobile:{type:Number,
      required:true

    },
    password: {type:String,
      required:true},

    isDeleted: {type: Boolean, default: false},
  },

  { timestamps: true }
);

module.exports = mongoose.model("User2", userSchema);
