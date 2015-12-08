var expect = require('chai').expect;
var should = require('chai').should;
var assert = require('chai').assert;
var nock = require('nock');

describe.only('using express for rest api calls', function () {
    it('should connect with a 200 response', function (done) {
        expect(1).to.equal(1);
        done();
    });
});
