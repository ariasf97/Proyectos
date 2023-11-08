import '../../assets/styles/HeaderCA.css';
import {UseUtmSource} from '../../hooks/UseUtmSource'
import {changePhoneNumber} from '../../services/changePhoneNumber'
import ProgressBar from '../Sections/ProgressBar';
import { useNavigate } from "react-router-dom";
import logoN from '../../assets/img//Logo-1.0.webp'

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
                <img className="logo" src={logoN} alt="CrediAutos - Logo" />
            </div>
            <button className="ca-header-button">
                Llámanos GRATIS <a href="#">{number}<br /><span>*Línea exclusiva de ventas</span></a>
            </button>
            <ProgressBar/>
        </header>
    );
}
