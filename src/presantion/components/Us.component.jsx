import React from 'react';
import './css/us.css';
import UsColnumRender from './functions/UsColnumsRender';

const Us = () => (
  <div className="us-outline">
    <div className="container my-5 py-4  px-5">
      <div className="services-title">
        <h2>Who are we</h2>
        <p>
          Maecenas semper egestas maximu hasellus utelit loremes mullanec nequeac mione tempus
          comodo egetac ummtusell entesque ulisdiam mcorper tiam blandit faucibus massaose
          tortored euismllam facilisis rutrum pulvinar Integ vulputate leo..
          {' '}
        </p>
      </div>

      <div className="services-title my-5 py5 mb-5">
        <h2>
          Take on the market with our powerful platforms
        </h2>

      </div>
      <div className="container">
        <div className="row">
          {UsColnumRender()}
        </div>

      </div>
      <div className="row">
        <button type="button" className="us-button my-5">
          About US
        </button>
      </div>

    </div>

  </div>

);
export default Us;
