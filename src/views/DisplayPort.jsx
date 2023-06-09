import React, {useState} from 'react'
import BoxGenerator from '../components/BoxGenerator'
import BoxForm from '../components/BoxForm'

const DisplayPort = () => {
    const [dataList, setDataList] = useState([])

    const dataBaton = (data) =>{
      // console.log(data)
      setDataList([...dataList, data])
    }
  return (
    <div>
        <BoxForm onNewData = {dataBaton}/>
        <BoxGenerator dataList = {dataList}/>
    </div>
  )
}

export default DisplayPort