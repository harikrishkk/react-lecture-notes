import React from 'react';

const User = (props) => {
  const { first_name, last_name, email, avatar } = props.user;

  return (
    <div className="card bordered">
      <figure>
        <img alt={first_name} src={avatar} />
      </figure>
      <div className="card-body bg-white">
        <h2 className="card-title">
          {first_name} {last_name}
        </h2>
        <p>Email: {email}</p>
        <div className="justify-end card-actions">
          <button className="btn btn-secondary">More info</button>
        </div>
      </div>
    </div>
  );
};

export default User;
