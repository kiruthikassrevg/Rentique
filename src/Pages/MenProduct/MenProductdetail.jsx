import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import './MenProductdetail.css';

// Mock products data
const Menproducts = [
{
    id: 1,
    name: 'The BostonLuxe Blue Suit',
    price: 5000,
    description: 'The BostonLuxe Blue Suit',
    images: [
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1709110446044_FLYS070-3_1.jpg',
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1709110446869_FLYS070-3_2.jpg',
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1709110448392_FLYS070-3_4.jpg',
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1709110449119_FLYS070-3_5.jpg',
    ],
},
{
    id: 2,
    name: 'Black Embroidered Sherwani',
    price: 6200,
    description: 'Black Embroidered Sherwani',
    images: [
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1709110528593_FLYSC043-3_1.jpg',
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1709110529457_FLYSC043-3_2.jpg',
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1709110530152_FLYSC043-3_3.jpg',
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1709110530901_FLYSC043-3_4.jpg'
    ],
},
{
    id: 3,
    name: 'Formal shirt',
    price: 600,
    description: 'Men Black Spread Collar Solid Regular Fit Lyocell Formal Shirt',
    images: [
    'https://static.thcdn.com/images/large/webp//productimg/1600/1600/15406829-1515154330743037.jpg',
    'https://static.thcdn.com/images/large/webp//productimg/1600/1600/15406829-1045154330863958.jpg',
    'https://static.thcdn.com/images/large/webp//productimg/1600/1600/15406829-2005154330812058.jpg',
    'https://static.thcdn.com/images/large/webp//productimg/1600/1600/15406829-1665154330835287.jpg'
    ],
},
{
    id: 4,
    name: 'White Sherwani',
    price: 1100,
    description: 'Heavy embroidered sherwani with metal buttons, paired with gold trousers. See size chart for length and fit.',
    images: [
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1709110583335_FLYSC061-2_1.jpg',
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1709110584040_FLYSC061-2_2.jpg',
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1709110584841_FLYSC061-2_3.jpg',
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1709110585577_FLYSC061-2_4.jpg'
    ],
},
{
    id: 5,
    name: 'Beige And Brown Indo Western',
    price: 6200,
    description: 'Beige indo western with graphite brown churidar.The accessories added in the image are not part of the product.',
    images: [
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1609249154500_FPRI12923_1.jpg',
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1609249156035_FPRI12923_4.jpg',
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1609249155047_FPRI12923_2.jpg',
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1609249157194_FPRI12923_6.jpg'
    ],
},
{
    id: 6,
    name: 'Blue Jawahar Cut',
    price: 3500,
    description: 'Jacket is made of blue self textured fabric with metal button. See size chart for length & fit.',
    images: [
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1522861275269_RIB_2460_1.jpg',
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1522861303152_RIB_2460_3.jpg',
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1522861303645_RIB_2460_4.jpg',
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1522861302265_RIB_2460_2.jpg'
    ],
},
{
    id: 7,
    name: 'Seafoam Green Embroidered Sherwani With Peshawari',
    price: 6900,
    description: 'Fully gold embroidered sherwani with metal buttons and golden peshawari.',
    images: [
        'https://dhb8p39s5y2g5.cloudfront.net/rib/1609243045594_FPRI12609_1.jpg',
        'https://dhb8p39s5y2g5.cloudfront.net/rib/1609243046948_FPRI12609_4.jpg',
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1609243047391_FPRI12609_5.jpg',
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1609243046058_FPRI12609_2.jpg'
    ],
},
{
    id: 8,
    name: 'Floral Jodhpuri Jacket',
    price: 4200,
    description: 'Eclectic Floral jacket for the Modern Man.Made for all and every occasion.',
    images: [
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1522860704857_RIB_2444_1.jpg',
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1522860765899_RIB_2444_5.jpg',
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1522860797569_RIB_2444_6.jpg',
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1522860705302_RIB_2444_2.jpg'
    ],
},
  // Add other products with their respective images and descriptions
];

