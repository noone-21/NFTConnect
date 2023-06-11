import React from 'react';
import '../components/stylesheet/CollectionItem.css';

const CollectionItem = (props) => {

  // console.log(props)
  const { profilePicture, coverPhoto, collectionName, authorName, description='', numOfItems, maxDescriptionLength } =props
  const limitedDescription =
    description.length > maxDescriptionLength ? `${description.substring(0, maxDescriptionLength)}...` : description;

  return (
    <div className="myCollection">
      <div className="collection-cover-photo">
        <img src={coverPhoto} alt="Cover" />
      </div>
      <div className="collectionProfile">
        <img src={profilePicture} alt="Profile" className="collection-profile-picture" />
        <h3 className="collectionName">{collectionName}</h3>
        <div className="collection-author-name">{authorName}</div>
        <div className="collectionDescription">{limitedDescription}</div>
        <div className="collection-num-of-items">{numOfItems} Items</div>
      </div>
    </div>
  );
};

export default CollectionItem;
