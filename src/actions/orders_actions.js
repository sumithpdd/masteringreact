var alt = require('../alt');
var OrdersFetcher = require('../utils/orders_fetcher');

class OrdersActions {
  updateOrders(orders) {
    this.dispatch(orders);
  }

  updateSelectedStatus(status) {
    this.dispatch(status);
  }

  updateAmountFilter(amount) {
    this.dispatch(amount);
  }

  fetchOrders() {
    OrdersFetcher.fetch()
      .then(this.actions.updateOrders.bind(this));
  }
}

module.exports = alt.createActions(OrdersActions);
