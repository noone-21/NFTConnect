import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './stylesheet/ImageSlider.css'
import leftArrow from './img/leftArrow.png'
import rightArrow from './img/rightArrow.png'

function ImageSlider(props) {

    const { nfts, loading, listings } = props

    const [filteredNFTs, setFilteredNFTs] = useState([]);
    const [isfilteredNFTs, setIsFilteredNFTs] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isListed, setIsListed] = useState(false)
    const [price, setPrice] = useState(0)

    useEffect(() => {
        if (!listings) return;
        const listing = listings.find(
            (listing) => listing.asset.id === nfts[currentImageIndex].metadata.id
        );
        if (Boolean(listing)) {
            setIsListed(true);
            setPrice(listing.currencyValuePerToken.displayValue);
        }
        else {
            setIsListed(false)
        }
        setFilteredNFTs(nfts.filter((Nft) => {
            return Nft.metadata.image !== null && Nft.owner !== '0x0000000000000000000000000000000000000000';
        }))
        if (Boolean(filteredNFTs)) {
            setIsFilteredNFTs(true)
        }
    }, [listings]);




    const prevButton = () => {
        if (currentImageIndex <= 1 && isfilteredNFTs) {
            setCurrentImageIndex(filteredNFTs.length - 1);
        }
        else {
            setCurrentImageIndex(currentImageIndex - 1);

        }
    }

    const nextButton = () => {
        if (currentImageIndex >= filteredNFTs.length - 1 && isfilteredNFTs) {
            setCurrentImageIndex(0);
        }
        else {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    }



    setTimeout(() => {
        if (currentImageIndex >= filteredNFTs.length - 1 && isfilteredNFTs) {
            setCurrentImageIndex(0);
        }
        else {
            setCurrentImageIndex(currentImageIndex + 1)
        }
    }, 10000);


    const [isSelected1, setIsSelected1] = useState(true);
    const [isSelected2, setIsSelected2] = useState(false);
    const [isSelected3, setIsSelected3] = useState(false);
    const [isSelected4, setIsSelected4] = useState(false);
    const [isSelected5, setIsSelected5] = useState(false);
    const [isSelected6, setIsSelected6] = useState(false);

    const allBtn = () => {
        setIsSelected1(true);
        setIsSelected2(false);
        setIsSelected3(false);
        setIsSelected4(false);
        setIsSelected5(false);
        setIsSelected6(false);
    };
    const artBtn = () => {
        setIsSelected1(false);
        setIsSelected2(true);
        setIsSelected3(false);
        setIsSelected4(false);
        setIsSelected5(false);
        setIsSelected6(false);
    };
    const gamingBtn = () => {
        setIsSelected1(false);
        setIsSelected2(false);
        setIsSelected3(true);
        setIsSelected4(false);
        setIsSelected5(false);
        setIsSelected6(false);
    };
    const membershipsBtn = () => {
        setIsSelected1(false);
        setIsSelected2(false);
        setIsSelected3(false);
        setIsSelected4(true);
        setIsSelected5(false);
        setIsSelected6(false);
    };
    const pfpsBtn = () => {
        setIsSelected1(false);
        setIsSelected2(false);
        setIsSelected3(false);
        setIsSelected4(false);
        setIsSelected5(true);
        setIsSelected6(false);
    };
    const photographyBtn = () => {
        setIsSelected1(false);
        setIsSelected2(false);
        setIsSelected3(false);
        setIsSelected4(false);
        setIsSelected5(false);
        setIsSelected6(true);
    };

    const imgSlider = () => {
        setIsSelected1(true);
        setIsSelected2(false);
        setIsSelected3(false);
        setIsSelected4(false);
        setIsSelected5(false);
        setIsSelected6(false);
    };


    return (
        <>
            <div className='dashboard-menu' >
                <button className='allBtn' onClick={allBtn}
                    style={{ background: !isSelected1 ? 'none' : '#4197af' }} ><Link className='Link' to='/' >All </Link></button>
                <button className='artBtn' onClick={artBtn}
                    style={{ background: !isSelected2 ? 'none' : '#4197af' }} ><Link className='Link' to='/art' >Art</Link></button>
                <button className='gamingBtn' onClick={gamingBtn}
                    style={{ background: !isSelected3 ? 'none' : '#4197af' }} ><Link className='Link' to='/memberships' >Gaming</Link></button>
                <button className='membershipsBtn' onClick={membershipsBtn}
                    style={{ background: !isSelected4 ? 'none' : '#4197af' }} ><Link className='Link' to='/gaming' >Memberships</Link></button>
                <button className='pfpsBtn' onClick={pfpsBtn}
                    style={{ background: !isSelected5 ? 'none' : '#4197af' }} ><Link className='Link' to='/pfps' >PFPs</Link></button>
                <button className='photographyBtn' onClick={photographyBtn}
                    style={{ background: !isSelected6 ? 'none' : '#4197af' }} ><Link className='Link' to='/photography' >Photography</Link></button>
            </div>
            {isfilteredNFTs && <Link className='imgSliderLink' to={`/art/collection/${currentImageIndex}`} onClick={imgSlider} >
                <div id='image-slider' >
                    <h1 id='nftTitle' >{filteredNFTs[currentImageIndex].metadata.name}</h1>
                    <p id='nftPrice' > {isListed ? price + ' ETH' : ''}   </p>
                    <img id="image-container" src={filteredNFTs[currentImageIndex].metadata.image} alt="NFT" />
                    <button id='nft-Btn' > View NFT</button>
                </div>
            </Link>}
            <button id="prev" onClick={prevButton} > <img src={leftArrow} alt="" /></button>
            <button id="next" onClick={nextButton} > <img src={rightArrow} alt="" /></button>

        </>
    )
}

export default ImageSlider