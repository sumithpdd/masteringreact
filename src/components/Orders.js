var React = require('react');
var ReactDOM = require('react-dom');
var PageHeader = require('./page_header');
var OrdersTable = require('./orders/orders_table');
var ORDERS_DATA =require('../data/orders')
var { toTitleCase } =require( '../lib/formatters');

const STATUSES = ['all', 'open', 'shipped'];

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedStatus: 'all' };
  }

  render() {
    const { selectedStatus } = this.state;

    const statuses = STATUSES.map((status, i) => {
      const className = status === selectedStatus ? 'selected status' : 'status';
      return (
        <a key={i} className={className} onClick={this.handleStatusClick.bind(this, status)}>
          {toTitleCase(status)}
        </a>
      );
    });

    let orders = ORDERS_DATA;
    if (selectedStatus !== 'all') {
      orders = ORDERS_DATA.filter((order) => {
        return order.orderStatus === selectedStatus;
      });
    }

    return (
      <div className='orders'>
        <PageHeader>
          <h1>Orders</h1>
          <nav className='status-nav'>{statuses}</nav>
        </PageHeader>
        <OrdersTable orders={orders} />
      </div>
    );
  }

  handleStatusClick(status) {
    this.setState({ selectedStatus: status });
  }
}
module.exports = Orders;