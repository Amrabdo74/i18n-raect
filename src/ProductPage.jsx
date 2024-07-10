import React from 'react';
import ShareProduct from './ShareProduct';
const product = [
    {name: "msmsmms"},
    {description: "Microsoft Corporation Corporation product "}
]
const ProductPage = () => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <ShareProduct product={product} />
    </div>
  );
};

export default ProductPage;
