"use client";
import {useRef,useState} from 'react';
import {ArrowRight} from 'lucide-react';
const moments=[
 {label:'Vou começar',title:'Um começo com direção.',text:'Seu ponto de partida é a sua realidade. A avaliação ajuda a organizar o treino de acordo com seu nível, seus objetivos e o tempo que você tem.'},
 {label:'Já treino',title:'Clareza para seguir evoluindo.',text:'Entenda o que precisa de ajuste. O acompanhamento reúne planejamento, feedback semanal e orientação para você treinar com mais clareza.'},
 {label:'Quero voltar',title:'Retomar no seu ritmo.',text:'Uma pausa faz parte da vida. O treino considera o seu momento atual, e os ajustes ajudam a construir uma rotina possível de manter.'}
];
export default function MomentGuide(){
 const [active,setActive]=useState(0);const buttons=useRef<(HTMLButtonElement|null)[]>([]);
 return <div className="moment-guide"><span className="edition-label">SEU MOMENTO IMPORTA</span><h3>Qual é o seu<br/><em>ponto de partida?</em></h3><p className="moment-intro">Toque na opção que combina com você.</p><div className="moment-tabs" role="tablist" aria-label="Seu momento de treino" onKeyDown={e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();const next=e.key==='Home'?0:e.key==='End'?2:(active+(e.key==='ArrowRight'?1:2))%3;setActive(next);buttons.current[next]?.focus();}}}>{moments.map((m,i)=><button ref={el=>{buttons.current[i]=el;}} key={m.label} id={`moment-tab-${i}`} role="tab" aria-selected={active===i} aria-controls={`moment-panel-${i}`} tabIndex={active===i?0:-1} onClick={()=>setActive(i)}>{m.label}</button>)}</div><div role="tabpanel" id={`moment-panel-${active}`} aria-labelledby={`moment-tab-${active}`} className="moment-panel" key={active}><strong>{moments[active].title}</strong><p>{moments[active].text}</p></div><a href="#planos" className="moment-cta">Ver os planos de acompanhamento<ArrowRight size={16}/></a></div>;
}
