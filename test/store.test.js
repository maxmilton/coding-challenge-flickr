'use strict';

// set up mocks
jest.mock('../src/jsonp.js');

const { GlobalStore, setUrlSearchQuery } = require('../src/store.js');

let store;

beforeEach(() => {
  // create fresh new store for each test
  store = new GlobalStore({
    photos: [],
  });
});

describe('Store fetchPhotos method', () => {
  it('sets photos state', () => {
    expect.assertions(2);
    store.fetchPhotos('akihabara');
    const { photos } = store.get();
    expect(photos).toHaveLength(5);
    expect(photos).toMatchSnapshot();
  });

  it('still runs without query', () => {
    expect.assertions(2);
    store.fetchPhotos();
    const { photos } = store.get();
    expect(photos).toHaveLength(5);
    expect(photos).toMatchSnapshot();
  });

  it('sets the URL search query', () => {
    expect.assertions(1);
    const spy = jest.spyOn(window.history, 'pushState');
    setUrlSearchQuery('akihabara');
    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockReset();
  });
});
