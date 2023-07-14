import React, { useState, useEffect, useRef } from 'react'
import CollectionsInfo from './CollectionsInfo'
import Footer from './Footer'
import ImageSlider from './ImageSlider'
import MultiImageSlider from './MultiImageSlider'
import MultiImageSlider2 from './MultiImageSlider2'
import Navbar from './Navbar'
import './stylesheet/Style.css'
import downArrow from './img/downArrow.png'
import ethereum from './img/ethereum-1.png'
import bnb from './img/bnb.png'
import solana from './img/solana-1.png'
import bitcoin from './img/bitcoin.png'
import polygon from './img/polygon-1.png'
import {
    useContract,
    useAddress,
    useNFTs,
    useOwnedNFTs,
    useValidDirectListings,
} from "@thirdweb-dev/react";

function Dashboard(props) {

    const [collection, setCollection] = useState({});

    const address = useAddress();

    const { contract: nftCollection } = useContract("0xcb36C2dC74aBC6Ce5551cF80777f7B8Fd172a12a");
    const {
        data: nfts,
        isLoading: loadingNft,
        error: eNft,
    } = useNFTs(nftCollection, {
        start: 0,
        count: 100,
    });


    const { contract: marketplace } = useContract(
        "0x875f2aB61e1F9638FFea7f5b0436Ecf6caEAa77B"
    );

    const {
        data: listings,
        isLoading: loadingList,
        error: eList,
    } = useValidDirectListings(marketplace, { start: 0, count: 100 });

    const [isSelectedTrend, setIsSelectedTrend] = useState(true);
    const [isSelectedTop, setIsSelectedTop] = useState(false);
    const trendBtn = () => {
        setIsSelectedTrend(true);
        setIsSelectedTop(false);
    };
    const topBtn = () => {
        setIsSelectedTrend(false);
        setIsSelectedTop(true);
    };

    const [isOpenTime, setIsOpenTime] = useState(false);
    const dropdownRefTime = useRef(null);
    const [selectedItemTime, setSelectedItemTime] = useState('24h');

    const TimeItems = [
        '1h',
        '6h',
        '24h',
        '7d',
        '30d',
        'All',
    ];
    const TimeFilteredItems = TimeItems.filter((item) => item !== selectedItemTime);

    const toggleDropdownTime = () => {
        setIsOpenTime(!isOpenTime);
    };
    const handleClickOutsideTime = (event) => {
        if (dropdownRefTime.current && !dropdownRefTime.current.contains(event.target)) {
            setIsOpenTime(false);
        }
    };
    useEffect(() => {
        window.addEventListener("click", handleClickOutsideTime);
        return () => {
            window.removeEventListener("click", handleClickOutsideTime);
        };
    }, []);
    const handleItemClickTime = (item) => {
        setSelectedItemTime(item);
        setIsOpenTime(false);

    };

    const [isLoading, setIsLoading] = useState(false);

    // Function to simulate loading process
    const simulateLoading = () => {
        // Simulate loading delay
        if(loadingNft)
        {
            setIsLoading(true)
        }
        else{
            setIsLoading(false)
        }
    };

    return (
        <>
            <div id='bg-gradient' >
                <Navbar />
            </div>
            {loadingNft ? <div className='nftLoading' ></div> :
                <div>
                    <ImageSlider nfts={nfts} loading={loadingNft} listings={listings} />
                    <div className='nft-chart' >
                        <button className='btn-heading' onClick={trendBtn} style={{ background: !isSelectedTrend ? 'none' : 'gray' }} >Trending</button>
                        <button className='btn-heading' onClick={topBtn} style={{ background: !isSelectedTop ? 'none' : 'gray' }} >Top</button>

                        <div className={`TimeDropdown ${isOpenTime ? "active" : ""}`} ref={dropdownRefTime} >
                            <button className="TimeDropdownBtn" onClick={toggleDropdownTime} >
                                <p> {selectedItemTime}</p>
                                <img className='nftTimeArrowBtn' src={downArrow} alt='' ></img>
                            </button>
                            <div className="TimesList">
                                {TimeFilteredItems.map((item) => (
                                    <div className='TimeListItem' >
                                        <p
                                            key={item}
                                            className={selectedItemTime === item ? 'selected' : ''}
                                            onClick={() => handleItemClickTime(item)}
                                        >
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="chain-btn">
                            <p>All Chains</p>
                            <button title="Ethereum">
                                <img src={ethereum} alt="" />
                            </button>
                            <button title="Solana">
                                <img src={solana} alt="" />
                            </button>
                            <button title="Binance">
                                <img src={bnb} alt="" />
                            </button>
                            <button title="Polygon">
                                <img src={polygon} alt="" />
                            </button>
                            <button title="Bitcoin">
                                <img src={bitcoin} alt="" />
                            </button>
                        </div>
                        <button className='viewAll-btn' >View all</button>
                    </div>
                    <hr />
                    <div className='collections' >
                        <div className='left-half' >
                            <div className='headings' >
                                <p className='collection-heading' >COLLECTION</p>
                                <p className='floorPrice-heading' >FLOOR PRICE</p>
                                <p className='volume-heading' >VOLUME</p>
                            </div>
                            <CollectionsInfo srNo={1} />
                            <CollectionsInfo srNo={2} />
                            <CollectionsInfo srNo={3} />
                            <CollectionsInfo srNo={4} />
                            <CollectionsInfo srNo={5} />
                        </div>
                        <div className='right-half' >
                            <div className='headings' >
                                <p className='collection-heading' >COLLECTION</p>
                                <p className='floorPrice-heading' >FLOOR PRICE</p>
                                <p className='volume-heading' >VOLUME</p>
                            </div>
                            <CollectionsInfo srNo={6} />
                            <CollectionsInfo srNo={7} />
                            <CollectionsInfo srNo={8} />
                            <CollectionsInfo srNo={9} />
                            <CollectionsInfo srNo={10} />

                        </div>
                    </div>
                    <div className='imgSlider-1' >
                        <h1 className='slider-headings' >Notable Collections</h1>
                        <MultiImageSlider />
                    </div>
                    <div className='imgSlider' >
                        <h1 className='slider-headings' >Top Collector Buys Today</h1>
                        <MultiImageSlider />
                    </div>
                    <div className='imgSlider' >
                        <h1 className='slider-headings' >Music NFT Spotlight</h1>
                        <MultiImageSlider />
                    </div>
                    <div className='imgSlider' >
                        <h1 className='slider-headings' >NFT 101</h1>
                        <p className='learn-hint' >learn step by step</p>
                        <MultiImageSlider2 category1='What is an NFT?' category2='What is a Crypto Wallet?' category3='What is Time gas fee?' category4='How to buy NFT?' category5='How to create NFT on NFTConnect?' />
                    </div>
                    <div className='imgSlider' >
                        <h1 className='slider-headings' >Browse by Category</h1>
                        <MultiImageSlider2 category1='Art' category2='Gaming' category3='Memberships' category4='PFPs' category5='Photography' />
                    </div>
                    <Footer />
                </div>
            }
        </>
    )
}

export default Dashboard