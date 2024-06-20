import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export const ProductImage = ({ img = '' }) => {

    const { product } = useContext(ProductContext)
  
    let ImgToShow: string;
  
    if (img) {
      ImgToShow = img;
    } else if (product.img) {
      ImgToShow = product.img;
    } else {
      ImgToShow = noImage;
    }
  
    return (
      <img
        className={styles.productImg}
        src={ImgToShow}
        alt="Product"
      />
    );
  };
  