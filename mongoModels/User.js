var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },
  lastName: {
    type: String,
    trim: true,
    required: "Last Name is Required"
  },
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  SQLid: {
    type: Number
  }
  userCreated: {
    type: Date,
    default: Date.now
  },
  lastUpdated: { type: Date
  },
  userAdmin: {
    required: false
  },
  team: [{
    type: Schema.Types.ObjectId,
    ref: "Team"
  }]
});

var User = mongoose.model("User", UserSchema);

// Export the model so the server can use it
module.exports = User;
