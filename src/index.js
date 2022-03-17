import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from "jquery"


ReactDOM.render(
    <App />,
  document.getElementById('root')
);


reportWebVitals();

(() =>{

  $(window).scroll(function(){
          var windowHeight = $(window).scrollTop();
          var contenido2 = $(".container2").offset();
          contenido2 = contenido2.top;
          if(windowHeight >= contenido2  ){
              $(".logoOculto").show(0);
              $(".logoOculto").css("opacity", "1");
          }else{
            $(".logoOculto").hide(0)
            $(".logoOculto").css("opacity", "0");
          }
  });

})();
