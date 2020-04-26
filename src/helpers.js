const lambdaPath = 'https://api.stocktwits.com/api/2/streams/symbols.json?access_token=5rJb331lk1mjGQMLn+VDjnNaEi1cfBxu+m4ONUeAK5VIdnCrxMrQOhBF9xvQlGIiZWAjjk4ba8RymQDV8eLIHQ=='

export function buildBatchRequest() {
  const promises = [];

  // parse stock symbols from user input
  const symbols = ['AAPL', 'TSLA'];
  // structure the requests
  symbols.forEach((item) => {
    promises.push(
      fetch(`${lambdaPath}?symbol=${item}`).then((res) => res.json()),
    );
  });

  return promises;
}