import React from 'react';
import PropTypes from 'prop-types';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Rating = ({ rating }) => {
  const output = [];
  const calculateRating = () => {
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        output.push(<AiFillStar size={24} key={i} />);
      } else {
        output.push(<AiOutlineStar size={24} key={i} />);
      }
    }
    return output;
  };
  return (
    <div className="my-3 flex prose-sm justify-start align-center">
      <span className="mr-1">Rating: </span>
      {calculateRating()}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
