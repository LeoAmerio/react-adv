import { useProduct } from "../hooks/useProduct";
import { ReactElement, createContext, useContext } from "react";
import { Product, ProductContextProps } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";
import { ProductTitle, ProductButtons, ProductImage } from ".";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  children?: ReactElement | ReactElement[];
  product: Product;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, incraseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        incraseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
