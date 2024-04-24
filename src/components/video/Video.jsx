import React from 'react'
import { Main, Videos, Blur } from './style'
import video from "../../assets/images/video.mp4";

const Video = () => {
  return (
    <Main className="center">
      {/* <Blur></Blur> */}
              <Videos src={video} loop autoPlay muted/>
    </Main>
  );
}

export default Video