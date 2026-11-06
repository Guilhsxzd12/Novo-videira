import {readFile, writeFile} from 'node:fs/promises';
process.env.RENDER_ONLY = '1';
const {renderPage} = await import('./fixture-server.mjs');
let html = await renderPage('index');
const bottle = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600"><rect width="400" height="600" fill="#faf8f3"/><path d="M176 40h48v130q0 25 32 55v315q0 20-20 20h-72q-20 0-20-20V225q32-30 32-55z" fill="#29252a"/><path d="M176 40h48v90h-48" fill="#b79a60"/><rect x="144" y="290" width="112" height="150" fill="#f2e8d7"/><text x="200" y="350" text-anchor="middle" fill="#651242" font-size="16">VIDEIRA</text><text x="200" y="380" text-anchor="middle" fill="#68535b" font-size="10">ILUSTRAÇÃO</text></svg>`;
html = html.replaceAll('/bottle.svg','data:image/svg+xml;base64,'+Buffer.from(bottle).toString('base64'));
html = html.replaceAll('/assets/','../assets/').replaceAll('href="/#','href="#');
html = html.replace('<title>Videira Vinhoteca', '<title>Prévia ilustrativa · Novo Videira');
html = html.replace('</head>', '<script src="preview.js" defer></script></head>');
html = html.replace('</body>', '<aside style="position:fixed;bottom:12px;right:12px;z-index:95;max-width:250px;padding:10px 14px;background:#fffaf0;color:#651242;border:1px solid #c7ad76;border-radius:8px;font:11px/1.6 Arial,sans-serif;box-shadow:0 4px 18px #0001">PRÉVIA DO DESIGN<br>Produtos e preços ilustrativos.<br>A loja atual não foi alterada.</aside></body>');
html=html.replaceAll('/docs/images/','images/');
await writeFile(new URL('../docs/preview.html',import.meta.url),html);
// Arquivo independente para abrir sem servidor ou instalação.
let standalone=html;
for (const file of ['videira.css','shopify-integration.css','novo-videira.css']) {
  const content=await readFile(new URL('../assets/'+file,import.meta.url),'utf8');
  standalone=standalone.replace('<link rel="stylesheet" href="../assets/'+file+'">','<style data-source="'+file+'">'+content+'</style>');
}
for(const file of ['poppins-300.ttf','poppins-400.ttf','poppins-600.ttf','poppins-700.ttf','videira-hero.jpg','videira-logo.svg']) {
  const content=await readFile(new URL('../assets/'+file,import.meta.url));
  const mime=file.endsWith('.ttf')?'font/ttf':file.endsWith('.jpg')?'image/jpeg':'image/svg+xml';
  standalone=standalone.replaceAll('../assets/'+file,'data:'+mime+';base64,'+content.toString('base64'));
}
for(const [src,relative] of [['../assets/videira.js','../assets/videira.js'],['preview.js','../docs/preview.js']]) {
  const content=await readFile(new URL(relative,import.meta.url),'utf8');
  standalone=standalone.replace('<script src="'+src+'" defer></script>','<script>'+content+'</script>');
}
const catalog=JSON.parse(await readFile(new URL('./catalog-preview.json',import.meta.url),'utf8'));
for(let i=0;i<catalog.length;i++){
 const file=new URL('../docs/images/product-'+i+'.img',import.meta.url);
 let content;try{content=await readFile(file);}catch{continue;}
 const mime=content[0]===0x89?'image/png':content.toString('ascii',8,12)==='WEBP'?'image/webp':'image/jpeg';
 standalone=standalone.replaceAll(catalog[i].image,'data:'+mime+';base64,'+content.toString('base64'));
}
await writeFile(new URL('../../Novo-Videira-previa.html',import.meta.url),standalone);
console.log('Prévia gerada: docs/preview.html e /workspace/Novo-Videira-previa.html');
