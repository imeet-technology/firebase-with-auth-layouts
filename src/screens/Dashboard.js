import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import { useAuthContext } from '../context/AuthContext'




const Dashboard = () => {
  const {user,handleLogout} = useAuthContext();
  // const handle
  return (
            <MainLayout>
                <h1>Dashboard</h1>
                <p>{user && user?.displayName}</p>
                <button onClick={handleLogout} className="btn btn-danger">Logout</button>
            </MainLayout>
  )
}

export default Dashboard
