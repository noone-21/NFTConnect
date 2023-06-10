import React from 'react'
import './stylesheet/Style.css'
import NFT1 from './img/NFT1.jpg'

function CollectionsInfo(props) {
  return (
    <>
        <div className='collection-info' >
                    <p className='srNo' >{props.srNo}</p>
                    <img className='collection-img' src={NFT1} alt="NFT" />
                    <p className='collection-name' >Checks -VV Orignals</p>
                    <p className='collection-floorPrice' >0.28 ETH</p>
                    <p className='collection-volume' >1,176 ETH</p>
                </div>
    </>
  )
}

export default CollectionsInfo
