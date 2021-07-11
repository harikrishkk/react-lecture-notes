import React, { useEffect } from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

const User = (props) => {
  const { first_name, last_name, email, avatar, rating, hobbies } = props.user;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log('Timer triggered.');
  //   }, 2000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div className="card bordered">
      <figure>
        <img alt={first_name} src={avatar} />
      </figure>
      <div className="card-body bg-white">
        <h2 className="card-title">
          {first_name} {last_name}
        </h2>
        {hobbies.length > 0 && (
          <div className="card-actions mb-4">
            {hobbies.map((hobby, index) => (
              <div key={index}>
                <div className="badge badge-ghost">{hobby}</div>
              </div>
            ))}
          </div>
        )}

        <p className="prose-sm">Email: {email}</p>
        <Rating rating={rating} />
        <div className="justify-end card-actions">
          <button
            onClick={() => props.onUserSelect(props.user)}
            className="btn btn-secondary"
          >
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
    rating: PropTypes.number,
    hobbies: PropTypes.arrayOf(PropTypes.string),
    onUserSelect: PropTypes.func,
  }),
};

export default User;
