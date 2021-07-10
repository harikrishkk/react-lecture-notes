import React, { useState } from 'react';

import Modal from './Modal';
const UserForm = ({ onUserAdd }) => {
  const INIT_STATE = {
    music: false,
    photography: false,
    dance: false,
    programming: false,
    cooking: false,
    marathon: false,
    gardening: false,
  };
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [avatar, setAvatar] = useState('');
  const [hobbies, setHobbies] = useState(INIT_STATE);
  const [isModalVisible, setModalVisible] = useState(false);

  const getHobbies = () => {
    return Object.keys(hobbies).filter((key) => !!hobbies[key]);
  };

  const resetCheckboxes = () => {
    setHobbies(INIT_STATE);
  };

  const reset = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setRating('');
    setAvatar('');
    resetCheckboxes();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !rating ||
      !avatar ||
      getHobbies().length === 0
    ) {
      setModalVisible(true);
      return;
    }
    const user = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      rating: parseInt(rating),
      avatar: avatar,
      hobbies: getHobbies(),
    };

    setModalVisible(false);

    onUserAdd(user);
    reset();
  };

  const handleCheckbox = (name) => {
    setHobbies((hobbies) => {
      return {
        ...hobbies,
        [name]: !hobbies[name],
      };
    });
  };

  return (
    <>
      {isModalVisible && (
        <Modal
          onModalClose={() => setModalVisible(false)}
          message={`All fields are mandatory`}
        />
      )}
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="card shadow bg-white mt-4">
          <div className="card-body">
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First name</span>
                </label>
                <input
                  type="text"
                  placeholder="first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last name</span>
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="last name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  placeholder="Rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Avatar</span>
                </label>
                <input
                  type="text"
                  placeholder="Avatar"
                  value={avatar}
                  onChange={(e) => setAvatar(e.target.value)}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Hobbies</span>
                </label>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <span className="label-text"> Music </span>
                    <div>
                      <input
                        type="checkbox"
                        value={hobbies.music}
                        checked={hobbies.music}
                        onChange={() => handleCheckbox('music')}
                        className="checkbox"
                      />
                      <span className="checkbox-mark"></span>
                    </div>
                  </label>
                </div>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <span className="label-text"> Photography </span>
                    <div>
                      <input
                        type="checkbox"
                        value={hobbies.photography}
                        checked={hobbies.photography}
                        onChange={() => handleCheckbox('photography')}
                        className="checkbox"
                      />
                      <span className="checkbox-mark"></span>
                    </div>
                  </label>
                </div>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <span className="label-text"> Dance </span>
                    <div>
                      <input
                        type="checkbox"
                        value={hobbies.dance}
                        checked={hobbies.dance}
                        onChange={() => handleCheckbox('dance')}
                        className="checkbox"
                      />
                      <span className="checkbox-mark"></span>
                    </div>
                  </label>
                </div>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <span className="label-text"> Programming </span>
                    <div>
                      <input
                        type="checkbox"
                        value={hobbies.programming}
                        checked={hobbies.programming}
                        onChange={() => handleCheckbox('programming')}
                        className="checkbox"
                      />
                      <span className="checkbox-mark"></span>
                    </div>
                  </label>
                </div>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <span className="label-text"> Cooking </span>
                    <div>
                      <input
                        type="checkbox"
                        value={hobbies.cooking}
                        checked={hobbies.cooking}
                        onChange={() => handleCheckbox('cooking')}
                        className="checkbox"
                      />
                      <span className="checkbox-mark"></span>
                    </div>
                  </label>
                </div>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <span className="label-text"> Marathon </span>
                    <div>
                      <input
                        type="checkbox"
                        value={hobbies.marathon}
                        checked={hobbies.marathon}
                        onChange={() => handleCheckbox('marathon')}
                        className="checkbox"
                      />
                      <span className="checkbox-mark"></span>
                    </div>
                  </label>
                </div>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <span className="label-text"> Gardening </span>
                    <div>
                      <input
                        type="checkbox"
                        value={hobbies.gardening}
                        checked={hobbies.gardening}
                        onChange={() => handleCheckbox('gardening')}
                        className="checkbox"
                      />
                      <span className="checkbox-mark"></span>
                    </div>
                  </label>
                </div>
              </div>

              <button
                className="btn btn-active mt-4 float-right w-full"
                type="submit"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default UserForm;
