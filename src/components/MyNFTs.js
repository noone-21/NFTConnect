import React, { useState, useEffect, useRef} from 'react';
import './stylesheet/MyNFTs.css';
import Navbar from './Navbar';
import info from './img/info.png'
import dots from './img/dots.png'
import NFTItem from './NFTItem';
import {
  useContract,
  useAddress,
  useOwnedNFTs,
} from "@thirdweb-dev/react";

function MyNFTs() {

  const address = useAddress();

  const { contract: nftCollection } = useContract("0xcb36C2dC74aBC6Ce5551cF80777f7B8Fd172a12a");

  const {
    data: ownedNFTs,
    isLoading: myNftLoading,
    error: myNftError,
  } = useOwnedNFTs(nftCollection, address);

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
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
     <div id='bg-gradient' >
        <Navbar />
      </div>
      <div className="myNftsPage">
        <h1 className="myNftsHeading">My NFTs</h1>
        <p className="myNftsDesc">Create, sell or manage your NFTs.</p>
        <button className="myNftsInfoBtn">
          <img src={info} alt="" />
        </button>
        <div className="info-dialogue">
          <p>
            Collections can be created either directly on
            <br /> NFTConnect or imported from an existing smart
            <br /> contract. You can also mint on other services like
            <br /> OpenSea or Rarible and import the items to
            <br /> NFTConnect. <a href="/">Learn more about creating NFTs for <br /> free on NFTConnect</a>
          </p>
        </div>
        <a href="/createnft">
          <button className="createNftBtn">Create NFT</button>
        </a>
        <button className="otherPlatformBtn" ref={dropdownRef} onClick={toggleDropdown}>
          <img src={dots} alt="" />
        </button>
        {isOpen && (
          <div className="dropdown-Content">
            <a href="/">Mint on OpenSea</a>
            <a href="/">Mint on Rarible</a>
            <a href="/">Mint on Mintbase</a>
            <a href="/">Mint on Mintable</a>
          </div>
        )}
        {myNftLoading ? <div className='myNftLoading' ></div> :
        <div id="myNft">
          {/* {!ownedNFTs.length === 0 && ''} */}
          {ownedNFTs?ownedNFTs.map((nft) => {
            return <NFTItem
              key={nft.metadata.id}
              loading={myNftLoading}
              nftId={nft.metadata.id}
              nftImg={nft.metadata.image}
              nftName={nft.metadata.name}
              nftDescription={nft.metadata.description}
            />
          }):''}
        </div>}
      </div>
    </>
  );
}

export default MyNFTs;
