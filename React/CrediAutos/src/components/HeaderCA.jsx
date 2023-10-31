import '../assets/styles/HeaderCA.css';
import { useUtmSource } from './UtmSourceProvider';
import { changePhoneNumber } from '../logic/changePhoneNumber';
import ProgressBar from './ProgressBar';

export function HeaderCA() {
    const utmSource = useUtmSource();
    const number = changePhoneNumber(utmSource);
    return (
        <header className="ca-header">
            <div className="ca-logo-container">
                <img className="logo" src="src/assets/img/Logo-1.0.webp" alt="CrediAutos - Logo" />
            </div>
            <button className="ca-header-button">
                Llámanos GRATIS <a href="#">{number}<br /><span>*Línea exclusiva de ventas</span></a>
            </button>
            <ProgressBar/>
        </header>
    );
}
