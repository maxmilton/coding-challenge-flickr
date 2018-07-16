/* eslint-disable import/prefer-default-export */

// XXX: Just get the user name not the useless email before it because a
// typical `author` prop looks like: "nobody@flickr.com ("ImovieSh")".
export function getUserName(user) {
  return user && user.substring(
    user.indexOf('"') + 1,
    user.lastIndexOf('"')
  );
}
