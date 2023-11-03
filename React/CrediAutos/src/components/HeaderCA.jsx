import '../assets/styles/HeaderCA.css';
import {UseUtmSource} from '../hooks/UseUtmSource'
import { changePhoneNumber } from '../logic/changePhoneNumber';
import ProgressBar from './ProgressBar';
import { useNavigate } from "react-router-dom";

export function HeaderCA() {
    const utmSource = UseUtmSource();
    const number = changePhoneNumber(utmSource);
    const navigate = useNavigate();

    const Home = ()=>{
        navigate("/");
    }
    return (
        <header className="ca-header">
            <div className="ca-logo-container" onClick={Home}>
                <img className="logo" src="src/assets/img/Logo-1.0.webp" alt="CrediAutos - Logo" />
            </div>
            <button className="ca-header-button">
                Llámanos GRATIS <a href="#">{number}<br /><span>*Línea exclusiva de ventas</span></a>
            </button>
            <ProgressBar/>
        </header>
    );
}
