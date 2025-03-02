import React from 'react';

const ProductId = ({params}) => {
    const param = params.productId
  return (
    <div>
      <h1>Product {param}</h1>
    </div>
  );
}

export default ProductId;
