import './Menu.css'
import { Link } from 'react-router-dom'
// import  from '../'

export default function ProfileMenu() {
    return (
        <>
            <div className="dropdown-menu">
                <button><Link to='/'>Profile</Link></button>
                <button><Link to='/'>Favorites</Link></button>
                <button><Link to='/'>Watchlist</Link></button>
                <button><Link to='/mycollections' >My Collections</Link></button>
                <button><Link to='/createnft'>  Create</Link></button>
                <button><Link to='/'>Settings</Link></button>
                <button><Link to='/'>Language</Link></button>
                <button><Link to='/'>Night Mode</Link></button>
            </div>
        </>
    )
}