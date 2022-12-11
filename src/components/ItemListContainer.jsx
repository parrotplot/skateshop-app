import products from "../data/products";
import "./itemListContainer.css";

export default function ItemListContainer(props) {
  return (
    <div className="itemListContainer">
      Check our newest {props.productsToList}
      {/* <div style={{ display: "grid", gridTemplateColumns: "3fr 3xfr" }}> */}
      {products[props.productsToList].map((product) => (
        <div className="product">
          <img
            // style={{ maxWidth: "100%" }}
            className="product-image"
            src={product.image}
          />
          <div className="product-name">{product.name}</div>
          <div className="product-size">{product.size}</div>
          <div className="product-price">{product.price}</div>
          <div className="product-color">{product.color}</div>
        </div>
      ))}
      {/* </div> */}
    </div>
  );
}
