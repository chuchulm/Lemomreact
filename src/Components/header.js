import React from 'react'
import {Link} from "react-router-dom"
import '../styles/header.css';
import logoLemom from '../img/logoLemomTransparente-03.png';

function Header(){

    return(

        
      
        <header>
            <div>
              <div className="container2">
                 <div>
                     <img src={logoLemom} alt="" className="logo"></img>
                 </div>
                   
                      <div className="App">
                          <div className="cabecera">
                             <nav>
                                <Link to="/">Inicio</Link>
                                <Link  to="/carousel1">Bandanas</Link>
                                
                                <Link to="/Galeria">Accesorios</Link>
                                
                                
                             </nav>

                        </div>
                     </div>
              </div>
            
                     <div className="wave" >
                         <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="wave1">
                             <path d="M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
                              className="wave2"></path>
                        </svg>
                    </div>
            </div>
         </header>
      
        

                
       


     
    )
}

export default Header;







/*
import React from 'react'
import{BrowserRouter,Link,Route} from 'react-router-dom'


function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="cabecera">
            <Link to="/">COMPRAR</Link>
            
          </div>
          <div className="menu">
            <Route exact path="/">
             INICIO   
            </Route>
            <Route exact path="/inicio">
              <div>asdadsas</div>
            </Route>
            <Route path="/bandanas">
              LIsta de bandanas
            </Route>
          </div>
        </div>
      </BrowserRouter>
    );
  }
  
  export default App;




<section className="textos-header sm-lg">
                  <h1></h1>
                  <h2></h2>
                </section>

            <div className="wave" style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #fff;"></path></svg></div>
        
*/