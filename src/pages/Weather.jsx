import React from 'react';
import MyForm from '../UI/form/MyForm';
import '../App.css';



function Weather() {
  return (
    <div className="page-transition page-transition-enter">
        <div className="logo" style={{backgroundImage: 'url(../img/logo.svg)'}}></div>
         <section className="layers">
          <div className="layers__container">
            <div className="layers__item layer-1" style={{backgroundImage: 'url(../img/layer-1.jpg)'}}></div>
            <div className="layers__item layer-2" style={{backgroundImage: 'url(../img/layer-2.png)'}}>
                <MyForm/>               
            </div>
        </div>
        </section>
    </div>
  );
}

export default Weather;
