import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { CgMail } from "react-icons/cg"
const Footer = () => {
    return (
        <footer className="flex flex-col items-center p-4 shadow-md bg-[#ccdd] mt-4 w-[97.5%] mx-auto">
            <div id="slideContainer">
                <div id="slide1">
                    <div id="desc">
                        <div className='text-xl font-medium text-center'>CMS (Content Management System)</div>
                        <div className='font-normal'>
                            A content management system (CMS) is software that helps users create, manage, and modify content on a website without the need for technical knowledge.
                        </div>
                    </div>
                    <div className="flex flex-row justify-center gap-4 items-center my-3 ">
                        <a href="https://github.com/Asif45uaha"><FaGithub size={30} color='black' /></a>
                        <a href="https://www.linkedin.com/in/aasif-ali-6909b8200"><FaLinkedin size={30} color='black' /></a>
                        <a href="https://www.instagram.com/_asif_ali10"><FaInstagram size={30} color='black' /></a>
                        <a href="mailto:asif15310@gmail.com"><CgMail size={35} color='black' /></a>
                    </div>

                </div>
            </div>
            <div className='text-xl font-medium text-center'>developed by @Aasif Ali</div>
        </footer>
    )
}
export default Footer