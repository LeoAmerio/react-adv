import React from "react";
import {
  ProductCard,
} from "../components";

const product = {
  id: "1",
  title: "Coffe Mug",
  img: "../../public/coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <div>ShoppingPage</div>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product} >
          <ProductCard.Image />

          <ProductCard.Title title={''} />

          <ProductCard.Buttons />
        </ProductCard>

      </div>
    </div>
  );
};
