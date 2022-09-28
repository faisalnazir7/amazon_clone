import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  // console.log(order);
  return (
    <div className="order">
      <h3>This is order component</h3>
      <p>{moment.unix(order.data.created).format("DD-MM-YYYY, hh:mm:ss")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map(item => (
        <CheckoutProduct
          // key={index}
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: <strong>{value}</strong></h3>
        )}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs. "}
      />
    </div>
  );
}

export default Order;