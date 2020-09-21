import React from 'react'
import '../styles/carousel.css';
import lemom21 from '../img/lemom21.jpeg';
import lemom22 from '../img/lemom22.jpeg';
import lemom23 from '../img/lemom23.jpeg';

import logoLemomp from '../img/logolemom4Portafolio.jpeg';
import logoLemom from '../img/logoLemom.jpeg';





function Carousel(){

  
     

    return(
        <>
    
    
    
    <div className="fondo1">
    {/* <img src={logoLemomp} className="logoPortafolio" alt="..."/>
    <img src={logoLemom} className="logoPortafolio" alt="..."/>
    <img src={logoLemomp} className="logoPortafolio" alt="..."/> */}
         <div className="lemom1">
            <section className="doraoparty" >
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={lemom21} className=" dorao" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={lemom22} className=" dorao" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={lemom23} className=" dorao" alt="..."/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
               
                
    
           </section>
           
            </div>
    
            

        </div>

        </>
    )
}
export default Carousel;