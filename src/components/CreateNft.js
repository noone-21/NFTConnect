import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import './stylesheet/CreateNft.css'
import empty from './img/empty1.png'
import rightArrows from './img/rightArrows.png'
import {
  useContract,
  useMintNFT,
  useAddress,
} from "@thirdweb-dev/react";


function CreateNft() {

  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [disableBtn, setDisableBtn] = useState(true);

  const navigate = useNavigate()

  const address = useAddress();

  const { contract: nftCollection } = useContract('0xcb36C2dC74aBC6Ce5551cF80777f7B8Fd172a12a');
  const {
    mutate: mintNft,
    isLoading: loadingMint,
    error: eMint,
  } = useMintNFT(nftCollection);

  if (eMint) {
    console.error("failed to mint NFT", eMint);
  }




  const handleImgClick = () => {
    // Open the file input dialog
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.addEventListener('change', handleFileInputChange);
    fileInput.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
    if (image === null || name === '') {
      setDisableBtn(true)
    } else {
      setDisableBtn(false)
    }
  };

  const handleNftNameChange = (event) => {
    const { value } = event.target;
    setName(value)
    if (image === null || name === '') {
      setDisableBtn(true)
    } else {
      setDisableBtn(false)
    }
  };
  const handleNftDescriptionChange = (event) => {
    const { value } = event.target;
    setDescription(value)
  };

  const handleMintNft = async () => {
    mintNft({
      metadata: {
        name: name,
        description: description,
        image: image // Accepts any URL or File type
      },
      to: address, // Use useAddress hook to get current wallet address
    })
    if (!loadingMint) {
      setImage(null)
      setName('')
      setDescription('')
      navigate('/mynfts')
    }
  }


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
        <p className='imgDesc' > File types supported: JPG, PNG, GIF, SVG</p>
        <div onClick={handleImgClick} className="createNftImg">
          {image ? (
            <img className="imgLogo" src={image} alt="" />
          ) : (
            <img className="imgLogo" src={empty} alt="" />
          )}
        </div>
        <h2 className='createNftImgName' >Name <p className='sterricN' >*</p> </h2>
        <input className='createNftInputName' onChange={handleNftNameChange} type="text" value={name} />
        <h2 className='createNftDesc' >Description </h2>
        <p className='DescInfo' > The description will be included on the item's detail page underneath its image. <a href="https://www.markdownguide.org/cheat-sheet/"> Markdown syntax</a> <br /> is supported.
        </p>
        <input onChange={handleNftDescriptionChange} height={50} className='createNftInputDesc' type="text" value={description} />
        <button disabled={disableBtn} onClick={handleMintNft} className="createNftButton">Create NFT</button>
      </div>
    </>
  )
}

export default CreateNft
