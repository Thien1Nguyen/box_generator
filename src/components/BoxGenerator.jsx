import React from 'react'

const BoxGenerator = (props) => {


    return (
        <div>
            <h1>My Precious</h1>
            <div className='container'>
                {
                    props.dataList.map((c, i) =>{


                        return(
                            <div key={i} style={{backgroundColor:c.color, height:c.size, width:c.size, borderRadius:10}}></div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default BoxGenerator