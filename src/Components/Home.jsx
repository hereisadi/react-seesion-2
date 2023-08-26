import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
const Home = () => {
    const navigate = useNavigate()

    const handleAbout = () => {
        navigate("/about")
    }
    
    useEffect(()=>{
        document.title="Home"
    })
    
    return (
        <>
            <h1>This is a home page</h1>
            <Link to="/about">About page</Link>
            {/* <a href="/about">About</a> */}
            <button onClick={handleAbout} >Click here to go to about page</button>
        </>
    )
}

export default Home