import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const Login = ({ isOpen, openModal, onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userLoginData = {
      email,
      password
    };
    onLogin(userLoginData);
  };

  const handleInputReset = () => {
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    handleInputReset();
  }, []);

  return (
    <ModalWithForm
      isOpen={isOpen}
      modalTitle="Sign in"
      buttonText="Sign in"
      linkText="Sign up"
      openModal={openModal}
      formName="login"
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
          minLength="2"
          maxLength="30"
          required
        />
      </div>
    </ModalWithForm>
  );
};

export default Login;
