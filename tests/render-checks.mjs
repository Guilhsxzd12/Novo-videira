import assert from 'node:assert/strict';
import {readFile, mkdir, writeFile} from 'node:fs/promises';
process.env.RENDER_ONLY = '1';
const {renderPage, renderSection, globals} = await import('./fixture-server.mjs');
const pages = ['index','collection','product','cart','search','404','page','list-collections'];
const count = Number(process.env.PRODUCT_COUNT ?? 6);
const metadata = process.env.PRODUCT_METADATA !== 'false';
await mkdir(new URL('./artifacts/', import.meta.url), {recursive:true});
for (const type of pages) {
  const html = await renderPage(type);
  assert.ok(html.includes('novo-videira.css'), type);
  assert.ok(html.includes('class="nv-header vn-header"'), type);
  assert.ok(html.includes('name="q"'), type);
  assert.ok(html.includes('id="vn-mobile"'), type);
  assert.ok(html.includes('instagram.com/videiravinhoteca/'), type);
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, type + ': um título principal');
  assert.equal(html.includes('undefined'), false, type);
  assert.equal(/{[{%]/.test(html.replace(/<script[\s\S]*?<\/script>/g,'')), false, type + ': Liquid não resolvido');
  if (type === 'index') {
    assert.ok(html.includes('O próximo brinde'));
    assert.ok(html.includes('Um jantar especial.'));
    assert.equal(html.includes('id="selecao"'), count > 0);
    assert.equal(html.includes('id="paises"'), count > 0 && metadata);
    assert.equal(html.includes('id="uvas"'), count > 0 && metadata);
    if(count > 0) assert.ok(html.includes('sf-wine-card'));
  }
  if(type === 'product') {
    assert.ok(html.includes('data-product-variants'));
    assert.ok(html.includes('data-product-submit'));
    assert.ok(html.includes('name="id"'));
    assert.ok(html.includes('data-shopify-add'));
  }
  await writeFile(new URL(`./artifacts/${type}.html`, import.meta.url), html);
}
const accountContext = globals('index');
accountContext.shop.customer_accounts_enabled = true;
const header = await renderSection('videira-header', accountContext, {announcement:''});
assert.ok(header.includes('href="/account"'));
assert.equal(header.includes('nv-announcement'), false);
const card = await readFile(new URL('../snippets/product-card.liquid',import.meta.url),'utf8');
assert.ok(card.includes('product.selected_or_first_available_variant.id'));
assert.ok(card.includes('product.compare_at_price > product.price'));
console.log(`PASS render: ${pages.length} páginas, products=${count}, metadata=${metadata}; conta, faixa opcional e compra nativa.`);
