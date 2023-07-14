import React from 'react'
import Navbar from './Navbar'
import './stylesheet/CreateNft.css'
import empty from './img/empty1.png'
import rightArrows from './img/rightArrows.png'


function CreateNft() {

  return (
    <>
      <div id='bg-gradient' >
        <Navbar />
      </div>
      <div className='createNftPage' >
        <div className='createNFTNavigation' >
          <a href="/mynfts">My NFTs</a>
          <img className="fa-solid fa-arrow-right" src={rightArrows} alt="" />
          <p>Create a NFT</p>
        </div>
        <h1 className='createNftHeading' >Create New Item</h1>
        <p className='sterric' >*</p>
        <p className='required' >Required fields</p>
        <h2 className='createNftImgTitle' >Image, Video, Audio, or 3D Model <p className='sterricI' >*</p> </h2>
        <p className='imgDesc' > File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB
        </p>
        <div  className="createNftImg"><img className='imgLogo' src={empty} alt="" /></div>
        <h2 className='createNftImgName' >Name <p className='sterricN' >*</p> </h2>
        <input className='createNftInputName' type="text" />
        <h2 className='createNftDesc' >Description </h2>
        <p className='DescInfo' > The description will be included on the item's detail page underneath its image. <a href="https://www.markdownguide.org/cheat-sheet/"> Markdown syntax</a> <br /> is supported.
        </p>
        <input className='createNftInputDesc' type="text" />
        <a className='createNftRoute' href="/mynfts">
          <button className="createNftButton">Create NFT</button>
        </a>
      </div>
    </>
  )
}

export default CreateNft
