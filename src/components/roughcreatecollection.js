import React, { useState } from "react";
import Navbar from "./Navbar";


const CreateCollection = () => {
  const [collections, setCollections] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [logoImage, setLogoImage] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [owner, setOwner] = useState("");
  const [noOfItems, setNoOfItems] = useState(0);

  const handleAddCollection = (e) => {
    e.preventDefault();

    const newCollection = {
      name: name,
      description: description,
      logoImage: logoImage,
      coverImage: coverImage,
      owner: owner,
      noOfItems: noOfItems
    };

    setCollections([...collections, newCollection]);

    // Reset form fields
    setName("");
    setDescription("");
    setLogoImage("");
    setCoverImage("");
    setOwner("");
    setNoOfItems(0);
  };

  return (
    <>
    <Navbar/>
    <div className="createCollectionPage" >
      <h1 id="createCollectionHeading" >Create a Collection</h1>
      {/* <form onSubmit={handleAddCollection}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Logo Image URL:
          <input type="text" value={logoImage} onChange={(e) => setLogoImage(e.target.value)} />
        </label>
        <label>
          Cover Image URL:
          <input type="text" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} />
        </label>
        <label>
          Owner:
          <input type="text" value={owner} onChange={(e) => setOwner(e.target.value)} />
        </label>
        <label>
          No. of Items:
          <input type="number" value={noOfItems} onChange={(e) => setNoOfItems(Number(e.target.value))} />
        </label>
        <button type="submit">Add Collection</button>
      </form> */}

      {/* <div>
        {collections.map((collection, index) => (
          <div key={index}>
            <h2>{collection.name}</h2>
            <p>{collection.description}</p>
            <img src={collection.logoImage} alt="Logo" />
            <img src={collection.coverImage} alt="Cover" />
            <p>Owner: {collection.owner}</p>
            <p>No. of Items: {collection.noOfItems}</p>
          </div>
        ))}
      </div> */}
    </div>
    </>
  );
};

export default CreateCollection;
