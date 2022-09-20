import { useContext } from "react";
import { CartContext } from "../../contexts/cart.content";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  Header,
  Total,
} from "./checkout.styles.jsx";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <Header>
          <span>Product</span>
        </Header>
        <Header>
          <span>Description</span>
        </Header>
        <Header>
          <span>Quantity</span>
        </Header>
        <Header>
          <span>Price</span>
        </Header>
        <Header>
          <span>Remove</span>
        </Header>
      </CheckoutHeader>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total className="total">Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
