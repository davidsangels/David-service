const request = require('supertest');

const server = require('../server/index.js');

describe('get /data', function() {
  it('responds with data', function(done) {
    request(server)
      .get('/data')
      .expect('Content-Type', /json/)
      .expect((res)=>{
        res.body.length > 2
      })
      .expect(200, done);
  });
});