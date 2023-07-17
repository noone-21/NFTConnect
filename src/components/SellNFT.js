import React, { useState, useEffect } from 'react'
import { useParams,useNavigate } from "react-router-dom";
import Navbar from './Navbar'
import './stylesheet/SellNFT.css';
import ethereum from './img/ethereum.png'
import info from './img/info.png'
import dollar from './img/dollar.png'
import time from './img/time.png'
import NFTConnects from './img/NFTConnects.jpeg'
import {
    useContract,
    useAddress,
    useOwnedNFTs,
    useContractRead,
    useContractWrite,
    useCreateDirectListing,
} from "@thirdweb-dev/react";

function SellNFT() {

    const [filteredNFTs, setFilteredNFTs] = useState([]);
    const [isfilteredNFTs, setIsFilteredNFTs] = useState(false);

    const { id } = useParams();

    const navigate = useNavigate()

    const address = useAddress();

    const { contract: nftCollection } = useContract("0xcb36C2dC74aBC6Ce5551cF80777f7B8Fd172a12a");

    const {
        data: ownedNFTs,
        isLoading: myNftLoading,
        error: myNftError,
    } = useOwnedNFTs(nftCollection, address);

    const { contract: marketplace } = useContract(
        "0x875f2aB61e1F9638FFea7f5b0436Ecf6caEAa77B"
    );
    const {
        data: approvedData,
        isLoading: approvedLoading,
    } = useContractRead(nftCollection, "isApprovedForAll", [ address, '0x875f2aB61e1F9638FFea7f5b0436Ecf6caEAa77B'])


    const {
        mutateAsync: setApprovalForAll,
        isLoading: setApproveLoading,
    } = useContractWrite(nftCollection, "setApprovalForAll")

    const {
        mutateAsync: createDirectListing,
        isLoading: createListingLoading,
        error,
    } = useCreateDirectListing(marketplace);

    const handleAddtoSale = async () => {
        if (!approvedData) {
            try {
                const setApprovedata = await setApprovalForAll({ args: ['0x875f2aB61e1F9638FFea7f5b0436Ecf6caEAa77B', true] });
                console.info("contract call successs", setApprovedata);
            } catch (err) {
                console.error("contract call failure", err);
            }
        } else {
           await createDirectListing({
                assetContractAddress: "0xcb36C2dC74aBC6Ce5551cF80777f7B8Fd172a12a",
                tokenId:filteredNFTs[id].metadata.id,
                pricePerToken: price,
                // urrencyContractAddress: "{{currency_contract_address}}",
                // isReservedListing: false,
                quantity: 1,
                // startTimestamp: new Date(),
                // endTimestamp: new Date(
                //   new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
                // ),
            })
        }
        navigate('/mynfts')
    }

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
    useEffect(() => {
        if (!ownedNFTs) {
            return
        }
        setFilteredNFTs(ownedNFTs.filter((Nft) => {
            // Condition to skip certain numbers
            return Nft.metadata.image !== null;
        }))
        setIsFilteredNFTs(true)
    }, [ownedNFTs])

    return (
        <>
            <div id='bg-gradient' >
                <Navbar />
            </div>
            {myNftLoading || filteredNFTs.length === 0 ? <div className='nftLoading' > <img src={NFTConnects} alt="" /> </div> :
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
                            <button onClick={handleAddtoSale} disabled={!price||!isfilteredNFTs} id="sellNftBtn"> <p>List Item</p> </button>
                        </div> :
                            <h1>Coming Soon</h1>
                        }
                    </div>
                    <div className='sellNFTPreview' >
                        <p className='sellNFTPreviewLabel' >Preview</p>
                        <img className='sellNFTImage' src={filteredNFTs[id].metadata.image} alt="" />
                        <div className='sellNFTPreviewDetails' >
                            <p className='sellNFTName' > {filteredNFTs[id].metadata.name} </p>
                            <div className='sellNFTPreviewPrice' >
                                <p className='sellNFTPreviewPriceLabel' >Price </p>
                                <p className='sellNFTPreviewPriceAmount' > <img src={ethereum} alt="" /> <p>{price}</p>  </p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default SellNFT
