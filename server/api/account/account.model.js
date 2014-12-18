var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var accountSchema = new Schema({
  account_ID: Number,
  account_type: String,
  balance: Number,
  accountNum: String
});
 
module.exports = mongoose.model('Account', accountSchema);