export default {
  async fetch(request, env, ctx) {
    const {pathname} = new URL(request.url);
    // Pop off the first "/" that appears in the pathname string and grab everything after that
    // lowercase it for consistency
    const urlPath = pathname.split("/", 2).pop().toLowerCase();
    var location = null; // set this to null because yes.

    // If we have a path given to us, we should look it up in the KV
    // to find where to go.
    if (urlPath !== "") {
      // if no key exists, then this will return null, making location == null
      location = await env.REDIRECTS.get(urlPath);
    }
    // write the fallback url if location is null
    location ??= env.FALLBACK_URL;

    // Send the visitor to the new location
    return Response.redirect(location, 301);
  },
};