const ProductDetailMen = ({ onAddToCart }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = Menproducts.find((prod) => prod.id === parseInt(id, 10));

    const [currentImage, setCurrentImage] = useState(product?.images[0]);
    const [selectedSize, setSelectedSize] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [rentalDays, setRentalDays] = useState(4);
    const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
    const [validationMessage, setValidationMessage] = useState('');

    useEffect(() => {
    if (startDate && rentalDays) {
        const start = new Date(startDate);
        const end = new Date(start);
        end.setDate(start.getDate() + rentalDays);
        setEndDate(end.toISOString().split('T')[0]);
    }
    }, [startDate, rentalDays]);

    const handleThumbnailClick = (image) => {
    setCurrentImage(image);
    };

    const handleSizeClick = (size) => {
      setSelectedSize(size);
    };
  
    const handleStartDateChange = (e) => {
      setStartDate(e.target.value);
    };
  
    const handleRentalDaysChange = (e) => {
      setRentalDays(Number(e.target.value));
    };
  
    const handleSizeChartToggle = () => {
      setIsSizeChartOpen(!isSizeChartOpen);
    };
  
    const handleRentNow = () => {
      let message = '';
  if (!selectedSize && !startDate) {
    message = 'Please select a size and start date.';
  } else if (!selectedSize) {
    message = 'Please select a size.';
  } else if (!startDate) {
    message = 'Please select a start date.';
  }

  if (message) {
    setValidationMessage(message);
    return;
  }
      if (product) {
        const rentalCost = product.price * rentalDays;
        const securityDeposit = product.price * 4 * 0.5; // 50% of 4 days rental cost
        const totalCost = rentalCost + securityDeposit;
  
        const item = {
          name: product.name,
          image: currentImage,
          price: product.price,
          days: rentalDays,
          size: selectedSize,
          startDate,
          endDate,
          totalCost,
          securityDeposit
        };
  
        onAddToCart(item);
        navigate('/cart'); // Navigate to the cart page
      }
    };
    
    if (!product) return <div>Product not found</div>;
  
    return (
      
      <div className="product-page">
        <div className="product-gallery">
          <img src={currentImage} alt={product.name} className="main-image" />
          <div className="thumbnail-images">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleThumbnailClick(image)}
                className={`thumbnail ${image === currentImage ? 'selected-thumbnail' : ''}`}
              />
            ))}
          </div>
        </div>
        <div className="product-details">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p className="price">Price: ₹{product.price} / day</p>
          <p className="security-deposit">Security Deposit: ₹{(product.price * 4) * 0.5}</p>
          <p className="total-cost">Total Cost: ₹{product.price * rentalDays + (product.price * 4) * 0.5}</p>
          <div className="size-selection">
            <h4>Select Size</h4>
            <div className="sizes">
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="check-size">
              <button onClick={handleSizeChartToggle}>Check Size</button>
            </div>
          </div>
          <div className="rental-details">
            <div className="rental-dates">
              <label htmlFor="start-date">Start Date:</label>
              <input
                type="date"
                id="start-date"
                value={startDate}
                onChange={handleStartDateChange}
              />
              <label htmlFor="end-date">End Date:</label>
              <input
                type="date"
                id="end-date"
                value={endDate}
                readOnly
              />
            </div>
            <div className="rental-duration">
              <label htmlFor="rental-days">Rental Duration:</label>
              <select id="rental-days" value={rentalDays} onChange={handleRentalDaysChange}>
                <option value={4}>4 days</option>
                <option value={8}>8 days</option>
                <option value={16}>16 days</option>
              </select>
            </div>
          </div>
          {validationMessage && <p className="validation-message">{validationMessage}</p>}
          <button className="rent-now" onClick={handleRentNow}>Rent Now</button>
          <p>Note: You can order this product up to 100 days in advance only.</p>
        </div>
  
        {isSizeChartOpen && (
          <div className="size-chart-modal">
            <div className="size-chart-content">
              <span className="close-button" onClick={handleSizeChartToggle}>&times;</span>
              <h3>Size Chart</h3>
              <table>
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Bust (inches)</th>
                    <th>Waist (inches)</th>
                    <th>Hip (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>XS</td>
                    <td>32</td>
                    <td>24</td>
                    <td>34</td>
                  </tr>
                  <tr>
                    <td>S</td>
                    <td>34</td>
                    <td>26</td>
                    <td>36</td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>36</td>
                    <td>28</td>
                    <td>38</td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td>38</td>
                    <td>30</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>XL</td>
                    <td>40</td>
                    <td>32</td>
                    <td>42</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default ProductDetailMen;