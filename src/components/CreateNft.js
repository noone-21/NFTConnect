import React, { useState, useEffect, useRef } from 'react'
import Navbar from './Navbar'
import './stylesheet/CreateNft.css'
import empty from './img/empty1.png'

function CreateNft() {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);


  return (
    <>
      <Navbar />
      <div className='createNftPage' >
        <h1 className='createNftHeading' >Create New Item</h1>
        <p className='sterric' >*</p>
        <p className='required' >Required fields</p>
        <h2 className='createNftImgTitle' >Image, Video, Audio, or 3D Model <p className='sterricI' >*</p> </h2>
        <p className='imgDesc' > File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB
        </p>
        <div onClick={console.log("first")} className="createNftImg"><img className='imgLogo' src={empty} alt="" /></div>
        <h2 className='createNftImgName' >Name <p className='sterricN' >*</p> </h2>
        <input className='createNftInput' type="text" />
        <h2 className='createNftLink' >External Link </h2>
        <p className='linkDesc' > NFTConnect will include a link to this URL on this item's detail page, so that users can click to learn <br /> more about it. You are welcome to link to your own webpage with more details.
        </p>
        <input className='createNftInput2' type="text" />
        <h2 className='createNftDesc' >Description </h2>
        <p className='linkDesc2' > The description will be included on the item's detail page underneath its image. <a href="https://www.markdownguide.org/cheat-sheet/"> Markdown syntax</a> <br /> is supported.
        </p>
        <input className='createNftInput3' type="text" />
        <h2 className='createNftCollection' >Collection</h2>
        <p className='collectionDesc' > This is the collection where your item will appear.  </p>
        <button className='createNftInfoBtn' ><i className="fa-solid fa-circle-info "></i> </button>
        <div className="infoDialogue">
          <p>Moving items to a different collection may <br /> take up to 30 minutes. <a href="/"> You can manage your   <br />  collections here.</a></p>
        </div>
        <div className={`collectionDropdown ${isOpen ? "active" : ""}`} ref={dropdownRef} >
          <button className="dropdownBtn" onClick={toggleDropdown} >
            <p>Select Collection</p>
            <i className="fa-solid fa-angle-down"></i>
          </button>
          <div className="nftCollectionsList">
            {/* <a href="/">Item 1</a>
            <a href="/">Item 2</a>
            <a href="/">Item 3</a> */}
           
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateNft
