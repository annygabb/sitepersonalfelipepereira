"use client";
import {useEffect,useRef,useState} from 'react';
import {ArrowUpRight,Volume2,VolumeX} from 'lucide-react';
import {asset} from '@/content/assets';
import {media} from '@/content/media';
export default function VideoPanel(){
 const panel=useRef<HTMLDivElement>(null),video=useRef<HTMLVideoElement>(null);
 const [muted,setMuted]=useState(true),[playing,setPlaying]=useState(false),[failed,setFailed]=useState(false);
 const userPaused=useRef(false),wasVisible=useRef(false);
 useEffect(()=>{const node=video.current;if(!node||!panel.current)return;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting&&!document.hidden){wasVisible.current=true;if(!node.src)node.src=asset('/video/felipe-acompanhamento.mp4');if(!reduced&&!userPaused.current)node.play().catch(()=>setPlaying(false));}else if(wasVisible.current)node.pause();},{threshold:.3});
  const preload=new IntersectionObserver(([e])=>{if(e.isIntersecting){if(!node.src){node.src=asset('/video/felipe-acompanhamento.mp4');node.preload='auto';node.load()}if(!reduced&&!document.hidden&&!userPaused.current)node.play().catch(()=>setPlaying(false));preload.disconnect()}},{rootMargin:'2500px 0px'});preload.observe(panel.current);observer.observe(panel.current);const hidden=()=>{if(document.hidden)node.pause();};document.addEventListener('visibilitychange',hidden);
  return()=>{observer.disconnect();preload.disconnect();document.removeEventListener('visibilitychange',hidden);node.pause();};
 },[]);
 const toggle=()=>{const node=video.current;if(!node)return;if(node.paused){userPaused.current=false;if(!node.src)node.src=asset('/video/felipe-acompanhamento.mp4');node.play().catch(()=>setFailed(true));}else{userPaused.current=true;node.pause();}};
 return <div className="video-panel native-reel" ref={panel}>
  <div className="video-window"><div className="reel-side-caption"><small>ACOMPANHAMENTO<br/>DE VERDADE.</small><span>Veja o treino<br/><em>na prática.</em></span></div><video ref={video} muted={muted} playsInline loop preload="none" poster={asset('/video/felipe-acompanhamento-poster.webp')} onPlaying={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onError={()=>setFailed(true)} role="button" tabIndex={0} onClick={toggle} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle();}}} aria-label={playing?'Pausar vídeo':'Reproduzir vídeo'}/>
   <div className="reel-controls"><button onClick={()=>setMuted(!muted)} aria-label={muted?'Ativar som':'Silenciar vídeo'}>{muted?<VolumeX size={18}/>:<Volume2 size={18}/>}</button></div>
  </div><div className="video-panel-footer"><span>{failed?'Veja o vídeo pelo link ao lado.':'Felipe Pereira · acompanhamento na prática'}</span><a href={media.reel.url} target="_blank" rel="noopener noreferrer">Instagram<ArrowUpRight size={14}/></a></div>
 </div>;
}
