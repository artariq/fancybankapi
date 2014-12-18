/* Entry point to the app */

var app = require('./app'); //Require our app
 
app.set('port', process.env.PORT || 8000);
 
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

module.exports.app = app;
