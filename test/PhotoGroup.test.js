'use strict';

// set up mocks
jest.mock('../src/jsonp.js');

const PhotoGroup = require('../src/components/PhotoGroup.html');

describe('PhotoGroup component', () => {
  it('renders correctly', () => {
    expect.assertions(2);
    const target = document.createElement('div');
    function wrapper() {
      new PhotoGroup({ target });
    }
    expect(target.innerHTML).toMatchSnapshot();
    expect(wrapper).not.toThrow();
  });

  it('performs a search on suggestion button click', () => {
    expect.assertions(1);
    const target = document.createElement('div');
    new PhotoGroup({ target });
    const button = target.querySelector('.suggestions > .button');
    button.click();
    expect(target.innerHTML).toMatchSnapshot();
  });
});
