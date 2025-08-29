import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AddItems from './components/AddItems'
import ItemsDisplay from './components/ItemsDisplay'
import Navbar from './Navbar/Navbar'

function App() {
  const [items, setItems] = useState([
    { name: "Grain", type: "Original", price: 20, brand: "Nike" },
    { name: "Veges", type: "New", price: 23, brand: "Olaola" },
    { name: "Carbon", type: "Original", price: 90, brand: "Nike" },
    { name: "Protein", type: "Original", price: 89, brand: "Nike" },
  ])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-items' element={<AddItems items={items} setItems={setItems} />} />
        <Route path='/items' element={<ItemsDisplay displayItems={items} />} />
      </Routes>
    </Router>
  )
}

export default App
