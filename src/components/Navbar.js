import React from 'react'
import './stylesheet/Navbar.css';
import { client } from "../lib/sanityClient";
import { useAddress, ConnectWallet } from "@thirdweb-dev/react";
import logo from './img/logo.png'
import { useState, useRef, useEffect } from "react"
import { useOnHoverOutside } from "../hooks/UseOnHoverOutside"
import DropsMenu from "./Menus/DropsMenu"
import StatsMenu from "./Menus/StatsMenu"
import ResourcesMenu from "./Menus/ResourcesMenu"
import ProfileMenu from "./Menus/ProfileMenu"
import wallet from './img/wallet.png'
import user from './img/user.png'
import search from './img/search.png'

function Navbar() {

    const address = useAddress();

    const dropsRef = useRef(null); // Create a reference for dropdown container
    const statsRef = useRef(null); // Create a reference for dropdown container
    const resourcesRef = useRef(null); // Create a reference for dropdown container
    const profileRef = useRef(null); // Create a reference for dropdown container

    const [isDropsMenuOpen, setDropsMenuOpen] = useState(false);
    const [isStatsMenuOpen, setStatsMenuOpen] = useState(false);
    const [isResourcesMenuOpen, setResourcesMenuOpen] = useState(false);
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);


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

    useEffect(() => {
        if (!address) return;
        (async () => {
            const userDoc = {
                _type: "users",
                _id: address,
                userName: "Unnamed",
                walletAddress: address,
            };
            const result = await client.createIfNotExists(userDoc);
        })();
    }, [address]);


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
                    <img src={search} alt="" />
                    <div className='search' >
                        <input id='input' type="text" placeholder='Search items, collections and accounts' />
                    </div>
                </div>
                <ul className='menu-items' >
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
                    <li ref={profileRef} ><button className='nav-buttons' onMouseOver={() => setProfileMenuOpen(true)}  > <img src={user} alt="" /> </button>
                        {isProfileMenuOpen && <ProfileMenu />}
                    </li>
                    <li  >
                    <ConnectWallet className='connectWalletButton' btnTitle={<img src={wallet} alt="" />}   detailsBtn={() => {
                            return <button  className='nav-buttons'> <img src={wallet} alt="" /></button>
                        }} />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
