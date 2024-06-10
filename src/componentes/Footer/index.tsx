import { FaGithub, FaLinkedin } from "react-icons/fa";
import './style.css'

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer id ="footer" className="light-bg flex justify-space">
            <span className="white">Copyright © {year} <a href="/">Andressa</a></span>
            <ul className="flex green">
                <li>
                    <a href="https://www.linkedin.com/in/andressa-helena/" target="_blank" rel="noreferrer">
                        <FaLinkedin size={30}/>
                    </a> 
                </li>
                <li>
                    <a href="https://github.com/AndressaHelena" target="_blank" rel="noreferrer">
                        <FaGithub size={30}/>
                    </a> 
                </li>
            </ul>
        </footer>
    )
}