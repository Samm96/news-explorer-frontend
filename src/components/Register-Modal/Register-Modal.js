import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const Register = ({ isOpen, openModal, onClose, onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userRegisterData = {
      email,
      password,
      username,
    };
    onRegister(userRegisterData);
  };

  const handleInputReset = () => {
    setEmail("");
    setPassword("");
    setUsername("");
  };

  useEffect(() => {
    handleInputReset();
  }, []);

  return (
    <ModalWithForm
      isOpen={isOpen}
      modalTitle="Sign up"
      linkText="Sign in"
      openModal={openModal}
      formName="register"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="modal-form__input-container">
        <label className="modal-form__input-label" aria-label="email">
          Email
        </label>
        <input
          className="modal-form__input"
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          minLength="2"
          maxLength="30"
          required
        />
      </div>

      <div className="modal-form__input-container">
        <label className="modal-form__input-label" aria-label="password">
          Password
        </label>
        <input
          className="modal-form__input"
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          minLength="2"
          maxLength="30"
          required
        />
      </div>
      <div className="modal-form__input-container modal-form__input-container_type_username">
        <label className="modal-form__input-label" aria-label="username">
          Username
        </label>
        <input
          className="modal-form__input"
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
          minLength="2"
          maxLength="30"
          required
        />
      </div>
      <div className="modal-form__button-container">
        <button className="modal-form__button">Sign up</button>
      </div>
    </ModalWithForm>
  );
};

export default Register;
