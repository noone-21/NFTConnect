import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CollectionsProvider } from './context/CollectionContext';
import LoadingScreen from './components/LoadingScreen';
import { useState} from "react";
import Dashboard from './components/Dashboard';
import NFT1 from './components/img/NFT1.jpg'
import NFT2 from './components/img/NFT2.png'
import NFT3 from './components/img/NFT3.jpg'
import NFT4 from './components/img/NFT4.jpg'
import Collection from './components/Collection';
import CreateNft from './components/CreateNft';
import CreateCollection from './components/CreateCollection';
import MyCollections from './components/MyCollections';
import SellNFT from './components/SellNFT';

function App() {

  const [isHide, setIsHide] = useState(true);

  setTimeout(() => setIsHide(false), 5300);

  const images1 = [
    NFT1,
    NFT2,
    NFT3,
    NFT4
];
const images2 = [
  NFT2,
  NFT1,
  NFT3,
  NFT4
];
const images3 = [
  NFT3,
  NFT2,
  NFT1,
  NFT4
];
const images4 = [
  NFT4,
  NFT2,
  NFT3,
  NFT1
];

  return (
    <CollectionsProvider>
    <Router>
      <Routes>
        <Route exact path="/" element={isHide? <LoadingScreen/>:<Dashboard images={images4} title='Mutant Ape Yatch Club' collectionImg={images4[0]} author='By probablynothingproject' info='6,267 items' price='0.78 ETH' />} ></Route>
        <Route exact path="/art" element={<Dashboard images={images1} title='CryptoArte' collectionImg={images3[0]} author='By Art_Blocks' info='1,247 items' price='0.21 ETH' />} ></Route>
        <Route exact path="/gaming" element={<Dashboard images={images2} title='Sewer Pass' collectionImg={images2[0]} author='By Sewer_Pass' info='700 items' price='1.23 ETH' />} ></Route>
        <Route exact path="/memberships" element={<Dashboard images={images3} title='Quantum Key' collectionImg={images1[0]} author='By Quantum-Art-Curator' info='2,967 items' price='0.37 ETH' />} ></Route>
        <Route exact path="/pfps" element={<Dashboard images={images4} title='VeeFriends' collectionImg={images4[0]} author='By VeeFriendsDev' info='10,627 items' price='0.88 ETH' />} ></Route>
        <Route exact path="/photography" element={<Dashboard images={images2} title='Panoramic Portraits' collectionImg={images3[0]} author='By RizacanKumas' info='210,277 items' price='3.98 ETH' />} ></Route>
      </Routes>
      <Routes>
        <Route exact path='/art/collection' element={<Collection bgImage={NFT1} image={NFT2} title='100 Sunsets by Zach Lieberman' author='brightmoments.eth' itemCount='129' creationDate='Feb 2023' creatorEarning='8.9%' chain='Ethereum' totalVolume='109 ETH' floorPrice='18 ETH' bestOffer='5.67 WETH' listed='5.1%' owners='83' uniqueOwners='59%' />} />
      </Routes>
      <Routes>
          <Route exact path='/createnft' element={<CreateNft/>} ></Route> 
          <Route exact path='/createcollection' element={<CreateCollection/>} ></Route> 
          <Route exact path='/mycollections' element={<MyCollections/>} ></Route> 
          <Route exact path='/sellNFT' element={<SellNFT/>} ></Route> 
      </Routes>
    </Router>
    </CollectionsProvider>
  );
}

export default App;
