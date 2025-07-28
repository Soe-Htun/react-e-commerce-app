export interface ProductItem {
  id: number;
  img: string;
  title: string;
  rating: number;
  color: "Red" | "White" | "Brown" | "Yellow" | "Pink" ;
  aosDelay: string
}