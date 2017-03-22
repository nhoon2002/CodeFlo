var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamSchema = new Schema({

    teamName: {
        type: String,
        trim: true,
        required: "Team Name is Required"
    },
    teamMembers: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
});

var Team = mongoose.model('Team', TeamSchema);

module.exports = Team;
