import React from 'react'
import './stylesheet/Footer.css'
import logo from './img/NFTConnects.jpeg'

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
                            <i class="fa-brands fa-twitter"></i>
                            </a>
                            <a href="/">
                            <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a href="/">
                            <i class="fa-brands fa-github"></i>
                            </a>
                            <a href="/">
                            <i class="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="/">
                            <i class="fa-regular fa-envelope"></i>
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
