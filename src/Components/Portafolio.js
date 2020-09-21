import React from 'react'
import '../styles/portafolio.css';
import logo from '../img/logoLemomTransparente-03.png';
import lemom21 from '../img/lemom21.jpeg';
import lemom22 from '../img/lemom22.jpeg';
import lemom23 from '../img/lemom23.jpeg';
import lemom24 from '../img/lemom24.jpeg';
import lemom25 from '../img/lemom25.jpeg';
import lemom26 from '../img/lemom26.jpeg';
import lemom27 from '../img/lemom27.jpeg';
import lemom28 from '../img/lemom28.jpeg';



function Portafolio(){
   return(
   <section className="fondo">
      <div className="portafolio">
        <div className="contenedor1">
          {/* <img src={logo} alt="" className="logo2"></img> */}
            
               <div className="galeria-port">
               <div className="imagen-port">
                     <img src={lemom21} alt=""/>
                      <div className="hover-galeria">
                         <img src={""} alt=""/>
                         <p></p>
                      </div>
                  </div>

                  <div className="imagen-port">
                     <img src={lemom22} alt=""/>
                        <div className="hover-galeria">
                           <img src="img/iconmonstr-marketing-4-64.png" alt=""/>
                           <p></p>
                     </div>
                  </div>

                   

                   <div className="imagen-port">
                     <img src={lemom23} alt=""/>
                       <div className="hover-galeria">
                          <img src="img/iconmonstr-marketing-4-64.png" alt=""/>
                            <p></p>
                       </div>
                   </div>

                  <div className="imagen-port">
                    <img src={lemom24} alt=""/>
                      <div className="hover-galeria">
                        <img src="img/iconmonstr-marketing-4-64.png" alt=""/>
                          <p></p>
                     </div>
                  </div>

                  <div className="imagen-port">
                     <img src={lemom25} alt=""/>
                      <div className="hover-galeria">
                         <img src="img/iconmonstr-marketing-4-64.png" alt=""/>
                         <p></p>
                      </div>
                  </div>

                  <div className="imagen-port">
                     <img src={lemom26} alt=""/>
                        <div className="hover-galeria">
                           <img src="img/iconmonstr-marketing-4-64.png" alt=""/>
                           <p></p>
                     </div>
                  </div>

                  <div className="imagen-port">
                      <img src={lemom27} alt=""/>
                         <div className="hover-galeria">
                            <img src="img/iconmonstr-marketing-4-64.png" alt=""/>
                           <p></p>
                         </div>
                  </div>

                  <div className="imagen-port">
                     <img src={lemom28} alt=""/>
                        <div className="hover-galeria">
                           <img src="img/iconmonstr-marketing-4-64.png" alt=""/>
                           <p></p>
                       </div>
                  </div>

     
           </div>
      </div>

   </div>

</section>

 )
}
export default Portafolio;
