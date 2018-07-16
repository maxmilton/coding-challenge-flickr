'use strict';

const { getUserName } = require('../src/helpers.js');

describe('Helper functions', () => {
  it('getUserName helper returns user name correctly', () => {
    expect.assertions(1);
    const userName = getUserName('nobody@flickr.com ("ImovieSh")');
    expect(userName).toEqual('ImovieSh');
  });
});
