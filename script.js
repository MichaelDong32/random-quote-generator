var thoughts = [
{"quote": "fhjgfhkhjgkjhkj",
"from": "ghfghjfghjf"},
{"quote": "fhjgfhkhjgkjhkj",
"from": "ghfghjfghjf"},
{"quote": "fhjgfhkhjgkjhkj",
"from": "ghfghjfghjf"},
{"quote": "fhjgfhkhjgkjhkj",
"from": "ghfghjfghjf"}

];

// var quoteNum = Math.floor(Math.random()*(thoughts.length));
var num = Math.random();
console.log(num);
totalQuotes = thoughts.length;
console.log(totalQuotes);
quoteNum = Math.floor(num * totalQuotes);
console.log(quoteNum);

console.log(thoughts[quoteNum].quote)


$(".quote").append('thoughts[quoteNum].quote');
//document.getElementById('quote').innerHTML = thoughts;
