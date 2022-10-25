import Navigasi from './navigasi'
import './style.css'

const Header = () => {
    return (
        <div className="header ">
            <Navigasi />
            <div className='caption'>
                NONTON GRATIS TANPA BELI TIKET
            </div>
        </div>
    )
}

export default Header;