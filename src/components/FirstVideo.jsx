import { useEffect, useState } from "react"
import { createClient } from 'contentful';
import desktopVideo from "../assets/desktopshowreel.mp4"

import newestreelstand from "../assets/newestreelstanding.mp4"
import newestdesktop from "../assets/newestreel169.mp4"





const FirstVideo = ()=>{
  const [videoSource, setVideoSource] = useState("");
const [vimeoVideo,setVimeoVideo] = useState('')
 

const client = createClient({
  space: '7rhrqfmhk57q',
  environment: 'master', 
  accessToken: 'wW8KI7bfGHi8fqt42MIhrPUchY_c3Om3ZUqorMdaUiA'
})
useEffect(() => {
  client.getEntry('1O7F1H3DMcLLAHLCjFVL4R')
    .then((entry) => {
   
      setVimeoVideo(entry.fields.vimeoUrl);
      const initialVideoSource = window.innerWidth >= 768 ? newestdesktop : newestreelstand;
      setVideoSource(initialVideoSource);
    })
    .catch(console.error);
}, []);



useEffect(() => {
  const handleResize = () => {
    const newVideoSource = window.innerWidth >= 768 ? newestdesktop : newestreelstand;
    setVideoSource(newVideoSource);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, [vimeoVideo]);




    return(
        <div className="firstVideo" >
          <p> WE 🤍 VISUAL STORYTELLING 
          </p>
          <video loop muted autoPlay playsInline  src={videoSource}  />
      
     
        </div>

    )
}
export default FirstVideo