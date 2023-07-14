import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import LoadingScreen from './components/LoadingScreen';
import { useState } from "react";
import Dashboard from './components/Dashboard';
import NFT from './components/NFT'
import CreateNft from './components/CreateNft';
import MyNFTs from './components/MyNFTs';
import SellNFT from './components/SellNFT';

function App() {

  const [isHide, setIsHide] = useState(true);

  setTimeout(() => setIsHide(false), 5300);

  return (
    <ThirdwebProvider
      activeChain={Sepolia}
      supportedWallets={[metamaskWallet()]}
    >
        <Router>
          <Routes>
            <Route exact path="/" element={isHide ? <LoadingScreen /> : <Dashboard />} ></Route>
            <Route exact path="/art" element={<Dashboard />} ></Route>
            <Route exact path="/gaming" element={<Dashboard  />} ></Route>
            <Route exact path="/memberships" element={<Dashboard />} ></Route>
            <Route exact path="/pfps" element={<Dashboard />} ></Route>
            <Route exact path="/photography" element={<Dashboard  />} ></Route>
          </Routes>
          <Routes>
            <Route exact path='/art/collection/:id' element={<NFT/>} />
          </Routes>
          <Routes>
            <Route exact path='/createnft' element={<CreateNft />} ></Route>
            {/* <Route exact path='/createcollection' element={<CreateCollection />} ></Route> */}
            <Route exact path='/mynfts' element={<MyNFTs />} ></Route>
            {/* <Route path='/mycollections/editcollection/:id' element={<EditCollection />} ></Route> */}
            <Route exact path='/sellNFT' element={<SellNFT />} ></Route>
          </Routes>
        </Router>
    </ThirdwebProvider>
  );
}

export default App;
