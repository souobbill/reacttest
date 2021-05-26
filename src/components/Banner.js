import logo from '../assets/logo.png'
import '../styles/Banner.css'
function Banner() {

    const title = 'La maison jungle'
    return (
        <div className='lmg-Banner'>
            <img src={logo} alt='La maison jungle' className='lmg-logo' />
            <h1 className='lmg-title'>{title}</h1>
        </div>
    )
}

    export default Banner