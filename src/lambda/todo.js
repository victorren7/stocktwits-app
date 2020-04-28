const axios = require('axios');

const api = 'https://api.stocktwits.com/api/2/streams/symbol'
const headers = {
  headers: {
    Accept: 'application/json'
  }
}

exports.handler = (event, context, callback) => {

  const { symbol } = event.queryStringParameters;
  const query = `${api}/${symbol}.json`;

  axios.get(query, headers)
    .then((res) => {
      const { messages, symbol } = res.data;
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({messages, symbol }),
      });
    })
    .catch((err) => {
      callback(err);
    });
};