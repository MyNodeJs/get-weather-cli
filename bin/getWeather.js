#!/usr/bin/env node

var request = require('request');
var parseString = require('xml2js').parseString;
var argv = require('yargs').argv;
var iconv = require('iconv-lite');
var colors = require('colors');
var urlComponent = require('url-component');

var str = urlComponent.urlEncode(argv.city, 'gbk');

request('http://php.weather.sina.com.cn/xml.php?city=' + str + '&password=DJOYnieT8234jlsK&day=0', function(error, response, body) {
  if(!error && response.statusCode == 200) {
    parseString(body, function(err, result) {
      console.log((result.Profiles.Weather[0].temperature1[0] + '~' + result.Profiles.Weather[0].temperature2[0]).red);
      console.log((result.Profiles.Weather[0].status1[0] + '~' + result.Profiles.Weather[0].status2[0]).red);
    });
  }
});
