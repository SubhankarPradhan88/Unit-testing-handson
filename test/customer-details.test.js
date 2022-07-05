import { html, fixture, expect } from '@open-wc/testing';
import sinon, { stub } from 'sinon';
import '../src/Customer/Customer-details.js';
// import { assert } from 'chai';

const customerDetailObj = await fixture(html`<customer-details></customer-details>`);

describe('Customer Details Test Suit', () => {
  // Write test cases inside this block
  // refer customer-details.js files
  let server;
  beforeEach(function () {
    sinon.restore();
    server = sinon.fakeServer.create();
  });

  afterEach(function () {
    server.restore();
  });
 
  // setup(()=>{
  //   server = sinon.fakeServer.create();
  // })

  // teardown(()=>{
  //   server.restore();
  // })

  // Checks for component loads
  it('Component Loads', async () => {
    const customerDetailObj = await fixture(html`<customer-details></customer-details>`);
  });

  // Checks for accessibility
  it('Component accessibility check', () => {
    expect(customerDetailObj).to.be.accessible;
  });
  
  it('spy the _toEmidetails method', () => {
    const spy = sinon.spy(customerDetailObj, "_toEmidetails");
    customerDetailObj._toEmidetails();
    expect(spy.calledOnce).to.be.true;
  })

  it('spy the submitHandler method', () => {
    const spy = sinon.spy(customerDetailObj, "submitHandler");
    customerDetailObj.submitHandler();
    expect(spy.calledOnce).to.be.true;
  })

  // XHR test case
  it.skip("Mock and stub xhr call", () => {
    server.respondWith("POST", ("https://loanfeapi.herokuapp.com/submit-form"),
      [
        200, {
          "Content-Type": "application/json"
        },
        '{ "message": "success" }'
      ]);

      let callback = sinon.spy();
      customerDetailObj.submitHandler("/submit-form", callback);
      server.respond();

      sinon.assert.calledWith(callback, { message: 'success' });

      assert(server.requests.length > 0);
  });
});
