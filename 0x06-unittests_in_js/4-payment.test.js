const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('called stubbed version of calculateNumber', function () {
    const spy = sinon.spy(console, 'log');
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnce).to.be.true;
    expect(spy.calledOnceWith('The total is: 10')).to.be.true;
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledOnceWith('SUM', 100, 20)).to.be.true;

    spy.restore();
    stub.restore();
  });
});
