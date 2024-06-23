import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import useShoppingCart from "../hooks/useShoppingCart";
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <div>ShoppingPage</div>
      <hr />

      <ProductCard
        product={product}
        className="bg-dark text-white"
        key={product.id}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
          <>
            <ProductImage
              className="custom-img"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons
              className="custom-buttons"
              style={{ display: "flex", justifyContent: "center" }}
            />

            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            <span>{count} - { maxCount }</span>
            {
              (
                !isMaxCountReached &&
                <button onClick={() => increaseBy(+2)}>+2</button>
              )
            }
          </>
        )}
      </ProductCard>
    </div>
  );
};
