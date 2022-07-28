import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const DUMMY_PRODUCTS = [
    {
      id: "p1",
      price: 6,
      title: "My First Book",
      description: "This is a first product - amazing!",
    },
    {
      id: "p2",
      price: 5,
      title: "My Second Book",
      description: "This is a second product - amazing!",
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              price={product.price}
              description={product.description}
              title={product.title}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
