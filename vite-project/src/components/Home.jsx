import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to Product Management App</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
        Manage your products efficiently. Add new items, search, and keep track of your inventory with ease.
      </p>
      <div className="flex gap-4">
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Add Item
        </button>
        <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
          View Items
        </button>
      </div>
    </div>
  )
}

export default Home
