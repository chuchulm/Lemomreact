import React from 'react'
import '../styles/portafolio.css';
import logo from '../img/logoLemomTransparente-02.png';
import lemom10 from '../img/lemom10.jpeg';
import lemom11 from '../img/lemom11.jpeg';
import lemom12 from '../img/lemom12.jpeg';
import lemom13 from '../img/lemom13.jpeg';
import lemom14 from '../img/lemom14.jpeg';
import lemom15 from '../img/lemom15.jpeg';
import lemom16 from '../img/lemom16.jpeg';
import lemom17 from '../img/lemom17.jpeg';



function Portafolio(){
   return(
   <section className="fondo">
      <div className="portafolio">
        <div className="contenedor1">
          <img src={logo} alt="" className="logo2"></img>
            
               <div class="galeria-port">
               <div className="imagen-port">
                     <img src={lemom10} alt=""></img>
                      <div className="hover-galeria">
                         <img src={""} alt=""></img>
                         <p></p>
                      </div>
                  </div>

                  <div className="imagen-port">
                     <img src={lemom11} alt=""></img>
                        <div className="hover-galeria">
                           <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                           <p></p>
                     </div>
                  </div>

                   

                   <div className="imagen-port">
                     <img src={lemom12} alt=""></img>
                       <div className="hover-galeria">
                          <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                            <p></p>
                       </div>
                   </div>

                  <div className="imagen-port">
                    <img src={lemom13} alt=""></img>
                      <div className="hover-galeria">
                        <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                          <p></p>
                     </div>
                  </div>

                  <div className="imagen-port">
                     <img src={lemom14} alt=""></img>
                      <div className="hover-galeria">
                         <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                         <p></p>
                      </div>
                  </div>

                  <div className="imagen-port">
                     <img src={lemom15} alt=""></img>
                        <div className="hover-galeria">
                           <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                           <p></p>
                     </div>
                  </div>

                  <div className="imagen-port">
                      <img src={lemom16} alt=""></img>
                         <div className="hover-galeria">
                            <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                           <p></p>
                         </div>
                  </div>

                  <div className="imagen-port">
                     <img src={lemom17} alt=""></img>
                        <div className="hover-galeria">
                           <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
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





/*

<Card
hoverable
style={{ width: 600 }}
cover={<img alt="example" src={Bandana1} alt="logo" />}>
<Meta title="LEMOM.ACCESORIOS" description="www.instagram.com" />
</Card>




</section>


       <section class="about-services">
           <div class="contenedor">
             <h2 class="Nuestros servicios"></h2>
             <div class="servicio-cont">

               <div class="servicio-ind">
                 <img src="img/ilustracion1.png" alt="">
                 <h3>Name</h3>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolore?</p>

               </div>
               <div class="servicio-ind">
                <img src="img/ilustracion2.png" alt="">
                <h3>Name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolore?</p>
                
              </div>
              <div class="servicio-ind">
                <img src="img/ilustracion3.png" alt="">
                <h3>Name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolore?</p>
                
              </div>
             </div>
           </div>
       </section>

       */