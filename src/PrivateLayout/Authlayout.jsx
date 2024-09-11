import React from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import auth from '../Firebase/Auth'
import { logout } from '../Redux/Authslice'
import { login } from '../Redux/Authslice'

function Authlayout() {
    const dispatch = useDispatch()
    const[loading,setloading] = useState(true)
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
              dispatch(login({ user }));
            } else {
              dispatch(logout());
            }
            setloading(false);
          });
      
          return () => {
            if (typeof unsubscribe === 'function') {
              unsubscribe();
            }
          };
      },[dispatch])
 
    return loading ?(<div className='text-3xl text-white'>Loading...</div>) : (<Outlet/>)
 
}

export default Authlayout