"use client";

import {useEffect, useRef, useState, type CSSProperties} from "react";
import {ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronDown, ClipboardCheck, Dumbbell, HeartPulse, CalendarDays, CalendarClock, CalendarCheck, Apple, Headphones, TrendingUp, Camera as Instagram, Menu, MessageCircle, MoveUpRight, Play, RefreshCw, Target, X} from "lucide-react";
import {Button} from "@/components/ui/button";
import {currency, plans, type PlanId} from "@/content/coaching";
import {asset} from "@/content/assets";
import QualificationWizard from "./QualificationWizard";
import IntroSequence from "./IntroSequence";
import CampaignCountdown from "./CampaignCountdown";
import MotionDirector from "./MotionDirector";
import VideoPanel from "./VideoPanel";
import AccentFrame from "./AccentFrame";
import MobilePlanBar from "./MobilePlanBar";
import AnimatedWaveFooter from "@/components/ui/animated-wave-footer";
import FloatingWhatsApp from "./FloatingWhatsApp";

const nav = [["Sobre o Felipe", "sobre"], ["Como funciona", "como-funciona"], ["Resultados", "resultados"], ["Planos", "planos"]];
const pillars = [
  {title: "Emagrecimento com saúde", text: "Planejamento individual e hábitos possíveis de manter, respeitando o seu ritmo e a sua realidade.", icon: HeartPulse},
  {title: "Hipertrofia e ganho de força", text: "Treinos ajustados ao seu nível, com orientação para progredir com técnica e consistência.", icon: Dumbbell},
  {title: "Mudança de estilo de vida", text: "Constância se constrói. Orientação próxima e ajustes para fazer o treino caber na sua vida.", icon: Target},
];
const process = [
  {title: "Avaliação completa", text: "Entendemos o seu momento, rotina, objetivos e informações relevantes para planejar o acompanhamento.", icon: ClipboardCheck},
  {title: "Planejamento personalizado", text: "O plano de treino é definido de acordo com o seu objetivo, nível e disponibilidade.", icon: Dumbbell},
  {title: "Acompanhamento de perto", text: "Você tem um canal para tirar dúvidas, receber orientações e manter a constância.", icon: MessageCircle},
  {title: "Ajustes e evolução", text: "Analisamos o andamento do processo e fazemos ajustes quando necessários, com feedback semanal.", icon: RefreshCw},
];
const benefits = ["Avaliação física por fotos", "Treino personalizado", "Acompanhamento individual online", "Suporte pelo WhatsApp", "Feedback semanal", "Ajustes quando necessários"];

