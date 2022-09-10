import React, { useEffect, useState } from 'react';
import InfoBar from '../../components/infoBar/infoBar';
import NavBar from '../../components/navBar/navBar';
import OverView from '../../components/overView/overView';
import Post from '../../components/post/post';
import "./home.css"
import {blogUrl} from"../../dummydb.js"
import { getPosts } from '../../api/api';
// import { Container } from './styles';

function Home() {
  const [posts,setPosts] = useState([])
  console.log(posts)
  useEffect(() => {
    return async () => {
    const res = await getPosts()
    console.log(res)
    setPosts(res)    };
  },[]);
  console.log(posts)
  
  
  return <>
  <NavBar/>
  <OverView/>
  <div className="mainSection">
    <div className='leftSection'>{blogUrl.map((url)=>{return <Post imgUrl={url.url}/>})}</div>
    <div className="rightSection"><InfoBar/></div>

  </div>
  </>;
}

export default Home;