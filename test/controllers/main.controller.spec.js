"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
process.env.NODE_ENV = 'test';
const chai_1 = __importDefault(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
const node_test_1 = require("node:test");
const src_1 = __importDefault(require("../../src"));
var should = chai_1.default.should();
chai_1.default.use(chai_http_1.default);
(0, node_test_1.describe)('Main controller', () => {
    (0, node_test_1.describe)('/GET main', () => {
        (0, node_test_1.it)('should GET a message from /main', (done) => {
            chai_1.default.request(src_1.default)
                .get("/")
                .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('JSON');
                res.body.length.should.be.eql(0);
                done;
            });
        });
    });
});
