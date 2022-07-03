import React from "react";

const ReviewItem = (props) => {
  const { key, name, price, quantity } = props.product;
  const { handleRemove } = props;
  console.log(props.product);

  return (
    <div>
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={() => handleRemove(key)} className="btn-regular">
        Remove
      </button>
    </div>
  );
};

export default ReviewItem;
