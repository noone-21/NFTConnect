import React from 'react'
import './stylesheet/Footer.css'
import logo from './img/NFTConnects.jpeg'
import facebook from './img/facebook.png'
import gmail from './img/gmail.png'
import github from './img/github.png'
import instagram from './img/instagram.png'
import twitter from './img/twitter.png'

function Footer() {
    return (
        <>
            <div className='footer' >
                <div className='footer-body' >
                    <div className='footer-left' >
                        <img src={logo} alt="" />
                        <p>A user friendly NFT marketplace with <br /> a wide range of varieties. Buy, sell <br /> and explore digital collectibles.</p>
                    </div>
                    <div className='footer-right' >
                        <h1 className='connected-heading' >Stay Connected</h1>
                        <p>Become a member of our mailing list to receive <br /> updates on our newest feature releases, NFT drops, <br /> and navigational tips for NFTConnect!</p>
                        <h1 className='social-handles' >Join Our Community</h1>
                        <div className="footer-icons">
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
                </div>
                <div className='footer-end' >
                    <hr className='footer-hr' />
                    <p className='trademark' >© 2022 NFTConnect Inc.</p>
                </div>
            </div>

        </>
    )
}

export default Footer
