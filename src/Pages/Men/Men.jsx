import React from 'react';
import { Link } from 'react-router-dom';
import './Men.css';
import women1 from './menimg/kmensuit1.png';
import women2 from './menimg/kmenserwani.png';
import women3 from './menimg/kmenshirt.png';
import women4 from './menimg/kmenwed.png';
import women5 from './menimg/kmenwes.png';
import women6 from './menimg/kmen6.png';
import women7 from './menimg/Kmenblue.png';
import women8 from './menimg/kmen8.png';

// Sample product data
const Menproducts = [
  { id: 1, name: 'The BostonLuxe Blue Suit', image: women1, price: 1000, category: 'Lehenga', color: 'yellow', size: '30', occasion: 'Wedding' },
  { id: 2, name: 'Black Embroidered Sherwani', image: women2, price: 6200, category: 'Gown', color: 'wine', size: '32', occasion: 'Wedding' },
  { id: 3, name: 'Formal shirts', image: women3, price: 600, category: 'Anarkali', color: 'gold', size: '34', occasion: 'Wedding' },
  { id: 4, name: 'White Sherwani', image: women4, price: 1100, category: 'Gown', color: 'blue', size: '30', occasion: 'Party' },
  { id: 5, name: 'Beige And Brown Indo Western', image: women5, price: 5200, category: 'Saree', color: 'pink', size: '32', occasion: 'Wedding' },
  { id: 6, name: 'Blue Jawahar Cut', image: women6, price: 3500, category: 'Dress', color: 'black', size: '30', occasion: 'Casual' },
  { id: 7, name: 'Green Embroidered Sherwani With Peshawari', image: women7, price: 6900, category: 'Salwar', color: 'orange', size: '34', occasion: 'Festive' },
  { id: 8, name: 'Floral Jodhpuri Jacket', image: women8, price: 4200, category: 'Lehenga', color: 'blue', size: '36', occasion: 'Wedding' },
];

// Function to filter products based on selected criteria
const filterProductsByCriteria = (product, filters) => {
  const { category, price, color, size, occasion } = filters;

  // Define price ranges
  const priceRanges = {
    '1000-2000': [1000, 2000],
    '2000-5000': [2000, 5000],
    '5000-10000': [5000, 10000],
    '10000-15000': [10000, 15000]
  };

  // Check if the product's price is within any selected price range
  const priceMatch = price.length === 0 || price.some(range => {
    const [min, max] = priceRanges[range] || [0, Infinity];
    return product.price >= min && product.price <= max;
  });

  // Check other filter criteria
  const categoryMatch = category.length === 0 || category.includes(product.category);
  const colorMatch = color.length === 0 || color.includes(product.color);
  const sizeMatch = size.length === 0 || size.includes(product.size.toString());
  const occasionMatch = occasion.length === 0 || occasion.includes(product.occasion);

  return priceMatch && categoryMatch && colorMatch && sizeMatch && occasionMatch;
};

const Men = ({ searchTerm = '', filters = { category: [], price: [], color: [], size: [], occasion: [] } }) => {
  // Filter products based on search term
  const searchProducts = Menproducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Apply additional filters
  const filteredProducts = searchProducts.filter(product =>
    filterProductsByCriteria(product, filters)
  );

  // Determine which products to display
  const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : searchProducts;

  return (
    <div className="products-container">
      {productsToDisplay.length > 0 ? (
        productsToDisplay.map(product => (
          <div className="card" key={product.id}>
            <div className="imgBx">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="contentBx">
              <h4>{product.name}</h4>
              <p>{`₹${product.price} / day`}</p>
              <Link to={`/Menproducts/${product.id}`}>Rent</Link>
            </div>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default Men;
