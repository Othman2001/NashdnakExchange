import React from 'react';
import './css/service.css';
import renderService from './functions/renderServices';

const Service = () => (
  <div className="services">
    <div className="container my-5 py-4  px-5">
      <div className="row">
        <div className="services-title">
          <h2>The Best Brokers Services</h2>
          <p>Nec scelerisque diam lobortis utex orci posuere mollis tellus id lacinia pharetra. </p>
        </div>
        <div className="row row-eq-height">
          {renderService()}
        </div>
      </div>
    </div>
  </div>

);
export default Service;
