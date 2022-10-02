import React, { Children } from "react";
import { Link, NavLink } from "react-router-dom";

function TotalPriceTicket(props) {
  const { Price,data } = props;
  

  return (
    <div>
      <div className="totalPriceTicket">
        <div className="cart">
          Total Price <br /> <p>{Price} TK</p>
        </div>
      </div>
      <NavLink
        className="button"
        to={{ pathname: "/CheckOut", state: { data :data,price :Price } }}
      >
        Continue
      </NavLink>
    </div>
  );
}

export default TotalPriceTicket;
