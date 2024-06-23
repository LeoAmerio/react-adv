import { useState } from 'react'
import { ProducCartProps, Product } from '../interfaces/interfaces';
import { products } from '../data/products';

export const useShoppingCart = () => {
  const [shopppingCart, setShopppingCart] = useState<{ [key:string]: ProducCartProps }>({});

  const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
    // console.log("onProductCountChange: ", counter, product);
    setShopppingCart((prevShoppingCart) => {

      const productInCard: ProducCartProps = prevShoppingCart[product.id] || { ...product, count: 0 };

      if (Math.max(productInCard.count + count, 0) > 0) {
        productInCard.count += count;
        return {
          ...prevShoppingCart,
          [product.id]: productInCard
        }
      }

      // Borrar el producto
      const { [product.id]: toDelete, ...rest } = prevShoppingCart;
      return rest;

      // if (count === 0) {
      //   // delete ({ ...prevShoppingCart } as any)[product.id]; //! (as any) to avoid TS error (delete expects an object, not a type
      //   const { [product.id]: toDelete, ...rest } = prevShoppingCart;
      //   return rest;
      // }

      // return {
      //   ...prevShoppingCart,
      //   [product.id]: { ...product, count }
      // }
    });
  }

  return {
    products,
    shopppingCart,
    
    onProductCountChange,
  }
}

export default useShoppingCart;