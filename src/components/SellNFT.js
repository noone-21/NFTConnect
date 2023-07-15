import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import Navbar from './Navbar'
import './stylesheet/SellNFT.css';
import ethereum from './img/ethereum.png'
import info from './img/info.png'
import dollar from './img/dollar.png'
import time from './img/time.png'
import calendar from './img/calendar.png'
import {
    useContract,
    useAddress,
    useOwnedNFTs,
} from "@thirdweb-dev/react";

function SellNFT() {

    const { id } = useParams();

    const address = useAddress();

    const { contract: nftCollection } = useContract("0xcb36C2dC74aBC6Ce5551cF80777f7B8Fd172a12a");

    const {
        data: ownedNFTs,
        isLoading: myNftLoading,
        error: myNftError,
    } = useOwnedNFTs(nftCollection, address);

    const [price, setPrice] = useState(0)
    const [saleMethod, setSaleMethod] = useState(true)

    const onPriceChange = (event) => {
        const { value } = event.target;
        if (value === '') {
            setPrice(0)
        } else {

            setPrice(value)
        }
    }
    const timedAuctionBtn = (event) => {
        setSaleMethod(false)
    }
    const fixedPriceBtn = (event) => {
        setSaleMethod(true)
    }

    return (
        <>
            <div id='bg-gradient' >
                <Navbar />
            </div>
            <div className='sellNFTPage' >
                <div className='sellNFTDetails' >
                    <h1>List Item for Sale</h1>
                    <p className='sellNftType' > Type  </p>
                    <button className="sellNftsInfoBtn">
                        <img src={info} alt="" />
                    </button>
                    <div className="infoDialogue">
                        <p>
                            You can choose to List item by Fixed Price or by putting it on a Timed Auction.
                        </p>
                    </div>
                    <div className='sellNftTypeSelector' >
                        <button onClick={fixedPriceBtn} className={`fixedPriceSelect ${saleMethod ? 'active' : ''}`} >
                            <img src={dollar} alt="" />
                            <p>Fixed Price</p>
                        </button>
                        <button onClick={timedAuctionBtn} className={`timedAuctionSelect ${!saleMethod ? 'active' : ''}`} >
                            <img src={time} alt="" />
                            <p>Timed Auction</p>
                        </button>
                    </div>
                    {saleMethod ? <div className='sellNftFixedPrice' >
                        <p className='sellNFTPriceLabel' >Price</p>
                        <div className='sellNFTPriceInput' >
                            <div className='ethLogo' > <img src={ethereum} alt="" /> <p>ETH</p>   </div>
                            <input maxLength={9} onChange={onPriceChange} type="text" />
                        </div>
                        <h2 className='sellNFTPriceRs' > Rs. {(price * 509147.12).toFixed(2)} </h2>
                    </div> :
                        <div className='sellNftTimedAuction' >
                            <p className='sellNFTPriceLabel' >Starting Price</p>
                            <div className='sellNFTPriceInput' >
                                <div className='ethLogo' > <img src={ethereum} alt="" /> <p>ETH</p>   </div>
                                <input maxLength={9} onChange={onPriceChange} type="text" />
                            </div>
                            <h2 className='sellNFTPriceRs' > Rs. {(price * 509147.12).toFixed(2)} </h2>
                            <p className='sellNFTDurationLabel' >Duration</p>
                            <div className='sellNFTDurationInput' >
                                <img src={calendar} alt="" />
                                <input maxLength={9} onChange={onPriceChange} type="text" placeholder='6 month(s)' />
                            </div>
                        </div>}
                    <button disabled={!price} id="sellNftBtn"> <p>List Item</p> </button>
                </div>
                <div className='sellNFTPreview' >
                    {/* <img id='sellNFTChain' src={ethereum} alt="" /> */}
                    <p className='sellNFTPreviewLabel' >Preview</p>
                    <img className='sellNFTImage' src={ownedNFTs[id].metadata.image} alt="" />
                    <div className='sellNFTPreviewDetails' >
                        <p className='sellNFTName' > {ownedNFTs[id].metadata.name} </p>
                        <div className='sellNFTPreviewPrice' >
                            <p className='sellNFTPreviewPriceLabel' >Price </p>
                            <p className='sellNFTPreviewPriceAmount' > <img src={ethereum} alt="" /> <p>{price}</p>  </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellNFT
