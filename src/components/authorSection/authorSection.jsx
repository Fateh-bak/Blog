import React from 'react';

// import { Container } from './styles';

function AuthorSection() {
  return <><span className='infoBarTitle'>Author</span><div className="infoBarAuthorData">
  <div className="infoBarAuthor">
        <span className="infoBarAuthorElement">Name :</span>
        <span className="infoBarAuthorRes">jakob</span>
  </div>
  <div className="infoBarAuthor">
        <span className="infoBarAuthorElement">Degree :</span>
        <span className="infoBarAuthorRes">none</span>
  </div>
  <div className="infoBarAuthor">
        <span className="infoBarAuthorElement">Articles :</span>
        <span className="infoBarAuthorRes">0</span>
  </div>
  <div className="infoBarAuthor">
        <span className="infoBarAuthorElement">Function :</span>
        <span className="infoBarAuthorRes">hitist</span>
  </div>
</div></>;
}

export default AuthorSection;