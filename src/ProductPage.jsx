import ShareProduct from './ShareProduct';
const product = {
    name: "msmsmms",
    description: "Microsoft Corporation Corporation product "
}
const ProductPage = () => {
    console.log("product.name",product.name);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <ShareProduct product={product} />
    </div>
  );
};

export default ProductPage;
