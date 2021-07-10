import React, { useState } from 'react';
import Input from './Input';
import Modal from './Modal';
import SelectControls from './SelectControls';

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
              <Input
                labelName="First Name"
                value={firstName}
                onInputChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
              />

              <Input
                labelName="Last Name"
                value={lastName}
                onInputChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />

              <Input
                labelName="Email"
                value={email}
                type="email"
                onInputChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />

              <Input
                labelName="Rating"
                value={rating}
                type="number"
                onInputChange={(e) => setRating(e.target.value)}
                placeholder="Email"
              />

              <Input
                labelName="Avatar"
                value={avatar}
                onInputChange={(e) => setAvatar(e.target.value)}
                placeholder="Avatar"
              />

              <SelectControls
                hobbies={hobbies}
                onCheckboxChange={(v) => handleCheckbox(v)}
              />

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
