import axios from "axios"
import { useNavigate } from "react-router-dom"

const Content = ({ post, handleDelete }) => {
    const formatTime = (time) => {
        const options = { day: "numeric", month: "numeric", year: "numeric", hour: "numeric", minute: "numeric" }
        return new Date(time).toLocaleString("en-US", options)
    }
    const navigate = useNavigate()

    return (
        <>

            <div className="flex-[0.5] p-4" >
                <ul className="flex flex-col flex-wrap space-y-1 w-[80%] mx-auto bg-[#ccdd] p-6 rounded-lg">
                    <div className="flex flex-row items-center justify-between">
                        <div>
                            <li className="font-semibold text-lg">
                                {post?.BlogName}
                            </li>
                            <li className="font-normal text-sm">
                                {`by ${post?.AuthorName}`}
                            </li>
                            <li className="font-medium text-lg">
                                posted on {formatTime(post?.PostDate)}
                            </li>
                        </div>
                        <div className="flex flex-row gap-2 items-center font-bold ">
                            <button className="bg-red-700 p-2 text-white rounded-md" onClick={() => navigate(`/edit/${post?._id}`)}>Edit</button>
                            <button className="bg-green-800 p-2 text-white rounded-md" onClick={() => handleDelete(post?._id)}>delete</button>
                        </div>
                    </div>


                    <li onClick={() => navigate(`/${post?._id}`)} ><img className="h-[500px] w-full object-contain" src={post?.thumbnail} alt="error" /></li>
                    <li>
                        {post?.content.substr(0, 150)}..
                    </li>
                </ul>
            </div>

        </>
    )
}
export default Content