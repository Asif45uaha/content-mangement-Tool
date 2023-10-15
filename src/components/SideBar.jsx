import Category from "./Category"
import Searchbar from "./Searchbar"
import { IoCreateOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
const SideBar = ({ posts }) => {

    return (
        <div className="flex-[0.4]  flex flex-col items-center gap-2 bg-[#ccdd] p-6 w-full mt-16 sticky top-12 mr-12">
            <Searchbar />
            <Category posts={posts} />

            <div className="mt-6 flex flex-row items-center  p-4 shadow-md w-[70%] bg-blue-600 text-white cursor-pointerp">
                <IoCreateOutline size={30} />
                <p className="text-xl font-semibold" >
                    <Link to={'/create'}>
                        Create Blog
                    </Link>

                </p>
            </div>
        </div>
    )
}
export default SideBar