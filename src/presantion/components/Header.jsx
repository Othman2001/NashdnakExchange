import React from 'react';
import NavBar from './NavBar.component';
import './css/header.css';

const Header = () => (
  <div>
    <header>
      <NavBar />
      <div className="container">
        <div className="row">

          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="header-caption mx-5">
              <div>
                <h1 className="header-title h1">Helping You Every Stepof The Way  </h1>
                <p>
                  {' '}
                  you can use our Platform to trade Stocks
                  or to get news about the stocks and see the market
                  this is separted web app that will require some documents from you to
                  access our platfrom
                  {' '}
                </p>
              </div>
              <button className="btn btn-default green mx-3 my-sm-4 my-xs-5" type="button"> Start Using Our App</button>
              <button className="btn btn-default mx-3 normal" type="button" onClick> show mORE</button>
            </div>

          </div>
        </div>
      </div>
    </header>
  </div>
);
export default Header;
