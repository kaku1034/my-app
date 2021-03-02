import React from 'react';
import './style.css';
import { HomeContent } from './components/homeContent';
import { IntroductionContent } from './components/introductionContent';
import { PortfolioContent } from './components/portfolioContent';
import { ContactContent } from './components/contactContent';

const App = () => {

  const clickTab = () => {

  }

  return (
    <>
      <header>
        <h1 className="title">PORTFOLIO</h1>
      </header>
      <div className="all-container">
        <div className="tab-container">
          <ul>
            <li className="tablinks" id="home" onClick={ clickTab() }><a href="#">HOME</a></li>
            <li className="tablinks" id="introduct" onClick={ clickTab() }><a href="#">自己紹介</a></li>
            <li className="tablinks" id="portfolio" onClick={ clickTab() }><a href="#">作品集</a></li>
            <li className="tablinks" id="contact" onClick={ clickTab() }><a href="#">連絡</a></li>
          </ul>
        </div>
        <div className="content-container">
          <HomeContent />
        </div>
      </div>
    </>
  );
}

export { App };