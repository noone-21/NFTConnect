import React from 'react';
import '../components/stylesheet/CollectionItem.css';

const CollectionItem = (props) => {

  const { profilePicture, coverPhoto, collectionName, authorName, description, numOfItems, maxDescriptionLength } =props
  const limitedDescription =
    description.length > maxDescriptionLength ? `${description.substring(0, maxDescriptionLength)}...` : description;

  return (
    <div className="card">
      <div className="card-cover-photo">
        <img src={coverPhoto} alt="Cover" />
      </div>
      <div className="card-profile">
        <img src={profilePicture} alt="Profile" className="card-profile-picture" />
        <h3 className="card-collectionName">{collectionName}</h3>
        <div className="card-author-name">{authorName}</div>
        <div className="card-description">{limitedDescription}</div>
        <div className="card-num-of-items">{numOfItems} Items</div>
      </div>
    </div>
  );
};

export default CollectionItem;
