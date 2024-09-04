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
    description: `The Cheeseburger Wendy's Burger is a classic fast food burger that packs a punch of flavor in every bite. Made with a juicy beef patty cooked to perfection, it's topped with melted American cheese, crispy lettuce, ripe tomato, and crunchy pickles.`,
    image: product1,
  },
  {
    id: 2,
    category: 2,
    name: 'Hamburger',
    secondName: 'Veggie Burger',
    rating: 4.8,
    price: 9.99,
    description: `Enjoy our delicious Hamburger Veggie Burger, made with a savory blend of fresh vegetables and herbs, topped with crisp lettuce, juicy tomatoes, and tangy pickles, all served on a soft, toasted bun. `,
    image: product2,
  },
  {
    id: 3,
    category: 3,
    name: 'Hamburger',
    secondName: 'Chicken Burger',
    rating: 4.6,
    price: 12.48,
    description: `Our chicken burger is a delicious and healthier alternative to traditional beef burgers, perfect for those looking for a lighter meal option. Try it today and experience the mouth-watering flavors of our Hamburger Chicken Burger!`,
    image: product3,
  },
  {
    id: 4,
    category: 4,
    name: 'Hamburger',
    secondName: `Chicken Burger`,
    rating: 4.9,
    price: 8.24,
    description: `Indulge in our crispy and savory Fried Chicken Burger, made with a juicy chicken patty, hand-breaded and deep-fried to perfection, served on a warm bun with lettuce, tomato, and a creamy sauce.`,
    image: product4,
  }
];

export default Products;
