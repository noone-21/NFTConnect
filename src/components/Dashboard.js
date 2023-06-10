import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import CollectionsInfo from './CollectionsInfo'
import Footer from './Footer'
import ImageSlider from './ImageSlider'
import MultiImageSlider from './MultiImageSlider'
import MultiImageSlider2 from './MultiImageSlider2'
import Navbar from './Navbar'
import './stylesheet/Style.css'
// import NFT1 from './img/NFT1.jpg'

function Dashboard(props) {

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



    return (
        <>
            <div id='bg-gradient' >
                <Navbar />
            </div>
            <ImageSlider images={props.images} title={props.title} collectionImg={props.collectionImg} author={props.author} info={props.info} price={props.price} />
            <div className='nft-chart' >
                <button className='btn-heading' onClick={trendBtn} style={{ background: !isSelectedTrend ? 'none' : 'gray' }} >Trending</button>
                <button className='btn-heading' onClick={topBtn} style={{ background: !isSelectedTop ? 'none' : 'gray' }} >Top</button>
                <div className='dropdown' >
                    <button className='btn-time' >24h <i className="fa-solid fa-chevron-down"></i></button>
                    <div className='dropdown-content' >
                        <p>1h</p>
                        <hr />
                        <p>6h</p>
                        <hr />
                        <p>24h</p>
                        <hr />
                        <p>7d</p>
                        <hr />
                        <p>30d</p>
                        <hr />
                        <p>All</p>
                    </div>
                </div>
                <div className='chain-btn' >
                    <p>All Chains</p>
                    <button><i className="fa-brands fa-ethereum"></i></button>
                    <button><i className="fa-brands fa-bitcoin"></i></button>
                    <button><i className="fa-solid fa-k"></i></button>
                    <button><i className="fa-solid fa-a"></i></button>
                    <button><i className="fa-solid fa-hill-avalanche"></i></button>
                    <button><i className="fa-solid fa-o"></i></button>
                    <button><i className="fa-solid fa-infinity"></i></button>
                    <button><i className="fa-solid fa-s"></i></button>
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
                <MultiImageSlider2 category1='What is an NFT?' category2='What is a Crypto Wallet?' category3='What is Blockchain gas fee?' category4='How to buy NFT?' category5='How to create NFT on NFTConnect?' />
            </div>
            <div className='imgSlider' >
                <h1 className='slider-headings' >Browse by Category</h1>
                <MultiImageSlider2 category1='Art' category2='Gaming' category3='Memberships' category4='PFPs' category5='Photography' />
            </div>
            <Footer />
        </>
    )
}

export default Dashboard