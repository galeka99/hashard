const { v1, v4 } = require('uuid');
const md5 = require('md5');
const moment = require('moment');

module.exports = async() => {
  const str_1 = md5(await v1() + moment());
  const str_2 = md5(await v4() + moment());
  const final = str_1 + str_2;
  return final;
}