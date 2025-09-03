import React, { useContext } from 'react'
import { ItemsContext } from './ItemsContext'
import Button from '../Buttons/Button'
import { Link } from 'react-router-dom'

const ItemsDisplay = () => {
  const { items = [], deleteItem , filter, setFilter,filterItems= []} = useContext(ItemsContext)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Product Inventory
        </h2>

{/* Search Input */}
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search by name, brand, or type..."
          className="w-full p-2 mb-4 border rounded"
        />
{/* Filtered Section */}
{filter && (
  filterItems.length === 0 ? (
    <p className="text-gray-500 text-center">No items match your search.</p>
  ) : (
    <ul className="divide-y divide-gray-200">
      {filterItems.map((item, index) => (
        <li key={index} className="py-3 px-2 flex flex-col gap-1 hover:bg-blue-50 transition rounded">
          <span className="text-gray-800 font-medium">Name: {item.name}</span>
          <span className="text-green-600 font-semibold">Price: ₦{item.price}</span>
          <span className="text-gray-500">Brand: {item.brand}</span>
          <span className="text-gray-400">Type: {item.type}</span>
        </li>
      ))}
    </ul>
  )
)}

        {items.length === 0 ? (
          <p className="text-gray-500 text-center">No items to display.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {items.map((item) => (
              <li
                key={item.id}
                className="py-3 px-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 hover:bg-blue-50 transition rounded"
              >
                <div className="flex flex-col">
                  <span className="text-gray-800 font-medium">Name: {item.name}</span>
                  <span className="text-green-600 font-semibold">Price: ₦{item.price}</span>
                  <span className="text-gray-500">Brand: {item.brand}</span>
                  <span className="text-gray-400">Type: {item.type}</span>
                </div>

                <Button
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                  onClick={() => deleteItem(item.id)}
                >
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex justify-center">
          <Link to="/add-items">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Add New Item
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ItemsDisplay
