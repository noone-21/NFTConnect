import React, { useState } from 'react'
import './stylesheet/ConnectedWallet.css'
import metaMask from './img/metamask.png'
import logout from './img/logout.png'
import ethereum from './img/ethereum.png'
import leftArrow from './img/left-arrow.png'

function WalletPopup() {

    const [walletAddress, setwalletAddress] = useState('a78393ndnd89393')
    const [walletBalance, setwalletBalance] = useState('0.00')
    const [ETHBalance, setETHBalance] = useState('0')
    const [WETHBalance, setWETHBalance] = useState('0')
    const [arrow, setArrow] = useState(false)
    const [offerBalanceValue, setofferBalanceValueValue] = useState('0');
    const [SelectedBalance, setSelectedBalance] = useState('ETH')

    const offerBalanceChange = (e) => {
        setofferBalanceValueValue(e.target.value);
    };
    const inputWidth = offerBalanceValue.length * 20; 


    const handleLogout = () => {
        console.log('Hello World')
    }
    const switchBalance = () => {
        setArrow(!arrow)
    }
    const handleWrap = () => {
        setSelectedBalance('ETH')
        setArrow(!arrow)
    }
    const handleUnwrap = () => {
        setSelectedBalance('WETH')
        setArrow(!arrow)
    }



    return (
        <>
            <div className='connectedWallet' >
                <div className='walletHeader' >
                    <img className='metaMaskLogo' src={metaMask} alt="" />
                    <p className='walletAddress' >{walletAddress}</p>
                    <img onClick={handleLogout} className='metaMaskLogout' src={logout} alt="" />
                    <div className='metaMaskBalance' >
                        <img src={ethereum} alt="" />
                        <p className='walletChain' >Ethereum</p>
                        <p className='walletBalance' >${walletBalance} USD</p>
                    </div>
                </div>
                <div className='ETHandWETHBalance'>
                    <div  className='ETHBalance'>
                        <p className='ETHBalance-p1'>{ETHBalance} ETH</p>
                        <p className='ETHBalance-p2'>ETH Balance</p>
                    </div>
                    <img onClick={switchBalance} src={leftArrow} alt="" style={{
                        transition: 'transform 0.3s ease',
                        transform: arrow ? 'rotate(0deg)' : 'rotate(180deg)',
                    }} />
                    <div className='WETHBalance' >
                        <p className='WETHBalance-p1' >{WETHBalance} WETH</p>
                        <p className='WETHBalance-p2'>Offer Balance</p>
                    </div>
                </div>
                <div className='balanceTransfer' >
                    <div className='WrapAndUnwrap' >
                        <p className={`Wrap ${SelectedBalance === 'ETH' ? 'selected' : ''}`}  onClick={handleWrap} >WRAP</p>
                        <p className={`Unwrap ${SelectedBalance === 'WETH' ? 'selected' : ''}`} onClick={handleUnwrap} >UNWRAP</p>
                    </div>
                    <hr />
                    <div className='ETHandWETHTransfer' >
                        <input className='ETHandWETHTransfer-p1' placeholder='0'
                            value={offerBalanceValue}
                            onChange={offerBalanceChange}
                            style={{ width: inputWidth }} />
                        <p className='ETHandWETHTransfer-p2' >{arrow ? 'WETH' : 'ETH'} </p>
                        <button disabled={true} >Max</button>
                    </div>
                    <button onClick={switchBalance} disabled={true} className='AddorWithdrawBtn' > {arrow ? 'Withdraw from' : 'Add to'}  Offer Balance</button>
                </div>
            </div>
        </>
    )
}

export default WalletPopup
