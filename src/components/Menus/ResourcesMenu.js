import '../stylesheet/Menu.css'
import twitter from '../img/twitter.png'
import instagram from '../img/instagram.png'
import facebook from '../img/facebook.png'
import github from '../img/github.png'
import gmail from '../img/gmail.png'

export default function ResourcesMenu() {
    return (
        <>
            <div className="dropdown-menu">
                <button>Learn</button>
                <button>Help Center</button>
                <button>Platform Status</button>
                <button>Domain Names</button>
                <button>Partners</button>
                <button>Taxes</button>
                <button>Blog</button>
                <button>Docs</button>
                <button>Newsletter</button>
                <div className="fav-icons">
                    <a href="/">
                        <img src={twitter} alt="" />
                    </a>
                    <a href="/">
                    <img src={instagram} alt="" />
                    </a>
                    <a href="/">
                    <img src={github} alt="" />
                    </a>
                    <a href="/">
                    <img src={facebook} alt="" />
                    </a>
                    <a href="/">
                    <img src={gmail} alt="" />
                    </a>
                </div>
            </div>
        </>
    )
}