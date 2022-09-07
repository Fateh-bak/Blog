import React from "react";
import "./overView.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import VisibilityIcon from '@mui/icons-material/Visibility';
// import { Container } from './styles';

function OverView() {
  return (
    <div className="overView">
      <div className="overViewWraper">
        <img src="./assets/images/overView.png" alt="" className="overViewBackGroundImg" />
        <div className="overViewDesc">
          <span className="overViewTitle">Hi-Tech</span>
          <span className="overViewDescTxt">
            Certainty listening no behaviour existence assurance situation
          </span>
          <div className="overViewInfo">
            <div className="overViewInfoElement"><span className="status">Admin</span></div>
            <div className="overViewInfoElement">
              <CalendarMonthIcon className="overViewIcon"/>
              <span className="overViewDate">jul / 15 / 2018</span>
            </div>
            <div className="overViewInfoElement">
            <QuestionAnswerIcon className="overViewIcon"/>
              <span className="overViewNum">1</span>
            </div>
            <div className="overViewInfoElement">
            <VisibilityIcon className="overViewIcon"/>
              <span className="overViewNum">2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverView;
