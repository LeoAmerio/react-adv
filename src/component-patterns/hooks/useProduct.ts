import { useEffect, useRef, useState } from "react";
import { InitialValues, OnChangeArgs, Product } from "../interfaces/interfaces";

interface useProductProps {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductProps) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount && newValue > initialValues?.maxCount) return;

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  }

  useEffect(() => {
    if (!isMounted.current) return;

    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return { 
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    increaseBy,
    reset,
  };
};
