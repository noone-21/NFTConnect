import React, { useState, useEffect, useRef, useContext } from 'react';
import './stylesheet/MyCollections.css';
import { CollectionsContext } from '../context/CollectionContext';
import Navbar from './Navbar';
import art from './img/cover.jpg';
import domain from './img/profile.jpg';
import CollectionItem from './CollectionItem';

function MyCollections() {
  const author = 'Danish';
  const noOfItems = '13';
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
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="myCollectionsPage">
        <h1 className="myCollectionsHeading">My Collections</h1>
        <p className="myCollectionsDesc">Create, curate, and manage collections of unique NFTs to share and sell.</p>
        <button className="myCollectionsInfoBtn">
          <i className="fa-solid fa-circle-info"></i>
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
        <a href="/createcollection">
          <button className="createCollectionBtn">Create a Collection</button>
        </a>
        <button className="otherPlatformBtn" ref={dropdownRef} onClick={toggleDropdown}>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>
        {isOpen && (
          <div className="dropdownContent">
            <a href="/">Mint on OpenSea</a>
            <a href="/">Mint on Rarible</a>
            <a href="/">Mint on Mintbase</a>
            <a href="/">Mint on Mintable</a>
          </div>
        )}
        <div id="myCollection">
          {myCollections.length === 0 && 'No Collections To Display'}
          {myCollections.map((collection) => {
            return <CollectionItem
              key={collection.collectionId}
              profilePicture={collection.logoImage}
              coverPhoto={collection.featuredImage}
              collectionName={collection.Name}
              authorName={`by @${author}`}
              description={collection.Description}
              numOfItems={noOfItems}
              maxDescriptionLength={80}
            />
          })}
        </div>
      </div>
    </>
  );
}

export default MyCollections;
