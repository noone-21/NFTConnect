import '../stylesheet/ResourcesMenu.css'

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
                        <i className="fa-brands fa-square-twitter"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-square-instagram"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-square-github"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="/">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                </div>
            </div>
        </>
    )
}