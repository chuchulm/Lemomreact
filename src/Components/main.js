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
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis illo blanditiis incidunt mollitia repudiandae recusandae beatae, itaque modi pariatur repellat eos, laborum facilis architecto quo, fugit voluptatum fuga vitae eveniet.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis illo blanditiis incidunt mollitia repudiandae recusandae beatae, itaque modi pariatur repellat eos, laborum facilis architecto quo, fugit voluptatum fuga vitae eveniet.</p>
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
