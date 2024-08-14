import React from 'react';
import '../../Pages/Styles/ProductsList.css';
import sareeImage from './womenimg/saree-1.jpg';
import kurtiImage from '../../assets/Kurti.png';
import lehengaImage from '../../assets/Lehenga-removebg.png';
import shalwarImage from '../../assets/Salwar.png';
import choliImage from '../../assets/Choli.png';
import dupattaImage from './womenimg/sharara-1.jpg';
import anarkaliImage from './womenimg/anarkali-1.jpg';
import gownImage from './womenimg/gown-1.jpg';

const products = [
  { id: 1, name: 'saree-1', image: sareeImage, price: 1500, category: 'Saree', color: 'red', size: '30', occasion: 'Wedding' },
  { id: 2, name: 'Kurti', image: kurtiImage, price: 1200, category: 'Kurti', color: 'blue', size: '32', occasion: 'Casual' },
  { id: 3, name: 'Lehenga', image: lehengaImage, price: 2000, category: 'Lehenga', color: 'green', size: '34', occasion: 'Party' },
  { id: 4, name: 'Salwaar', image: shalwarImage, price: 1800, category: 'Salwaar', color: 'yellow', size: '36', occasion: 'Wedding' },
  { id: 5, name: 'Choli', image: choliImage, price: 1600, category: 'Choli', color: 'pink', size: '38', occasion: 'Casual' },
  { id: 6, name: 'Sharara', image: dupattaImage, price: 1000, category: 'Dupatta', color: 'black', size: '40', occasion: 'Party' },
  { id: 7, name: 'Anarkali', image: anarkaliImage, price: 1900, category: 'Anarkali', color: 'white', size: '28', occasion: 'Wedding' },
  { id: 8, name: 'Blue floral gown', image: gownImage, price: 2400, category: 'Gown', color: 'red', size: '30', occasion: 'Casual' },
];

const filterProductsByCriteria = (product, filters) => {
  const { category, price, color, size, occasion } = filters;

  const priceRanges = {
    '1000-2000': [1000, 2000],
    '2000-5000': [2000, 5000],
    '5000-10000': [5000, 10000],
    '10000-15000': [10000, 15000]
  };

  const priceMatch = price.length === 0 || price.some(range => {
    const [min, max] = priceRanges[range];
    return product.price >= min && product.price <= max;
  });

  const categoryMatch = category.length === 0 || category.includes(product.category);
  const colorMatch = color.length === 0 || color.includes(product.color);
  const sizeMatch = size.length === 0 || size.includes(product.size.toString());
  const occasionMatch = occasion.length === 0 || occasion.includes(product.occasion);

  return priceMatch && categoryMatch && colorMatch && sizeMatch && occasionMatch;
};

