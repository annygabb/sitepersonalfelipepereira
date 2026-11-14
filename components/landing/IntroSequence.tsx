"use client";
import {useEffect,useRef,useState} from 'react';
import {gsap} from 'gsap';
import {ArrowRight} from 'lucide-react';
import {asset} from '@/content/assets';
import {preloaderFilm} from '@/content/preloader';
import FelipePereiraSignature from './FelipePereiraSignature';
export default function IntroSequence({onActiveChange}:{onActiveChange:(active:boolean)=>void}){
 const root=useRef<HTMLDivElement>(null),video=useRef<HTMLVideoElement>(null),skip=useRef<HTMLButtonElement>(null);
 const [active,setActive]=useState(false),[src,setSrc]=useState<string|null>(null),[signed,setSigned]=useState(false);
 const finishRef=useRef(()=>{});
 useEffect(()=>{
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData=(navigator as Navigator&{connection?:{saveData?:boolean}}).connection?.saveData;
  if(location.hash||reduced||saveData)return;
  const mobile=matchMedia('(max-aspect-ratio: 4/5)').matches;
  setSrc(mobile?preloaderFilm.mobile:preloaderFilm.desktop);setActive(true);
 },[]);
 useEffect(()=>{if(!active||!root.current)return;
  const page=document.getElementById('site-page'),overflow=document.body.style.overflow;
  onActiveChange(true);if(page)page.inert=true;document.body.style.overflow='hidden';
  let done=false,exiting=false;let exit:gsap.core.Tween|undefined;
  const release=()=>{if(done)return;done=true;video.current?.pause();setActive(false);onActiveChange(false);if(page)page.inert=false;document.body.style.overflow=overflow;window.dispatchEvent(new Event('felipe:intro-complete'));document.querySelector<HTMLElement>('.hero h1')?.focus({preventScroll:true});};
  const finish=()=>{if(exiting)return;exiting=true;exit=gsap.to(root.current,{yPercent:-100,duration:.6,ease:'power3.inOut',onComplete:release});};finishRef.current=finish;
  // Hard deadline prevents a slow or blocked media request from trapping the visitor.
  const timer=setTimeout(finish,src?3400:2100);
  const preference=matchMedia('(prefers-reduced-motion: reduce)');const changed=()=>{if(preference.matches)release();};preference.addEventListener('change',changed);
  return()=>{clearTimeout(timer);exit?.kill();preference.removeEventListener('change',changed);if(page)page.inert=false;document.body.style.overflow=overflow;onActiveChange(false);};
 },[active,onActiveChange,src]);
 if(!active)return null;
 return <div className={`first-rep-intro ${src?'has-film':'signature-fallback'}`} ref={root} role="region" aria-label="Abertura Felipe Pereira" data-lenis-prevent>
  {src&&<video ref={video} src={asset(src)} autoPlay muted playsInline preload="auto" onTimeUpdate={e=>{if(e.currentTarget.currentTime>=3.4)finishRef.current();}} onEnded={()=>finishRef.current()} onError={()=>setSrc(null)} aria-hidden="true"/>}
  <div className="first-rep-light" aria-hidden="true"/><div className="first-rep-brand"><span className="first-rep-edition">BLACK EDITION</span><FelipePereiraSignature speed={1} onAnimationComplete={()=>setSigned(true)}/><span className={`first-rep-profession ${signed?'is-signed':''}`}>PERSONAL TRAINER</span></div>
  <button className="intro-skip" ref={skip} onClick={()=>finishRef.current()}>Pular introdução<ArrowRight size={16}/></button>
 </div>;
}
