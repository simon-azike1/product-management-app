import { useState, useEffect } from "react";

const API_BASE = "http://localhost:3000"; 

const useDisplayLogic = () => {
  const [items, setItems] = useState([]);
  const [filter,setFilter] = useState("")

  // Fetch all items on mount
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(`${API_BASE}/items`);
        if (!res.ok) throw new Error("Failed to fetch items");
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  // Add new item
  const addItemToData = async (newItem) => {
    try {
      const res = await fetch(`${API_BASE}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });

      if (!res.ok) throw new Error("Failed to add item");

      const savedItem = await res.json();
      setItems((prevItems) => [...prevItems, savedItem]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  // Delete item
  const deleteItem = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/items/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete item");

      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  //Derived filtered List

  const filterItems = items.filter(item => {
    return (
      item.name?.toLowerCase().includes(filter.toLowerCase())||
      item.brand?.toLowerCase().includes(filter.toLowerCase())||
      item.type?.toLowerCase().includes(filter.toLowerCase())
    )
  })

  return { items, addItemToData, deleteItem , filter, setFilter,filterItems};
};

export default useDisplayLogic;
