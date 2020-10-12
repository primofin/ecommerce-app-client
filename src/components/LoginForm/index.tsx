import React from 'react'

import './loginForm.scss'

const LoginForm = () => {
  return (
    <div className="login form__wrapper">
      <div className="form__title">Are you a user? </div>
      <form className="form__content">
        <label className="form__content__label">
          Username:
          <br />
          <input type="text" name="name" />
        </label>
        <label className="form__content__label">
          Password:
          <br />
          <input type="text" name="password" />
        </label>
        <button type="submit" value="Submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
