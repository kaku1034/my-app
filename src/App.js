import React from 'react';
import './style.css';
import { HomeContent } from './components/homeContent';

const App = () => {

  // const clickTab = () => {

  // }

  return (
    <>
      <header>
        <h1 className="title">PORTFOLIO</h1>
      </header>
      <div className="mainContents">
        <div className="tab">
          <button className="tablinks" onClick="">HOME</button>
          <button className="tablinks" onClick="">自己紹介</button>
          <button className="tablinks" onClick="">作品集</button>
          <button className="tablinks" onClick="">連絡</button>
        </div>
        <div className="tabContents">
          <HomeContent />

        </div>

      </div>
    </>
  );
}

export { App };