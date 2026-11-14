import type { Metadata, Viewport } from 'next';
import {site,siteSchema} from '@/content/site';
import './fonts.css';
import './globals.css';
import './cinematic.css';
import './conversion.css';
export const metadata: Metadata = {
 metadataBase:new URL(site.url), title:site.title, description:site.description,
 authors:[{name:'Felipe Pereira'}],alternates:{canonical:site.url},robots:{index:false,follow:false},
 openGraph:{type:'website',url:site.url,title:site.socialTitle,description:site.description,siteName:site.name,locale:'pt_BR',images:[{url:`${site.url}${site.socialImage}`,width:1200,height:630,type:'image/jpeg',alt:site.socialAlt}]},
 twitter:{card:'summary_large_image',title:site.socialTitle,description:site.description,images:[{url:`${site.url}${site.socialImage}`,alt:site.socialAlt}]},
 icons:{icon:[{url:'/favicon.ico'},{url:'/favicon-32x32.png',sizes:'32x32',type:'image/png'},{url:'/favicon-16x16.png',sizes:'16x16',type:'image/png'}],apple:[{url:'/apple-touch-icon.png',sizes:'180x180',type:'image/png'}]}
};
export const viewport:Viewport={width:'device-width',initialScale:1,themeColor:'#0D0E10'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){
 return <html lang="pt-BR" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:"try{if(performance.getEntriesByType('navigation')[0]?.type==='reload'){history.scrollRestoration='manual';if(location.hash)history.replaceState(null,'',location.pathname+location.search);scrollTo(0,0)}var r=matchMedia('(prefers-reduced-motion: reduce)').matches,s=navigator.connection&&navigator.connection.saveData;if(!r&&!s&&!location.hash){document.documentElement.classList.add('intro-pending');setTimeout(function(){document.documentElement.classList.remove('intro-pending')},6000)}}catch(e){}"}}/><style>{`html.intro-pending:before{content:"";position:fixed;inset:0;background:#080d10;z-index:9998}html.intro-pending .hero-line,html.intro-pending .hero-description,html.intro-pending .hero-button,html.intro-pending .hero-portrait{visibility:hidden}`}</style></head><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(siteSchema).replace(/</g,'\\u003c')}}/>{children}</body></html>;
}

import "./fidelity.css";
