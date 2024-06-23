import { useProduct } from "../hooks/useProduct";
import { ReactElement, createContext } from "react";
import { InitialValues, OnChangeArgs, Product, ProductCardHandlers, ProductContextProps } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";
import { ProductTitle, ProductButtons, ProductImage } from ".";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  product: Product;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        maxCount,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          maxCount: initialValues?.maxCount,
          isMaxCountReached,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