function BrandHeader() {
  const [menu, setMenu] = useState(false);
  const [activeSection,setActiveSection]=useState('');
  useEffect(()=>{
    let frame=0;
    const update=()=>{frame=0;const line=Math.min(window.innerHeight*.32,240);let active='';for(const [,id] of nav){const rect=document.getElementById(id)?.getBoundingClientRect();if(rect&&rect.top<=line&&rect.bottom>line)active=id;}setActiveSection(active);};
    const schedule=()=>{if(!frame)frame=requestAnimationFrame(update);};
    update();window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);
    return()=>{cancelAnimationFrame(frame);window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);};
  },[]);
  return <header className="site-header"><div className="header-inner">
    <a href="#inicio" className="brand" aria-label="Felipe Pereira — início"><span className="brand-original-icon" aria-hidden="true"><img src={asset("/assets/brand/logo-claro-original.webp")} alt="" width={2000} height={2000}/></span><span className="brand-name">FELIPE PEREIRA<small>PERSONAL TRAINER</small></span></a>
    <nav className="desktop-nav" aria-label="Navegação principal">{nav.map(([name, id]) => <a href={`#${id}`} key={id} aria-current={activeSection===id?"location":undefined}>{name}</a>)}</nav>
    <a href="#planos" className="header-cta">QUERO MEU PLANO <ArrowUpRight size={16}/></a>
    <button className="menu-toggle round-button" aria-label={menu ? "Fechar menu" : "Abrir menu"} aria-expanded={menu} aria-controls="mobile-nav" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
    {menu && <nav id="mobile-nav" className="mobile-nav" aria-label="Navegação no celular" onKeyDown={e => {if (e.key === "Escape") setMenu(false);}}>{nav.map(([name, id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{name}<ArrowUpRight size={16}/></a>)}<a href="#planos" onClick={() => setMenu(false)} className="primary-button">Quero meu plano</a></nav>}
  </div></header>;
}

function HighlightMark({children}: {children: React.ReactNode}) {return <span className="highlight-mark">{children}</span>;}
function HeroHeadline() {return <h1 tabIndex={-1}><span className="hero-line">A SUA <HighlightMark>EVOLUÇÃO</HighlightMark></span><span className="hero-line">NÃO ACONTECE</span><span className="hero-line"><span className="brush-underline">POR ACASO.</span></span></h1>;}
function HeroPortrait() {return <div className="hero-portrait"><div className="portrait-halo" aria-hidden="true"/><img src={asset("/assets/felipe/white-cutout-v2.webp")} alt="Felipe Pereira, personal trainer, de braços cruzados e camiseta branca" width={315} height={432} fetchPriority="high"/></div>;}
function Hero() {
 return <section className="hero" id="inicio"><AccentFrame gold/><div className="container hero-inner"><div className="hero-copy"><HeroHeadline/><p className="hero-description">Seu objetivo, sua rotina, seu treino.<br/> Com orientação próxima para saber como seguir.</p><a href="#planos" className="primary-button hero-button">QUERO MEU PLANO<ArrowRight size={25}/></a><p className="hero-action-note">Primeiro, uma conversa. Você decide como seguir.</p><div className="hero-proof"><span><Dumbbell size={20}/>Treino personalizado</span><span><MessageCircle size={20}/>Suporte individual</span><span><Target size={20}/>Mais constância</span></div></div><HeroPortrait/><a href="#sobre" className="scroll-cue"><ArrowDown size={17}/><span>CONHEÇA O ACOMPANHAMENTO</span></a></div><div className="hero-bottom-line"/></section>;
}

function AboutFelipe() {
 const [activeBenefit,setActiveBenefit]=useState<number|null>(null);
 return <section className="approved-about approved-scene" id="sobre"><AccentFrame gold/><div className="approved-about-grid">
 <div className="approved-portrait"><div className="approved-halo"/><img src={asset("/assets/felipe/red-cutout-v2.webp")} alt="Felipe Pereira com camiseta vermelha" width={308} height={445} loading="lazy"/><span className="approved-signature">Felipe Pereira<small>PERSONAL TRAINER</small></span></div>
 <div className="approved-about-copy"><span className="approved-eyebrow">QUEM É FELIPE PEREIRA</span><h2>POR TRÁS DE CADA<br/><mark>EVOLUÇÃO,</mark> EXISTE<br/>ACOMPANHAMENTO<br/>DE VERDADE<span className="gold">.</span></h2><p>Sou Felipe Pereira, Personal Trainer, e ajudo pessoas a conquistarem mais saúde, performance e qualidade de vida com um acompanhamento individual, estratégico e de verdade.</p></div>
 <div className="approved-video"><VideoPanel/></div>
 <div className="approved-about-benefits"><div className="approved-pillars">{pillars.map(({title,icon:Icon},i)=><button type="button" key={title} aria-pressed={activeBenefit===i} onClick={()=>setActiveBenefit(activeBenefit===i?null:i)}><Icon/><span>{title}</span></button>)}</div><p className="approved-manifesto"><span>“</span>Não se trata apenas de treinar.<br/>É sobre construir a sua melhor versão,<br/>com planejamento, disciplina e suporte de verdade.<span>”</span></p></div>
 </div></section>;
}

function CoachingProcess() {
 return <section className="approved-process approved-scene" id="como-funciona"><AccentFrame/><div className="approved-process-layout"><div className="approved-process-copy"><span className="approved-eyebrow">COMO FUNCIONA</span><h2>Como funciona o<br/><em>Acompanhamento</em><br/>com o Felipe?</h2><span className="approved-sweep"/><p>Um processo estruturado,<br/>individualizado e contínuo,<br/>para gerar evolução real,<br/>saúde e performance.</p><div className="approved-principles"><span><Target/>Planejamento<br/>personalizado</span><span><Headphones/>Suporte e<br/>acompanhamento</span><span><TrendingUp/>Evolução real<br/>e mensurável</span></div><div className="approved-process-note"><b>“</b>Mais do que treino, é ter orientação de verdade em todas as etapas.</div></div>
 <figure className="approved-couple"><img src={asset("/assets/felipe/couple-cutout-v2.webp")} alt="Felipe e sua aluna com a placa original CORRIDA DE RUA" width={570} height={735} loading="lazy"/></figure>
 <div className="approved-steps"><div className="approved-timeline"/>{process.map(({title,text,icon:Icon},i)=><div className="approved-step" key={title}><div className="step-summary"><span className="approved-step-icon"><Icon/></span><h3><b>0{i+1}.</b> {title}</h3></div><p>{text}</p><svg className="approved-step-thumbnail" viewBox={`1430 ${[72,222,376,531][i]} 138 128`} preserveAspectRatio="xMidYMid slice" aria-hidden="true"><image href={asset("/assets/decorative/process-reference.webp")} width="1672" height="941"/></svg></div>)}<div className="approved-purpose"><Target/><p>Resultado: <em>mais saúde,<br/>performance e qualidade de vida.</em></p></div></div></div></section>;
}

function ResultsCarousel() {
 const [active,setActive]=useState(2);const touch=useRef(0);
 const shift=(i:number)=>setActive((i+5)%5);
 return <section className="approved-results approved-scene" id="resultados"><AccentFrame/><div className="approved-centered-heading"><span className="approved-eyebrow">RESULTADOS REAIS</span><h2>Transformações que <em>inspiram.</em></h2><p>Evolução real de alunos que seguem o plano com consistência.</p><span className="approved-sweep"/></div><div className="approved-gallery" role="region" aria-label="Resultados de alunos" aria-roledescription="carrossel" tabIndex={0} onKeyDown={e=>{if(e.key==='ArrowRight'){e.preventDefault();shift(active+1)}if(e.key==='ArrowLeft'){e.preventDefault();shift(active-1)}}} onTouchStart={e=>touch.current=e.touches[0].clientX} onTouchEnd={e=>{const delta=e.changedTouches[0].clientX-touch.current;if(Math.abs(delta)>40)shift(active+(delta<0?1:-1))}}>{[1,2,3,4,5].map((n,i)=>{const pos=((i-active+7)%5)-2;return <div key={n} className={`approved-result ${pos===0?'current':''}`} style={{'--position':pos,'--distance':Math.abs(pos),'--layer':5-Math.abs(pos)} as CSSProperties} role="group" aria-label={`Resultado ${n} de 5`}><img src={asset(`/assets/resultados/caso-0${n}-original.webp`)} alt={`Fotografias originais de antes e depois — caso ${n}`} loading="lazy"/></div>})}<button className="approved-gallery-prev" aria-label="Resultado anterior" onClick={()=>shift(active-1)}><ArrowLeft/></button><button className="approved-gallery-next" aria-label="Próximo resultado" onClick={()=>shift(active+1)}><ArrowRight/></button></div><div className="approved-dots">{[0,1,2,3,4].map(i=><button key={i} aria-label={`Ver resultado ${i+1}`} aria-current={i===active?'true':undefined} onClick={()=>shift(i)}/>)}</div><p className="approved-result-note">Resultados individuais. A evolução varia de pessoa para pessoa.</p></section>;
}

function LuxuryPricing({onSelect}: {onSelect: (id: PlanId) => void}) {
 const icons=[CalendarDays,CalendarClock,CalendarCheck];
 return <section className="approved-pricing approved-scene" id="planos"><AccentFrame/><div className="approved-pricing-props" aria-hidden="true"/><div className="approved-centered-heading"><span className="approved-eyebrow">BLACK FRIDAY · 50% OFF NO PLANO TRIMESTRAL</span><h2>Escolha o seu plano e evolua com <em>acompanhamento.</em></h2><p>Treino e suporte para você conquistar resultados reais, com consistência e estratégia.</p><span className="approved-sweep"/></div><div className="approved-plans">{[plans[1],plans[0],plans[2]].map((plan,i)=>{const Icon=icons[[1,0,2][i]];return <article className={`approved-plan ${plan.id==='trimestral'?'featured':''}`} key={plan.id}>{plan.id==='trimestral'&&<span className="approved-plan-badge">50% OFF</span>}<div className="approved-plan-heading"><Icon/><div><h3>Plano {plan.name}</h3><p>{plan.months} meses de acompanhamento</p></div></div><div className="approved-plan-price"><span>R$</span><strong>{(plan.monthlyCents/100).toFixed(2).replace('.',',')}</strong><span>/mês</span></div><div className="approved-total">Total: {currency(plan.totalCents)}</div><ul>{['Treino personalizado','Ajustes ao seu objetivo','Suporte durante o plano'].map(b=><li key={b}><Check/>{b}</li>)}</ul><Button className={plan.id==='trimestral'?'primary-button':'outline-button'} onClick={()=>onSelect(plan.id)} aria-label={`Escolher plano ${plan.name}`}>Escolher plano<ArrowRight/></Button></article>})}</div><div className="approved-plan-features"><span><Dumbbell/>Treino<br/>personalizado</span><span><Target/>Estratégia<br/>individual</span><span><MessageCircle/>Suporte<br/>contínuo</span><span><TrendingUp/>Evolução<br/>com constância</span></div><p className="approved-payment-note">Valor mensal equivalente. Totais referentes a 3, 6 ou 12 meses. Pagamento e condições de início a combinar com Felipe.</p></section>;
}

function FAQ() {
  const faqs = [
    ["O acompanhamento é totalmente online?", "Sim. A consultoria é individual e online, com treino personalizado e suporte pelo WhatsApp para dúvidas e orientações."],
    ["Como o treino é pensado para mim?", "A avaliação considera seu objetivo, momento, nível e disponibilidade. A partir disso, Felipe planeja seu treino e acompanha a necessidade de ajustes."],
    ["Como funcionam o suporte e os ajustes?", "O acompanhamento inclui feedback semanal e suporte pelo WhatsApp para dúvidas e correção de exercícios. Os ajustes são feitos quando necessários. Horários de atendimento são combinados diretamente com Felipe."],
    ["O que preciso para começar?", "Escolha um plano, responda às perguntas rápidas e converse com Felipe. Nessa conversa, vocês alinham os próximos passos, a avaliação e as condições de início."],
    ["Como funciona o pagamento?", "Cada cartão mostra o valor total do plano e seu equivalente mensal. Forma de pagamento, eventual parcelamento, cancelamento e reembolso devem ser confirmados com Felipe antes da contratação."],
    ["A consultoria inclui plano alimentar?", "O serviço apresentado é de acompanhamento de treino. Qualquer orientação ou prescrição alimentar depende de profissional habilitado e deve ser esclarecida com Felipe antes da contratação."],
  ];
  return <section className="faq section-space" id="duvidas"><div className="container faq-grid"><div><span className="edition-label">SEM DÚVIDAS NO CAMINHO</span><h2>VAMOS<br/><em>CONVERSAR?</em></h2><p>Antes de dar o próximo passo,<br/>entenda como funciona.</p><a href="https://www.instagram.com/felipepereira_personal/" target="_blank" rel="noopener noreferrer" className="instagram-link"><Instagram size={20}/>Conheça o Felipe no Instagram<ArrowUpRight size={17}/></a></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span><ChevronDown size={19}/></span></summary><p>{answer}</p></details>)}</div></div></section>;
}


