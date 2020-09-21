import React from 'react'
import Header from './header'
import Main from './main'
import Portafolio from './Portafolio';
import Carousel from './carousel';
import Sociales from './estilos';
import Footer from './footer';
import Video from './Video'
import Iconos from './iconos'





function Home(){
    return(
      <>
       <header>
        <Header/>
       </header>

       <main>
        <Main/>>
        <Portafolio/>
        <Video/>
        {/* <Carousel/> */}
        <Sociales/>
        <Iconos/>
      </main>

      <footer>
        <Footer/>
      </footer>
    
    </>
    );
}
export default Home;