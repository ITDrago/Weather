import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function Start() {
  return (
    <div className="Start">
        <div className="logo" style={{backgroundImage: 'url(../img/logo.svg)'}}></div>
        <section className="layers">
          <div className="layers__container">
            <div className="layers__item layer-1" style={{backgroundImage: 'url(../img/layer-1.jpg)'}}></div>
            <div className="layers__item layer-2" style={{backgroundImage: 'url(../img/layer-2.png)'}}></div>
            <div className="layers__item layer-3">
              <div className="hero-content">
                <h1>
                  Weather<span>Essence</span></h1>
                <div className="hero-content__p">Find out the exact weather in our application</div>
                <Link to="/weather" className="page-transition">
                    <button className="button-start">Start weather</button>
              </Link>
              </div>
            </div>
            <div className="layers__item layer-4">
              <canvas></canvas>
            </div>
            <div className="layers__item layer-5" style={{backgroundImage: 'url(../img/layer-5.png)'}}></div>
          </div>
        </section>
        <div>
        </div>
    </div>
  );
}

export default Start;
