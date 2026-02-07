/**
 * ESLint Flat Config (ESLint v9+).
 * Next.js 16's eslint-config-next exports flat-config arrays.
 */

const nextCoreWebVitals = require("eslint-config-next/core-web-vitals");

module.exports = [...nextCoreWebVitals];

