import { Link } from 'react-router-dom'
import './App.css'
import img from './cat.png'

function Nav() {
    return(
        <nav className = "navBar">
            <div> 
            <img src = {img} width ="200" />
                {/* <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" width = "50" /> */}
            </div>
                <ul className = "ul">
                    <Link to ='/about'>
                        <li>
                            About us
                        </li>
                    </Link>

                    <Link to ='/shop'>
                        <li>
                            Shop
                        </li>
                    </Link>

                    <Link to = '/home'>
                        <li>
                            Home
                        </li>
                    </Link>
                </ul>
        </nav>
    )
}

export default Nav