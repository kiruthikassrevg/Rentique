import React, { useState, useEffect } from 'react';
import './Review.css'; 

const reviews = [
  {
    
    image: 'https://c4.wallpaperflare.com/wallpaper/893/114/475/grey-background-actor-male-wallpaper-preview.jpg',
    name: 'Ram',
    review: 'Great product, I am very satisfied!',
    rating: 4, 
  },
  {
    image: 'https://i.pinimg.com/564x/6e/6a/4e/6e6a4e5bcc20e51c07b3b94a2db07133.jpg',
    name: 'Niths',
    review: 'Highly recommend for its great selection and ease of use.',
    rating: 5, 
  },
  {
    image: 'https://wallpapercave.com/wp/wp6102838.jpg',
    name: 'Kevi',
    review: 'Amazing service & trendy clothes,perfect for any occasion!',
    rating: 3,   },
  {
    
    image: 'https://c4.wallpaperflare.com/wallpaper/31/419/633/girl-smile-background-actress-wallpaper-preview.jpg',
    name: 'Kirti',
    review: 'The clothes look even better in person; highly recommend!',
    rating: 5,
  },
  
];

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < rating ? 'star filled' : 'star'}>
          ★
        </span>
      ))}
    </div>
  );
};

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  
  useEffect(() => {
    const interval = setInterval(goToNext, 5000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        
        <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%) `}}>
          {reviews.map((review, index) => (
            <div className="carousel-item" key={index}>
              <img src={review.image} alt={review.name} className="customer-image" />
              <div className="review-content">
                <h4>{review.name}</h4>
                <StarRating rating={review.rating} />
                <p>{review.review}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-button prev" onClick={goToPrev}>
          &lt;
        </button>
        <button className="carousel-button next" onClick={goToNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Review;