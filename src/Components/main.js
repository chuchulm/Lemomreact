import React from 'react'
import '../styles/main.css';
import lemom10 from '../img/logoLemomTransparente-04Main.png';
import lemom100 from '../img/logoLemomTransparente-03.png'
import lemom101 from '../img/logolemom4Portafolio.jpeg'
import video from '../img/videolemom.webm';





function Main(){
    return(
        
        <section className="contenedor">
                    
                    <div className="sobre-nosotros">
                        
                    <div className="imgMain ">
                    
                       <img src={lemom101} className=" img1 animate__animated animate__jackInTheBox animate__slower	3s"></img>
                       
                       
                    </div>


                    </div>

                        <div className="contenido-textos">
                            <div className="contenido-texto">
                                <h3>Lemom</h3>
                                <p>En Lemom pensamos en la comidad de las mujeres que les gusta lucir unicas. Las bandanas brindan esa comodidad para el dia a dia en diferentes labores que desenpeña la mujer y dan un toque femenino como ninguna otra prenda.  </p>
                                <p> Las Bandanas son fabricadas a mano y echas con las mejores telas y materiales que se pueden coseguir en el mercado. Cada bandana que fabricamos tiene un toque unico que las distinguen del resto.</p>
                            </div>
                        </div>
                        
    </section>
                

        
                  
    )
}
export default Main;










/*

<video className="video-about-us" autoplay  controls loop audio>
                              <source src={video} type="video/mp4"></source>
                            </video>





/*








*/
