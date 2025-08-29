import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">Welcome to Product Management App</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
        Manage your products efficiently. Add new items, search, and keep track of your inventory with ease.
      </p>
      <div className="flex gap-4">
       <Link to="/add-items"> <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer transition">
          Add Items
        </button> </Link>
        
        <Link to="/items">
        <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700  transition duration-500 cursor-pointer">
          View Items
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
