import React from 'react'
import '../styles/carousel.css';
import lemom10 from '../img/lemom10.jpeg';
import lemom11 from '../img/lemom11.jpeg';
import lemom12 from '../img/lemom12.jpeg';
import lemom13 from '../img/lemom13.jpeg';
import lemom14 from '../img/lemom14.jpeg';
import lemom15 from '../img/lemom15.jpeg';
import lemom16 from '../img/lemom16.jpeg';
import lemom17 from '../img/lemom17.jpeg';
import logoLemomp from '../img/logolemom4Portafolio.jpeg';
import logoLemom from '../img/logoLemom.jpeg';
import NavBar from './NavBar'




function Carousel(){

  
     

    return(
        <>
    
    
    
    <div className="fondo1">
    <img src={logoLemomp} className="logoPortafolio" alt="..."/>
    <img src={logoLemom} className="logoPortafolio" alt="..."/>
    <img src={logoLemomp} className="logoPortafolio" alt="..."/>
         <div className="lemom1">
            <section className="doraoparty" >
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={lemom13} className=" dorao" alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src={lemom14} className=" dorao" alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src={lemom17} className=" dorao" alt="..."/>
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
               
                
    
           </section>
           
            </div>
    
            

        </div>

        </>
    )
}
export default Carousel;