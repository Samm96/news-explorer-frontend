import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const Register = ({ isOpen, openModal, onClose, onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userRegisterData = {
      email,
      password,
      name,
    };
    onRegister(userRegisterData);
  };

  const handleInputReset = () => {
    setEmail("");
    setPassword("");
    setName("");
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
          name="email"
          autoComplete="off"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          minLength="2"
          maxLength="30"
          required
        />
        <span className="modal-form__error-message email-error"></span>
      </div>

      <div className="modal-form__input-container">
        <label className="modal-form__input-label" aria-label="password">
          Password
        </label>
        <input
          className="modal-form__input"
          type="password"
          name="password"
          autoComplete="off"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          minLength="2"
          maxLength="30"
          required
        />
        <span className="modal-form__error-message password-error"></span>
      </div>
      <div className="modal-form__input-container modal-form__input-container_type_username">
        <label className="modal-form__input-label" aria-label="username">
          Username
        </label>
        <input
          className="modal-form__input"
          type="text"
          name="username"
          autoComplete="off"
          placeholder="Enter your username"
          onChange={(e) => setName(e.target.value)}
          minLength="2"
          maxLength="30"
          required
        />
        <span className="modal-form__error-message username-error"></span>
      </div>
      <div className="modal-form__button-container">
        <button className="modal-form__button">Sign up</button>
      </div>
    </ModalWithForm>
  );
};

export default Register;
