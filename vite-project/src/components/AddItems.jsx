"use client"

import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { ItemsContext } from "./ItemsContext"

const AddItems = () => {
  const { addItemToData } = useContext(ItemsContext)
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [brand, setBrand] = useState("")
  const [type, setType] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !price || !brand || !type) {
      setMessage("Please fill in all fields")
      return
    }

    const newItems = { name, price, brand, type }
    addItemToData(newItems)

    setMessage(`Item "${name}" added successfully!`)
    setName("")
    setPrice("")
    setBrand("")
    setType("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white p-6">
      <div className="max-w-2xl mx-auto mt-23">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Add New Product</h1>
          <p className="text-muted-foreground">Fill in the details below to add a new item to your inventory</p>
        </div>

        <div className="bg-card rounded-2xl shadow-lg border border-border p-8">
          {message && (
            <div
              className={`mb-6 p-4 rounded-lg text-center font-medium ${
                message.includes("successfully")
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : "bg-destructive/10 text-destructive border border-destructive/20"
              }`}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                Product Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors text-card-foreground placeholder-muted-foreground"
                placeholder="Enter product name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="price" className="block text-sm font-semibold text-foreground">
                Price
              </label>
              <input
                id="price"
                type="text"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors text-card-foreground placeholder-muted-foreground"
                placeholder="Enter price"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="brand" className="block text-sm font-semibold text-foreground">
                Brand
              </label>
              <input
                id="brand"
                type="text"
                name="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors text-card-foreground placeholder-muted-foreground"
                placeholder="Enter brand name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="type" className="block text-sm font-semibold text-foreground">
                Category
              </label>
              <input
                id="type"
                type="text"
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors text-card-foreground placeholder-muted-foreground"
                placeholder="Enter product category"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                Add Product
              </button>
              <Link
                to="/items"
                className="flex-1 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold py-3 px-6 rounded-lg transition-colors text-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                View Inventory
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddItems
