import React, { useEffect, useRef, useState } from 'react'
import { OnChangeArgs, Product } from '../interfaces/interfaces';

interface useProductProps {
  product: Product;
  onChange?: ( args: OnChangeArgs ) => void;
  value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: useProductProps) => {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef( !!onChange );

  const incraseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }
    
    const newValue = Math.max(counter + value, 0)
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  }

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return { counter, incraseBy }
}