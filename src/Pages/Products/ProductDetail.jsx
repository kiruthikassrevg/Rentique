import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

// Mock products data
const products = [
    {
        id: 1,
        name: 'Stonework Net Gown',
        price: 1200,
        description: 'Beige Readymade Gown in Net fabric. The Gown is embellished with Stonework embroidery.The Beige Gown has a round neck',
        images: [
            'https://www.koskii.com/cdn/shop/files/koskii-beige-stonework-net-designer-gown-gnrm0034433_beige_1_2_1800x1800.jpg?v=1713960898',
    'https://www.koskii.com/cdn/shop/files/koskii-beige-stonework-net-designer-gown-gnrm0034433_beige_1_8_1800x1800.jpg?v=1722262405',
    'https://www.koskii.com/cdn/shop/files/koskii-beige-stonework-net-designer-gown-gnrm0034433_beige_1_1_1800x1800.jpg?v=1722262405',
    'https://www.koskii.com/cdn/shop/files/koskii-beige-stonework-net-designer-gown-gnrm0034433_beige_1_3_1800x1800.jpg?v=1722262405'
    ],
},
{
    id: 2,
    name: 'Sea Green Anarkali Suit',
    price: 7600,
    description: ' Sea Green Anarkali Suit in Semi Crepe fabric.The Anarkali Suit is embellished with Zariwork embroidery.Accompanied with a dupatta',
    images: [
        'https://www.koskii.com/cdn/shop/files/koskii-seagreen-printed-georgette-designer-readymadelehenga-gcrm0030359_sea_green_1_1_1800x1800.jpg?v=1700136422',
    'https://www.koskii.com/cdn/shop/files/koskii-seagreen-printed-georgette-designer-readymadelehenga-gcrm0030359_sea_green_1_2_1800x1800.jpg?v=1700136422',
    'https://www.koskii.com/cdn/shop/files/koskii-seagreen-printed-georgette-designer-readymadelehenga-gcrm0030359_sea_green_1_7_1800x1800.jpg?v=1700136422',
    'https://www.koskii.com/cdn/shop/files/koskii-seagreen-printed-georgette-designer-readymadelehenga-gcrm0030359_sea_green_1_4_1800x1800.jpg?v=1700136422'
    ],
},
{
    id: 3,
    name: 'Black Cutdana Net Gown',
    price: 1100,
    description: ' Royal blue strappy gown with a full flowy base which is stylish yet comfortable. Comes with a long trail.',
    images: [
        'https://www.koskii.com/cdn/shop/files/koskii-black-cutdana-net-designer-gown-gnrm0033154_black_1_5_1800x1800.jpg?v=1713960345',
        'https://www.koskii.com/cdn/shop/files/koskii-black-cutdana-net-designer-gown-gnrm0033154_black_1_6_1800x1800.jpg?v=1713960345',
        'https://www.koskii.com/cdn/shop/files/koskii-black-cutdana-net-designer-gown-gnrm0033154_black_1_8_1800x1800.jpg?v=1713960345',
        'https://www.koskii.com/cdn/shop/files/koskii-black-cutdana-net-designer-gown-gnrm0033154_black_1_4_1800x1800.jpg?v=1713960345'
    ],
},
{
    id: 4,
    name: 'Ruviero Apparels',
    price: 4100,
    description: 'Solid red dress in the material neoprene. Perfect for any occasion. Pair it up with nude heels and golden hoops and you are good to go..',
    images: [
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1550678311015_RIB_2723_1.jpg',
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1550678311502_RIB_2723_2.jpg',
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1550678312373_RIB_2723_4.jpg',
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1550678311933_RIB_2723_3.jpg',
    ],
},
{
    id: 5,
    name: 'Georgette Saree',
    price: 1200,
    description: 'This pink Georgette saree features threadwork embroidery, an unstitched blouse, and the Rentique promise of premium quality.',
    images: [
    'https://www.koskii.com/cdn/shop/files/koskii-skyblue-threadwork-georgette-designer-saree-saus0034464_skyblue_1_7_1800x1800.jpg?v=1716191357',
    'https://www.koskii.com/cdn/shop/files/koskii-skyblue-threadwork-georgette-designer-saree-saus0034464_skyblue_1_8_1800x1800.jpg?v=1719849845',
    'https://www.koskii.com/cdn/shop/files/koskii-skyblue-threadwork-georgette-designer-saree-saus0034464_skyblue_1_6_1800x1800.jpg?v=1719849845',
    'https://www.koskii.com/cdn/shop/files/koskii-skyblue-threadwork-georgette-designer-saree-saus0034464_skyblue_1_2_1800x1800.jpg?v=1719849845'
    ],
},
{
    id: 6,
    name: 'Red Sharara Suit',
    price: 4500,
    description: 'Red Sharara Suit in Semi Crepe fabric.The Sharara Suit is embellished with Printed embroidery.Accompanied with a bottom and dupatta',
    images: [
    'https://www.koskii.com/cdn/shop/files/koskii-red-printed-semicrepe-designer-salwar-suit-ssrm0031509_red_1_1_1800x1800.jpg?v=1699954617',
    'https://www.koskii.com/cdn/shop/files/koskii-red-printed-semicrepe-designer-salwar-suit-ssrm0031509_red_1_3_1800x1800.jpg?v=1699954617',
    'https://www.koskii.com/cdn/shop/files/koskii-red-printed-semicrepe-designer-salwar-suit-ssrm0031509_red_1_6_1800x1800.jpg?v=1699954617',
    'https://www.koskii.com/cdn/shop/files/koskii-red-printed-semicrepe-designer-salwar-suit-ssrm0031509_red_1_4_1800x1800.jpg?v=1699954617'
    ],
},
{
    id: 7,
    name: 'Sea Green Threadwork Banarasi Readymade Salwar Suit',
    price: 4900,
    description: ' Sea Green Salwar Suit in Banarasi fabric.The Salwar Suit is embellished with Threadwork embroidery.Accompanied with a bottom and dupatta',
    images: [
        'https://www.koskii.com/cdn/shop/files/koskii-seagreen-threadwork-banasari-designer-salwar-suit-ssrm0033871_sea_green_1_5_1800x1800.jpg?v=1705162856',
        'https://www.koskii.com/cdn/shop/files/koskii-seagreen-threadwork-banasari-designer-salwar-suit-ssrm0033871_sea_green_1_4_1800x1800.jpg?v=1705162856',
        'https://www.koskii.com/cdn/shop/files/koskii-seagreen-threadwork-banasari-designer-salwar-suit-ssrm0033871_sea_green_1_8_1800x1800.jpg?v=1705162856',
        'https://www.koskii.com/cdn/shop/files/koskii-seagreen-threadwork-banasari-designer-salwar-suit-ssrm0033871_sea_green_1_2_1800x1800.jpg?v=1705162856'
    ],
},
{
    id: 8,
    name: 'Yellow printed tissue Readymade Lehenga',
    price: 4200,
    description: 'Yellow Readymade Lehenga in Tissue fabric. The Lehenga is embellished with Printed embroidery. Accompanied with an Readymade blouse and dupatta.',
    images: [
        'https://www.koskii.com/cdn/shop/files/koskii-yellow-printed-tissue-designer-readymadelehenga-gcrm0034555_yellow_1_6_1800x1800.jpg?v=1720761844',
        'https://www.koskii.com/cdn/shop/files/koskii-yellow-printed-tissue-designer-readymadelehenga-gcrm0034555_yellow_1_1_1800x1800.jpg?v=1720761845',
    'https://www.koskii.com/cdn/shop/files/koskii-yellow-printed-tissue-designer-readymadelehenga-gcrm0034555_yellow_1_2_1800x1800.jpg?v=1720761844',
    'https://www.koskii.com/cdn/shop/files/koskii-yellow-printed-tissue-designer-readymadelehenga-gcrm0034555_yellow_1_5_1800x1800.jpg?v=1720761845'
    ],
},
  // Add other products with their respective images and descriptions
];

const ProductDetailWomen = ({ onAddToCart }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find((prod) => prod.id === parseInt(id, 10));
  
    const [currentImage, setCurrentImage] = useState(product?.images[0]);
    const [selectedSize, setSelectedSize] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [rentalDays, setRentalDays] = useState(4);
    const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
    const [validationMessage, setValidationMessage] = useState('');
    const [showNotification, setShowNotification] = useState(false);
  
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
      if (product) {

  if (message) {
    setValidationMessage(message);
    return;
  }
        const rentalCost = product.price * rentalDays;
        const securityDeposit = product.price * 4 * 0.8; // 50% of 4 days rental cost
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
        setShowNotification(true);  // Show the pop-up notification
        setTimeout(() => setShowNotification(false), 3000); // Hide after 3 seconds // Navigate to the cart page
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
          <p className="security-deposit">Security Deposit: ₹{(product.price * 4) * 0.8}</p>
          <p className="total-cost">Total Cost: ₹{product.price * rentalDays + (product.price * 4) * 0.8}</p>
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
  
  export default ProductDetailWomen;