import React from 'react';
import { Link } from "react-router-dom";
import '../components/stylesheet/NFTItem.css';
import sell from './img/sell.png'

const NFTItem = (props) => {

  const { nftDescription, nftName, nftImg, loading,nftId } = props

  let limitedDescription = 0

  if (!loading) {
    limitedDescription =
      nftDescription.length > 50 ? `${nftDescription.substring(0, 40)}...` : nftDescription;
  }

  return (
    <>
      <div className="myNft">
        <div className="nft-cover-photo">
          <img className='nftCoverImg' src={nftImg} alt="Cover" />
        </div>
        <div className="nftProfile">
          <h3 className="nft-Name">{nftName}</h3>
          <div className="nftDescription">{limitedDescription}</div>
        </div>
        <Link to={`/sellNFT/${nftId}`} >
          <button id="sellNft"><img src={sell} alt="" /> <p>List for Sale</p> </button>
        </Link>
      </div>
    </>
  );
};

export default NFTItem;
