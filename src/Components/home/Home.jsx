import React from "react";
import './home.scss'
import home from "../../assets/home.png"
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">Collect Super Rare Digital Artwork</p>
          <h1 className="title">Digital Art Is The Trend Today. Welcome To The World Of NFT</h1>
          <p className="description">
            Collect NFT from our site We are the largest collector of NFTs You can also sell your own NFTs.
          </p>
          <button>Sign Up</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

