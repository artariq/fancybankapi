var path = require('path'),
    request = require('supertest'),
    app  = require(path.resolve(process.cwd(),'server/app.js'));


//TODO go to /users get a response of 200 and all users in 
//json also if err send err

describe('GET /users', function(){
  it('responds with json', function(done){
    request(app)
    .get('/')
    .expect('Accept', 'application/json')
    .expect(200);
    done();
  });
});

describe('status code 200', function(){
  it('should return a 200 response', function(done){
    request(app)
    .get('/')
    .expect(200, done);
  });
});
