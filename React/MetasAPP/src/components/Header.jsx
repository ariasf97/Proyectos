import { FaAward, FaCircleUser } from "react-icons/fa6";
import '../assets/css/header.css'
export const Header = () => {
    return (
        <header className="header">
            <div className="headerLogoContainer">
            <FaAward />
            <a href="/">Metas APP</a>
            </div> 
            <FaCircleUser/>
        </header>
    )
}