import React,{useContext,useEffect} from 'react';
import { CollectionsContext } from '../context/CollectionContext';
import '../components/stylesheet/CollectionItem.css';
import edit from './img/edit.png'
import trash from './img/trash.png'
import earning from './img/earnings.png'

const CollectionItem = (props) => {

  const { profilePicture, coverPhoto, collectionName, authorName, description = '', numOfItems, maxDescriptionLength } = props

  const [myCollections, setMyCollections] = useContext(CollectionsContext);


  const handleEditClick = () => {

  }
  const handleEarningsClick = () => {

  }
  const handleDeleteClick = () => {
    const index = myCollections.findIndex((collection) => collection.Name === collectionName);
    if (index !== -1) {
      const updatedCollections = [...myCollections];
      updatedCollections.splice(index, 1);
      setMyCollections(updatedCollections);
      localStorage.setItem('myCollections', JSON.stringify(updatedCollections));
    }
    
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
        <img onClick={handleEditClick} className='editCollectionBtn' src={edit} alt="" />
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
    </div>
  );
};

export default CollectionItem;
