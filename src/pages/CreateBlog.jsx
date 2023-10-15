import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const CreateBlog = () => {
    const [BlogName, setBlogName] = useState("")
    const [AuthorName, setAuthorName] = useState("")
    const [PostDate, setPostDate] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const [content, setContent] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const uploadFile = (e) => {
        const file = e.target.files[0]
        setLoading(true)
        if (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg') {
            const data = new FormData()
            data.append("file", file)
            data.append("upload_preset", "sjwna4vv")
            data.append("cloud_name", "ddvmanpjt")
            fetch("https://api.cloudinary.com/v1_1/ddvmanpjt/image/upload", {
                method: "POST",
                body: data
            }).then((res) => res.json())
                .then((data) => {
                    setThumbnail(data.url.toString())
                    setLoading(false)
                })

        }
    }
    console.log(thumbnail);
    const handleSubmit = async (ev) => {
        ev.preventDefault()
        try {
            const response = await axios.post("http://localhost:5100/createPost", {
                BlogName, AuthorName, PostDate, thumbnail, content
            })
            if (response.status === 201) {
                setBlogName("")
                setAuthorName("")
                setPostDate("")
                setThumbnail("")
                setContent("")
                navigate("/")
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="mt-4 w-[50%] mx-auto shadow-md bg-[#ccde]">
            <h3 className="py-2 text-center font-bold text-2xl">Post Your Blog</h3>
            <form className="flex flex-col items-center justify-center gap-4 p-4" onSubmit={handleSubmit}>
                <input type="text" value={BlogName} onChange={ev => setBlogName(ev.target.value)} placeholder="Enter The Blog Name" className=" w-[60%] py-2 border border-b-2 border-b-red-700 outline-none  placeholder:text-red-700" />
                <input type="text" value={AuthorName} onChange={ev => setAuthorName(ev.target.value)} placeholder="Enter The Author Name" className=" w-[60%] py-2 border border-b-2 border-b-red-700 outline-none  placeholder:text-red-700" />
                <input type="datetime-local" value={PostDate} onChange={ev => setPostDate(ev.target.value)} placeholder="Enter The Date Of Post" className=" w-[60%] py-2 border border-b-2 border-b-red-700 outline-none  placeholder:text-red-700" />
                {
                    loading ? "Loading...." : <input type="file" id="thumbnail" onChange={(e) => uploadFile(e)} placeholder="thumbnail" className=" w-[60%] px-2 py-2 border border-b-2 border-b-red-700 outline-none  placeholder:text-red-700" />
                }
                <textarea placeholder="Blog Content" value={content} onChange={ev => setContent(ev.target.value)} cols="30" rows="10" className=" w-[60%] py-2 border border-b-2 border-b-red-700 outline-none  placeholder:text-red-700"></textarea>
                <input type="submit" value="Post" className=" w-[60%] py-2 bg-[#872d87] text-white font-medium text-xl transition-all ease-linear 0.5s hover:bg-transparent hover:text-black" />
            </form>
        </div>
    )
}
export default CreateBlog