export default function Landing() {
 const [selectedPlan,setSelectedPlan]=useState<PlanId|null>(null);

 const [introActive,setIntroActive]=useState(false);
 return <><MotionDirector paused={introActive||selectedPlan!==null}/><IntroSequence onActiveChange={setIntroActive}/><div id="site-page"><div className="reading-progress" aria-hidden="true"/><a href="#conteudo" className="skip-link">Pular para o conteúdo</a><div className="campaign-bar">BLACK FRIDAY FELIPE PEREIRA · 16 A 30 DE NOVEMBRO <a href="#planos">VER OFERTAS →</a></div><BrandHeader/><main id="conteudo"><Hero/><CampaignCountdown/><AboutFelipe/><CoachingProcess/><ResultsCarousel/><LuxuryPricing onSelect={setSelectedPlan}/><section className="campaign-includes"><span>O QUE ESTÁ INCLUÍDO</span><h2>Seu objetivo merece <em>acompanhamento de verdade.</em></h2><div className="campaign-benefits">{["Avaliação física por fotos","Treinos personalizados","Acompanhamento individual on-line","Suporte pelo WhatsApp","Ajustes quando necessários","Feedback semanal","Registro fotográfico da evolução"].map(item=><p key={item}><Check size={18}/>{item}</p>)}</div></section><section className="journey-invitation"><AccentFrame gold/><div className="container"><span className="edition-label">PERSONAL JOURNEY</span><h2>O PRIMEIRO PASSO<br/>COMEÇA COM <em>VOCÊ.</em></h2><p>Seu próximo treino pode começar com uma boa conversa.<br/>Conte seu momento. Vamos encontrar um caminho possível.</p><a className="primary-button" href="#planos">ENCONTRAR MEU PLANO<ArrowRight size={21}/></a><span className="invitation-note">Seis perguntas rápidas. Depois, envie suas respostas pelo WhatsApp.</span></div></section><FAQ/></main><AnimatedWaveFooter/><MobilePlanBar hidden={introActive||selectedPlan!==null}/><FloatingWhatsApp hidden={introActive||selectedPlan!==null}/></div><QualificationWizard planId={selectedPlan} onClose={()=>setSelectedPlan(null)}/></>;
}
