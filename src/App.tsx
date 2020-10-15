import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Routes from './Routes'
import { userAuthenticate } from './redux/actions/auth'
import './app.scss'

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userAuthenticate())
  }, [])
  return (
    <div className="app-wrapper">
      <Routes />
    </div>
  )
}
