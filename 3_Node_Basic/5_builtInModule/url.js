const url = require("url");

const { URL } = url;
const myURL = new URL(
  "http://www.github.co.kr/book/bookList.aspx?sercate1=001001000#anchor"
);
console.log("new URL():", myURL);
console.log("url.format():", url.format(myURL));
console.log("-----------------------------------");
const parseUrl = url.parse(
  "http://www.github.co.kr/book/bookList.aspx?sercate=001001000#anchor"
);
console.log("url.parse():", parseUrl);
console.log("url.format():", url.format(parseUrl));
