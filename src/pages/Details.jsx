import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Details = () => {
    const { id } = useParams()
    console.log(id);
    const [data, setData] = useState([])
    useEffect(() => {
        const getSinglePost = async () => {
            try {
                const response = await axios.get(`http://localhost:5100/postdetail/${id}`)
                setData(response.data)

            } catch (error) {
                console.log(error);
            }
        }
        getSinglePost()
    }, [])
    const formatTime = (time) => {
        const options = { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", seconds: "numeric" }
        return new Date(time).toLocaleString("en-US", options)
    }
    return (
        <div className="flex flex-col items-center py-2 mx-2 gap-2">
            <div>
                <h3 className="text-xl font-medium">{data?.BlogName}</h3>
            </div>
            <div>
                <h2 className="text-md font-normal">{`Author : ${data?.AuthorName}`}</h2>
            </div>
            <div>
                posted on {formatTime(data?.PostDate)}
            </div>
            <div>
                <img src={data?.thumbnail} alt="error" />
            </div>
            <div>
                <h2 className="w-[70%] mx-auto font-normal text-lg">{data?.content}</h2>
            </div>
        </div>
    )
}
export default Details