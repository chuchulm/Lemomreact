import React from 'react'
import '../styles/Video.css';
import ReactPlayer from 'react-player'

import Video1 from '../img/angel.mp4'
import Video2 from'../img/videolemom.webm'


function Video() {
    return (
        
    
    
    <div className='video1'>
        <ReactPlayer 
          url={Video1}
          className='react-player'
          playing
          width='100%'
          height='100%'
          autoplay
          loop
          playbackRate='1.5'
        />

        <div className="header-content">
            <h1>Lemom Accesorios</h1>
                <p>
                   Hecho a mano en Venezuela!
                </p>
             
                {/* <button className="btn" onclick="">
                   Ingresar
                </button> */}
           
        </div>
            
     </div>          
    )
}
export default Video; 




