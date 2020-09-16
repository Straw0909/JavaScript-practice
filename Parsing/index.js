const fs = require('fs');

function mostFrequentWords(filename, n) {
  let text = ((fs.readFileSync(filename, 'utf8')).toLowerCase().replace(/[^a-z]+/gmi, ' ')).split(' ');

  let articles = ['a', 'an', 'and', 'the', 'of', 'in', 's', 'on', 'by', 'for', 'to', 'with', 'ref', 'as', 'p', 'pp', 'or', 'that', 'from', 'cite', 'but', 'at', 'this', 'these', 'into', 'so', 'such', 'not', 'url', 'is', 'its', 'was', 'his'];

  text = text.filter((word) => !articles.includes(word));

  let wordObj = {};
  for (let word of text) {
    if (wordObj[word] === undefined) {
      wordObj[word] = 1;
    }
    else {
      wordObj[word] += 1;
    }
  }

  let countedWords = (Object.entries(wordObj)).sort((a, b) => b[1] - a[1]);
  return countedWords.slice(0, n);
}
// console.log(mostFrequentWords('./osiris-myth.txt', 10));


