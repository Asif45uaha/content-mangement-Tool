import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [img, setImg] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleFile = (e) => {
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
                    setImg(data.url.toString())
                    setLoading(false)
                })

        }
    }
    const handleSignup = async (ev) => {
        ev.preventDefault()
        try {
            const response = await axios.post("http://localhost:5100/signup", {
                name, email, img, password
            })
            if (response.status === 201) {
                setName("")
                setEmail("")
                setImg("")
                setPassword("")
                navigate("/login")
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="mt-4 w-[50%] mx-auto  bg-[#ccdd] p-4">
            <form className="flex flex-col items-center gap-4 h-[50vh] mt-[15%]" onSubmit={handleSignup}>
                <input type="text" value={name} onChange={ev => setName(ev.target.value)} placeholder="Enter The Author Name" className=" w-[60%] py-2 border border-b-2 border-b-red-700 outline-none  placeholder:text-red-700" />
                <input type="email" value={email} onChange={ev => setEmail(ev.target.value)} placeholder="Enter The Author Email" className=" w-[60%] py-2 border border-b-2 border-b-red-700 outline-none  placeholder:text-red-700" />
                {
                    loading ? "Loading..." : <input type="file" onChange={ev => handleFile(ev)} placeholder="Enter The Author Image" className=" w-[60%] py-2 border border-b-2 border-b-red-700 outline-none  placeholder:text-red-700" />
                }
                <input type="password" value={password} onChange={ev => setPassword(ev.target.value)} placeholder="Enter The Authorr Password" className=" w-[60%] py-2 border border-b-2 border-b-red-700 outline-none  placeholder:text-red-700" />
                <input type="submit" value="Signup" className=" w-[60%] py-2 bg-[#872d87] text-white font-medium text-xl transition-all ease-linear 0.5s hover:bg-transparent hover:text-black" />
                <hr className="w-[60%] text-black border-2 border-black" />
                <span className="text-sm mt-2 font-mono">Already have an Account? <Link className="bg-gray-200 p-2 rounded-md" to={"/login"}>Login</Link></span>
            </form>
        </div>
    )
}
export default SignUp