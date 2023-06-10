import React, { useState } from 'react'
import './stylesheet/ImageSlider.css'
import NFT1 from './img/NFT1.jpg'
import NFT2 from './img/NFT2.png'
import NFT3 from './img/NFT3.jpg'
import NFT4 from './img/NFT4.jpg'


function MultiImageSlider() {

    const images = [
        NFT1,
        NFT2,
        NFT3,
        NFT4,
        NFT3,
        NFT1,
        NFT4,
        NFT2
    ];

    let [currentImageIndex1, setCurrentImageIndex1] = useState(0);
    let [currentImageIndex2, setCurrentImageIndex2] = useState(1);
    let [currentImageIndex3, setCurrentImageIndex3] = useState(2);
    let [currentImageIndex4, setCurrentImageIndex4] = useState(3);

    const prevButton = () => {
        setCurrentImageIndex1(currentImageIndex1 - 4);
        setCurrentImageIndex2(currentImageIndex2 - 4);
        setCurrentImageIndex3(currentImageIndex3 - 4);
        setCurrentImageIndex4(currentImageIndex4 - 4);
        if (currentImageIndex1 < 0 || currentImageIndex2 < 1 || currentImageIndex3 < 2 || currentImageIndex4 < 3) {
            setCurrentImageIndex1(images.length - 4);
            setCurrentImageIndex2(images.length - 3);
            setCurrentImageIndex3(images.length - 2);
            setCurrentImageIndex4(images.length - 1);
        }
    }

    const nextButton = () => {
        setCurrentImageIndex1(currentImageIndex1 + 4);
        setCurrentImageIndex2(currentImageIndex2 + 4);
        setCurrentImageIndex3(currentImageIndex3 + 4);
        setCurrentImageIndex4(currentImageIndex4 + 4);
        if (currentImageIndex1 >= images.length) {
            setCurrentImageIndex1(0);
            setCurrentImageIndex2(1);
            setCurrentImageIndex3(2);
            setCurrentImageIndex4(3);
        }
    }

    return (
        <>
            <div id='image-slider-multi' >
                <button id="prev-multi" onClick={prevButton} ><i className="fa-solid fa-circle-chevron-left"></i></button>

                <div id='image-container-multi' >
                    <img id="img-multi" src={images[currentImageIndex1]} alt="NFT" />
                    <p className='multi-name' >DigiDaigaku Dragon..</p>
                    <div className='multi-heading' >
                        <p className='multi-floor' >FLOOR</p>
                        <p className='multi-volume' >TOTAL VOLUME</p>
                    </div>
                    <div className='multi-figures' >
                        <p className='floor-figures' >0.26 ETH</p>
                        <p className='volume-figures' >1,126 ETH</p>
                    </div>
                </div>

                <div id='image-container-multi' >
                    <img id="img-multi" src={images[currentImageIndex2]} alt="NFT" />
                    <p className='multi-name' >Genesis Box</p>
                    <div className='multi-heading' >
                        <p className='multi-floor' >FLOOR</p>
                        <p className='multi-volume' >TOTAL VOLUME</p>
                    </div>
                    <div className='multi-figures' >
                        <p className='floor-figures' >2.38 ETH</p>
                        <p className='volume-figures' >3,641 ETH</p>
                    </div>
                </div>

                <div id='image-container-multi' >
                    <img id="img-multi" src={images[currentImageIndex3]} alt="NFT" />
                    <p className='multi-name' >Mutant Ape</p>
                    <div className='multi-heading' >
                        <p className='multi-floor' >FLOOR</p>
                        <p className='multi-volume' >TOTAL VOLUME</p>
                    </div>
                    <div className='multi-figures' >
                        <p className='floor-figures' >0.15 ETH</p>
                        <p className='volume-figures' >729 ETH</p>
                    </div>
                </div>

                <div id='image-container-multi' >
                    <img id="img-multi" src={images[currentImageIndex4]} alt="NFT" />
                    <p className='multi-name' >WorldWide Web Landd</p>
                    <div className='multi-heading' >
                        <p className='multi-floor' >FLOOR</p>
                        <p className='multi-volume' >TOTAL VOLUME</p>
                    </div>
                    <div className='multi-figures' >
                        <p className='floor-figures' >0.31 ETH</p>
                        <p className='volume-figures' >2,428 ETH</p>
                    </div>
                </div>

                <button id="next-multi" onClick={nextButton} ><i className="fa-solid fa-circle-chevron-right"></i></button>
            </div>

        </>
    )
}

export default MultiImageSlider
