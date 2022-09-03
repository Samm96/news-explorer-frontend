import React, { useState, useEffect, useCallback, useRef } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormValidator } from "../../hooks/useFormValidation";
import { errorMsgs } from "../../utils/constants";

const Register = ({ isOpen, openModal, onClose, onRegister }) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const { values, isValid, errors, handleChange, resetForm } = useFormValidator(
    ["register-email", "register-password", "register-username"]
  );

  const {
    "register-email": email,
    "register-password": password,
    "register-username": username,
  } = values;

  const initialValues = {
    "register-email": "",
    "register-password": "",
    "register-username": "",
  };

  const initialValuesRef = useRef(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userRegisterData = {
      email: email,
      password: password,
      name: username,
    };
    if (isFormValid === true) {
      onRegister(userRegisterData);
      handleFormReset();
    }
  };

  const handleFormChange = () => {
    isValid ? setIsFormValid(true) : setIsFormValid(false);
  };

  useEffect(() => {

    if (!isValid && errors.email) {
      setEmailError('modal-form__error-message_visible');
    } else {
      setEmailError("");
    }

    if (!isValid && errors.password) {
      setPasswordError('modal-form__error-message_visible');
    } else {
      setPasswordError("");
    }

    if (!isValid && errors.username) {
      setUsernameError('modal-form__error-message_visible');
    } else {
      setUsernameError("");
    }
  }, [errors.email, errors.password, errors.username, isValid])


  useEffect(() => {
    if (isFormValid === false) {
      setButtonDisabled("modal-form__button_disabled");
    } else if (isFormValid === true) {
      setButtonDisabled("");
    }
  }, [isFormValid, isValid]);

  const handleFormReset = useCallback(() => {
    resetForm({ ...initialValuesRef }, { ...initialValuesRef }, true);
  }, [initialValuesRef, resetForm]);

  useEffect(() => {
    handleFormReset();
  }, [onClose, handleFormReset]);

  return (
    <ModalWithForm
      isOpen={isOpen}
      modalTitle="Sign up"
      linkText="Sign in"
      openModal={openModal}
      formName="register"
      onClose={onClose}
      onSubmit={handleSubmit}
      onChange={handleFormChange}
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
          onChange={handleChange}
          defaultValue={email || ""}
          minLength="2"
          maxLength="30"
          required
        />
        <span className={`modal-form__error-message ${emailError} register-email`}>hello</span>
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
          onChange={handleChange}
          defaultValue={password || ""}
          minLength="2"
          maxLength="30"
          required
        />
        <span className={`modal-form__error-message ${passwordError} register-password`}>hello</span>
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
          onChange={handleChange}
          defaultValue={username || ""}
          minLength="2"
          maxLength="30"
          required
        />
        <span className={`modal-form__error-message ${usernameError} register-username`}>hello</span>
      </div>
      <div className="modal-form__button-container">
        <span className="modal-form__error-message modal-form__error-message_type_form form-error"></span>
        <button className={`modal-form__button ${isButtonDisabled}`}>
          Sign up
        </button>
      </div>
    </ModalWithForm>
  );
};

export default Register;
