

const sut = require('./../auctioneer_lambda');
const Should = require('should');

describe("the auctioneer module", () => {

    describe("when called with API gate way get request", () => {

        describe("Sanity", ()=> {

            const event = require('./fixtures/get_bid_event.json');
            let res;
            before((cb) => {
                sut.handler(event, null, (...args) => {
                    res = args;
                    cb();
                })
            });

            it("Should return no error", () => Should(res[0]).be.Null())

        });

        describe("When called with no publisher and no referrer", () => {

            const ctx = { };
            const event = require('./fixtures/get_bid_event_no_pulsher_id_no_referrer.json');
            before((cb) => {
                sut.handler(event, null, (err,res) => {
                    ctx.err = err;
                    ctx.res = res;
                    cb();
                })
            });

            it("Should not fail", () => Should(ctx.err).be.Null())
            it("Should return status code 400", () => Should(ctx.res).have.property('statusCode',"400"))
            it("Should return body with error message", () => Should(ctx.res).have.property('body',"No publisher ID"))

        })

    })

})