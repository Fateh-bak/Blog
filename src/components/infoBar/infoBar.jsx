import React from 'react';
import AuthorSection from '../authorSection/authorSection';
import "./infoBar.css"
// import { Container } from './styles';

function InfoBar() {
  return <div className="infoBar">
      <div className="infoBarWraper">
          <div className="authorSection">
          <AuthorSection/>
          <AuthorSection/>
          <AuthorSection/>
          <AuthorSection/>
          <AuthorSection/>
          <AuthorSection/>

          
          
          </div>
      </div>
  </div>;
}

export default InfoBar;