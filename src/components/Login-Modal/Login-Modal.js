import React, { useState, useEffect, useRef, useCallback } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormValidator } from "../../hooks/useFormValidation";

const Login = ({ isOpen, openModal, onClose, onLogin, submitError }) => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState("");
  const [formError, setFormError] = useState("");

  const { values, isValid, errors, handleChange, resetForm } = useFormValidator(
    ["login-email", "login-password"]
  );

  const { "login-email": email, "login-password": password } = values;

  const initialValues = {
    "login-email": "",
    "login-password": "",
  };

  const initialValuesRef = useRef(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userLoginData = {
      email: email,
      password: password,
    };
    onLogin(userLoginData);
    if (!submitError) {
      handleReset();
      setFormError("");
    } else {
      setFormError("modal-form__error-message_visible");
      setButtonDisabled("modal-form__button_disabled");
    }
  };

  const handleFormChange = () => {
    isValid ? setIsFormValid(true) : setIsFormValid(false);
  };

  useEffect(() => {
    if (!isValid && errors["login-email"]) {
      setEmailError("modal-form__error-message_visible");
    } else {
      setEmailError("");
    }

    if (!isValid && errors["login-password"]) {
      setPasswordError("modal-form__error-message_visible");
    } else {
      setPasswordError("");
    }

    if (isFormValid === false) {
      setButtonDisabled("modal-form__button_disabled");
    } else if (isFormValid === true) {
      setButtonDisabled("");
    }
  }, [
    errors,
    errors.email,
    errors.password,
    errors.username,
    isFormValid,
    isValid,
  ]);

  const handleReset = useCallback(() => {
    resetForm(
      { ...initialValuesRef.current },
      { ...initialValuesRef.current },
      true
    );
    setFormError("");
  }, [initialValuesRef, resetForm]);

  useEffect(() => {
    if (onClose) {
      handleReset();
    }
  }, [handleReset, onClose]);

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
      onChange={handleFormChange}
    >
      <div className="modal-form__input-container">
        <label className="modal-form__input-label" aria-label="email">
          Email
        </label>
        <input
          className="modal-form__input"
          id="login-email"
          type="email"
          name="login-email"
          autoComplete="on"
          placeholder="Enter email"
          onChange={handleChange}
          value={email}
          minLength="2"
          maxLength="30"
          required
        />
        <span className={`modal-form__error-message ${emailError} email-error`}>
          {errors["login-email"]}
        </span>
      </div>

      <div className="modal-form__input-container">
        <label className="modal-form__input-label" aria-label="password">
          Password
        </label>
        <input
          className="modal-form__input"
          id="login-password"
          type="password"
          name="login-password"
          autoComplete="current-password"
          placeholder="Enter password"
          onChange={handleChange}
          value={password}
          minLength="2"
          maxLength="30"
          required
        />
        <span
          className={`modal-form__error-message ${passwordError} password-error`}
        >
          {errors["login-password"]}
        </span>
      </div>
      <div className="modal-form__button-container">
        <span
          className={`modal-form__error-message modal-form__error-message_type_form ${formError} form-error`}
        >
          {submitError}
        </span>
        <button className={`modal-form__button ${isButtonDisabled}`}>
          Sign in
        </button>
      </div>
    </ModalWithForm>
  );
};

export default Login;
