export default {
  async fetch(request, env, ctx) {
    // Pull out the pathname of the request url. By default, pathname must always have at least one "/" character
    const {pathname} = new URL(request.url);
    // Grab the first two results from splitting the string by / characters
    // Grab the last element in the array. This will either be a key or just a /
    // Trim any whitespace at all
    // Lowercase the result for consistency
    const urlPath = pathname.split("/", 2).pop().trim().toLowerCase();
    var location = null; // set this to null to handle fallbacks properly.

    // If we have a path given to us, we should look it up in the KV
    // to find where to go.
    if (urlPath !== "") {
      // if no key exists, then this lookup will return null, making location === null
      location = await env.REDIRECTS.get(urlPath);
    }
    // write the fallback url if location is null
    location ??= env.FALLBACK_URL;

    // If we still have invalid data, then display an error
    if (location === null || location === "" || location.isEmpty()) {
      return new Response("Error: No fallback URL provided", {status: 404, headers: {"content-type": "text/plain"}});
    }

    // Otherwise redirect the user to the new location
    return Response.redirect(location, 301);
  }
};