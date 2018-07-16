'use strict';

const PhotoItem = require('../src/components/PhotoItem.html');

const data = {
  link: '11',
  media: {
    m: '22',
  },
  title: '33',
  author: '44',
  tags: '55',
};

describe('PhotoItem component', () => {
  it('throws error when missing prop data', () => {
    expect.assertions(1);
    const target = document.createElement('div');
    function wrapper() {
      new PhotoItem({ target });
    }
    expect(wrapper).toThrow();
  });

  it('renders correctly', () => {
    expect.assertions(2);
    const target = document.createElement('div');
    function wrapper() {
      new PhotoItem({ target, data });
    }
    expect(target.innerHTML).toMatchSnapshot();
    expect(wrapper).not.toThrow();
  });
});
