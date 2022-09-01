var dt = new Date();

// ensure date comes as 01, 09 etc
var DD = ("0" + dt.getDate()).slice(-2);

// getMonth returns month from 0
var MM = ("0" + (dt.getMonth() + 1)).slice(-2);

var YYYY = dt.getFullYear();

var hh = ("0" + dt.getHours()).slice(-2);

var mm = ("0" + dt.getMinutes()).slice(-2);

var ss = ("0" + dt.getSeconds()).slice(-2);

var date_string = YYYY + "-" + MM + "-" + DD + " " + hh + ":" + mm + ":" + ss;

// will output something like "2019-02-14 11:04:42"
console.log(date_string);