import ArrowIcon from './ArrowIcon';
import { getDiscount, getVat, getTotal } from '../../helpers/helper';
import './Cart.css';

const Cart = (props) => {
  const { cartContracts } = props;
  const subtotal = cartContracts.reduce((a, contract) => a + contract.price * contract.count, 0);
  let discount = 0;

  const cart = cartContracts.map((contract) => {
    const { code, count, price, name } = contract;
    const contractTotal = (price * count);

    if ((code === 'Nda' && count >= 2) || (code === 'TermSheet' && count >= 3)) {
      discount += getDiscount(contract);
    }

    return (
      <li key={code} className="row-cart space-inbetween">
        <div>
          {count} {name}
        </div>
        <div>${contractTotal} MXN</div>
      </li>
    );
  });

  return (
    <div className={`${cartContracts.length > 0 ? 'container' : 'disable'}`}>
      <h4>Actualización precio</h4>
      <ul>{cart}</ul>
      <hr></hr>
      <div className="space-inbetween">
        <div className="row-cart space-inbetween">
          <div>Subtotal</div>
          <div className="bolder">${subtotal.toFixed(2)} MXN</div>
        </div>
        <div className="row-cart space-inbetween">
          <div className="blue">Descuento</div>
          <div className="blue bolder">- ${discount.toFixed(2)} MXN</div>
        </div>
        <div className="row-cart space-inbetween">
          <div>IVA</div>
          <div className="bolder">${getVat(subtotal - discount).toFixed(2)} MXN</div>
        </div>
      </div>
      <hr></hr>
      <div className="row-cart total-space">
        <div>Total</div>
        <div className="bolder">${getTotal(subtotal - discount).toFixed(2)} MXN</div>
      </div>
      <div className="container-btn">
        <button className="btn">
          <span>Continuar</span>
          <span><ArrowIcon /></span>
        </button>
      </div>
    </div>
  );
};

export default Cart;
