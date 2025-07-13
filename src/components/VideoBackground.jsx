import { useState, useEffect, useRef } from "react";
import styled from 'styled-components';

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => props.$height || "100%"};
  object-fit: cover; /* Rende il video responsivo, senza distorsioni */
  z-index: -1; /* Assicura che il video sia dietro al contenuto */
  background-color: #000;
`;

function VideoBackground({ height }) {
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(getVideoSource());

  function getVideoSource() {
    return window.innerWidth > 768
      ? "./assets/background_desktop.mp4"
      : "./assets/background_mobile2.mp4";
  }

  useEffect(() => {
    function handleResize() {
      setVideoSrc(getVideoSource());
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      // videoRef.current.play().catch((e) => console.error("Errore nel play:", e));
    }
  }, [videoSrc]); // Viene avviato quando cambia videoSrc

  return (
    <Video $height={`${height}%`} ref={videoRef} autoPlay loop muted>
      <source src={videoSrc} type='video/mp4' />
        Il tuo browser non supporta il video tag.
    </Video>
  )
}

export default VideoBackground