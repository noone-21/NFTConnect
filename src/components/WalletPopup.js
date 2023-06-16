import React from 'react'
import './stylesheet/WalletPopup.css'
import metaMask from './img/metamask.png'

function WalletPopup() {

    const handleMetaMaskClick = () => {
        console.log('Hello World')
    };

    return (
        <>
            <div className='walletPopup' >
                <h1 className='walletPopupHeading' >Connect Your Wallet</h1>
                <div onClick={handleMetaMaskClick} className='walletPopupMetaMask' >
                    <img className='' src={metaMask} alt="" />
                    <p>MetaMask</p>
                </div>
            </div>
        </>
    )
}

export default WalletPopup
