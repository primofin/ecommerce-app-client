import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { StylesProvider } from '@material-ui/core/styles'

import Routes from './Routes'
import { userAuthenticate } from './redux/actions/auth'
import { getAllItemsFromLocalStorage } from './redux/actions/local'
import './app.scss'

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userAuthenticate())
    dispatch(getAllItemsFromLocalStorage())
  }, [])
  return (
    <StylesProvider injectFirst>
      <div className="app-wrapper">
        <Routes />
      </div>
    </StylesProvider>
  )
}
