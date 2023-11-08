import Bg from '../../assets/img/1920x-690-Banner-inferior-1.0.webp'
import '../../assets/styles/PoliticasDecookies.css'
export const PolCookiesHero =()=>{
    return(
        <section className='ca-pol-cookies' style={{ background: `url(${Bg})` }}>
            <h1 className='ca-pol-cookies-title'>
                Políticas de Cookies
            </h1>
        </section>
    )
}