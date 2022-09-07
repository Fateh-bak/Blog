import React from 'react';
import InfoBar from '../../components/infoBar/infoBar';
import NavBar from '../../components/navBar/navBar';
import OverView from '../../components/overView/overView';
import Post from '../../components/post/post';
import "./home.css"
import {blogUrl} from"../../dummydb.js"
// import { Container } from './styles';

function Home() {
  return <>
  <NavBar/>
  <OverView/>
  <div className="mainSection">
    <div className='leftSection'>{blogUrl.map((url)=>{return <Post imgUrl={url}/>})}</div>
    <div className="rightSection"><InfoBar/></div>

  </div>
  </>;
}

export default Home;