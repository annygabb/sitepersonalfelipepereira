import data from './site.json';
export const site = data;
export const siteSchema = {
 '@context':'https://schema.org',
 '@graph':[
  {'@type':'Person','@id':`${site.url}/#felipe`,name:'Felipe Pereira',jobTitle:'Personal Trainer',url:site.url,image:`${site.url}${site.socialImage}`,sameAs:[site.instagram],telephone:site.phone},
  {'@type':'Service','@id':`${site.url}/#consultoria`,name:'Consultoria online individual de treinamento físico',serviceType:'Treino personalizado com acompanhamento individual online',provider:{'@id':`${site.url}/#felipe`},url:`${site.url}/#planos`,description:'Treino personalizado, avaliação física por fotos, suporte pelo WhatsApp e feedback semanal.'},
  {'@type':'WebSite',name:site.name,url:site.url,inLanguage:'pt-BR'}
 ]
};
