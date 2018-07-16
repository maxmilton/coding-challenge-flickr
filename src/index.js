/**
 * Coding Challenge Flickr
 * @overview My submission for a developer coding challenge.
 * @author Max Milton <max@wearegenki.com>
 *
 * Copyright 2018 Max Milton
 * Licensed under the MIT License
 */

import store from './store.js';
import App from './App.html';

/* eslint-disable-next-line no-new */
new App({
  target: document.body,
  // store,
});

// initialise search if there's a "q" param in the URL
const params = new URLSearchParams(window.location.search.substring(1));
const query = params.get('q');

if (query) {
  store.fetchPhotos(query);
}
