const uuid = require('./modules/uuid');
const crypto = require('./modules/crypto');
const md5_ori = require('md5');

exports.random = async() => {
  return await uuid();
}

exports.encrypt = {
  v1: async(string, secret) => {
    return await crypto.v1(string.toString(), secret);
  },
  v2: async(string, secret) => {
    return await crypto.v2(string.toString(), secret);
  },
  v3: async(string, secret) => {
    return await crypto.v3(string.toString(), secret);
  },
  v4: async(string, secret) => {
    return await crypto.v4(string.toString(), secret);
  },
}

exports.md5 = async(string) => {
  return await md5_ori(string).toString();
}