import React from 'react'
import { useAuthStore } from '../../store/authUser'

function HomeScreen() {

  const { logout } =  useAuthStore()

  return (
    <div>
      <h1>Home Screen</h1>
      <p>This is the HomeScreen component.</p>
      <button onClick={logout}>Logout </button>
    </div>
  )
}

export default HomeScreen