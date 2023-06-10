import React from 'react'
import './stylesheet/Navbar.css';
import logo from './img/logo.png'
import { useState, useRef } from "react"
import { useOnHoverOutside } from "../hooks/UseOnHoverOutside"
// import ExploreMenu from "./Menus/ExploreMenu"
import DropsMenu from "./Menus/DropsMenu"
import StatsMenu from "./Menus/StatsMenu"
import ResourcesMenu from "./Menus/ResourcesMenu"
import ProfileMenu from "./Menus/ProfileMenu"

function Navbar() {

    // const exploreRef = useRef(null); // Create a reference for dropdown container
    const dropsRef = useRef(null); // Create a reference for dropdown container
    const statsRef = useRef(null); // Create a reference for dropdown container
    const resourcesRef = useRef(null); // Create a reference for dropdown container
    const profileRef = useRef(null); // Create a reference for dropdown container

    // const [isExploreMenuOpen, setExploreMenuOpen] = useState(false);
    const [isDropsMenuOpen, setDropsMenuOpen] = useState(false);
    const [isStatsMenuOpen, setStatsMenuOpen] = useState(false);
    const [isResourcesMenuOpen, setResourcesMenuOpen] = useState(false);
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

    // Function to close dropdown
    // const closeExploreMenu = () => {
    //     setExploreMenuOpen(false);
    // };
    const closeDropsMenu = () => {
        setDropsMenuOpen(false);
    };
    const closeStatsMenu = () => {
        setStatsMenuOpen(false);
    };
    const closeResourcesMenu = () => {
        setResourcesMenuOpen(false);
    };
    const closeProfileMenu = () => {
        setProfileMenuOpen(false);
    };

    // useOnHoverOutside(exploreRef, closeExploreMenu); // Call the hook
    useOnHoverOutside(dropsRef, closeDropsMenu); // Call the hook
    useOnHoverOutside(statsRef, closeStatsMenu); // Call the hook
    useOnHoverOutside(resourcesRef, closeResourcesMenu); // Call the hook
    useOnHoverOutside(profileRef, closeProfileMenu); // Call the hook

const [isScrolled, setisScrolled] = useState(false)
    // Listen for the page to scroll
    window.addEventListener("scroll", () => {
        // Check if the page has been scrolled
        if (window.scrollY > 0) {
            setisScrolled(true)
        } else {
            setisScrolled(false)
        }
    });


    return (
        <>
            <div className={`navbar ${isScrolled ? 'scrolled' : ''}`} id='navbar'  >
                <a href="/">
                    <div className='navbarLogo' >
                        <img className='nav-logo' src={logo} alt="" />
                        <h1 className='logo-title' >NFTConnects</h1>
                    </div>
                </a>
                <div className='search-box'>
                    <i className="fi fi-rs-search icon"></i>
                    <div className='search' >
                        <input id='input' type="text" placeholder='Search items, collections and accounts' />
                    </div>
                </div>
                <ul className='menu-items' >
                    {/* <li ref={exploreRef} ><button className='nav-buttons' onMouseOver={() => setExploreMenuOpen(true)} >Explore</button>
                        {isExploreMenuOpen && <ExploreMenu />}
                    </li> */}
                    <li ref={dropsRef} ><button className='nav-buttons' onMouseOver={() => setDropsMenuOpen(true)}  >Drops</button>
                        {isDropsMenuOpen && <DropsMenu />}
                    </li>
                    <li ref={statsRef} ><button className='nav-buttons' onMouseOver={() => setStatsMenuOpen(true)}  >Stats</button>
                        {isStatsMenuOpen && <StatsMenu />}
                    </li>
                    <li ref={resourcesRef} ><button className='nav-buttons' onMouseOver={() => setResourcesMenuOpen(true)}  >Resources</button>
                        {isResourcesMenuOpen && <ResourcesMenu />}
                    </li>
                </ul>
                <ul className='icons-menu' >
                    <li ref={profileRef} ><button className='nav-buttons' onMouseOver={() => setProfileMenuOpen(true)}  ><i className="fa-regular fa-user"></i></button>
                        {isProfileMenuOpen && <ProfileMenu />}
                    </li>
                    <li ><button className='nav-buttons'><i className="fa-solid fa-wallet"></i></button>
                    </li>
                    <li><button className='nav-buttons' ><i className="fa-solid fa-cart-shopping"></i></button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar