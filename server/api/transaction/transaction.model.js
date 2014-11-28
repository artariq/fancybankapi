var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var transactionSchema = new Schema({
  transaction_ID: Number,
  recipient: String,
  amount: Number,
  address1: String,
  address2: String,
  city: String
});
 
module.exports = mongoose.model('Transaction', transactionSchema);