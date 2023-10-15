import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"


const Profile = () => {
    const [blogs, setBlogs] = useState([])
    const [author, setAuthor] = useState({})
    const navigate = useNavigate()
    const { uId } = UserAuth()
    useEffect(() => {
        const getAllBlogs = async () => {
            try {
                const response = await axios.get("http://localhost:5100/getallblogs")
                // console.log(response.data);
                setBlogs(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        getAllBlogs()
    }, [])
    useEffect(() => {
        const getAuthorDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5100/getauthordetails/${uId}`)
                console.log(response.data);
                setAuthor(response.data)

            } catch (error) {
                console.log(error);
            }
        }
        getAuthorDetails()
    }, [])
    const handleLogout = () => {
        localStorage.clear()
        navigate("/login")
        navigate(0)
    }
    return (
        <div className="h-[70vh] mt-4 flex flex-row items-center justify-center gap-4">
            <div>
                <img src={author?.img} alt="error" className="object-cover w-[400px] rounded-full" />
            </div>
            <div className="bg-gray-400 p-4">
                <h3 className="text-center font-semibold text-xl">Author Name: {author?.name}</h3>
                {uId && <h2 className="text-center font-semibold text-xl">Number of BLogs: {blogs?.length}</h2>}
                <h3 className="text-center font-medium text-xl">Blog List:</h3>
                {
                    uId && blogs.map((blog, index) => <div key={index} className="flex flex-col items-center justify-center">
                        <li className="text-start font-normal text-lg cursor-pointer" onClick={() => navigate(`/${blog._id}`)}>{blog?.BlogName}</li>
                    </div>)
                }
                <div className="text-center mt-2">
                    <button className="bg-red-700 px-3 py-1 text-white " onClick={() => handleLogout()}>Logout</button>
                </div>
            </div>

        </div>
    )
}
export default Profile