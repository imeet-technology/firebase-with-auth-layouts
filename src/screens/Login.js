import {   signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { auth } from '../config/firebase';
import {useNavigate} from 'react-router-dom';
import AuthLayout from '../Layouts/AuthLayout';


const Login = () => {
const navigate = useNavigate();
    const [value,setValue] = useState({
      
        email:'',
        password:""
    });


    const LoginWithGoogle = async()=>{
      const Provider = new GoogleAuthProvider();
      try {
              await signInWithPopup(auth,Provider);
              navigate("/");
      } catch (error) {
        console.log(`error: ${error.message}`)
      }
    }

    const changeHandler = e=>{
        setValue({...value,[e.target.name]:e.target.value})
    }

    const submitHandler = async()=>{
        try {
                   await signInWithEmailAndPassword(auth,value.email,value.password);
                    navigate("/");
                  
        } catch (error) {
            alert(`err : ${error?.message}`)

        }
    }

  return (
  <AuthLayout>
      <div className='container mx-5'>
       <form onSubmit={(e)=>{e.preventDefault();submitHandler()}}>
 
  <div class="mb-3">
    <label class="form-label">Email address</label>
    <input type="email" class="form-control" name='email' value={value?.email} onChange={changeHandler}/>
   
  </div>
  <div class="mb-3">
    <label  class="form-label">Password</label>
    <input type="password" class="form-control" name='password' value={value?.password} onChange={changeHandler} />
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<Link to={'/register'} className='text-center h2'>Don't Have An account</Link>
<button onClick={LoginWithGoogle} className="btn btn-sm btn-secondary">Login with google</button>
    </div>
  </AuthLayout>
  )
}

export default Login
