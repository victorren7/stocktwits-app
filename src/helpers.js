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
  return tweets;
};

export const getList = function(data) {
  return filter(data, (item) => item.symbol)
};

export const getTotalTweets = function(data, event) {
  return getList(data).reduce((acc, t) => t.messages.length + acc, 0);
};

export const getTotalSymbols = function(data) {
  return getList(data).reduce((t, item) => ({ ...t, [item.symbol.id]: item }), {})
}
