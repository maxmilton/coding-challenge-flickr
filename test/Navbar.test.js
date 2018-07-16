'use strict';

// set up mocks
jest.mock('../src/jsonp.js');

const Navbar = require('../src/components/Navbar.html');

describe('Navbar component', () => {
  it('renders correctly', () => {
    expect.assertions(2);
    const target = document.createElement('div');
    function wrapper() {
      new Navbar({ target });
    }
    expect(target.innerHTML).toMatchSnapshot();
    expect(wrapper).not.toThrow();
  });

  it('performs a search when search input changes', () => {
    expect.assertions(1);
    const target = document.createElement('div');
    const component = new Navbar({ target });
    const input = target.querySelector('.search-input');
    input.value = 'akihabara';
    const event = new Event('change');
    input.dispatchEvent(event);
    expect(component.store.get().photos).toMatchSnapshot();
  });
});
