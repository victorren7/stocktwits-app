import { filter } from 'lodash';

const lambdaPath = 'https://api.stocktwits.com/api/2/streams/symbol'
const tweets = [];

export function buildBatchSearch(searchInput) {

  // parse stock symbols from user input
  const symbols = searchInput.split(',').map((item) => item.trim());
  // structure the requests
   symbols.forEach((item) => {
      tweets.push(
        fetch(`${lambdaPath}/${item}.json`).then((res) => res.json()),
      );
    });

  console.log('tweets',tweets)
  return tweets;
}


// symbols.forEach((item) => {
//   tweets.unshift(
//     fetch(`${lambdaPath}/${item}.json`).then(function(res) {
//       const interval = setInterval(function() {
//         console.log('search', item)
//         buildBatchSearch(item)
//       }, 30000)
//       clearInterval(interval, 50000)
//      return res.json()}),
//   );
// });

export function BatchRefresh(searchInput) {
  const interval = setInterval(() => {
    buildBatchSearch(searchInput)
  }, 10000)
  clearInterval(interval, 20000)
}

export const getList = function(data) {
  return filter(data, (item) => item.symbol)
};

export const getTotalTweets = function(data, event) {
  return getList(data).reduce((acc, o) => o.messages.length + acc, 0);
};

export const getTotalSymbols = function(data) {
  return getList(data).reduce((o, item) => ({ ...o, [item.symbol.id]: item }), {})
}
