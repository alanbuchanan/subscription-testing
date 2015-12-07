var expect = require('chai').expect;
var should = require('chai').should;
var assert = require('chai').assert;
var nock = require('nock');

nock.disableNetConnect();

describe('rewards service', function () {

    var rewardsClass = require('../lib/rewards');
    var rewards = new rewardsClass;
    
    var subscriptions = require('../lib/subscriptions');

    describe('common tests', function () {

        it('should only have 5 properties', function () {
            expect(JSON.stringify(subscriptions).split(',')).to.have.length(5);
        });

        it('should know what each subscription should yield', function () {
            expect(subscriptions.sports).to.equal('CHAMPIONS_LEAGUE_EXTRAS');
            expect(subscriptions.music).to.equal('N/A');
            expect(subscriptions.movies).to.equal('BAFTA_AWARDS_INVITATION');
            expect(subscriptions.news).to.equal('N/A');
            expect(subscriptions.games).to.equal('GAMES_PREORDER_POTENTIAL');
        });
    });

    describe('server tests', function () {
        it('should get a 200 response from the server', function (done) {

            nock('http://www.fictional-subscription-service.com')
            //nock('http://www.sky.com')
                .get('/rewards')
                .reply(200, 'OK', {
                    'Content-Type': 'application/json'
                });

            rewards.rewardsList(function (error, response) {
                expect(response).to.equal('OK');
                done();
            })
        });
    })
})