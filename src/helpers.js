import { filter } from 'lodash';

const lambdaPath = 'https://api.stocktwits.com/api/2/streams/symbol'

export function buildBatchSearch(searchInput) {
  const promises = [];

  // parse stock symbols from user input
  const symbols = searchInput.split(',').map((item) => item.trim());
  // structure the requests
  symbols.forEach((item) => {
    promises.push(
      fetch(`${lambdaPath}/${item}.json`).then((res) => res.json()),
    );
  });

  // setInterval(function(){
  //   buildBatchSearch(searchInput)
  // }, 10000)

  return promises;
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
