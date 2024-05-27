import {Link} from 'react-router-dom'

const Header = ()=>{
    return(
        <nav>
        <Link to='/'>Home</Link>
        <span> | </span>
        <Link to='equipes'>Equipes</Link>
        </nav> 
    )
}

export default Header;