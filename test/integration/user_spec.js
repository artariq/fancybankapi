var path = require('path');
var request = require('supertest');
var app = require(path.resolve(process.cwd(),'server/index'));


// TODO go to /users get a response of 200 and all users in JSON
// also if err then send err


describe('GET /users', function(){
  it('respond with json', function(done){
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
})