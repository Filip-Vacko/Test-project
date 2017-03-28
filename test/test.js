const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;

describe('A post request test', function() {
    it("should pass when post request is successful", function (done) {
        chai.request('http://localhost:3000')
            .post('/')
            .send({
                "name": "John",
                "email": "john.doe@example.com",
                "id": "abcdefgh"
            })
            .end((err, res) => {
                if (err) {
                    expect.fail(err);

                    done();
                } else {
                    expect(res.statusCode).equals(200);
                    expect(res.body).to.be.an('Object'); //to be confirmed


                    done();
                }
            });
    });

});

describe('A get request test', function() {
    it("should pass when the get request is successful", function (done) {
        chai.request('http://localhost:3000')
            .get('/')
            .end((err, res) => {
                if (err) {
                    expect.fail(err);
                    done();
                } else {
                    expect(res.statusCode).equals(200);
                    expect(res.body).to.be.an('Object');
                    done();
                }
            });
    });
});



