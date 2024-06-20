import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const ProductButtons = () => {
    const { incraseBy, counter } = useContext(ProductContext)
  
    return (
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => incraseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={styles.buttonAdd} onClick={() => incraseBy(+1)}>
          +
        </button>
      </div>
    );
  };