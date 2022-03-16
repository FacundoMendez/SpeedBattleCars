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
              $(".logoOculto").show(200);
              $(".logoOculto").css("opacity", "1");
          }else{
            $(".logoOculto").hide(200)
            $(".logoOculto").css("opacity", "0");
          }
  });

})();
