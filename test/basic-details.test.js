import { html, fixture, expect } from '@open-wc/testing';
import sinon, { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

const basicDetailObj = await fixture(html`<basic-details></basic-details>`);

describe('Basic details Test Suit', () => {
  // Write test cases inside this block
  // refer basic-details.js files
  let server;
  beforeEach(function () {
    sinon.restore();
    server = sinon.fakeServer.create();
  });

  afterEach(function () {
    server.restore();
  });
 
  // Checks for component loads
  it('Component Loads', async () => {
    const basicDetailObj = await fixture(html`<basic-details></basic-details>`);
  });

  // Checks for accessibility
  it('Component accessibility check', () => {
    expect(basicDetailObj).to.be.accessible;
  });
  
  it('spy the _toDashboard method', () => {
    const spy = sinon.spy(basicDetailObj, "_toDashboard");
    basicDetailObj._toDashboard();
    expect(spy.calledOnce).to.be.true;
  })

  it('spy the _numToWord method', () => {
    const spy = sinon.spy(basicDetailObj, "_numToWord");
    basicDetailObj._numToWord();
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledTwice).to.be.false;
  })

  it('spy the _captureDetails method', () => {
    const spy = sinon.spy(basicDetailObj, "_captureDetails");
    basicDetailObj._captureDetails();
    expect(spy.calledOnce).to.be.true;
  })

  // XHR test case
  it("Mock and stub xhr call", () => {
    server.respondWith("POST", ("https://loanfeapi.herokuapp.com/calculate-emi"),
      [
        200, {
          "Content-Type": "application/json"
        },
        '{ "id": 23561}'
      ]);

      let callback = sinon.spy();
      basicDetailObj._captureDetails("/calculate-emi", callback);
      server.respond();

      sinon.assert.calledWith(callback, { id: 23561 });

      assert(server.requests.length > 0);
  });
});
