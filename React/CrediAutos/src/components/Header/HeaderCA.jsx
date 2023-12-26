import '../../assets/styles/HeaderCA.css';
import {UseUtmSource} from '../../hooks/UseUtmSource'
import {changePhoneNumber} from '../../services/changePhoneNumber'
import ProgressBar from '../Sections/ProgressBar';
import { useNavigate } from "react-router-dom";
import logoN from '../../assets/img/logo-dist.webp'

export function HeaderCA() {
    const utmSource = UseUtmSource();
    const number = changePhoneNumber(utmSource.utmSource);
    const navigate = useNavigate();
    console.log('utmSource',utmSource)
    const Home = ()=>{
        navigate("/");
    }
    return (
        <header className="ca-header">
            <div className="ca-logo-container" onClick={Home}>
                <img 
                className="logo" src={logoN} 
                alt="CrediAutos - Logo" />
            </div>
            <button className="ca-header-button">
                Llámanos GRATIS <a href="#">{number}<br /><span>*Línea exclusiva de ventas</span></a>
            </button>
            <ProgressBar/>
        </header>
    );
}
