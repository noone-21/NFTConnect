import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './stylesheet/ImageSlider.css'

function ImageSlider(props) {


    let [currentImageIndex, setCurrentImageIndex] = useState(0);

    const prevButton = () => {
        setCurrentImageIndex(currentImageIndex - 1);
        if (currentImageIndex < 0) {
            setCurrentImageIndex(props.images.length - 1);
        }
    }

    const nextButton = () => {
        setCurrentImageIndex(currentImageIndex + 1);
        if (currentImageIndex >= props.images.length) {
            setCurrentImageIndex(0);
        }
    }

    setTimeout(() => {
        setCurrentImageIndex(currentImageIndex + 1)
        if (currentImageIndex >= props.images.length) {
            setCurrentImageIndex(0);
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
                    style={{ background: !isSelected1 ? 'none' : '#4197af'  }} ><Link className='Link' to='/' >All</Link></button>
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
            <Link className='imgSliderLink' to='/art/collection' onClick={imgSlider} >
                <div id='image-slider' >
                    <button id="prev" onClick={prevButton} ><i className="fa-solid fa-circle-chevron-left"></i></button>
                    <img className='collectionImg' src={props.collectionImg} alt="" />
                    <h1 className='collectionTitle' >{props.title}</h1>
                    <p className='collectionAuthor' >{props.author}</p>
                    <p className='collectionInfo' >{props.info} · {props.price} </p>
                    <img id="image-container" src={props.images[currentImageIndex]} alt="NFT" />
                    <button className='collectionBtn' > View Collection</button>
                    <button id="next" onClick={nextButton} ><i className="fa-solid fa-circle-chevron-right"></i></button>
                </div>
            </Link>

        </>
    )
}

export default ImageSlider