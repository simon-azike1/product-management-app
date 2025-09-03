import { useState , useContext} from 'react'
import Button from '../Buttons/Button'
import {Link} from 'react-router-dom'
import { ItemsContext } from './ItemsContext'

const AddItems = () => {
  const {addItemToData} = useContext(ItemsContext);
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

    const newItems = {name,price,brand,type};
    addItemToData(newItems);

    setMessage(`Item "${name}" added successfully!`)
    setName('')
    setPrice('')
    setBrand('')
    setType('')
  }

  return (
    <>
      <div className='bg-gray-100 p-6 rounded-lg max-w-md mx-auto mt-8 flex-col text-black items-center bg-[url("./assets/img/logo.jpg")] bg-cover bg-no-repeat h-full'>
        {message && <div className='text-black flex   p-2 items-center justify-center'>{message} 
         </div>} 
        
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 ' >
          <label htmlFor="name" className='font-semibold'>Name:</label>
          <input
            id='name'
            type="text"
            name='name'
            value={name}
            onChange={e => setName(e.target.value)}
            className='p-2 rounded border'
          />
          <label htmlFor="price" className='font-semibold '>Price:</label>
          <input
            id='price'
            type="text"
            name='price'
            value={price}
            onChange={e => setPrice(e.target.value)}
            className='p-2 rounded border'
          />
          <label htmlFor="brand" className='font-semibold'>Brand</label>
          <input
            id='brand'
            type="text"
            name='brand'
            value={brand}
            onChange={e => setBrand(e.target.value)}
            className='p-2 rounded border'
          />
          <label htmlFor="type" className='font-semibold'>Type</label>
          <input
            id='type'
            type="text"
            name='type'
            value={type}
            onChange={e => setType(e.target.value)}
            className='p-2 rounded border'
          />
          <div className="flex flex-row gap-4 justify-center items-center">
             <button type="submit" className='flex gap-3 border-none bg-blue-400 p-2 rounded m-4 mt-4 cursor-pointer hover:bg-blue-700 transition  text-white font-semibold hover:text-white'>Add items </button>
           <Link to="/items">
          <Button className="bg-green-600 hover:text-black font-semibold p-2 rounded">View Items</Button>
        </Link>
          </div>
        </form>
      </div>
    </>
  )
}
export default AddItems;
