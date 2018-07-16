'use strict';

// set up mocks
jest.mock('../src/jsonp.js');

const App = require('../src/App.html');
// const store = require('../src/store.js');

// XXX: Using a shallow clone style of mounting the component would be much
// better but there's nothing out of the box for Svelte. If given more time I
// would create my own mount method with stubs for child components.

describe('App root component', () => {
  it('renders correctly', () => {
    expect.assertions(2);
    const target = document.createElement('div');
    function wrapper() {
      new App({ target });
    }
    expect(target.innerHTML).toMatchSnapshot();
    expect(wrapper).not.toThrow();
  });
});
