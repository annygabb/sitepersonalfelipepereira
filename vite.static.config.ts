import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {readFileSync,readdirSync} from 'node:fs';
import {resolve} from 'node:path';
const assets: Record<string,string> = {};
for(const directory of ['felipe','resultados','brand','decorative']) for (const name of readdirSync(resolve('public/assets',directory)).filter(n=>n.endsWith('.webp'))) {
  assets[`/assets/${directory}/${name}`] = `data:image/webp;base64,${readFileSync(resolve('public/assets',directory,name)).toString('base64')}`;
}
for(const name of readdirSync(resolve('public/video')).filter(n=>n.endsWith('.mp4')||n.endsWith('.webp'))) {
 const mime=name.endsWith('.mp4')?'video/mp4':'image/webp';
 assets[`/video/${name}`]=`data:${mime};base64,${readFileSync(resolve('public/video',name)).toString('base64')}`;
}
export default defineConfig({base:'./',plugins:[react()],resolve:{alias:{'@':resolve('.')}},define:{__INLINE_ASSETS__:JSON.stringify(assets)},build:{outDir:'dist-static',emptyOutDir:true,assetsInlineLimit:1000000,rollupOptions:{input:resolve('index.html')}}});
