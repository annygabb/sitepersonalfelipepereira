import './write-static-meta.mjs';
import {spawnSync} from 'node:child_process';
import {readFileSync, readdirSync, mkdirSync, writeFileSync} from 'node:fs';
const result = spawnSync(process.execPath,['node_modules/vite/bin/vite.js','build','--config','vite.static.config.ts'],{stdio:'inherit'});
if(result.status !== 0) process.exit(result.status ?? 1);
let html=readFileSync('dist-static/index.html','utf8');
for(const name of readdirSync('dist-static/assets')) {
 if(name.endsWith('.js')) { const js=readFileSync(`dist-static/assets/${name}`,'utf8').replaceAll('</script','<\\/script'); html=html.replace(/<script[^>]+src="[^"]+"[^>]*><\/script>/,()=>`<script type="module">${js}</script>`); }
 if(name.endsWith('.css')) { const css=readFileSync(`dist-static/assets/${name}`,'utf8'); html=html.replace(/<link[^>]+href="[^"]+\.css"[^>]*>/,()=>`<style>${css}</style>`); }
}
html=html.replace('href="/favicon.ico"',`href="data:image/x-icon;base64,${readFileSync('public/favicon.ico').toString('base64')}"`).replace('href="/apple-touch-icon.png"',`href="data:image/png;base64,${readFileSync('public/apple-touch-icon.png').toString('base64')}"`);
mkdirSync('release',{recursive:true});
writeFileSync('release/Felipe_Pereira_Black_Edition.html',html);
console.log('Versão autônoma criada em release/Felipe_Pereira_Black_Edition.html');
