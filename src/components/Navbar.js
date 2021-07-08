import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="flex-none px-2 mx-2">
        <span className="text-lg font-bold">Logo</span>
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch flex">
          <a href="#/" className="btn btn-ghost btn-sm rounded-btn">
            Home
          </a>
          <a href="#/" className="btn btn-ghost btn-sm rounded-btn">
            About
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
