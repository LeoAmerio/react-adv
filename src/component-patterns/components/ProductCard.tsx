import { useProduct } from "../hooks/useProduct";
import { ReactElement, createContext } from "react";
import { OnChangeArgs, Product, ProductContextProps } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";
import { ProductTitle, ProductButtons, ProductImage } from ".";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  children?: ReactElement | ReactElement[];
  product: Product;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {
  const { counter, incraseBy } = useProduct({ onChange, product, value });

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
