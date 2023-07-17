import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import '../components/stylesheet/NFTItem.css';
import sell from './img/sell.png'
import {
  useContract,
  useValidDirectListings,
} from "@thirdweb-dev/react";

const NFTItem = (props) => {

  const { nftDescription, nftName, nftImg, loading,nftId, index} = props

  let limitedDescription = 0

  if (!loading) {
    limitedDescription =
      nftDescription.length > 50 ? `${nftDescription.substring(0, 40)}...` : nftDescription;
  }

  const { contract: marketplace } = useContract(
    "0x875f2aB61e1F9638FFea7f5b0436Ecf6caEAa77B"
  );

  const {
    data: listings,
    isLoading: loadingList,
    error: eList,
  } = useValidDirectListings(marketplace, { start: 0, count: 100 });

  const [isListed, setIsListed] = useState(false)

  useEffect(() => {
    if (!listings) return;
    const listing = listings.find(
      (listing) => listing.asset.id === nftId
    );
    if (Boolean(listing)) {
      setIsListed(true);
    }
    else {
      setIsListed(false)
    }
    // for (const listing of props.listings) {
    //   if (listing.asset.id === props.nftItem.id) {
    //     setIsListed(true);
    //     setPrice(listing.currencyValuePerToken.displayValue);
    //     break;
    //   }
    // }
  }, [ listings,nftId]);

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
        <Link to={`/sellNFT/${index}`} >
          <button disabled={isListed} id="sellNft"><img src={sell} alt="" /> <p>List for Sale</p> </button>
        </Link>
      </div>
    </>
  );
};

export default NFTItem;
