import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { utils } from "ethers";
import Navbar from './Navbar'
import eye from './img/eye.png'
import heart from './img/heart.png'
import redHeart from './img/redHeart.png'
import gaming from './img/gaming.png'
import sports from './img/sports.png'
import art from './img/art.png'
import music from './img/music.png'
import buy from './img/buy.png'
import ethereum from './img/ethereum.png'
import NFTConnects from './img/NFTConnects.jpeg'
import './stylesheet/NFT.css'
import {
    useContract,
    useContractWrite,
    useAddress,
    useNFTs,
    useValidDirectListings,
} from "@thirdweb-dev/react";

function NFT() {

    const [filteredNFTs, setFilteredNFTs] = useState([]);
    const [isfilteredNFTs, setIsFilteredNFTs] = useState(false);

    const { id } = useParams();

    const address = useAddress();

    const { contract: nftCollection } = useContract("0xcb36C2dC74aBC6Ce5551cF80777f7B8Fd172a12a");
    const {
        data: nfts,
        isLoading: loadingNft,
        error: eNft,
    } = useNFTs(nftCollection, {
        start: 0,
        count: 100,
    });

    const { contract: marketplace } = useContract(
        "0x875f2aB61e1F9638FFea7f5b0436Ecf6caEAa77B"
    );

    const {
        data: listings,
        isLoading: loadingList,
        error: eList,
    } = useValidDirectListings(marketplace, { start: 0, count: 100 });

    const [isListed, setIsListed] = useState(false)
    const [isOwner, setIsOwner] = useState(false)
    const [price, setPrice] = useState(0)

    useEffect(() => {
        if (!listings) return;
        const listing = listings.find(
            (listing) => listing.asset.id === nfts[id].metadata.id
            );
        if (Boolean(listing)) {
            setIsListed(true);
            setPrice(listing.currencyValuePerToken.displayValue);
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
        if (nfts[id].owner!==address) {
            setIsOwner(false)
        }else{
            setIsOwner(true)
        }
    }, [id,listings,nfts,address]);

      const { mutateAsync: buyFromListing, isLoading } = useContractWrite(
        marketplace,
        "buyFromListing"
      );
    
      const handleBuyOutFunction = async () => {
        try {
          const data = await buyFromListing({
            args: [
              id,
              address,
              1,
              listings[id].currencyContractAddress,
              listings[id].pricePerToken,
            ],
            overrides: {
                gasLimit: 1000000, // override default gas limit
                value: listings[id].pricePerToken, // send 0.1 native token with the contract call
              },
          });
          console.info("contract call successs", data);
        } catch (err) {
          console.error("contract call failure", err);
        }
      };


    
    const [category, setCategory] = useState('Gaming')
    const [categoryImg, setCategoryImg] = useState(gaming)
    const [flag, setflag] = useState(true)

    if (loadingNft === false) {
        if (id === 0 && flag === true) {
            setCategory('Gaming')
            setCategoryImg(gaming)
            setflag(false)
        }
        else if (id === 1 && flag === true) {
            setCategory('Art')
            setCategoryImg(art)
            setflag(false)
        }
        else if (id === 2 && flag === true) {
            setCategory('Music')
            setCategoryImg(music)
            setflag(false)
        }
        else if (id === 3 && flag === true) {
            setCategory('Sports')
            setCategoryImg(sports)
            setflag(false)
        }
    }

    const [favorite, setfavorite] = useState(heart)

    const addFavorite = () => {
        if (favorite === heart) {
            setfavorite(redHeart)
        }
        else {
            setfavorite(heart)
        }
    }

    useEffect(() => {
        if (!nfts) {
            return
        }

        setFilteredNFTs(nfts.filter((Nft) => {
            // Condition to skip certain numbers
            return Nft.metadata.image !== null&&Nft.owner!=='0x0000000000000000000000000000000000000000';
        }))
        if(Boolean(filteredNFTs)){
            setIsFilteredNFTs(true)
        }
    }, [nfts,filteredNFTs])


    return (
        <>
            <div id='bg-gradient' >
                <Navbar />
            </div>
            {loadingNft||!isfilteredNFTs ? <div className='nftLoading' ><img src={NFTConnects} alt="" /></div> :
             <div className='nftPage' >
                <img id='nftChain' src={ethereum} alt="" />
                <img className='nftImage' src={filteredNFTs[id].metadata.image} alt="" />
                <div className='nftBody' >
                    <h1 id='nftName' >{filteredNFTs[id].metadata.name}</h1>
                    <h1 className='nftDescription' >{filteredNFTs[id].metadata.description}</h1>
                    <div className='nftProperties' >
                        <p> <img src={eye} alt="" /> 119 views </p>
                        <p> <img onClick={addFavorite} className='favorite' src={favorite} alt="" /> 3 favorites </p>
                        <p> <img src={categoryImg} alt="" /> {category} </p>
                    </div>
                    <p className='nftPriceLabel' > Price: </p>
                    {loadingList && price===0 ? <div className='priceLoading' ><img src={NFTConnects} alt="" /></div> :
                    <div className='nftPriceAmount' >
                        <p className='nft-Price' > {price} ETH</p>
                        <p className='nftPriceRs' >Rs. {(price*509147.12).toFixed(2)} </p>
                    </div>}
                    <button onClick={handleBuyOutFunction} disabled={!isListed||isOwner} id="buyNft"><img src={buy} alt="" /> <p>BUY NOW</p> </button>
                </div>
            </div>}
        </>
    )
}

export default NFT
