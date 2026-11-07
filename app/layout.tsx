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
 return <html lang="pt-BR"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(siteSchema).replace(/</g,'\\u003c')}}/>{children}</body></html>;
}

import "./fidelity.css";
