import React, { useState } from 'react'

const BoxForm = (props) => {
  // const [color, setColor] = useState("")
  // const [size, setSize] = useState(100)
  const [data, setData] = useState([{color: "", size: 100}])

  const handleSumbit = (e) =>{
    e.preventDefault();
    // props.onNewColor(color)
    // props.onNewSize(size)

    // setData({
    //   color: color,
    //   size: parseInt(size)
    // })

    
    props.onNewData(data)

    //to clear the input values
    setData({color: "", size: ""})
  }

  // a method to handle the color change
  const handleColorChange = (e) =>{
    setData({...data,color: e.target.value})
    // data.color = e.target.value;
  }

  // a method to handle the size change
  const handleSizeChange = (e) =>{
    setData({...data,size: parseInt(e.target.value)})
    // data.size = parseInt(e.target.value);
  }

  return (
    <form onSubmit={ handleSumbit }>
      <h1>Box Generator :3</h1>
      <br />
      <label htmlFor="">Color: </label>
      <input
        type="text"
        onChange={ handleColorChange } 
        value = {data.color} />
      <br />

      <label htmlFor="">Size(in Pixel): </label>
      <input type="number"
        onChange= {handleSizeChange} 
        value = {data.size}/>
      <br />
      <input type="submit" value="Add"/>
    </form>
  )
}

export default BoxForm