export default function AccentFrame({gold=false}:{gold?:boolean}){
 return <div className={`accent-frame ${gold?'accent-gold':''}`} aria-hidden="true"><svg className="accent-arc top" viewBox="0 0 600 200" fill="none"><path d="M-70 170 C180 160 350 100 650 -80"/></svg><svg className="accent-arc bottom" viewBox="0 0 600 200" fill="none"><path d="M-80 250 C160 35 330 35 680 120"/></svg><span className="ambient-light"/></div>;
}
