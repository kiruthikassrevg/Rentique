import React from 'react';
import './Rev.css';
import { GiAmpleDress } from "react-icons/gi";
import { GiDress } from "react-icons/gi";
import { FaStar ,FaStarHalfAlt, FaRegStar,FaTshirt,} from 'react-icons/fa';

const CircleCards = () => {
  const steps = [
    { icon: <GiAmpleDress />, title: 'Ruhi', description: 'The product quality is very good. I am satisfied with my purchase.', rating: 5.0 },
    { icon:<GiDress/> ,title: 'Kevi', description: ' I loved the convenience of having stylish clothes delivered to my doorstep.', rating: 4.7 },
    {  icon: <FaTshirt />,title: 'Yuvi', description: 'The product arrived well-packaged and in perfect condition.', rating: 4.1 },

  
  ];

const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <>
        {Array(fullStars)
          .fill(<FaStar />)
          .map((star, index) => (
            <span key={`full-${index}`}>{star}</span>
          ))}
        {halfStar && <FaStarHalfAlt />}
        {Array(emptyStars)
          .fill(<FaRegStar />)
          .map((star, index) => (
            <span key={`empty-${index}`}>{star}</span>
          ))}
      </>
    );
  };
  
  return (
    <div className="circle-cards-container">
      <h1>Reviews</h1>
      <ol className="circle-cards-list">
        {steps.map((step, index) => (
          <li key={index} className={`circle-card`}>
            <div className="circle-card-icon">{step.icon}</div>
            <div className="circle-card-stars">{renderStars(step.rating)}</div>
            <div className="circle-card-title">{step.title}</div>
            <div className="circle-card-description">{step.description}</div>
            
          </li>
        ))}
      </ol>
      
    </div>
  );
};

export default CircleCards;
