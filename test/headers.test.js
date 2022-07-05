import { html, fixture, expect } from '@open-wc/testing';
import sinon, { stub } from 'sinon';
import '../src/header/Header.js';

const headerObj = await fixture(html`<loan-header></loan-header>`);

describe('loan-header', () => {
  // Write test cases inside this block
  beforeEach(function () {
    sinon.restore();
  });

  // Checks for component loads
  it('Component Loads', async () => {
    const headerObj = await fixture(html`<loan-header></loan-header>`);
  });

  // Checks for accessibility
  it('Component accessibility check', () => {
    expect(headerObj).to.be.accessible;
  });

  // Check for localeChanged function trigger
  it('spy the localeChanged method', () => {
    const spy = sinon.spy(headerObj, "localeChanged");
    const localObj = {
        target: {
          id: 'en-GB'
        }
    }
    headerObj.localeChanged(localObj);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith(localObj)).to.be.true;
  })
});
