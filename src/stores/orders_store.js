var alt = require('../alt');
  var Immutable = require( 'immutable');
  var OrdersActions = require( '../actions/orders_actions');
  var parseOrders = require( '../utils/parse_orders');

class OrdersStore {
  constructor() {
    this.state = {
      orders: Immutable.List(),
      selectedStatus: 'all',
      amountFilter: null
    }

    this.bindListeners({
      handleUpdateOrders: OrdersActions.UPDATE_ORDERS,
      handleUpdateSelectedStatus: OrdersActions.UPDATE_SELECTED_STATUS,
      handleUpdateAmountFilter: OrdersActions.UPDATE_AMOUNT_FILTER,
    });
  }

  handleUpdateOrders(orders) {
    this.setState({ orders: orders });
  }

  handleUpdateAmountFilter(amount) {
    this.setState({ amountFilter: amount });
  }

  handleUpdateSelectedStatus(status) {
    this.setState({ selectedStatus: status });
  }
}

OrdersStore.config = {
  onDeserialize: function (data) {
    const nextState = Object.assign(
      {},
      data,
      {
        orders: Immutable.fromJS(parseOrders(data.orders))
      }
    );

    return nextState;
  }
};

module.exports = alt.createStore(OrdersStore, 'OrdersStore');
