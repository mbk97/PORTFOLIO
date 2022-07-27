import './Header.css'
import Navbar from './Navbar'
import Introduction from './Introduction'

const Header = () => {
    return (
        <div className='header-container'>
            <Navbar />
            <Introduction />
        </div>
    )
}

export default Header
