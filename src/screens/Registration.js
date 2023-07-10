import { createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { auth } from '../config/firebase';
import AuthLayout from '../Layouts/AuthLayout';


const Registration = () => {

    const [value,setValue] = useState({
        name:'',
        email:'',
        password:""
    });
    const changeHandler = e=>{
        setValue({...value,[e.target.name]:e.target.value})
    }

    const submitHandler = async()=>{
        try {
                  await createUserWithEmailAndPassword(auth,value.email,value.password);
                    await updateProfile(auth?.currentUser,{
                        displayName:value?.name,
                        photoURL:"https://cdn.pixabay.com/photo/2015/07/20/12/57/ambassador-852766_1280.jpg"
                    })

                    signOut(auth);
                    alert("register successful")
        } catch (error) {
            alert(`err : ${error?.message}`)

        }
    }

  return (
    <AuthLayout>
      <div className='container mx-5'>
       <form onSubmit={(e)=>{e.preventDefault();submitHandler()}}>
       <div class="mb-3">
    <label class="form-label">Name</label>
    <input type="text" class="form-control" name='name' value={value?.name} onChange={changeHandler} />
  </div>
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
<Link to={'/login'} className='text-center h2'>Already Have An account</Link>
    </div>
    </AuthLayout>
  )
}

export default Registration
