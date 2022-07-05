import { html, fixture, expect } from '@open-wc/testing';
import sinon, { stub } from 'sinon';
import '../loan-application.js';

const loanApplicationObj = await fixture(html`<loan-application></loan-application>`);

describe('LoanApplication', () => {
  // Write test cases inside this block
  beforeEach(function () {
    sinon.restore();
  });

  // Checks for component loads
  it('Component Loads', async () => {
    const loanApplicationObj = await fixture(html`<loan-application></loan-application>`);
  });

  // Checks for accessibility
  it('Component accessibility check', () => {
    expect(loanApplicationObj).to.be.accessible;
  });

  // Check for __increment function trigger
  it('spy the __increment method', () => {
    const spy = sinon.spy(loanApplicationObj, "__increment");
    loanApplicationObj.__increment();
    expect(spy.calledOnce).to.be.true;
  })
});
