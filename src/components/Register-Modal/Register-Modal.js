import React, { useState, useEffect, useCallback, useRef } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormValidator } from "../../hooks/useFormValidation";

const Register = ({ isOpen, openModal, onClose, onRegister, submitError }) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [formError, setFormError] = useState("");

  const { values, isValid, errors, handleChange, resetForm } = useFormValidator(
    ["register-email", "register-password", "register-name"]
  );

  const {
    "register-email": email,
    "register-password": password,
    "register-name": name,
  } = values;

  const initialValues = {
    "register-email": "",
    "register-password": "",
    "register-name": "",
  };

  const initialValuesRef = useRef(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userRegisterData = {
      email: email,
      password: password,
      name: name,
    };
    onRegister(userRegisterData);
    handleFormReset();
  };

  const handleFormChange = () => {
    isValid ? setIsFormValid(true) : setIsFormValid(false);
  };

  const handleFormReset = useCallback(() => {
    resetForm({ ...initialValuesRef }, { ...initialValuesRef }, false);
  }, [initialValuesRef, resetForm]);

 
  useEffect(() => {
    if (!isValid && errors["register-email"]) {
      setEmailError("modal-form__error-message_visible");
    } else {
      setEmailError("");
    }

    if (!isValid && errors["register-password"]) {
      setPasswordError("modal-form__error-message_visible");
    } else {
      setPasswordError("");
    }

    if (!isValid && errors["register-name"]) {
      setUsernameError("modal-form__error-message_visible");
    } else {
      setUsernameError("");
    }

    if (isFormValid === false) {
      setButtonDisabled("modal-form__button_disabled");
    } else if (isFormValid === true) {
      setButtonDisabled("");
    }

    if (submitError) {
      setFormError("modal-form__error-message_visible");
    } else {
      setFormError("");
    }
  }, [errors, errors.email, errors.password, errors.username, isFormValid, isValid, submitError]);


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
          className="modal-form__input register-email"
          id="register-email"
          type="email"
          name="register-email"
          autoComplete="off"
          placeholder="Enter email"
          onChange={handleChange}
          defaultValue={email}
          minLength="2"
          maxLength="30"
          required
        />
        <span
          className={`modal-form__error-message ${emailError} register-email`}
        >
          {errors["register-email"]}
        </span>
      </div>

      <div className="modal-form__input-container">
        <label className="modal-form__input-label" aria-label="password">
          Password
        </label>
        <input
          className="modal-form__input register-password"
          id="register-password"
          type="password"
          name="register-password"
          autoComplete="off"
          placeholder="Enter password"
          onChange={handleChange}
          defaultValue={password}
          minLength="2"
          maxLength="30"
          required
        />
        <span
          className={`modal-form__error-message ${passwordError} register-password`}
        >
          {errors["register-password"]}
        </span>
      </div>
      <div className="modal-form__input-container modal-form__input-container_type_username">
        <label className="modal-form__input-label" aria-label="username">
          Username
        </label>
        <input
          className="modal-form__input register-name"
          id="register-name"
          type="text"
          name="register-name"
          autoComplete="off"
          placeholder="Enter your username"
          onChange={handleChange}
          defaultValue={name}
          minLength="2"
          maxLength="30"
          required
        />
        <span
          className={`modal-form__error-message ${usernameError} register-name`}
        >
          {errors["register-name"]}
        </span>
      </div>
      <div className="modal-form__button-container">
        <span
          className={`modal-form__error-message modal-form__error-message_type_form ${formError} form-error`}
        >
          {submitError}
        </span>
        <button className={`modal-form__button ${isButtonDisabled}`}>
          Sign up
        </button>
      </div>
    </ModalWithForm>
  );
};

export default Register;
