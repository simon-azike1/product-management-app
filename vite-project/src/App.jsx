import { useState } from 'react'
import AddItems from './components/AddItems'
import ItemsDisplay from './components/ItemsDisplay'
import SearchBar from './components/SearchBar'
import useDisplayLogic from './hooks/useDisplayLogic'
import Home from './components/Home'


function App() {
  
  return (
    <>
  <Home/>
  <AddItems/>
    </>
  )
}

export default App
