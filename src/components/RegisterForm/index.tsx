import React from 'react'

import './registerForm.scss'

const RegisterForm = () => {
  return (
    <div className="register form__wrapper">
      <div className="form__title">Is this your first visit?</div>
      <form className="form__content">
        <label className="form__content__label">
          Username:
          <br />
          <input type="text" name="username" />
        </label>
        <label className="form__content__label">
          First name:
          <br />
          <input type="text" name="firstName" />
        </label>
        <label className="form__content__label">
          Last name:
          <br />
          <input type="text" name="lastName" />
        </label>
        <label className="form__content__label">
          Email:
          <br />
          <input type="text" name="email" />
        </label>
        <label className="form__content__label">
          Password:
          <br />
          <input type="text" name="password" />
        </label>
        <button type="submit" value="Submit">
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterForm
