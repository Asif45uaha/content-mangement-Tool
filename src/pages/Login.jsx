import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        const loginStatus = () => {
            const token = localStorage.getItem("AuthToken")
            if (token) {
                navigate("/")
            }
            else {
                navigate("/login")
            }
        }
        loginStatus()
    }, [])
    const loginUser = async (ev) => {
        ev.preventDefault()
        try {
            const response = await axios.post("http://localhost:5100/login", { email, password })
            if (response.status === 200) {
                const token = response.data.token
                localStorage.setItem("AuthToken", token)

            }

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="mt-4 w-[50%] mx-auto  bg-[#ccdd] p-4">
            <form className="flex flex-col items-center gap-4 h-[50vh] mt-[15%]" onSubmit={loginUser}>
                <input type="email" value={email} onChange={ev => setEmail(ev.target.value)} placeholder="Enter The User Email" className=" w-[60%] py-2 border border-b-2 border-b-red-700 outline-none  placeholder:text-red-700" />
                <input type="password" value={password} onChange={ev => setPassword(ev.target.value)} placeholder="Enter The user Password" className=" w-[60%] py-2 border border-b-2 border-b-red-700 outline-none  placeholder:text-red-700" />
                <input type="submit" value="Login" className=" w-[60%] py-2 bg-[#872d87] text-white font-medium text-xl transition-all ease-linear 0.5s hover:bg-transparent hover:text-black" />
                <hr className="w-[60%] text-black border-2 border-black" />
                <span className="text-sm mt-2 font-mono">Doesn&apos;t have an Account? <Link className="bg-gray-200 p-2 rounded-md" to={"/signup"}>Signup</Link></span>
            </form>
        </div>
    )

}
export default Login