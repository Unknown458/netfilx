import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Signup from './Components/Signup.jsx'
import Signin from './Components/Signin.jsx'
import Home from './Components/Home.jsx'
import RegiPage1 from './Components/RegiPage1.jsx'
import RegiForm2 from './Components/RegiForm2.jsx'
import { Provider } from 'react-redux'
import store from './Redux/Store.js'
import Private from './PrivateLayout/Private.jsx'
import Authlayout from './PrivateLayout/Authlayout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Authlayout/>}>
   <Route element={<Private/>}>
    <Route path='/' element={<App/>}/>
    <Route path='browse' element={<Home/>}/>
    </Route>
    <Route path='sign' element={<Signup/>}/>
    <Route path='login' element={<Signin/>}/>
    <Route path='regi' element={<RegiPage1/>}/>
    <Route path='regiform' element={<RegiForm2/>}/>
    </Route>

    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
       <RouterProvider router={router}/>
    </React.StrictMode>
  </Provider>
)
