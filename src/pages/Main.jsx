import { useEffect, useState } from "react"
import Content from "../components/Content"
import SideBar from "../components/SideBar"
import axios from "axios"
import { UserAuth } from "../context/AuthContext"
import jwtDecode from "jwt-decode"


const Main = () => {
    const [posts, setPosts] = useState([])
    // const { setCurrUser } = UserAuth()
    // useEffect(() => {
    //     const token = localStorage.getItem("AuthToken")
    //     const decodedData = jwtDecode(token)
    //     const userId = decodedData.userId;
    //     setCurrUser(userId)

    // }, [])
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("http://localhost:5100/getposts")
                if (response.status === 200) {
                    setPosts(response.data)

                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchPosts()
    }, [])
    console.log(posts);
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5100/delete/${id}`)
        const restOfPosts = posts?.filter((post) => post?._id !== id)
        setPosts(restOfPosts)
    }
    return (
        <div className="px-4 flex flex-row justify-center items-start  gap-4">
            <div className="flex flex-col gap-4 overflow-scroll" >
                <h3 className="mt-2 font-semibold text-center text-2xl">Top Blogs</h3>
                {
                    posts.map((post, index) => <Content key={index} post={post} handleDelete={handleDelete} />)
                }
            </div>
            <SideBar posts={posts} />
        </div>
    )
}
export default Main