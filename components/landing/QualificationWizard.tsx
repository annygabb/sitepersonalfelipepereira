"use client";

import {useEffect, useRef, useState} from "react";
import {ArrowLeft, ArrowRight, Check, MessageCircle, X} from "lucide-react";
import {gsap} from "gsap";
import {Button} from "@/components/ui/button";
import {currency, makeMessage, plans, questions, whatsappUrl, type Person, type PlanId} from "@/content/coaching";

type Props = {planId: PlanId | null; onClose: () => void};

export default function QualificationWizard({planId, onClose}: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(6).fill(""));
  const [person, setPerson] = useState<Person>({name: "", age: "", height: "", weight: ""});
  const [error,setError]=useState("");
  const [opened, setOpened] = useState(false);
  const plan = plans.find(p => p.id === planId) ?? plans[1];
  useEffect(() => {
    const dialog = dialogRef.current;
    if (planId && !dialog?.open) {
      dialog?.showModal(); document.body.style.overflow = "hidden";
      requestAnimationFrame(() => titleRef.current?.focus());
    } else if (!planId && dialog?.open) { dialog.close(); document.body.style.overflow = ""; }
    return () => { document.body.style.overflow = ""; };
  }, [planId]);
  useEffect(() => { if (planId) titleRef.current?.focus(); }, [step, planId]);
  useEffect(()=>{
    if(!planId || window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const ctx=gsap.context(()=>{gsap.fromTo(contentRef.current,{rotationY:7,x:12,opacity:.35},{rotationY:0,x:0,opacity:1,duration:.32,ease:'power3.out',clearProps:'transform,opacity'});});
    return()=>ctx.revert();
  },[step,planId]);
  const message = makeMessage(plan, person, answers);
  function send() {
    const height=Number(person.height.replace(',','.')), age=Number(person.age), weight=Number(person.weight.replace(',','.'));
    if(person.name.trim().length<2 || !Number.isFinite(height) || height<50 || height>250 || !Number.isInteger(age) || age<1 || age>120 || (person.weight && (!Number.isFinite(weight) || weight<20 || weight>500))){setError('Confira os dados: altura entre 50 e 250 cm, idade entre 1 e 120 anos e peso, se preenchido, entre 20 e 500 kg.');return;}
    setError('');setOpened(true);
    window.open(whatsappUrl(makeMessage(plan,{...person,name:person.name.trim(),height:String(height),age:String(age),weight:person.weight?String(weight):''},answers)),'_blank','noopener,noreferrer');
  }
  function changePerson(key: keyof Person, value: string) { setError(""); setPerson(p => ({...p, [key]: value})); }
  function close() { setOpened(false); setError(""); onClose(); }

  return <dialog ref={dialogRef} className="journey-dialog" data-lenis-prevent aria-labelledby="journey-title" onCancel={e => { e.preventDefault(); close(); }} onClick={e => { if (e.target === dialogRef.current) close(); }}>
    <div className="approved-journey-header"><span><b>F</b><strong>FELIPE PEREIRA<small>PERSONAL TRAINER</small></strong></span><span>BLACK EDITION / EXPERIÊNCIA PERSONALIZADA</span></div><div className="journey-shell">
      <Button className="close-dialog round-button" variant="ghost" size="icon" aria-label="Fechar questionário" onClick={close}><X size={22}/></Button>
      <aside className="journey-aside">
        <span className="edition-label">SEU PRÓXIMO PASSO</span>
        <h2>NÃO É SÓ<br/>SOBRE TREINAR.<em>É SOBRE EVOLUIR.</em></h2>
        <p>Um acompanhamento pensado para a sua realidade, desde o primeiro passo.</p>
        <div className="selected-plan"><span>PLANO SELECIONADO</span><strong>{plan.name}</strong><b>{currency(plan.monthlyCents)} / mês</b><p>{plan.months} meses de acompanhamento</p><small>O plano será mantido até a conversa no WhatsApp.</small></div><div className="approved-journey-note"><b>{String(Math.min(step+1,6)).padStart(2,'0')} / 06</b><span>Uma pergunta por vez. Sem pressa.</span></div>
      </aside>
      <div className="journey-main">
        <div className="journey-progress-label"><span>SUA JORNADA</span><span>{step < 6 ? `Pergunta ${step + 1} de 6` : "Sobre você"}</span></div>
        <div className="progress-segments" role="progressbar" aria-label="Perguntas respondidas" aria-valuemin={0} aria-valuemax={6} aria-valuenow={Math.min(step+1,6)}>{Array.from({length:6},(_,i)=><span key={i} className={i<=step?'done':''}/>)}</div>
        <div className="step-content" ref={contentRef} key={step}>
          {step < 6 ? <form onSubmit={e => {e.preventDefault(); if (answers[step]) setStep(step + 1);}}>
            <span className="step-kicker">{step === 0 ? "PARA COMEÇAR, ME CONTE:" : "Um passo de cada vez."}</span>
            <h2 id="journey-title" ref={titleRef} tabIndex={-1}>{step===0?<><span>Qual é o seu </span><mark className="question-highlight">principal objetivo?</mark></>:questions[step].title}</h2>
            {step === 0 && <p className="question-helper">Selecione a opção que melhor representa o seu momento.</p>}
            <fieldset className="answer-options"><legend className="sr-only">{questions[step].title}</legend>
              {questions[step].options.map((option, i) => <label className={`answer-option ${answers[step] === option ? "is-selected" : ""}`} key={option}><input type="radio" name={`question-${step}`} required checked={answers[step] === option} onChange={() => setAnswers(prev => prev.map((answer, index) => index === step ? option : answer))} value={option}/><span>{option}</span><span className="answer-circle">{answers[step] === option && <Check size={13}/>}</span>{answers[step]===option&&<span className="selection-label" aria-hidden="true">SELECIONADO</span>}</label>)}
            </fieldset>
            <div className="journey-actions"><Button type="button" variant="ghost" className="back-button" onClick={() => step===0?close():setStep(step - 1)}><ArrowLeft size={16}/>{step===0?"Voltar aos planos":"Anterior"}</Button><Button className="primary-button" type="submit" disabled={!answers[step]}>Continuar<ArrowRight size={18}/></Button></div>
          </form> : <form onSubmit={e => { e.preventDefault(); send(); }}>
            <span className="step-kicker">Quase lá.</span><h2 id="journey-title" ref={titleRef} tabIndex={-1}>Como podemos chamar você?</h2><p className="question-helper">Só o necessário para começar a conversa.</p>
            <div className="identity-fields">
              <label>Seu nome<input autoComplete="given-name" required minLength={2} maxLength={100} value={person.name} onChange={e => changePerson("name", e.target.value)} placeholder="Como você gosta de ser chamado(a)" onBlur={e => changePerson("name", e.target.value.trim())}/></label>
              <div className="field-row"><label>Altura <span>(cm)</span><input type="text" inputMode="decimal" maxLength={5} pattern="[0-9]+([.,][0-9]+)?" required value={person.height} onChange={e => changePerson("height", e.target.value)} placeholder="Ex.: 170"/></label><label>Idade <span>(anos)</span><input type="text" inputMode="numeric" maxLength={3} pattern="[0-9]+" required value={person.age} onChange={e => changePerson("age", e.target.value)} placeholder="Ex.: 25"/></label></div>
              <label>Peso <span>(kg · opcional)</span><input type="text" inputMode="decimal" maxLength={5} pattern="[0-9]+([.,][0-9]+)?" value={person.weight} onChange={e => changePerson("weight", e.target.value)} placeholder="Preencha se quiser"/></label>
            </div>
            {person.age && Number(person.age) < 18 && <p className="form-note">Se você tem menos de 18 anos, converse com Felipe junto de seu responsável antes de contratar.</p>}
            <div className="journey-actions"><Button type="button" variant="ghost" className="back-button" onClick={() => setStep(5)}><ArrowLeft size={16}/>Anterior</Button><Button className="primary-button" type="submit">Enviar<MessageCircle size={18}/></Button></div>
            <p className="form-note">O WhatsApp abre com suas respostas. Você confirma o envio na conversa com Felipe.</p>
            {error&&<p role="alert" className="form-note form-error">{error}</p>}
            {opened&&<p role="status" className="form-note">Se o WhatsApp não abriu, <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">toque aqui para continuar</a>.</p>}
          </form>}
        </div>
      </div>
    </div>
  </dialog>;
}
