import React, { useState, useEffect, useRef, useContext } from 'react'
import Navbar from './Navbar'
import './stylesheet/CreateNft.css'
import empty from './img/empty1.png'
import { CollectionsContext } from '../context/CollectionContext';
import stats from './img/stats.png'
import lock from './img/lock.png'

function CreateNft() {

  const [myCollections, setMyCollections] = useContext(CollectionsContext);

  useEffect(() => {
    const storedCollections = localStorage.getItem('myCollections');
    if (storedCollections) {
      setMyCollections(JSON.parse(storedCollections));
    }
  }, [setMyCollections]);

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
            <div className="nftCollectionListItem">
              {myCollections.length === 0 && `You don't have any Collections`}
              {myCollections.map((collection) => (
                <p key={collection.collectionId}><img className='nftCollectionLogo' src={collection.logoImage} alt="" />{collection.Name}</p>
              ))}
            </div>
          </div>
        </div>

        <div className='createNftProperties' >
          <i className='fa-solid fa-bars' id='propertiesIcon' ></i>
          <h2 className='propertiesHeading' >Properties </h2>
          <p className='propertiesDesc' >Textual traits that show up as rectangles</p>
          <button id='propertiesAdd' ><i className="fa-solid fa-plus"></i></button>

        </div>
        <hr />
        <div className='createNftLevels' >
          <i className="fa-solid fa-star" id='levelsIcon'></i>
          <h2 className='levelsHeading' >Levels </h2>
          <p className='levelsDesc' >Numerical traits that show as a progress bar</p>
          <button id='levelsAdd' ><i className="fa-solid fa-plus"></i></button>

        </div>
        <hr />
        <div className='createNftStats' >
          <img id='statsIcon' src={stats} alt='stats' ></img>
          <h2 className='statsHeading' >Stats </h2>
          <p className='statsDesc' >Numerical traits that just show as numbers</p>
          <button id='statsAdd' ><i className="fa-solid fa-plus"></i></button>
        </div>
        <hr />
        <div className='createNftUnlockable' >
          <img id='unlockableIcon' src={lock} alt='unlockable' ></img>
          <h2 className='unlockableHeading' >Unlockable Content</h2>
          <p className='unlockableDesc' >Include unlockable content that can only be revealed by the owner of the item.</p>
          <label className="nftUnlockableSwitch">
            <input
              type="checkbox"
            // checked={collectionData.collectionRanking || false}
            // onChange={(e) =>
            //   setCollectionData((prevData) => ({
            //     ...prevData,
            //     collectionRanking: e.target.checked,
            //   }))
            // }
            />
            <span className="nftUnlockableSlider"></span>
          </label>
        </div>
        <hr />
        <div className='createNftExplicit' >
          <i className="fa-solid fa-triangle-exclamation" id='explicitIcon' ></i>
          {/* <img id='explicitIcon' src={stats} alt='explicit' ></img> */}
          <h2 className='explicitHeading' >Explicit and Sensitive Content </h2>
          <p className='explicitDesc' >Set this item as explicit and sensitive content</p>
          <label className="nftExplicitSwitch">
            <input
              type="checkbox"
            // checked={collectionData.collectionRanking || false}
            // onChange={(e) =>
            //   setCollectionData((prevData) => ({
            //     ...prevData,
            //     collectionRanking: e.target.checked,
            //   }))
            // }
            />
            <span className="nftExplicitSlider"></span>
          </label>
        </div>
        <hr />
      </div>
    </>
  )
}

export default CreateNft
