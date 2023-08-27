// import React from 'react'
import { useEffect } from "react"
// eslint-disable-next-line react/prop-types
const Event = ({ title }) => {
    useEffect(() => {
        document.title = title
    })

    const name = "ram"
    return (
        <div>
            {title}
            <div>
                {/* {name} */}
               {name}
            </div>

            {/* <div>
                <h1>this is h1</h1>
            </div> */}
        </div>
    )
}

export default Event