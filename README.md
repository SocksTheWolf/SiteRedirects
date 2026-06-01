# SiteRedirects

A very, very simple project to handle redirects to other URLs using a Cloudflare KV table as a dictionary.

This method bypasses the limit of 10 URL redirect rules on CF. And is a bit easier to use than a regular `_redirects` file.

## Setup

### Automatically

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/socksthewolf/SiteRedirects)

**IMPORTANT**: Make sure to uncheck the option "Builds for non-production branches"

### Manually

1. Clone this repository or use as a template
2. Change the value of your KV id
3. Enter in a value for `FALLBACK_URL`
4. Enter in the domain you want to use for bindings.
5. Push changes to Cloudflare

## To Use

In your Cloudflare KV table, the keynames will be the pathnames to match with the values to be the destination.
**Keys must be in lowercase and feature no other characters other than the usual alphanumeric symbols**. Do not add spaces!

Example: If you added the key `yt` and made the destination `https://youtube.com` then going to `yourdomain.com/yt` will take you to Youtube.
