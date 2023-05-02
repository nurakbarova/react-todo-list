import React, { useState } from "react";


function App() {
  const [newItem, setNewItem] = useState()
  const [items, setItems] = useState([])

  function addItem() {

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }

    setItems(oldItems => [...oldItems, items])
    setNewItem = ""
  }

  function deleteItem(id) {
    const newArr = items.filter(item => item.id != id)
    setItems(newArr)
  }

  return (

    < >
      <h1>To Do List</h1>
      <input name="name" type="text" onChange={e => setNewItem(e.target.value)} placeholder="todo"
        value={newItem}

      />
      <button onClick={(() => addItem)}>ADD</button>
      <ul>
        <li>salam <button>delete</button></li>
        {/* {
          items.map(item => {
            return (
              <li>salam</li>
              // <li key={item.id}>{item.value} <button  onClick={() => deleteItem(item.id)>DELETE</button></li>
            )
          })
        } */}
      </ul>
    </>
  )
}
export default App;
