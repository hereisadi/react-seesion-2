import { useState } from 'react'
import { info } from '../Components/Data'
import './Rendering.css'
const RenderingList = () => {
    console.log(info[1]["items"][1]["name"])
    // console.log()

    const [count, setCount] = useState(0)

    const [hide, setHide] = useState(false)

    const handleClick = () => {
        setCount(count + 1)
    }

    const handleDecrease = () => {
        setCount(count - 1)
    }

    const handleClickDiv = () => {
        setHide(prev => !prev)
    }

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
            <br /><br />

            {count}
            <button onClick={handleClick}>increment me</button>
            <button onClick={handleDecrease}>decrement me</button>

            <div className={`mydiv2 ${hide ? "hiddendiv" : ""}`} ></div>
            <button onClick={handleClickDiv}>
                {hide ? "Show above div" : "Hide above div"}
            </button>
        </>
    )
}

export default RenderingList