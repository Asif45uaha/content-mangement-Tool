import { useNavigate } from "react-router-dom"

const Category = ({ posts }) => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center gap-2 shadow-md p-4 mt-6">
            <div className="font-medium text-xl">Blog Categories</div>
            <div id="categories">
                <a href="" className="underline">
                    {
                        posts?.map((post, index) => <li key={index} onClick={() => navigate(`/${post._id}`)}>{post?.BlogName}</li>)
                    }
                </a>

            </div>
        </div>
    )
}
export default Category