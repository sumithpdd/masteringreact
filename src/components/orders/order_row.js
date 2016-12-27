var React = require('react');
var  toMoney = require('../../lib/formatters');
var  toDateTime = require('../../lib/formatters');
var toTitleCase = require('../../lib/formatters');

class OrderRow extends React.Component {
  render() {
    const { order } = this.props;
    const products = order.products.map((p) => p.name).join(', ');

    return (
      <tr className='order'>
        <td>{order.reference}</td>
        <td>{order.customer}</td>
         <td>{products}</td>
        <td className='amount'>{order.amount}</td>
        <td className='status'>{order.paymentStatus}</td>
        <td className='status'>{order.orderStatus}</td>
      </tr>
    );
  }
}
module.exports = OrderRow;
