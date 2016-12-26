/* @flow */
var numeral = require( 'numeral');
var moment = require( 'moment');
const Moment = moment().constructor;

const toMoney = function (num: number) : string {
  return numeral(num).format('$0,0.00');
};

const toDateTime = function (mom: Moment) : string {
  return mom.format('MMM D, h:mma');
};

const toTitleCase = function (str: string) : string {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

module.exports = { toMoney, toDateTime, toTitleCase };
