'use strict';
const multiBracketValidation = require('../multi-bracket-validation.js');

describe('Proof of life test', () => {
  it('Proof of life', () => {
    expect(true).toBeTruthy();
  });
});

describe('multiBracketValidation function should work for passing cases', () => {
  it('Should pass for balanced brackets', () => {
    let input = '{}(){}';
    let actual = multiBracketValidation(input);
    expect(actual).toEqual(true);
  });

  it('Should pass for balanced brackets', () => {
    let input = '()[[Extra Characters]]';
    let actual = multiBracketValidation(input);
    expect(actual).toEqual(true);
  });

  it('Should pass for balanced brackets', () => {
    let input = '{}{Code}[Fellows](())';
    let actual = multiBracketValidation(input);
    expect(actual).toEqual(true);
  });
});

describe('multiBracketValidation function should work for failing cases', () => {
  it('Should return false for unbalanced brackets', () => {
    let input = '[({}]';
    let actual = multiBracketValidation(input);
    expect(actual).toEqual(false);
  });

  it('Should return false for unbalanced brackets', () => {
    let input = '(](';
    let actual = multiBracketValidation(input);
    expect(actual).toEqual(false);
  });

  it('Should return false for unbalanced brackets', () => {
    let input = '{(})';
    let actual = multiBracketValidation(input);
    expect(actual).toEqual(false);
  });
});
