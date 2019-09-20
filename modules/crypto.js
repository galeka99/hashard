const crypto = require('crypto-js');

exports.v1 = async(string, secret) => {
  return await crypto.HmacMD5(string, secret).toString();
}

exports.v2 = async(string, secret) => {
  return await crypto.HmacSHA1(string, secret).toString();
}

exports.v3 = async(string, secret) => {
  return await crypto.HmacSHA256(string, secret).toString();
}

exports.v4 = async(string, secret) => {
  return await crypto.HmacSHA512(string, secret).toString();
}
