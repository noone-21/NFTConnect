import React, { useState, useEffect, useRef, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './Navbar'
import './stylesheet/CreateCollection.css'
import { CollectionsContext } from '../context/CollectionContext';
import rightArrows from './img/rightArrows.png'
import downArrow from './img/downArrow.png'
import upArrow from './img/upArrow.png'
import info from './img/info.png'
import website from './img/website.png'
import instagram from './img/instagram.png'
import twitter from './img/twitter.png'
import percent from './img/percent.png'
import trash from './img/trash.png'
import cross from './img/cross.png'
import empty from './img/empty1.png'
import ethereum from './img/ethereum.png'
import polygon from './img/polygon.png'
import solana from './img/solana.png'
import bnbchain from './img/bnb.png'
import select from './img/select.png'
import art from './img/art.png'
import domain from './img/domain.png'
import gaming from './img/gaming.png'
import music from './img/music.png'
import sports from './img/sports.png'
import noCategory from './img/noCategory.png'
import dai from './img/dai.png'
import usdc from './img/usdc.png'
import bat from './img/bat.png'
import ape from './img/ape.png'
import sand from './img/sand.png'
import eth from './img/eth.png'
import weth from './img/weth.png'

function EditCollection() {

    const { id } = useParams();


    // const [myCollections, setMyCollections] = useContext(CollectionsContext);
    const [myCollections, setMyCollections] = useState([])
    useEffect(() => {
        const storedCollections = localStorage.getItem('myCollections');
        if (storedCollections) {
          setMyCollections(JSON.parse(storedCollections));
        }
      }, [setMyCollections]);

    const foundCollection = myCollections.find((collection) => collection.collectionId === id);

    console.log(foundCollection)


    // ////////////////////MY COLLECTION ARRAY////////////////

    // //////////////////NEW COLLECTION OBJECT///////////////
    const [collectionData, setCollectionData] = useState({
        collectionId: 0,
        logoImage: '',
        featuredImage: '',
        bannerImage: '',
        Name: '',
        Url: '',
        Description: '',
        category: '',
        links: {
            yourSite: '',
            Instagram: '',
            Twitter: ''
        },
        creatorEarnings: [{
            address: '',
            percentage: ''
        }],
        blockchain: '',
        paymentTokens: [
            'ETH',
            'WETH',
        ],
        explicitContent: false,
        openRarityRankings: false,

    });


    // ///////////////LOGO IMAGE INPUT///////////////////////
    const logoImgInputRef = useRef(null);

    const handleLogoImgClick = () => {
        logoImgInputRef.current.click();
    };

    const handleLogoImgFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const logoImg = document.getElementById('logoImg');
                logoImg.src = reader.result;
                setCollectionData((prevImages) => ({
                    ...prevImages,
                    logoImage: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };


    // ///////////////FEATURED IMAGE INPUT///////////////////////
    const featuredImgInputRef = useRef(null);

    const handleFeaturedImgClick = () => {
        featuredImgInputRef.current.click();
    };

    const handleFeaturedImgFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const logoImg = document.getElementById('imgLogo2');
                logoImg.src = reader.result;
                setCollectionData((prevImages) => ({
                    ...prevImages,
                    featuredImage: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };


    // ///////////////BANNER IMAGE INPUT///////////////////////
    const bannerImgInputRef = useRef(null);

    const handleBannerImgClick = () => {
        bannerImgInputRef.current.click();
    };

    const handleBannerImgFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const logoImg = document.getElementById('imgLogo3');
                logoImg.src = reader.result;
                setCollectionData((prevImages) => ({
                    ...prevImages,
                    bannerImage: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    // //////////////////COLLECTION NAME/////////////////////////
    const handleCollectionNameChange = (event) => {
        const { value } = event.target;
        setCollectionData((prevData) => ({
            ...prevData,
            Name: value,
        }));

    };


    // //////////////////COLLECTION NAME/////////////////////////
    const handleCollectionURLChange = (event) => {
        const { value } = event.target;
        setCollectionData((prevData) => ({
            ...prevData,
            Url: value,
        }));
    };


    // //////////////////COLLECTION NAME/////////////////////////
    const handleCollectionDescriptionChange = (event) => {
        const { value } = event.target;
        setCollectionData((prevData) => ({
            ...prevData,
            Description: value,
        }));
    };


    //////////////NFT CATEGORY DROPDOWN//////////////
    const [isOpenCategory, setIsOpenCategory] = useState(false);
    const [selectedItemCategory, setSelectedItemCategory] = useState('Select Category');
    const [selectedLogoCategory, setSelectedLogoCategory] = useState(select);
    const dropdownRefCategory = useRef(null);

    const categoryItems = [
        { id: uuidv4(), name: 'Art', image: art },
        { id: uuidv4(), name: 'Domain Names', image: domain },
        { id: uuidv4(), name: 'Gaming', image: gaming },
        { id: uuidv4(), name: 'Music', image: music },
        { id: uuidv4(), name: 'Sports', image: sports },
        { id: uuidv4(), name: 'No category', image: noCategory }
    ];
    const categoryFilteredItems = categoryItems.filter((item) => item.name !== selectedItemCategory);

    const toggleDropdownCategory = () => {
        setIsOpenCategory(!isOpenCategory);
    };
    const handleClickOutsideCategory = (event) => {
        if (dropdownRefCategory.current && !dropdownRefCategory.current.contains(event.target)) {
            setIsOpenCategory(false);
        }
    };
    useEffect(() => {
        window.addEventListener("click", handleClickOutsideCategory);
        return () => {
            window.removeEventListener("click", handleClickOutsideCategory);
        };
    }, []);
    const handleItemClickCategory = (item, logo) => {
        setSelectedItemCategory(item);
        setSelectedLogoCategory(logo);
        setIsOpenCategory(false);
        setCollectionData((prevData) => ({
            ...prevData,
            category: item
        }));
    };

    // //////////////COLLECTION LINKS////////////////
    const handleCollectionYourSiteLinkChange = (event) => {
        const { value } = event.target;
        setCollectionData((prevData) => ({
            ...prevData,
            links: {
                yourSite: value
            },
        }));
    };
    const handleCollectionInstagramLinkChange = (event) => {
        const { value } = event.target;
        setCollectionData((prevData) => ({
            ...prevData,
            links: {
                Instagram: value
            },
        }));
    };
    const handleCollectionTwitterLinkChange = (event) => {
        const { value } = event.target;
        setCollectionData((prevData) => ({
            ...prevData,
            links: {
                Twitter: value
            },
        }));
    };

    ///////////CATEGORY INPUT CRUD/////////////////
    const [fields, setFields] = useState([]);

    const handleField1Change = (e, id) => {
        const updatedFields = fields.map((field) => {
            if (field.id === id) {
                return { ...field, field1: e.target.value };
            }
            return field;
        });
        setFields(updatedFields);

    };

    const handleField2Change = (e, id) => {
        const updatedFields = fields.map((field) => {
            if (field.id === id) {
                return { ...field, field2: e.target.value };
            }
            return field;
        });
        setFields(updatedFields);
    };

    const handleAddField = () => {
        const newField = {
            id: uuidv4(),
            field1: '',
            field2: ''
        };
        setFields((prevFields) => [...prevFields, newField]);
        setCollectionData((prevData) => ({
            ...prevData,
            creatorEarnings: {
                address: newField.field1,
                percentage: newField.field2
            }
        }));
    };

    const handleDeleteField = (id) => {
        const updatedFields = fields.filter((field) => field.id !== id);
        setFields(updatedFields);
    };

    ////////////BLOCKCHAIN DROPDOWN///////////////
    const [isOpenBlockchain, setIsOpenBlockchain] = useState(false);
    const dropdownRefBlockchain = useRef(null);
    const [selectedItemBlockchain, setSelectedItemBlockchain] = useState('Ethereum');
    const [selectedLogoBlockchain, setSelectedLogoBlockchain] = useState(ethereum);

    const blockchainItems = [
        { name: 'Ethereum', image: ethereum },
        { name: 'Solana', image: solana },
        { name: 'Polygon', image: polygon },
        { name: 'BNB Chain', image: bnbchain }
    ];
    const blockchainFilteredItems = blockchainItems.filter((item) => item.name !== selectedItemBlockchain);

    const toggleDropdownBlockchain = () => {
        setIsOpenBlockchain(!isOpenBlockchain);
    };
    const handleClickOutsideBlockchain = (event) => {
        if (dropdownRefBlockchain.current && !dropdownRefBlockchain.current.contains(event.target)) {
            setIsOpenBlockchain(false);
        }
    };
    useEffect(() => {
        window.addEventListener("click", handleClickOutsideBlockchain);
        return () => {
            window.removeEventListener("click", handleClickOutsideBlockchain);
        };
    }, []);
    const handleItemClickBlockchain = (item, logo) => {
        setSelectedItemBlockchain(item);
        setSelectedLogoBlockchain(logo);
        setIsOpenBlockchain(false);
        setCollectionData((prevData) => ({
            ...prevData,
            blockchain: item
        }));
    };


    ////////////TOKENS DROPDOWN///////////////
    const [isOpenTokens, setIsOpenTokens] = useState(false);
    const dropdownRefTokens = useRef(null);
    const [selectedItemTokens, setSelectedItemTokens] = useState('Add Token');
    const [paymentTokens, setPaymentTokens] = useState([
        { name: 'ETH', image: eth },
        { name: 'WETH', image: weth },
    ]);
    const initialPaymentTokens = [
        { name: 'ETH', image: eth },
        { name: 'WETH', image: weth },
    ]
    const [selectedLogoTokens, setSelectedLogoTokens] = useState(select);
    // console.log(selectedLogoTokens)
    const [tokensItems, setTokenItems] = useState([
        { name: 'DAI', image: dai },
        { name: 'USDC', image: usdc },
        { name: 'BAT', image: bat },
        { name: 'APE', image: ape },
        { name: 'SAND', image: sand }

    ]);
    const tokensFilteredItems = tokensItems.filter((item) => item.name !== selectedItemTokens);

    const toggleDropdownTokens = () => {
        setIsOpenTokens(!isOpenTokens);
    };
    const handleClickOutsideTokens = (event) => {
        if (dropdownRefTokens.current && !dropdownRefTokens.current.contains(event.target)) {
            setIsOpenTokens(false);
        }
    };
    useEffect(() => {
        window.addEventListener("click", handleClickOutsideTokens);
        return () => {
            window.removeEventListener("click", handleClickOutsideTokens);
        };
    }, []);
    const handleRemovePaymentToken = (item) => {
        setPaymentTokens((prevTokens) => prevTokens.filter((token) => token !== item));
        setTokenItems((prevItems) => [...prevItems, { name: item.name, image: item.image }]);
    };
    const handleItemClickTokens = (item, logo) => {
        setPaymentTokens((prevTokens) => [...prevTokens, { name: item, image: logo }]);
        setSelectedItemTokens(item);
        setSelectedLogoTokens(logo);
        setTokenItems((prevItems) => prevItems.filter((token) => token.name !== item));
        setIsOpenTokens(false);
        setCollectionData((prevData) => ({
            ...prevData,
            paymentTokens: [...prevData.paymentTokens, item]
        }));
    };


    // //////////////EXPLICIT CONTENT SWITCH////////////////
    // const [isCheckedExplicit, setIsCheckedExplicit] = useState(false);

    // const handleToggleExplicit = () => {
    //     setIsCheckedExplicit(!isCheckedExplicit);
    //     setCollectionData((prevData) => ({
    //         ...prevData,
    //         explicitContent: !prevData.explicitContent
    //     }));
    // };


    // //////////////OpenRarity Rankings SWITCH////////////////
    // const [isCheckedRankings, setIsCheckedRankings] = useState(false);

    // const handleToggleRankings = () => {
    //     setIsCheckedRankings(!isCheckedRankings);
    //     setCollectionData((prevData) => ({
    //         ...prevData,
    //         openRarityRankings: !prevData.openRarityRankings
    //     }));
    // };

    // /////////////////CREATE COLLECTION///////////////
    const [error, setError] = useState('');

    const handleCreateCollection = () => {

        // const collectionExists = myCollections.some(
        //     (collection) =>
        //         collection.Name === collectionData.Name ||
        //         collection.logoImage === collectionData.logoImage
        // );

        // // if (collectionExists) {
        // //   console.log('A collection with the same name or logoImage already exists');
        // //   return;
        // // }
        // if (collectionExists) {
        //     // setError('Collection with this name already exists');
        //     console.log("Exists")
        // } else {
        //     // Proceed with form submission or other actions
        //     // ...
        //     // Reset error state
        //     setError('');
        // }

        const updatedCollections = [...myCollections, collectionData];
        setMyCollections(updatedCollections);

        // Store the updated collections in localStorage

        setCollectionData({
            collectionId: collectionData.collectionId + 1,
            logoImage: '',
            featuredImage: '',
            bannerImage: '',
            Name: '',
            Url: '',
            Description: '',
            category: '',
            links: {
                yourSite: '',
                Instagram: '',
                Twitter: ''
            },
            creatorEarnings: [{
                address: '',
                percentage: ''
            }],
            blockchain: '',
            paymentTokens: ['ETH', 'WETH'],
            explicitContent: false,
            openRarityRankings: false,
        });
        localStorage.setItem('myCollections', JSON.stringify(updatedCollections));
        // window.location.reload(); 

    };
    useEffect(() => {
        const storedCollections = localStorage.getItem('myCollections');
        if (storedCollections) {
            setMyCollections(JSON.parse(storedCollections));
        }
    }, [setMyCollections]);
    // localStorage.clear()


    return (
        <>
            <Navbar />
            {/*///////////// MAIN PAGE///////////// */}
            <div className='createCollectionPage' >
                <div className='createCollectionNavigation' >
                    <a href="/mycollections">My Collections</a>
                    <img className="fa-solid fa-arrow-right" src={rightArrows} alt="" />
                    <p>Edit Collection</p>
                </div>

                {/* /////////////MAIN HEADING////////////// */}
                <h1 className='createCollectionHeading' >Edit Your Collection</h1>
                <p id='sterric' >*</p>
                <p id='required' >Required fields</p>

                {/* /////////////LOGO IMAGE///////////// */}
                <h2 className='createCollectionLogoImgTitle' >Logo Image<p id='sterricI' >*</p> </h2>
                <p className='logoImgDesc' > This image will also be used for navigation. 350 x 350 recommended.
                </p>
                <div className="createCollectionLogoImg" onClick={handleLogoImgClick}>
                    <img id="logoImg" src={empty} alt="" />
                </div>
                <input
                    type="file"
                    accept="image/*"
                    ref={logoImgInputRef}
                    style={{ display: 'none' }}
                    onChange={handleLogoImgFileChange}
                />

                {/* ////////////FEATURED IMAGE//////////// */}
                <h2 className='createCollectionFtrImgTitle' >Featured Image</h2>
                <p className='imgDesc2' > This image will be used for featuring your collection on the homepage, <br /> category pages, or other promotional areas of NFTConnect. 600 x 400 <br /> recommended.
                </p>
                <div className="createCollectionFtrImg" onClick={handleFeaturedImgClick} ><img id='imgLogo2' src={empty} alt="" /></div>
                <input
                    type="file"
                    accept="image/*"
                    ref={featuredImgInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFeaturedImgFileChange}
                />

                {/* ///////////////BANNER IMAGE////////////// */}
                <h2 className='createCollectionBannerImgTitle' >Banner Image</h2>
                <p className='imgDesc3' > This image will appear at the top of your collection page. Avoid <br /> including too much text in this banner image, as the dimensions change <br /> on different devices. 1400 x 350 recommended.
                </p>
                <div className="createCollectionBannerImg" onClick={handleBannerImgClick} ><img id='imgLogo3' src={empty} alt="" /></div>
                <input
                    type="file"
                    accept="image/*"
                    ref={bannerImgInputRef}
                    style={{ display: 'none' }}
                    onChange={handleBannerImgFileChange}
                />

                {/* ///////////COLLECTION NAME////////////// */}
                <h2 className='createCollectionName' >Name <p id='sterricN' >*</p> </h2>
                <input className='createCollectionInput' type="text" value={collectionData.name}
                    onChange={handleCollectionNameChange} />

                {/* /////////////COLLECTION URL/////////// */}
                <h2 className='createCollectionURL' >URL </h2>
                <p id='linkDesc' > Customize your URL on NFTConnect. Must only contain lowercase letters, <br /> numbers, and hyphens.
                </p>
                <input className='createCollectionInput2' type="text" value={collectionData.Url}
                    onChange={handleCollectionURLChange} />

                {/* /////////////COLLECTION DESCRIPTION////////// */}
                <h2 className='createCollectionDesc' >Description </h2>
                <p id='linkDesc2' >  <a href="https://www.markdownguide.org/cheat-sheet/"> Markdown syntax</a> is supported. length=200 characters
                </p>
                <textarea rows='5' cols='50' maxLength={200} className='createCollectionInput3' type="text" value={collectionData.Description}
                    onChange={handleCollectionDescriptionChange} />

                {/* ///////////////COLLECTION NFT CATEGORY////////////// */}
                <h2 className='createCollectionCategory' >Category </h2>
                <p id='categoryDesc' > Adding a category will help make your item discoverable on NFTConnect.
                </p>
                <div className={`nftCategoryDropdown ${isOpenCategory ? "active" : ""}`} ref={dropdownRefCategory} >
                    <button className="nftCategoryDropdownBtn" onClick={toggleDropdownCategory} >
                        <p><img className='categoryLogo' src={selectedLogoCategory} alt="" /> {selectedItemCategory}</p>
                        <img className='nftCategoryArrowBtn' src={isOpenCategory ? upArrow : downArrow} alt='' ></img>
                    </button>
                    <div className="nftCategoryList">
                        {categoryFilteredItems.map((item) => (
                            <div className='nftCategoryListItem' >
                                <p
                                    key={item.id}
                                    className={selectedItemCategory === item.name ? 'selected' : ''}
                                    onClick={() => handleItemClickCategory(item.name, item.image)}
                                >
                                    <img className='categoryLogo' src={item.image} alt="" />
                                    {item.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ///////////////COLLECTION LINKS/////////////// */}
                <h2 className='createCollectionLinks' >Links </h2>
                <div className="input-container">
                    <img src={website} alt="" />
                    <input className='createCollectionInput4' type="text" placeholder='yoursite.io' value={collectionData.links.yourSite || ''}
                        onChange={handleCollectionYourSiteLinkChange} />
                </div>
                <div className="input-container">
                    <img src={instagram} alt="" />
                    <input
                        className='createCollectionInput5'
                        type="text"
                        placeholder='https://www.Instagram.com/YourInstagramandle'
                        value={collectionData.links.Instagram || ''}
                        onChange={handleCollectionInstagramLinkChange}
                    />
                </div>
                <div className="input-container">
                    <img src={twitter} alt="" />
                    <input className='createCollectionInput6' type="text" placeholder='https://twitter.com/
                abcdef' value={collectionData.links.Twitter || ''}
                        onChange={handleCollectionTwitterLinkChange} />
                </div>

                {/* //////////////CREATOR EARNINGS////////////// */}
                <h2 className='collectionCreatorEarnings' >Creator Earnings </h2>
                <p id='creatorEarningDesc' > Collection owners can collect creator earnings when a user re-sells an <br /> item they created. Contact the collection owner to change the <br /> collection earnings percentage or the payout address.
                </p>
                <div>
                    {fields.map((field) => (
                        <div key={field.id}>
                            <input
                                className='createCollectionInput7'
                                type="text"
                                value={field.field1}
                                onChange={(e) => handleField1Change(e, field.id)}  // Pass field.id to handleField1Change
                            />
                            <div id="input-container">

                                <img src={percent} alt="" />
                                <input
                                    className='createCollectionInput8'
                                    type="text"
                                    value={field.field2}
                                    onChange={(e) => handleField2Change(e, field.id)}  // Pass field.id to handleField2Change
                                />
                            </div>
                            <button className='categoryDelBtn' onClick={() => handleDeleteField(field.id)}>
                                <img src={trash} alt="" />
                            </button>
                        </div>
                    ))}
                    <button className='addCategoryBtn' onClick={handleAddField}>Add Field</button>
                </div>


                {/* /////////////////COLLECTION BLOCKCHAIN///////////// */}
                <h2 className='createCollectionBlockchain' >Blockchain </h2>
                <p id='createCollectionBlockchainDesc' > Select the blockchain where you'd like new items from this collection <br /> to be added by default.</p>
                <button className='blockchainInfoBtn' ><img className='fa-solid fa-circle-info ' src={info} alt="" /> </button>
                <div id="blockchainInfoDialogue">
                    Collections can be created either directly on <br /> NFTConnect or imported from an existing smart <br /> contract. You can also mint on other services like <br /> OpenSea or Rarible  and import the items to <br /> NFTConnect. <a href="/"> Learn more about creating NFTs for free on NFTConnect </a>
                </div>
                <div className={`blockchainDropdown ${isOpenBlockchain ? "active" : ""}`} ref={dropdownRefBlockchain} >
                    <button className="blockchainDropdownBtn" onClick={toggleDropdownBlockchain} >
                        <p><img className='blockchainLogo' src={selectedLogoBlockchain} alt="" /> {selectedItemBlockchain}</p>
                        <img className='nftBlockchainArrowBtn' src={isOpenBlockchain ? upArrow : downArrow} alt='' ></img>
                    </button>
                    <div className="blockchainsList">
                        {blockchainFilteredItems.map((item) => (
                            <div className='blockchainListItem' >
                                <p
                                    key={item.name}
                                    className={selectedItemBlockchain === item.name ? 'selected' : ''}
                                    onClick={() => handleItemClickBlockchain(item.name, item.image)}
                                >
                                    <img className='blockchainLogo' src={item.image} alt="" />
                                    {item.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/*////////////////PAYMENT TOKENS/////////////////  */}
                <h2 className='createCollectionPaymentTokens' >Payment Tokens</h2>
                <p id='createCollectionTokensDesc' > These tokens can be used to buy and sell your items.</p>
                <div className='paymentTokensContainer' >
                    {paymentTokens.map((token) => (
                        <p key={token.name}>
                            <img className='tokensLogo' src={token.image} alt="" /> {token.name}
                            {paymentTokens.indexOf(token) >= initialPaymentTokens.length && (
                                <img onClick={() => handleRemovePaymentToken(token)} className="fa-solid fa-xmark" src={cross} alt='' ></img>
                            )}
                        </p>
                    ))}
                </div>
                <div className={`tokensDropdown ${isOpenTokens ? "active" : ""}`} ref={dropdownRefTokens} >
                    <button className="tokensDropdownBtn" onClick={toggleDropdownTokens} >
                        <p><img className='tokensLogo' src={select} alt="" /> Add Token</p>
                        <img className='nftTokensArrowBtn' src={isOpenTokens ? upArrow : downArrow} alt='' ></img>
                    </button>
                    <div className="tokensList">
                        {tokensFilteredItems.map((item) => (
                            <div className='tokensListItem' >
                                <p
                                    key={item.name}
                                    className={selectedItemTokens === item.name ? 'selected' : ''}
                                    onClick={() => handleItemClickTokens(item.name, item.image)}
                                >
                                    <img className='tokensLogo' src={item.image} alt="" />
                                    {item.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/*////////////////DISPLAY THEME/////////////////  */}


                {/*////////////////EXPLICIT AND SENSITIVE/////////////////  */}
                <h2 className='collectionExplicitContent' >Explicit and Sensitive Content </h2>
                <p id='collectionExplicitContentDesc' > Set this collection as explicit and sensitive content.</p>
                <button className='explicitContentInfoBtn' ><img className='fa-solid fa-circle-info ' src={info} alt="" /> </button>
                <div id="explicitContentInfoDialogue">
                    Setting your collection as explicit and sensitive <br /> content, like pornography and other not safe for <br /> work (NSFW) content, will protect users with safe <br /> search while browsing NFTConnect. <a href="/"> Learn more about explicit content at NFTConnect here. </a>
                </div>
                <label className="explicitContentSwitch">
                    <input
                        type="checkbox"
                        checked={collectionData.explicitContent || false}
                        onChange={(e) =>
                            setCollectionData((prevData) => ({
                                ...prevData,
                                explicitContent: e.target.checked,
                            }))
                        }
                    />
                    <span className="explicitContentSlider"></span>
                </label>

                {/*////////////////RANKINGS/////////////////  */}
                <h2 className='collectionRankings' >Open Rarity Rankings </h2>
                <p id='collectionRankingsDesc' > Turn on after all items revealed and attribute metadata is finalized.</p>
                <button className='collectionRankingInfoBtn' > <img className='fa-solid fa-circle-info ' src={info} alt="" /> </button>
                <div id="collectionRankingsInfoDialogue">
                    Open Rarity rankings are currently only <br /> supported for ERC-721 collections that have <br /> trait data and string traits. <a href="/">Learn More</a>
                </div>
                <label className="collectionRankingSwitch">
                    <input
                        type="checkbox"
                        checked={collectionData.collectionRanking || false}
                        onChange={(e) =>
                            setCollectionData((prevData) => ({
                                ...prevData,
                                collectionRanking: e.target.checked,
                            }))
                        }
                    />
                    <span className="collectionRankingSlider"></span>
                </label>

                {/*////////////////CREATE/////////////////  */}
                <div className='confirmNewCollection' >
                    <button className="createNewCollectionBtn" disabled={collectionData.Name === '' || collectionData.logoImage === '' ? true : false} onClick={handleCreateCollection}>Create</button>
                </div>
            </div>
        </>
    )
}

export default EditCollection
