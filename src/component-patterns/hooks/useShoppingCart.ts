import { useState } from 'react'
import { ProducCartProps, Product } from '../interfaces/interfaces';
import { products } from '../data/products';

export const useShoppingCart = () => {
  const [shopppingCart, setShopppingCart] = useState<{ [key:string]: ProducCartProps }>({});

  const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
    // console.log("onProductCountChange: ", counter, product);
    setShopppingCart((prevShoppingCart) => {
      if (count === 0) {
        // delete ({ ...prevShoppingCart } as any)[product.id]; //! (as any) to avoid TS error (delete expects an object, not a type
        const { [product.id]: toDelete, ...rest } = prevShoppingCart;
        return rest;
      }

      return {
        ...prevShoppingCart,
        [product.id]: { ...product, count }
      }
    });
  }

  return {
    products,
    shopppingCart,
    
    onProductCountChange,
  }
}

export default useShoppingCart;