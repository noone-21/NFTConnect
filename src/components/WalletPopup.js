import React,{useContext} from 'react'
// import { WalletContext } from '../context/WalletContext';
import './stylesheet/WalletPopup.css'
import metaMask from './img/metamask.png'

function WalletPopup(props) {

    // const [isWalletAddress,setIsWalletAddress] = useContext(WalletContext)

    // const handleMetaMaskClick = () => {
    //     setIsWalletAddress(true)
    // };

    return (
        <>
            <div className='walletPopup' >
                <h1 className='walletPopupHeading' >Connect Your Wallet</h1>
                <div onClick={props.onWalletAddressChange} className='walletPopupMetaMask' >
                    <img className='' src={metaMask} alt="" />
                    <p>MetaMask</p>
                </div>
            </div>
        </>
    )
}

export default WalletPopup
