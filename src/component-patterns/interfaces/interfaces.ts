import { ReactElement } from "react";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductBtnProps } from "../components/ProductButtons";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element,
  Title: (Props: ProductTitleProps) => JSX.Element,
  Image: (Props: ProductImageProps) => JSX.Element,
  Buttons: (Props: ProductBtnProps) => JSX.Element
}

export interface OnChangeArgs {
  product: Product;
  count: number;
} 

export interface ProducCartProps extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  maxCount?: number;
  isMaxCountReached: boolean;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}