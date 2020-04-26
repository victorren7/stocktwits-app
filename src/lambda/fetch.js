// exports.handler = (event, context, callback) => {
//   callback(null, {
//     statusCode: 200,
//     body: 'Hello, world!',
//   });
// };

const headers = {
  headers: {
    Accept: 'application/json'
  }
}

const axios = require('axios');
exports.handler = (event, context, callback) => {
  axios.get('https://api.stocktwits.com/api/2/streams/symbols/AAPL.json', headers)
    .then((res) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res.data),
      });
    })
    .catch((err) => {
      callback(err);
    });
};