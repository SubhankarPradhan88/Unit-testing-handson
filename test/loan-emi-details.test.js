import { html, fixture, expect } from '@open-wc/testing';
import sinon, { stub } from 'sinon';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

const loanEmiDetailsObj = await fixture(html`<loanemi-details></loanemi-details>`);

describe('Loan EMI details', () => {
  // Write test cases inside this block
  beforeEach(function () {
    sinon.restore();
  });

  // Checks for component loads
  it('Component Loads', async () => {
    const loanEmiDetailsObj = await fixture(html`<loanemi-details></loanemi-details>`);
  });

  // Checks for accessibility
  it('Component accessibility check', () => {
    expect(loanEmiDetailsObj).to.be.accessible;
  });

  // Check for properties function trigger
  it('spy the properties method', () => {
    const spy = sinon.spy(loanEmiDetailsObj, "properties");
    loanEmiDetailsObj.properties();
    expect(spy.calledOnce).to.be.true;
  })

  // Check for _toCustomer function trigger
  it('spy the _toCustomer method', () => {
    const spy = sinon.spy(loanEmiDetailsObj, "_toCustomer");
    loanEmiDetailsObj._toCustomer();
    expect(spy.calledOnce).to.be.true;
  })
});
