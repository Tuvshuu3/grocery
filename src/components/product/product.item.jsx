import React from "react";
import CartAddBtn from "../../assets/CartAddBtn.svg";
import "../../styles/item.css";

const Product = ({ data }) => {
  return (
    <div className="item">
      <div className="item1">
        <div className="item_picture">
          <img src={data.images[0]} width="100px" height="80px"></img>
        </div>
        <div className="text_details">
          <div className="item_name">{data.name}</div>
          <div className="weigth">{data.size}, Priceg</div>
        </div>
        <div className="Purchase">
          <div className="Price">₮{data.price}</div>
          <div className="CartAddBtn">
            <img src={CartAddBtn}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
