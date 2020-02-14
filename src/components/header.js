import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li><Link to="#">Home</Link></li>
                        <li><Link to="#">About</Link></li>
                        <li><Link to="#">Projects</Link></li>
                        <li><Link to="#">Video</Link></li>
                        <li><Link to="#">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header