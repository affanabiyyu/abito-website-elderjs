module.exports = {
  // the all function returns an array of all of the 'request' objects of a route.
  // In this route, we're only returning one.
  // if all() is ommited, an array of [{slug: 'route-name'}] will be set.
  all: async () => [{ slug: 'admin' }],
  // the permalink definition takes a 'request' object and returns a relative permalink.
  // In this case "/simple/"
  permalink: '/:slug/', // this is the same as ({ request }) => `/${request.slug}/`;
  data: async ({ request }) => {
    // The data function populates an object that will be in available in our Svelte template under the 'data' key.
    return { request };
  },
  // template: 'Simple.svelte' // this is auto-detected.
   layout: 'NoLayout.svelte', // this is auto-detected.
};
