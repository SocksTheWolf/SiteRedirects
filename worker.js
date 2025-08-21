export default {
  async fetch(request, env, ctx) {
    const {pathname} = new URL(request.url);
    const urlPath = pathname.split("/", 2).pop().toLowerCase();
    var location = null;

    if (urlPath !== "") {
      // raw lookup in the KV db for the location to go to.
      // if this fails, location = null
      location = await env.REDIRECTS.get(urlPath);
    }
    // write the fallback url if location is not null
    location ??= env.FALLBACK_URL;

    return Response.redirect(location, 301);
  },
};