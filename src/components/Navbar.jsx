import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"
import jwtDecode from "jwt-decode"
import { useEffect, useState } from "react"
import axios from "axios"
const Navbar = () => {
    const { uId, setUid } = UserAuth()
    const [data, setData] = useState({})
    const navigate = useNavigate();
    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("AuthToken")
            const decodedData = jwtDecode(token)
            const userId = decodedData.userId;
            setUid(userId)
            axios.get(`http://localhost:5100/user/${userId}`)
                .then((response) => setData(response.data))
                .catch((err) => {
                    console.log(err);
                })
        }
        fetchUser()
    }, [])
    // console.log(currUser);

    return (
        <div className="bg-[#752175]  h-[4.5rem] flex flex-row items-center justify-around sticky top-0 z-10">
            <div>
                <h1 className=" font-bold text-3xl text-white">CMS</h1>
            </div>
            <div>
                <div className="flex flex-row items-center gap-6 font-medium text-xl  text-white cursor-pointer ">
                    <div>
                        <Link to='/'>
                            Home
                        </Link>
                    </div>
                    <div>
                        <Link to={'/create'}>
                            Create
                        </Link>
                    </div>
                    <div>
                        <Link to={'/profile'}>
                            Profile
                        </Link>
                    </div>
                    <div>
                        {uId ? <p>{data?.name}</p> : <Link to={'/signup'}>Signup</Link>}
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Navbar