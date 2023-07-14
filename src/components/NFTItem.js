import React from 'react';
import '../components/stylesheet/NFTItem.css';

const NFTItem = (props) => {

  const {nftDescription,nftName,nftImg,loading} =props

  let limitedDescription =0

  if(!loading){
    limitedDescription =
    nftDescription.length > 50 ? `${nftDescription.substring(0, 40)}...` :nftDescription;
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
    </div>
    </>
  );
};

export default NFTItem;
