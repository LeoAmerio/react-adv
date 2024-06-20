import React, { useState } from 'react'

export const useProduct = () => {
  const [counter, setCounter] = useState(0);

  const incraseBy = (value: number) => {
    setCounter(prev => Math.max(prev + value, 0));
  }

  return { counter, incraseBy }
}
