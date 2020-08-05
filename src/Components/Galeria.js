import React from 'react'
import '../styles/Galeria.css'
import lemom1 from '../img/lemom1.jpeg';
import lemom2 from '../img/lemom2.jpeg';
import lemom10 from '../img/lemom10.jpeg';
import lemom11 from '../img/lemom11.jpeg';
import lemom12 from '../img/lemom12.jpeg';
import lemom13 from '../img/lemom13.jpeg';
import Close from '../img/closeLight.svg'
import NavBar from './NavBar'


class Galeria extends React.Component{
    constructor(){
        super()
        this.imagen1 = React.createRef()
    }
    

    render(){

        



        return(
        <>  
           <NavBar/>
           <section className="gallery" id="portafolio">
               <div className="contenedor">
                   <h2 className="subtitulo"></h2>
                   <div className="contenedor-galeria">
                       <img src={lemom1} alt="" className="img-galeria"/>
                       <img src={lemom2} alt="" className="img-galeria"/>
                       <img src={lemom10} alt="" className="img-galeria"/>
                       <img src={lemom11} alt="" className="img-galeria"/>
                       <img src={lemom12} alt="" className="img-galeria"/>
                       <img src={lemom13} alt="" className="img-galeria"/>
                       
                   </div>
              </div>
           </section>

           <section className="imagen-light"> 
              <img src={Close} alt="" className="close"/>
              <img src={lemom2} alt="" className="agregar-imagen"/>
           </section>

       </>
       
        )
    }
}
export default Galeria;