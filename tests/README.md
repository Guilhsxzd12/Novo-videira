# Verificações do tema

Na pasta `tests`, execute `npm ci` em um ambiente com acesso ao npm.

- `python3 validate-theme.py`: valida os schemas e referências sem dependências externas.
- `npm test`: renderiza oito páginas com dados ilustrativos usando LiquidJS. Repita com `PRODUCT_COUNT=0 PRODUCT_METADATA=false`, `PRODUCT_COUNT=1 PRODUCT_METADATA=false`, `PRODUCT_COUNT=6 PRODUCT_METADATA=false` e `PRODUCT_COUNT=6 PRODUCT_METADATA=true`.
- `node build-preview.mjs`: gera `docs/preview.html` e um HTML independente ao lado da pasta do projeto.
- `npm run test:browser`: suíte herdada de navegação em Playwright; requer os navegadores do Playwright instalados. Não foi executada nesta entrega.

O renderizador adapta tags da Shopify para testes locais e usa dados fictícios. Não é um servidor de produção. A validação nos servidores Shopify, Theme Check oficial e um pedido de teste continuam necessários antes de publicar. Veja `docs/validacao.md`.

O script `scripts/package-theme.py` produz o ZIP de importação somente com as pastas reconhecidas do tema.
