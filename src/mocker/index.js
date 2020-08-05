const login = require('./login');
const content = require('./content');
const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';
const proxy = {
  ...login,
  ...content
}
module.exports = (noProxy ? {} : delay(proxy, 1000));