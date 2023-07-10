import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import { useAuthContext } from '../context/AuthContext'

const Profile = () => {
  const {user,handleLogout}= useAuthContext();
  return (
    <MainLayout>
        <h1 className="text-center">Profile Page</h1>
        <p className='text-center h3 ' >{user?.displayName}</p>
        <p className='text-center h3 ' >{user?.email}</p>
        <div className="d-flex justfy-content-center">
        <button onClick={handleLogout} className="btn btn-danger h-25">Logout</button>
        <img src={user?.photoURL} className='w-25 h-25' />
        </div>
    </MainLayout>
  )
}

export default Profile
