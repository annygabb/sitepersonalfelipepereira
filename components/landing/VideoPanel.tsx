"use client";
import {useEffect,useRef,useState} from 'react';
import {ArrowUpRight,Play,Pause,Volume2,VolumeX} from 'lucide-react';
import {asset} from '@/content/assets';
import {media} from '@/content/media';
export default function VideoPanel(){
 const panel=useRef<HTMLDivElement>(null),video=useRef<HTMLVideoElement>(null);
 const [muted,setMuted]=useState(true),[playing,setPlaying]=useState(false),[failed,setFailed]=useState(false);
 const userPaused=useRef(false);
 useEffect(()=>{const node=video.current;if(!node||!panel.current)return;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting&&!document.hidden){if(!node.src)node.src=asset('/video/felipe-acompanhamento.mp4');if(!reduced&&!userPaused.current)node.play().catch(()=>setPlaying(false));}else node.pause();},{threshold:.3});
  observer.observe(panel.current);const hidden=()=>{if(document.hidden)node.pause();};document.addEventListener('visibilitychange',hidden);
  return()=>{observer.disconnect();document.removeEventListener('visibilitychange',hidden);node.pause();};
 },[]);
 const toggle=()=>{const node=video.current;if(!node)return;if(node.paused){userPaused.current=false;if(!node.src)node.src=asset('/video/felipe-acompanhamento.mp4');node.play().catch(()=>setFailed(true));}else{userPaused.current=true;node.pause();}};
 return <div className="video-panel native-reel" ref={panel}>
  <div className="video-window"><div className="reel-side-caption"><small>ACOMPANHAMENTO<br/>DE VERDADE.</small><span>Veja o treino<br/><em>na prática.</em></span></div><video ref={video} muted={muted} playsInline loop preload="none" poster={asset('/video/felipe-acompanhamento-poster.webp')} onPlaying={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onError={()=>setFailed(true)} aria-label="Felipe orientando uma aluna durante o treino"/>
   <div className="reel-controls"><button onClick={toggle} aria-label={playing?'Pausar vídeo':'Reproduzir vídeo'}>{playing?<Pause size={18}/>:<Play size={18}/>}</button><button onClick={()=>setMuted(!muted)} aria-label={muted?'Ativar som':'Silenciar vídeo'}>{muted?<VolumeX size={18}/>:<Volume2 size={18}/>}<span>{muted?'Ativar som':'Silenciar'}</span></button></div>
  </div><div className="video-panel-footer"><span>{failed?'Veja o vídeo pelo link ao lado.':'Felipe Pereira · acompanhamento na prática'}</span><a href={media.reel.url} target="_blank" rel="noopener noreferrer">Instagram<ArrowUpRight size={14}/></a></div>
 </div>;
}
