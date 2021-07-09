import React from 'react';
import Rating from './Rating';

const User = (props) => {
  const { first_name, last_name, email, avatar, rating } = props.user;

  return (
    <div className="card bordered">
      <figure>
        <img alt={first_name} src={avatar} />
      </figure>
      <div className="card-body bg-white">
        <h2 className="card-title">
          {first_name} {last_name}
        </h2>
        {props.children}
        <p className="prose-sm">Email: {email}</p>
        <Rating rating={rating} />
        <div className="justify-end card-actions">
          <button className="btn btn-secondary">More info</button>
        </div>
      </div>
    </div>
  );
};

export default User;
