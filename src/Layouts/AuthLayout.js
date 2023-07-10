import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../config/firebase';
import {useNavigate  } from 'react-router-dom';

const AuthLayout = ({children}) => {

    const [mount,setMount] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
            onAuthStateChanged(auth,(user)=>{
                if(user)
                {
                    navigate('/');
                }
                else{
                    setMount(false);
                    
                }
            })
    },[])

    if(mount){
        return <h1>loading...</h1>
    }
  return (
    <div>
            {children}
    </div>
  )
}

export default AuthLayout
