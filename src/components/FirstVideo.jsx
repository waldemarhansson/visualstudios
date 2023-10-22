import { useEffect, useState } from "react"



const FirstVideo = ({ videoSource }) => {

  const [vimeoVideo, setVimeoVideo] = useState('')
  const [videoSourcestate, setVideoSourcestate] = useState('')


  return (
    <div className="firstVideo" >
      <p> WE 🤍 VISUAL STORYTELLING
      </p>
      <video loop muted autoPlay playsInline src={videoSource} />


    </div>

  )
}
export default FirstVideo