var React = require('react');
var OrderRow  = require('./order_row');

class OrdersTable extends React.Component {
  render() {
    const rows = this.props.orders.map((order, i) => {
      return <OrderRow order={order} key={i} />;
    });

    return (
      <table className='orders-table'>
        <thead>
          <tr>
            <th>Order #</th>
            <th>Customer</th>
            <th className='sorted-by'>Ordered at</th>
            <th>Product(s)</th>
            <th className='amount'>Amount</th>
            <th className='status'>Payment status</th>
            <th className='status'>Order status</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

module.exports = OrdersTable;
