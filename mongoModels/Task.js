var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  task: {
    type: String
  }
});

var Task = mongoose.model('Task', TaskSchema);

module.exports = Task;