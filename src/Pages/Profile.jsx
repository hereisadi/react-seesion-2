import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet"
const Profile = () => {
    const { userid } = useParams()
    return (
        <>
            <Helmet>
                <title>
                    {userid}
                </title>
            </Helmet>
            <h1>current dynamic route: {userid}</h1>
        </>
    )
}

export default Profile