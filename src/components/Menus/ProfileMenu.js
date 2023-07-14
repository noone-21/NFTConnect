import '../stylesheet/Menu.css'
import { Link } from 'react-router-dom'
import night from '../img/night.png'

export default function ProfileMenu() {
    return (
        <>
            <div className="dropdown-menu">
                <button>Profile</button>
                <button>Favorites</button>
                <button>Watchlist</button>
                <button><Link to='/mynfts' >My NFTs</Link></button>
                <button><Link to='/createnft'>  Create</Link></button>
                <button>Settings</button>
                <button>Language</button>
                <button className='nightMode' > <img  src={night} alt="" /> <p  >Night Mode</p> </button>
            </div>
        </>
    )
}