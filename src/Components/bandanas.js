import React from 'react'
import '../styles/bandanas.css';
import NavBar from './NavBar'
import { RViewer, RViewerTrigger } from 'react-viewerjs'
import lemom21 from '../img/lemom21.jpeg';
import lemom22 from '../img/lemom22.jpeg';
import lemom23 from '../img/lemom23.jpeg';
import lemom24 from '../img/lemom24.jpeg';
import lemom25 from '../img/lemom25.jpeg';
import lemom26 from '../img/lemom26.jpeg';
import lemom27 from '../img/lemom27.jpeg';
import lemom28 from '../img/lemom28.jpeg';
import lemom29 from '../img/lemom29.jpeg';
import lemom30 from '../img/lemom30.jpeg';
import lemom31 from '../img/lemom31.jpeg';
import lemom32 from '../img/lemom32.jpeg';
import lemom33 from '../img/lemom33.jpeg';
import lemom34 from '../img/lemom34.jpeg';
import lemom35 from '../img/lemom35.jpeg';
import lemom36 from '../img/lemom36.jpeg';
import lemom37 from '../img/lemom37.jpeg';
import lemom38 from '../img/lemom38.jpeg';
import lemom39 from '../img/lemom39.jpeg';


const image = [lemom21, lemom22, lemom23, lemom24, lemom25, lemom26, lemom27, lemom28, lemom29, lemom30, lemom31, lemom32, lemom33, lemom35, lemom36, lemom37, lemom38, lemom39];



function Bandanas(){

    
    return(
        <>
          <NavBar/>
          <div>
            <RViewer imageUrls={image}>
            
                <div className='card12'>
                    {image.map( (img, index )=> (
                        
                        <RViewerTrigger index={index}>
                     <div className="card card123" key= {img} >
                        <img src= { img } className="card-img-top imgcard" alt= 'bandanas'/>
        
                        <div className="card-body">
                          <h6 className="card-title titulocard">Bandanas de alambre</h6>
                         
                          
                        </div>
                    </div>
                    </RViewerTrigger>
                         ))}
                </div>
            </RViewer>
        </div>
            
        </> 
    )
}
export default Bandanas;




/*
function Bandanas(){
    return(
        <>
      <NavBar/>

        <div className="todo">
            <div className="containerD">
    
                <div className="box">
                  <img src={lemom17}></img>
                  <span>titulo1</span>
                  
                </div>
    
                <div className="box">
                   <img src={lemom11}></img>
                   <span>titulo2</span>
                </div>
    
                 <div className="box">
                    <img src={lemom14}></img>
                    <span>titulo3</span>
                 </div>
    
                 <div className="box">
                     <img src={lemom13}></img>
                     <span>titulo4</span>
                </div>
            </div>
    
        </div>   

        <div className="todo">
            <div className="containerD">
    
                <div className="box">
                  <img src={lemom10}></img>
                  <span>titulo1</span>
                </div>
    
                <div className="box">
                   <img src={lemom11}></img>
                   <span>titulo2</span>
                </div>
    
                 <div className="box">
                    <img src={lemom12}></img>
                    <span>titulo3</span>
                 </div>
    
                 <div className="box">
                     <img src={lemom13}></img>
                     <span>titulo4</span>
                </div>
            </div>
    
        </div>    

        <div className="todo">
            <div className="containerD">
    
                <div className="box">
                  <img src={lemom10}></img>
                  <span>titulo1</span>
                </div>
    
                <div className="box">
                   <img src={lemom11}></img>
                   <span>titulo2</span>
                </div>
    
                 <div className="box">
                    <img src={lemom12}></img>
                    <span>titulo3</span>
                 </div>
    
                 <div className="box">
                     <img src={lemom13}></img>
                     <span>titulo4</span>
                </div>
            </div>
    
        </div>    

        <div className="todo">
            <div className="containerD">
    
                <div className="box">
                  <img src={lemom10}></img>
                  <span>titulo1</span>
                </div>
    
                <div className="box">
                   <img src={lemom11}></img>
                   <span>titulo2</span>
                </div>
    
                 <div className="box">
                    <img src={lemom12}></img>
                    <span>titulo3</span>
                 </div>
    
                 <div className="box">
                     <img src={lemom13}></img>
                     <span>titulo4</span>
                </div>
            </div>
    
        </div>   

        <div className="todo">
            <div className="containerD">
    
                <div className="box">
                  <img src={lemom10}></img>
                  <span>titulo1</span>
                </div>
    
                <div className="box">
                   <img src={lemom11}></img>
                   <span>titulo2</span>
                </div>
    
                 <div className="box">
                    <img src={lemom12}></img>
                    <span>titulo3</span>
                 </div>
    
                 <div className="box">
                     <img src={lemom13}></img>
                     <span>titulo4</span>
                </div>
            </div>
    
        </div>   
          
        </> 
    )
}
export default Bandanas;*/
