// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["drive.google.com", "images.unsplash.com", "www.spoon.com"],
  },
};

module.exports = withSentryConfig(
  module.exports,
  { silent: true },
  { hideSourcemaps: true },
);
