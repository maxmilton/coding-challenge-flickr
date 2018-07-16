import { Store } from 'svelte/store.js';
import jsonp from './jsonp.js';

/**
 * Set search query param in the URL.
 * @param {string} query The search query.
 */
export function setUrlSearchQuery(query) {
  const docUrl = new URL(document.URL);
  docUrl.searchParams.set('q', query);
  history.pushState(null, null, docUrl); // eslint-disable-line no-restricted-globals
}

export class GlobalStore extends Store {
  /**
   * Search Flickr for photos matching a query and update `photos` with the result.
   * @param {string} [query] The photo tag/s to search for. When undefined it will
   * fetch the latest uploaded photos.
   * @param {string} [endpoint] the API endpoint. Can be changed for testing.
   */
  fetchPhotos(query) {
    const endpoint = 'https://api.flickr.com/services/feeds/photos_public.gne';
    const tags = query ? `&tags=${query}` : '';
    const apiUrl = `${endpoint}?format=json${tags}`;

    jsonp(apiUrl, { name: 'jsonFlickrFeed' }, (err, data) => {
      /* istanbul ignore if */
      if (err) throw err;

      this.set({ photos: data.items });
      setUrlSearchQuery(query);
    });
  }
}

const store = new GlobalStore({
  photos: [],
});

export default store;
