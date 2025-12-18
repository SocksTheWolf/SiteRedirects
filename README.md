# SiteRedirects

A very, very simple project to handle redirects to other URLS via CF KV entries.

This is to alleviate the 10 URL redirect rules limit on CF.

## Setup

### Automatically

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/socksthewolf/SiteRedirects)

### Manually

Clone this repository/use as template, change the value of your KV id as well as the variable value of `FALLBACK_URL`.
Push your changes to CF.

## To Use

Your KV keys are the pathnames to match. These will be checked against in lowercase format.
The values will be the destination.
