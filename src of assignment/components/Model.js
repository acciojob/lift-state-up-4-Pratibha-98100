import React, { useState } from 'react'

function Model() {


  let [name, setName] = useState("");

  let [price, setPrice] = useState("");

  let [adding , updateAdd] = useState(false);
 
  function add(){
     updateAdd(adding===true);
  }

  return (
    <div className='parent'>
      
      <h1>Parent Component</h1>

      <form>
          <label htmlFor="itemName">Item Name:</label>
          <input type="text" id="itemName" onChange={(e)=> setName(e.target.value)} value={name} />

          <label htmlFor="itemPrice">Item Price:</label>
          <input type="text" id="itemPrice" onChange={(e)=> setPrice(e.target.value)} value={price} />

          <button onClick={add}>Add Item</button>
      </form>

      <div className='child'>
        <h2>Child Component</h2>
        
        <ul>
          { adding===true ? <li>{name} - $ {price}<button>Remove</button></li>: null}
        </ul>
      </div>

    </div>
  )
}

export default Model
