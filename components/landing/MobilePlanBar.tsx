"use client";
import {useEffect,useState} from 'react';
import {ArrowRight} from 'lucide-react';
export default function MobilePlanBar({hidden}:{hidden:boolean}){
 const [pastHero,setPastHero]=useState(false);const [atPlans,setAtPlans]=useState(false);
 useEffect(()=>{const hero=document.querySelector('.hero-button'),plans=document.getElementById('planos');const observer=new IntersectionObserver(entries=>{for(const e of entries){if(e.target===hero)setPastHero(!e.isIntersecting&&e.boundingClientRect.bottom<0);if(e.target===plans)setAtPlans(e.isIntersecting);}},{threshold:0});if(hero)observer.observe(hero);if(plans)observer.observe(plans);return()=>observer.disconnect();},[]);
 return <div className={`mobile-plan-bar ${pastHero&&!atPlans&&!hidden?'is-visible':''}`} aria-hidden={!(pastHero&&!atPlans&&!hidden)}><a href="#planos" tabIndex={pastHero&&!atPlans&&!hidden?0:-1}><span><small>CONSULTORIA ONLINE</small>Encontre seu plano</span><ArrowRight size={21}/></a></div>;
}
