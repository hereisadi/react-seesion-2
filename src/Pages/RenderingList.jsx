// import React from 'react'
import { info } from '../Components/Data'
const RenderingList = () => {
    console.log(info[1]["items"][1]["name"])
    // console.log()
    return (
        <>
            {info.map((data) => {
                return (
                    <div key={data.id}>
                        {/* <h1>{item.id}</h1> */}
                        <h1>{data.category}</h1>
                        <div>
                            {data.items.map((abc) => {
                                return (
                                    <div key={abc.id}>
                                        <span>{abc.name}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default RenderingList