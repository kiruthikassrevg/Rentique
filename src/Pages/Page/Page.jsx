import React, { useState, useEffect } from 'react';
import './Page.css';

const Page = () => {
  const images = [
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1721836902727_FM3668-3_1.jpg',
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1721836904176_FM3668-3_3.jpg',
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1721836904927_FM3668-3_4.jpg',
    'https://dhb8p39s5y2g5.cloudfront.net/rib/1721836905634_FM3668-3_5.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);
  const [selectedSize, setSelectedSize] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [rentalDays, setRentalDays] = useState(4);
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = Math.abs(end - start);
      const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setRentalDays(days);
    }
  }, [startDate, endDate]);

  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleRentalDaysChange = (e) => {
    setRentalDays(Number(e.target.value));
  };

  const handleSizeChartToggle = () => {
    setIsSizeChartOpen(!isSizeChartOpen);
  };

  

  return (
    <div className="product-page">
      <div className="product-gallery">
        <img src={currentImage} alt="Yellow Lehenga" className="main-image" />
        <div className="thumbnail-images">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(image)}
              className="thumbnail"
            />
          ))}
        </div>
      </div>
      <div className="product-details">
        <h1>Yellow Lehenga</h1>
        <div className="description">
          <p>
            A stunning yellow lehenga is perfect for weddings and festive occasions. 
            Made from high-quality fabric, it features intricate embroidery and a modern silhouette.
          </p>
        </div>
        <div className="pricing">
          <span className="rental-price">₹{rentalDays * 1360}</span> <span>for {rentalDays} days</span><br></br>
          <br />
          <div className="retail-price">[Retail ₹10,000]</div>
        </div>
        <div className="security">
          <p>Security ₹3,000 (Refundable)</p>
          <p>Custom Fitting Available</p>
        </div>
        <div className="size-info">
          <h3>Select Size:</h3>
          <div className="size-buttons">
            {['S', 'M', 'L'].map((size) => (
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
            <button onClick={handleSizeChartToggle}>
              Check Size
            </button>
          </div>
        </div>
        <div className="rental-info">
          <div className="rental-date">
            <label>Rent Start Date:</label>
            <input type="date" value={startDate} onChange={handleStartDateChange} />
          </div>
          <div className="rental-date">
            <label>Rent End Date:</label>
            <input type="date" value={endDate} onChange={handleEndDateChange} />
          </div>
          <div className="rental-days">
            <label>Number of Rental Days:</label>
            <select value={rentalDays} onChange={handleRentalDaysChange}>
              {[4, 8, 12].map((day) => (
                <option key={day} value={day}>{day} Days</option>
              ))}
            </select>
          </div>
        </div>
        <button className="rent-now">RENT NOW</button>
        <p>Note: You can order this product up to 120 days in advance only.</p>
      </div>

      {isSizeChartOpen && (
        <div className="size-chart-modal">
          <div className="size-chart-content">
            <span className="close-button" onClick={handleSizeChartToggle}>
              &times;
            </span>
            <h3>Size Chart</h3>
            <table>
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Bust (in inches)</th>
                  <th>Waist (in inches)</th>
                  <th>Hip (in inches)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>S</td>
                  <td>32-34</td>
                  <td>24-26</td>
                  <td>34-36</td>
                </tr>
                <tr>
                  <td>M</td>
                  <td>34-36</td>
                  <td>26-28</td>
                  <td>36-38</td>
                </tr>
                <tr>
                  <td>L</td>
                  <td>36-38</td>
                  <td>28-30</td>
                  <td>38-40</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
