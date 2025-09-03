import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AddItems from './components/AddItems'
import ItemsDisplay from './components/ItemsDisplay'
import Navbar from './Navbar/Navbar'
import useDisplayLogic from './hooks/useDisplayLogic'
import { ItemsProvider } from './components/ItemsContext'

function App() {
  const {items,addItemToData} = useDisplayLogic();
 

  return (
    <ItemsProvider>
 <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-items' element={<AddItems addItemToData={addItemToData}/>} />
        <Route path='/items' element={<ItemsDisplay displayItems={items} />} />
      </Routes>
    </Router>
    </ItemsProvider>
  )
}

export default App
