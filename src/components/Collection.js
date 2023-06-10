import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import './stylesheet/Collection.css'

function Collection(props) {

    const [isSelectedItems, setIsSelectedItems] = useState(true);
    const [isSelectedAnalytics, setIsSelectedAnalytics] = useState(false);
    const [isSelectedActivity, setIsSelectedActivity] = useState(false);

    const itemsBtn = () => {
        setIsSelectedItems(true);
        setIsSelectedAnalytics(false);
        setIsSelectedActivity(false);
    };
    const analyticsBtn = () => {
        setIsSelectedItems(false);
        setIsSelectedAnalytics(true);
        setIsSelectedActivity(false);
    };
    const activityBtn = () => {
        setIsSelectedItems(false);
        setIsSelectedAnalytics(false);
        setIsSelectedActivity(true);
    };

    return (
        <>
            <Navbar />
            <div className='collectionPage' >
                <div className='collectionHeader' >
                    <img className='collection-background' src={props.bgImage} alt="" />
                    <img className='collection-image' src={props.image} alt="" />
                </div>
                <div className='collectionBody' >
                    <div id='collectionTitle' >
                        <h1 className='collectionName' >{props.title}</h1>
                        <div className='collectionIcons' >
                            <Link to='/' className='iconLink'><i className="fa-solid fa-globe"></i></Link>
                            <Link to='/' className='iconLink'><i className="fa-regular fa-star"></i></Link>
                            <Link to='/' className='iconLink'><i className="fa-solid fa-share-nodes"></i></Link>
                            <Link to='/' className='iconLink'><i className="fa-regular fa-flag"></i></Link>
                        </div>
                    </div>
                    <p id='collectionAuthor' >By  <Link id='Link' to='/' >{props.author}</Link> </p>
                    <div id='collectionInfo' >
                        <p>Items <b> {props.itemCount}</b> ·</p>
                        <p> Created <b>{props.creationDate}</b> ·</p>
                        <p> Creator Earning <b>{props.creatorEarning}</b> · </p>
                        <p> Chain <b>{props.chain}</b></p>
                    </div>
                    <p className='welcomeNote' >Welcome to the home of {props.title} on NFTConnect. Discover the best items in this collection.</p>
                    <div id='collectionPricing' >
                        <p id='outerP' ><b>{props.totalVolume}</b><p id='p' >total volume</p></p>
                        <p id='outerP' ><b>{props.floorPrice}</b><p id='p'>floor price</p></p>
                        <p id='outerP' ><b>{props.bestOffer}</b><p id='p'>best offer</p></p>
                        <p id='outerP' ><b>{props.listed}</b><p id='p'>listed</p></p>
                        <p id='outerP' ><b>{props.owners}</b><p id='p'>owners</p></p>
                        <p id='outerP' ><b>{props.uniqueOwners}</b><p id='p'>unique owners</p></p>
                    </div>
                    <div id='nftChart' >
                        <button id='btn-heading' onClick={itemsBtn} style={{ background: !isSelectedItems ? 'none' : 'gray' }} >Items</button>
                        <button id='btn-heading' onClick={analyticsBtn} style={{ background: !isSelectedAnalytics ? 'none' : 'gray' }} >Analytics</button>
                        <button id='btn-heading' onClick={activityBtn} style={{ background: !isSelectedActivity ? 'none' : 'gray' }} >Activity</button>
                    </div>
                    <hr className='hr' />
                    <div className='sortMenu' >
                        <button className='filterBtn' ><i className="fa-solid fa-bars "></i></button>
                        <div className="dot"></div>
                        <p className='live' >Live</p>
                        <p className='beta' >BETA</p>
                        <p className='resultsNo' >976 Results</p>
                        <div id='search-box'>
                            <i className="fi fi-rs-search icon"></i>
                            <div id='search' >
                                <input id='input' type="text" placeholder='Search items, collections and accounts' />
                            </div>
                        </div>
                        <div id='dropdown' >
                            <button id='btn-time' >Price low to high <i className="fa-solid fa-chevron-down"></i></button>
                            <div id='dropdown-content' >
                                <p>Price low to high</p>
                                <hr />
                                <p>Price high to low</p>
                                <hr />
                                <p>Recently listed</p>
                                <hr />
                                <p>Best offer</p>
                                <hr />
                                <p>Highest last sale</p>
                                <hr />
                                <p>Recently sold</p>
                                <hr />
                                <p>Recently created</p>
                                <hr />
                                <p>Oldest</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collection
