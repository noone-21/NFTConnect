import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CollectionsContext } from '../context/CollectionContext';
import '../components/stylesheet/CollectionItem.css';
import edit from './img/edit.png'
import trash from './img/trash.png'
import earning from './img/earnings.png'

const CollectionItem = (props) => {

  const {collectionId, profilePicture, coverPhoto, collectionName, authorName, description = '', numOfItems, maxDescriptionLength } = props

  const [myCollections, setMyCollections] = useContext(CollectionsContext);

  const [showConfirmation, setShowConfirmation] = useState(false);


  const handleEditClick = () => {

  }
  const handleEarningsClick = () => {

  }

  const handleDeleteClick = () => {
    setShowConfirmation(true);
    document.documentElement.style.overflow = 'hidden';
  };
  const handleConfirmDelete = () => {
    const index = myCollections.findIndex((collection) => collection.Name === collectionName);
    if (index !== -1) {
      const updatedCollections = [...myCollections];
      updatedCollections.splice(index, 1);
      setMyCollections(updatedCollections);
      localStorage.setItem('myCollections', JSON.stringify(updatedCollections));
    }
    setShowConfirmation(false);
    document.documentElement.style.overflow = 'auto';
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
    document.documentElement.style.overflow = 'auto';
  };

  useEffect(() => {
    const storedCollections = localStorage.getItem('myCollections');
    if (storedCollections) {
      setMyCollections(JSON.parse(storedCollections));
    }
  }, [setMyCollections]);

  // console.log(props)

  const limitedDescription =
    description.length > maxDescriptionLength ? `${description.substring(0, maxDescriptionLength)}...` : description;

  return (
    <div className="myCollection">
      <div className='collectionTools' >
        <Link to={`/mycollections/editcollection/${collectionId}`} ><img onClick={handleEditClick} className='editCollectionBtn' src={edit} alt="" /></Link>
        <img onClick={handleEarningsClick} className='collectionEarningBtn' src={earning} alt="" />
        <img onClick={handleDeleteClick} className='deleteCollectionBtn' src={trash} alt="" />
      </div>
      <div className="collection-cover-photo">
        <img className='collectionCoverImg' src={coverPhoto} alt="Cover" />
      </div>
      <div className="collectionProfile">
        <img src={profilePicture} alt="Profile" className="collection-profile-picture" />
        <h3 className="collection-Name">{collectionName}</h3>
        <div className="collection-author-name">{authorName}</div>
        <div className="collectionDescription">{limitedDescription}</div>
        <div className="collection-num-of-items">{numOfItems} Items</div>
      </div>
      {showConfirmation && (
        <div className="confirmation-overlay" >
          <div className="CollectionDelConfirmationPopup">
            <h3>Are you sure you want to <br /> delete this collection?</h3>
            <p>This will delete this collection and hide all of its items, and can only <br /> be done if you own all items in the collection.</p>
            <div className="confirmationButtons">
              <button className='confirmationButtonsCancel' onClick={handleCancelDelete}>Cancel</button>
              <button className='confirmationButtonsDelete' onClick={handleConfirmDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionItem;
