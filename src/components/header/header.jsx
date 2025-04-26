import './header.css'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1>Weather.io</h1>

            <div className='navegacao'>
                <Link to="/">Home</Link>
                <Link to="/your-time">Pesquisar</Link>
            </div>
        </header>
    )
}