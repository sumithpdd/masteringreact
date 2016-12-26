var Immutable = require( 'immutable');
var parseOrders = require( './parse_orders');

const OrdersFetcher = {
  fetch() {
    return fetch('/orders.json')
      .then((resp) => resp.json())
      .then(parseOrders)
      .then((orders) => Immutable.fromJS(orders));
  }
};

module.exports = OrdersFetcher;
