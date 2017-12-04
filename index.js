'strict';
const got = require('got');

module.exports = (pkgName) => {
  const URL = `https://unpkg.com/${pkgName}/package.json`;
  return got(URL, {json: true})
  .then(res => res.body)
  .catch(err => {
    const statusCode = err.statusCode;
    switch(statusCode) {
      case 404:
        throw new Error(`Package \`${pkgName}\` doesn't exist`)
      default:
        throw err; 
    }
  });
};