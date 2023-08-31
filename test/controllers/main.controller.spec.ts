process.env.NODE_ENV = 'test';

import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { describe, it } from "node:test";
import app from "../../src";

var should = chai.should();

chai.use(chaiHttp);
chai.use(require('chai-json'));

describe('Main controller', () => {
    describe('/GET main', () => {
        it('should GET a message from /main', (done) => {
            chai.request(app)
                .get("/main")
                .end((err, res) => {
                    res.should.have.status(200);
                    expect(res.body).to.be.a('object');
                    expect(Object.keys(res.body).length).to.be.greaterThan(0);
                    done;
                });
        });
    });
});
