var Immutable = require( 'immutable');

const SalesStatsFetcher = {
  fetch() {
    return fetch('/sales_stats.json')
      .then((resp) => resp.json())
      .then((json) => json.map(parseFloat))
      .then((salesStats) => Immutable.fromJS(salesStats));
  }
};

module.exports = SalesStatsFetcher;
