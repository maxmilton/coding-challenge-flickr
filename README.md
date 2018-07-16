<!-- markdownlint-disable first-line-h1 no-inline-html -->

[![Build status](https://travis-ci.com/MaxMilton/coding-challenge-flickr.svg?branch=master)](https://travis-ci.com/MaxMilton/coding-challenge-flickr)
[![Coverage status](https://img.shields.io/codecov/c/github/MaxMilton/coding-challenge-flickr.svg)](https://codecov.io/gh/MaxMilton/coding-challenge-flickr)
[![Licence](https://img.shields.io/github/license/MaxMilton/coding-challenge-flickr.svg)](https://github.com/MaxMilton/coding-challenge-flickr/blob/master/LICENCE)

# Coding Challenge Flickr

My submission for a developer coding challenge.

You can see a working demo at <https://MaxMilton.github.io/coding-challenge-flickr/>.

## Overview

_NOTE: Most of this project was hand coded from scratch (other than eternal packages, obviously)._

### Steps taken for build the app

As per the Original challenge outline, the steps I took to build the app were:

1. Read the instructions multiple times to make sure I **understand the requirements** and what is expected of me.
1. Head over to the flickr.com website to read the API documentation.
1. Use `curl` to send some API requests to **understand their data model**.
1. Write down some quick **ideas about my approach** and how to represent the app — information architecture, components, how to display the data, etc.
1. Decide whether to use a CSS and JavaScript framework or not...  
    1. A CSS framework is over the top in this case and it's better to show my ability to style from scratch too. **No, I will not use CSS framework** and no CSS preprocessor either to keep things simple.
    1. A JavaScript framework does have benefits over plain JS when making when building apps because of the modular component based architecture all modern frameworks provide. Native web components are nice but they're still a bit slow for development when all I need now is a quick prototype. **Yes, I will use a JS framework**.
    1. There are many popular JS frameworks out there but a quick prototype it comes down to Vue, React, and Svelte. I'm perfectly comfortable with any of these. React is what most of the other developers would use so I'll pick something else to differentiate myself. Vue is amazing but it can be frustrating when setting up from scratch because doing unit testing well can be tricky to configure. That leaves us with **Svelte** — which also happens to be my personal favourite for simple projects. Svelte is simple but has all the basics for full-featured apps while leaving you lots of room for implementation flexibility. Testing with Svelte is easy for the most part too, so it's a great match for prototyping.
1. Choose a build system...
    1. NPM scripts plus either Webpack or Rollup are great for quick apps. Other options like Parcel are nice but tend to be too opinionated requiring you to work to match their way of doing things. A manually build Makefile or bash script are a great option in some scenarios but not now since I just want to quickly make the app.
    1. Since I'm using Svelte for the JavaScript framework, I'll use **Rollup** since that way the output bundle size will be as small as possible.
1. Decide if using a **global state management** strategy is a good idea — which it is because it simplifies inter-component communication without adding excessive complexity (in Svelte's case anyway).
1. Create the directory structure.
1. Create the base dev tool configs.
1. Create initial app files — `index.html`, `index.js`, and `App.html`.
1. Wire up the build system to compile the app.
1. Create the other components based on my research and ideas earlier.
1. Write base unit tests for each component.
1. Do some quick research to decide if I should write my own JSONP parser... but decided not to since there's already good packages available and it's better to use something battle tested for such a critical part of the app. Will **use `fetch-jsonp`**.
1. **Implement data fetching and a search method**.
1. Try various approaches at showing images in a "masonry" grid style view (like Instagram where images of different height are fit together in an optimal way).
    1. After several sub-optimal attempts (using CSS grid, flexbox, etc.), I chose to go with **a simple CSS column based layout**. I wouldn't necessarily use this approach in a real production app but for this project it suits the purpose very well.
1. Now that all the functionality is working, **double check the instructions** again to make sure I haven't missed anything. All good!
1. Check the page is usable on various screen sizes and tweak the CSS.
    1. After the quick usability test I discovered the photo info (which I was only showing on hover) did not work well for mobile users. I changed how it works to always show the photo info.
1. Spend a few minutes to **make the UI look better**.
1. Add bonus functionality:
    1. **Include the search query in the URL** and check the URL + do a search once the app is initialised. This allows users to bookmark the page.
1. Minor refactor of helper function in PhotoItem component, put it in an eternal file for better "separation of concerns" and easier testing.
1. Write remaining tests for 100% code coverage.
1. While writing tests I discovered the JSONP package I choose before was very difficult to unit test with. After some research and experimentation I decided to rewrite the fetch logic using a new library `jsonp`. The library had some issues preventing easy use so in the end I included a modified version of the script directly in this project. In a real app I would create a new package and publish it to NPM.
1. Create a new Github repo and sync my local code.
1. Decide if this needs server side rendering (SSR) — no, the DOM is simple and there's no requirement for SEO. Simple SSR is not difficult to implement but for this prototype I'll opt for more readable build tooling code. Will leave the app as is.

**Additional considerations:**

- The instructions specifically state "link thumbnail to hi-res image" but I'm not entirely certain what "hi-res image" means in this case. Direct hot-linking is against the Flickr terms of service so I assume this means linking to the Flickr page using the link returned via the Flickr API.
- JSONP is a bad idea. A real production app should never execute code from untrusted sources. JSONP is a legacy technique from an era when [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) did not exist or was not yet usable. Plain JSON with a restrictive CORS setup is a better option.
- Many things are done in a way which is purposely simple for code clarity. In a real app there many performance optimisations or tweaks for browser compatibility.
- Most unit tests are only quick snapshots. While this is nice for coverage in a real app it's worth taking the time to write more detailed tests.
- This app uses CSS variables (custom properties) but in a real app they would probably be transpiled into the final values for cross-browser compatibility.
- I have a collection of my own pre-made components that I would normally use (for Svelte or Vue projects) but in the case of this app I've chosen to create everything from scratch.

### Directory structure

The other than the `src` directory there are:

| Path | Description |
| --- | --- |
| `/docs` | A copy of the compiled files from `/dist`. Required for Github pages to server the app demo. |
| `/static` | Contains static files which are copied into `/dist` at build time. |
| `/src/__mock__` | Manual mocks for unit tests. |
| `/test` | All unit tests. |
| `/test/coverage` | Automatically generated during tests when collecting test code coverage. |

## Instructions

**Install:**

```sh
yarn install
```

**Linting, tests, and code coverage:**

```sh
yarn run test
```

**Production build:**

```sh
yarn run build
```

**Development build:**

```sh
yarn run dev
```

## Original challenge outline

### Sample App

Build a simple web page that allows a user to search Flickr and see matching pics. You can use pure JavaScript or any framework of your choice (eg: React, Angular).

Show the results in a format and manner that you think provides the best user experience.

- the image
- the author
- the tags
- link thumbnail to hi-res image

Use the Flickr public JSONP feed found here - <https://www.flickr.com/services/feeds/docs/photos_public/>

Flickr Services

www.flickr.com

URL <https://api.flickr.com/services/feeds/photos_public.gne> Query string parameters id (Optional) A single user ID. This specifies a user to fetch for. ids (Optional) A comma delimited list of user IDs.

Please provide a brief summary of the steps you took to build your app, then send us your code once done, or load it up into CodePen.

## Licence

This is MIT licensed, open source code. See [LICENCE](https://github.com/MaxMilton/coding-challenge-flickr/blob/master/LICENCE).

-----

© 2018 [Max Milton](https://maxmilton.com)
