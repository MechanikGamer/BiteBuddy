// products.ts

import { ImageSourcePropType } from 'react-native';
import product1 from '../../../../assets/images/product1.png';
import product2 from '../../../../assets/images/product2.png';
import product3 from '../../../../assets/images/product3.png';
import product4 from '../../../../assets/images/product4.png';

export interface Product {
  id: number;
  category: number;
  name: string;
  secondName: string;
  rating: number;
  price: number;
  description: string;
  image: ImageSourcePropType;
}

const Products: Product[] = [
  {
    id: 1,
    category: 1,
    name: 'Cheeseburger',
    secondName: `Wendy's Burger`,
    rating: 4.9,
    price: 8.24,
    description: `The Cheeseburger Wendy's Burger is a classic fast food burger that packs a punch of flavor in every bite.`,
    image: product1,
  },
  {
    id: 2,
    category: 2,
    name: 'Hamburger',
    secondName: 'Veggie Burger',
    rating: 4.8,
    price: 9.99,
    description: `Enjoy our delicious Hamburger Veggie Burger, made with a savory blend of fresh vegetables and herbs.`,
    image: product2,
  },
  {
    id: 3,
    category: 3,
    name: 'Hamburger',
    secondName: 'Chicken Burger',
    rating: 4.6,
    price: 12.48,
    description: `Our chicken burger is a delicious and healthier alternative to traditional beef burgers.`,
    image: product3,
  },
  {
    id: 4,
    category: 4,
    name: 'Cheeseburger',
    secondName: `Wendy's Burger`,
    rating: 4.9,
    price: 8.24,
    description: `The Cheeseburger Wendy's Burger is a classic fast food burger that packs a punch of flavor in every bite.`,
    image: product4,
  }
];

export default Products;
