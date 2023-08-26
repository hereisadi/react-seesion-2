import { useEffect } from "react"
const About = () => {

    useEffect(() => {
        document.title = "About page"
    })
    return (

        <div>
            <h1>This is a about page</h1>
        </div>
    )
}

export default About