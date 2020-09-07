'use strict';

var expect = require('chai').expect;
var sum = require('../src/sum');
 
describe('# SUM', () => {
  
  it('Should SUM module to be a function', () => {
    expect(sum).to.be.a('function');
  });
  
  it('Should SUM return 10 when I pass 1 and 10', () => {
    expect(sum(1,9)).to.be.equal(10);
  });

  it('Should SUM return 5 when I pass 2 and 3', () => {
    expect(sum(2,3)).to.be.equal(5);
  });

  it('Should SUM return an error if it receive just one parameter', () => {
    expect(sum(1)).to.be.an('error');
  });

  it('Should Sum an error if the paramenter has not a number', () => {
    expect(sum('a','b')).to.be.an('error');
  });

  it('Assert', () => {
    var assert = require('assert');
    assert.equal(sum(20,30), 50, 'Message');
  });

});