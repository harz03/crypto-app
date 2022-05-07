import React from 'react'
import CoinItem from './CoinItem'
import  './Coins.css'

const Coins = (props) => {
  return (
    <div className='container'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p className=''>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Volume(24h)</p>
                <p className='hide-mobile'>Market Cap</p>                    
            </div>
            {props.coins.map(coins => {return(
                <CoinItem coins={coins} key= {coins.id} />
            )})}
        </div>
    </div>
  )
}

export default Coins