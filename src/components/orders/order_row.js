var React = require('react');
var  toMoney, toDateTime, toTitleCase = require('../../lib/formatters');

class OrderRow extends React.Component {
  render() {
    const { order } = this.props;
    const products = order.products.map((p) => p.name).join(', ');

    return (
      <tr className='order'>
        <td>{order.get('reference')}</td>
        <td>{order.get('customer')}</td>
        <td className='sorted-by'>{toDateTime(order.get('orderedAt'))}</td>
        <td>{products}</td>
        <td className='amount'>{toMoney(order.get('amount'))}</td>
        <td className='status'>{toTitleCase(order.get('paymentStatus'))}</td>
        <td className='status'>{toTitleCase(order.get('orderStatus'))}</td>
      </tr>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.order !== this.props.order;
  }
}
module.exports = OrderRow;
