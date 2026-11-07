"use client";
import {useEffect,useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export default function MotionDirector({paused}:{paused:boolean}) {
 const lenisRef=useRef<Lenis|null>(null);
 const pausedRef=useRef(paused);
 pausedRef.current=paused;
 useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger);
  gsap.ticker.lagSmoothing(0);
  const root=document.getElementById('site-page');if(!root)return;
  const mm=gsap.matchMedia();
  const disposers:(()=>void)[]=[];
  mm.add({motion:'(prefers-reduced-motion: no-preference)',desktop:'(min-width: 900px) and (hover: hover) and (pointer: fine)',fine:'(hover: hover) and (pointer: fine)'},context=>{
   const {motion,desktop,fine}=context.conditions!;if(!motion)return;
   root.dataset.motion='gsap';
   const lenis=new Lenis({duration:1.05,smoothWheel:true,syncTouch:false,anchors:true,prevent:node=>!!node.closest('[data-lenis-prevent]'),respectReducedMotion:true});
   lenisRef.current=lenis;if(pausedRef.current)lenis.stop();
   lenis.on('scroll',ScrollTrigger.update);
   const tick=(time:number)=>lenis.raf(time*1000);
   gsap.ticker.add(tick);
   const revealHero=()=>{
    gsap.fromTo('.hero-line',{yPercent:32,rotationX:-14,opacity:.3},{yPercent:0,rotationX:0,opacity:1,duration:.85,stagger:.12,ease:'power3.out',clearProps:'transform,opacity'});
    gsap.fromTo('.hero .highlight-mark',{'--mark-progress':0},{'--mark-progress':1,duration:.6,delay:.25,ease:'power2.out'});
   };
   window.addEventListener('felipe:intro-complete',revealHero);
   revealHero();
   gsap.utils.toArray<HTMLElement>('.scene-reveal',root).forEach(el=>{
    const interactive=!!el.querySelector('button,a,input,select');
    gsap.fromTo(el,{y:interactive?0:(desktop?45:20),rotationX:interactive?0:(desktop?8:0),opacity:interactive?.65:.35},{y:0,rotationX:0,opacity:1,duration:.8,ease:'power3.out',clearProps:'transform,opacity',scrollTrigger:{trigger:el,start:'top 94%',once:true}});
   });
   gsap.utils.toArray<HTMLElement>('.section-sweep,.approved-sweep',root).forEach(el=>{
    gsap.fromTo(el,{scaleX:.1},{scaleX:1,duration:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 92%',once:true}});
   });
   gsap.utils.toArray<HTMLElement>('.approved-step,.approved-purpose',root).forEach((el,i)=>{gsap.fromTo(el,{opacity:0,y:24},{opacity:1,y:0,duration:.65,delay:desktop?i*.16:0,ease:'power2.out',clearProps:'transform,opacity',scrollTrigger:{trigger:el,start:'top 88%',once:true}});});
   const revealGroups=[
    ['.approved-about-copy',['.approved-eyebrow','h2','p']],
    ['.approved-pricing .approved-centered-heading',['.approved-eyebrow','h2','p']],
    ['.approved-plans',['.approved-plan']],
    ['.approved-plan-features',['span']],
    ['.journey-invitation .container',['.edition-label','h2','p','.primary-button','.invitation-note']],
    ['.faq-grid>div:first-child',['.edition-label','h2','p','a']],
    ['.faq-list',['details']],
    ['.wave-footer-grid',['.footer-reveal']],
   ] as const;
   revealGroups.forEach(([group,selectors])=>{const parent=root.querySelector(group);if(!parent)return;const items=Array.from(parent.querySelectorAll<HTMLElement>(selectors.join(',')));items.forEach((el,i)=>{
    // Pricing cards also tilt: entrance only translates, so rotations remain independent.
    gsap.fromTo(el,{opacity:0,y:24},{opacity:1,y:0,duration:.7,delay:desktop?i*.14:0,ease:'power2.out',clearProps:'opacity,y',scrollTrigger:{trigger:desktop?parent:el,start:'top 91%',once:true}});
   });});
   gsap.utils.toArray<HTMLElement>('.approved-payment-note,.footer-content>.footer-reveal,.footer-bottom',root).forEach(el=>gsap.fromTo(el,{opacity:0,y:16},{opacity:1,y:0,duration:.65,clearProps:'opacity,y',scrollTrigger:{trigger:el,start:'top 96%',once:true}}));
   gsap.fromTo('.approved-timeline',{scaleY:0},{scaleY:1,ease:'none',scrollTrigger:{trigger:'.approved-steps',start:'top 68%',end:'bottom 72%',scrub:.6}});
   gsap.fromTo('.reading-progress',{scaleX:0},{scaleX:1,ease:'none',scrollTrigger:{trigger:root,start:'top top',end:'bottom bottom',scrub:.2}});
   if(desktop){
    gsap.fromTo('.hero-portrait',{y:0,rotationY:0},{y:65,rotationY:-4,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
   }
   const localDisposers:(()=>void)[]=[];
   if(fine){
    root.querySelectorAll<HTMLElement>('.approved-plan').forEach(card=>{
     const rx=gsap.quickTo(card,'rotationX',{duration:.45,ease:'power3.out'}),ry=gsap.quickTo(card,'rotationY',{duration:.45,ease:'power3.out'});
     const move=(e:PointerEvent)=>{if((e.target as Element).closest('button,a')){gsap.set(card,{rotationX:0,rotationY:0});return;}const b=card.getBoundingClientRect();rx((.5-(e.clientY-b.top)/b.height)*7);ry(((e.clientX-b.left)/b.width-.5)*9);};
     const leave=()=>{rx(0);ry(0);};
     card.addEventListener('pointermove',move);card.addEventListener('pointerleave',leave);
     localDisposers.push(()=>{card.removeEventListener('pointermove',move);card.removeEventListener('pointerleave',leave);gsap.set(card,{clearProps:'transform'});});
    });
    root.querySelectorAll<HTMLElement>('.primary-button,.outline-button,.header-cta').forEach(button=>{
     const visual=button.querySelector('svg');if(!visual)return;
     const x=gsap.quickTo(visual,'x',{duration:.3}),y=gsap.quickTo(visual,'y',{duration:.3});
     const move=(e:PointerEvent)=>{const b=button.getBoundingClientRect();x(((e.clientX-b.left)/b.width-.5)*5);y(((e.clientY-b.top)/b.height-.5)*4);};
     const leave=()=>{x(0);y(0);};button.addEventListener('pointermove',move);button.addEventListener('pointerleave',leave);
     localDisposers.push(()=>{button.removeEventListener('pointermove',move);button.removeEventListener('pointerleave',leave);gsap.set(visual,{clearProps:'transform'});});
    });
   }
   const refresh=()=>ScrollTrigger.refresh();document.fonts.ready.then(refresh);
   const mediaLoaded=()=>ScrollTrigger.refresh();root.addEventListener('load',mediaLoaded,true);
   return ()=>{
    localDisposers.forEach(dispose=>dispose());window.removeEventListener('felipe:intro-complete',revealHero);root.removeEventListener('load',mediaLoaded,true);
    gsap.ticker.remove(tick);lenis.destroy();lenisRef.current=null;delete root.dataset.motion;
   };
  },root);
  return ()=>{mm.revert();disposers.forEach(fn=>fn());};
 },[]);
 useEffect(()=>{if(paused)lenisRef.current?.stop();else lenisRef.current?.start();},[paused]);
 return null;
}
