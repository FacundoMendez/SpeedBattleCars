import React from 'react';
import Nav from './components/nav/Nav.jsx';
import './App.css';
import videoBanner from './img/banner.mp4';


function App() {
  return (
    <div className='App'>
      <header>
        <Nav />
      </header>
    
      <main>
        <div className='container'>
          <div className='containerVideo' >
            <video  autoPlay loop muted  >
              <source src = {videoBanner} type="video/mp4"></source>
            </video>
          </div>  
        </div>
      </main>
    
    
    </div>
 
    
  );
}

export default App;
