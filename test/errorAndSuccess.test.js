import { html, fixture, expect } from '@open-wc/testing';
import sinon, { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

const successObj = await fixture(html`<loan-success></loan-success>`);
const errorObj = await fixture(html`<loan-error></loan-error>`);

describe('Success screen ', () => {
  // Write test cases inside this block
  beforeEach(function () {
    sinon.restore();
  });

  // Checks for component loads
  it('Component Loads', async () => {
    const successObj = await fixture(html`<loan-success></loan-success>`);
  });

  // Checks for accessibility
  it('Component accessibility check', () => {
    expect(successObj).to.be.accessible;
  });

  it('spy the _toHome method', () => {
    const spy = sinon.spy(successObj, "_toHome");
    successObj._toHome();
    expect(spy.calledOnce).to.be.true;
  })
});

describe('error screen', () => {
  // Write test cases inside this block
  beforeEach(function () {
    sinon.restore();
  });

  // Checks for component loads
  it('Component Loads', async () => {
    const errorObj = await fixture(html`<loan-error></loan-error>`);
  });

  // Checks for accessibility
  it('Component accessibility check', () => {
    expect(errorObj).to.be.accessible;
  });

  it('spy the _toHome method', () => {
    const spy = sinon.spy(errorObj, "_toHome");
    errorObj._toHome();
    expect(spy.calledOnce).to.be.true;
  })
});
