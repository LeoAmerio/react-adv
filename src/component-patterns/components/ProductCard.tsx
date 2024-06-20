import { useProduct } from "../hooks/useProduct";
import { ReactElement, createContext, useContext } from "react";
import { ProductContextProps, ProductProps } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";
import { ProductTitle, ProductButtons, ProductImage } from ".";


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductProps) => {
  const { counter, incraseBy } = useProduct();

  return (
    <Provider value={{
      counter,
      incraseBy,
      product
    }}>
      <div className={styles.productCard}>
        {children}
      </div>

    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
