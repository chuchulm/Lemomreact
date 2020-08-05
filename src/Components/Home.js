import React from 'react'
import Header from './header'
import Main from './main'
import Portafolio from './Portafolio';
import Carousel from './carousel';
import Carousel1 from './carousel1';
import Sociales from './estilos';
import Footer from './footer';
import Iconos from './iconos'
import Galeria from './Galeria'



function Home(){
    return(
      <>
       <header>
       <Header/>
       </header>
       <main>
        <Main/>
        <Portafolio/>
        <Carousel/>
        <Sociales/>
      </main>
      <footer>
          <Footer/>
      </footer>
    
    </>
    );
}
export default Home;