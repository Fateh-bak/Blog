import React from 'react';
import "./post.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import VisibilityIcon from '@mui/icons-material/Visibility';

// import { Container } from './styles';

function Post({imgUrl}) {
  console.log(imgUrl.typdd)
  return <div className="postSection">
      <div className="postSectionWraper">
          <img src={imgUrl.url} alt="notfound" className="postImg" />
          <div className="postDesc">
          <span className="postTitle">Hi-Tech</span>
          <span className="postDescTxt">
            Certainty listening no behaviour existence assurance situation
          </span>
          <div className="postInfo">
            <div className="postInfoElement"><span className="status">Admin</span></div>
            <div className="postInfoElement">
              <CalendarMonthIcon className="postIcon"/>
              <span className="postDate">jul / 15 / 2018</span>
            </div>
            <div className="postInfoElement">
            <QuestionAnswerIcon className="postIcon"/>
              <span className="postNum">1</span>
            </div>
            <div className="postInfoElement">
            <VisibilityIcon className="postIcon"/>
              <span className="postNum">2</span>
            </div>
            <div className="postSummary">
    
            </div>

        </div>
        <span className="postSummaryTxt">We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms
of pleasure of the moment, so blinded by desire</span>
        <div className="postReedMore">
            <span className='reedMoreTxt'>REED MORE</span>
            <span className="reedMoreGt">&gt;</span>
        </div>
        </div>
      </div>
  </div>;
}

export default Post;