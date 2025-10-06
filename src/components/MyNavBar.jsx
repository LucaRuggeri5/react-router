// import dei componenti di navigazione del routing
import { Link, NavLink } from 'react-router-dom';

const links = [
    { path: '/', label: 'HomePage' },
    { path: '/contact', label: 'Chi Siamo' },
    { path: '/products', label: 'Prodotti' }
]


const MyNavBar = () => {

    return (
            <nav>
                <ul>
                    {links.map(link => (
                        <li>
                            <NavLink to={link.path}>{link.label}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
    )
}

export default MyNavBar