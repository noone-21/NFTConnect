import React, { useState } from 'react'
import './stylesheet/ImageSlider.css'
import NFT1 from './img/NFT1.jpg'
import NFT2 from './img/NFT2.png'
import NFT3 from './img/NFT3.jpg'
import NFT4 from './img/NFT4.jpg'

function MultiImageSlider2(props) {
    
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

        <div id='image-container-multi2' >
            <img id="img-multi2" src={images[currentImageIndex1]} alt="NFT" />
            <p className='multi-name' > {props.category1} </p>
        </div>

        <div id='image-container-multi2' >
            <img id="img-multi2" src={images[currentImageIndex2]} alt="NFT" />
            <p className='multi-name' >{props.category2}</p>
        </div>

        <div id='image-container-multi2' >
            <img id="img-multi2" src={images[currentImageIndex3]} alt="NFT" />
            <p className='multi-name' >{props.category3}</p>
        </div>

        <div id='image-container-multi2' >
            <img id="img-multi2" src={images[currentImageIndex4]} alt="NFT" />
            <p className='multi-name' >{props.category4}</p>
        </div>

        <div id='image-container-multi2' >
            <img id="img-multi2" src={images[currentImageIndex1]} alt="NFT" />
            <p className='multi-name' >{props.category5}</p>
        </div>

        <button id="next-multi" onClick={nextButton} ><i className="fa-solid fa-circle-chevron-right"></i></button>
    </div>

</>
  )
}

export default MultiImageSlider2
