import React from "react";
import { useState } from 'react';
import Navbar from "../components/Navbar";
import './BuyToken.css'

function BuyTokens() {
    const [tokenAmount, setTokenAmount] = useState(0)

    const selectedTokenAmountHandler = (e) => {
        setTokenAmount(e.target.value)
    }

    const BuyTokenHandler = () => {
        console.log(tokenAmount)
    }

  return (
    <>
    <Navbar/>
    <div className="BuyTokenContainer">
      <input onChange={selectedTokenAmountHandler} type="number"></input>
      <button onClick={BuyTokenHandler}>Buy Tokens</button>
    </div>
    </>
  );
}

export default BuyTokens;
