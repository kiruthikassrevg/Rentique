import React from 'react';
import { Link } from 'react-router-dom';
import './Women.css';
import women1 from './womenimg/kwes1.jpg';
import women2 from './womenimg/kgownn2.png';
import women3 from './womenimg/kanar1.png';
import women4 from './womenimg/kgow.png';
import women5 from './womenimg/ksaree1.png';
import women6 from './womenimg/ksara2.png';
import women7 from './womenimg/kcas1.png';
import women8 from './womenimg/kleg1.png';

// Sample product data
const products = [
  { id: 1, name: 'Net Gown', image: women2, price: 10200, category: 'Gown', color: 'wine', size: '32', occasion: 'Wedding' },
  { id: 2, name: 'Sea Green Anarkali', image: women3, price: 8600, category: 'Anarkali', color: 'gold', size: '34', occasion: 'Wedding' },
  { id: 3, name: 'Black Cutdana Net Gown', image: women4, price: 1100, category: 'Gown', color: 'blue', size: '30', occasion: 'Party' },
  { id: 4, name: 'Ruviero Apparels', image: women1, price: 4100, category: 'Lehenga', color: 'yellow', size: '30', occasion: 'Party' },
  { id: 5, name: 'Blue Georgette Saree', image: women5, price: 1200, category: 'Saree', color: 'pink', size: '32', occasion: 'Wedding' },
  { id: 6, name: 'Red Sharara Suit', image: women6, price: 4500, category: 'Dress', color: 'black', size: '30', occasion: 'Casual' },
  { id: 7, name: 'Salwar Suit', image: women7, price: 4900, category: 'Salwar', color: 'Sea green', size: '34', occasion: 'Mehandi' },
  { id: 8, name: 'Yellow Lehenga', image: women8, price: 4200, category: 'Lehenga', color: 'Yellow', size: '36', occasion: 'Wedding' },
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

const Women = ({ searchTerm = '', filters = { category: [], price: [], color: [], size: [], occasion: [] } }) => {
  // Filter products based on search term
  const searchProducts = products.filter(product =>
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
              <Link to={`/product/${product.id}`}>Rent</Link>
            </div>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default Women;
