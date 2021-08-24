import React from 'react';
import './css/test.css';
import TestRender from './functions/testiomoinlesRender';

const Testimoinles = () => (
  <div className="container my-5 py-5">
    <div className="services-title">
      <h2>Customer Reviews</h2>
      <p style={{ textAlign: 'center' }}>
        We welcome feedback from our members as
        it helps us optimize the site to better service their needs.
        {' '}
      </p>
    </div>
    <div className="row">
      {TestRender()}
    </div>
  </div>

);
export default Testimoinles;
