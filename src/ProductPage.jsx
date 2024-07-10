import ShareProduct from './ShareProduct';
const product = {
    name: "msmsmms",
    description: "Microsoft Corporation Corporation product ",
    image : "https://res.klook.com/image/upload/c_fill,w_1265,h_712/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig.webp?aid=2635&aff_pid=5f979ce5d915b86bee3f7002&aff_ext=22f059b0-8867-4823-8766-8f5d97dd3a18"
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