const ProductsList = ({ searchTerm, filters }) => {
  // Apply search term
  const searchProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Apply filters
  const filteredProducts = searchProducts.filter(product => 
    filterProductsByCriteria(product, filters)
  );

  // Display all products if no filters are applied or filteredProducts is empty
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
              <h2>{product.name}</h2>
              <p>{`₹${product.price} / day`}</p>
              <a href="/product">Rent</a>
            </div>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductsList;




// ProductsList.jsx
// import React from 'react';
// import '../styles/ProductsList.css';
// import sareeImage from '../Assets/Saree.png';
// import kurtiImage from '../Assets/Kurti.png';
// import lehengaImage from '../Assets/Lehenga-removebg.png';
// import shalwarImage from '../Assets/Salwar.png';
// import choliImage from '../Assets/Choli.png';
// import dupattaImage from '../Assets/Dupatta.png';
// import anarkaliImage from '../Assets/Anarkali.png';
// import gownImage from '../Assets/Gown.png';

// const products = [
//   { id: 1, name: 'Saree', image: sareeImage, price: '1500', category: 'Saree', color: 'red', size: '30', occasion: 'Wedding' },
//   { id: 2, name: 'Kurti', image: kurtiImage, price: '1200', category: 'Kurti', color: 'blue', size: '32', occasion: 'Casual' },
//   { id: 3, name: 'Lehenga', image: lehengaImage, price: '2000', category: 'Lehenga', color: 'green', size: '34', occasion: 'Party' },
//   { id: 4, name: 'Salwaar', image: shalwarImage, price: '1800', category: 'Salwaar', color: 'yellow', size: '36', occasion: 'Wedding' },
//   { id: 5, name: 'Choli', image: choliImage, price: '1600', category: 'Choli', color: 'pink', size: '38', occasion: 'Casual' },
//   { id: 6, name: 'Dupatta', image: dupattaImage, price: '1000', category: 'Dupatta', color: 'black', size: '40', occasion: 'Party' },
//   { id: 7, name: 'Anarkali', image: anarkaliImage, price: '1900', category: 'Anarkali', color: 'white', size: '28', occasion: 'Wedding' },
//   { id: 8, name: 'Gown', image: gownImage, price: '2400', category: 'Gown', color: 'red', size: '30', occasion: 'Casual' },
// ];

// const filterProductsByCriteria = (product, filters) => {
//     // Your filter logic
//   };
  
//   const ProductsList = ({ searchTerm, filters }) => {
//     // Apply search term
//     const searchProducts = products.filter(product =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
  
//     // Apply filters
//     const filteredProducts = searchProducts.filter(product => 
//       filterProductsByCriteria(product, filters)
//     );
  
//     // Display all products if no filters are applied or filteredProducts is empty
//     const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : searchProducts;
  
//     return (
//       <div className="products-container">
//         {productsToDisplay.length > 0 ? (
//           productsToDisplay.map(product => (
//             <div className="card" key={product.id}>
//               <div className="imgBx">
//                 <img src={product.image} alt={product.name} />
//               </div>
//               <div className="contentBx">
//                 <h2>{product.name}</h2>
//                 <p>{`₹${product.price} / day`}</p>
//                 <a href="#">Rent</a>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No products available</p>
//         )}
//       </div>
//     );
//   };
  
//   export default ProductsList;


// import React, { useState } from 'react';
// import '../styles/ProductsList.css';
// import sareeImage from '../Assets/Saree.png';
// import kurtiImage from '../Assets/Kurti.png';
// import lehengaImage from '../Assets/Lehenga-removebg.png';
// import shalwarImage from '../Assets/Salwar.png';
// import choliImage from '../Assets/Choli.png';
// import dupattaImage from '../Assets/Dupatta.png';
// import anarkaliImage from '../Assets/Anarkali.png';
// import gownImage from '../Assets/Gown.png';

// const products = [
//   { id: 1, name: 'Saree', image: sareeImage, price: '1500' },
//   { id: 2, name: 'Kurti', image: kurtiImage, price: '1200' },
//   { id: 3, name: 'Lehenga', image: lehengaImage, price: '2000' },
//   { id: 4, name: 'Salwaar', image: shalwarImage, price: '1800' },
//   { id: 5, name: 'Choli', image: choliImage, price: '1600' },
//   { id: 6, name: 'Dupatta', image: dupattaImage, price: '1000' },
//   { id: 7, name: 'Anarkali', image: anarkaliImage, price: '1900' },
//   { id: 8, name: 'Gown', image: gownImage, price: '2400' },
// ];

// const ProductsList = ({ searchTerm }) => {
//   const filteredProducts = products.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="products-container">
//       {filteredProducts.map((product) => (
//         <div className="card" key={product.id}>
//           <div className="imgBx">
//             <img src={product.image} alt={product.name} />
//           </div>
//           <div className="contentBx">
//             <h2>{product.name}</h2>
//             <p>{`₹${product.price} / day`}</p>
//             <a href="#">Rent</a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductsList;
