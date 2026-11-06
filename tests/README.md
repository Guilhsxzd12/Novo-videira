# Verificações do tema

Na pasta `tests`, execute `npm ci` em um ambiente com acesso ao npm.

- `python3 validate-theme.py`: valida os schemas e referências sem dependências externas.
- `npm test`: renderiza oito páginas com dados ilustrativos usando LiquidJS. Repita com `PRODUCT_COUNT=0 PRODUCT_METADATA=false`, `PRODUCT_COUNT=1 PRODUCT_METADATA=false`, `PRODUCT_COUNT=6 PRODUCT_METADATA=false` e `PRODUCT_COUNT=6 PRODUCT_METADATA=true`.
- `python3 download-preview-images.py` seguido de `REAL_CATALOG=1 node build-preview.mjs`: gera a prévia com as fotos públicas da Videira. As fotos de referência não são incluídas no tema.
- `node build-preview.mjs`: gera `docs/preview.html` e um HTML independente ao lado da pasta do projeto.
- `npm run test:browser`: suíte herdada de navegação em Playwright; requer os navegadores do Playwright instalados. A verificação desta entrega também executou Chromium em 1440 e 390 px, com resultados e capturas em docs/validacao.md.

O renderizador adapta tags da Shopify para testes locais e usa dados fictícios. Não é um servidor de produção. A validação nos servidores Shopify, Theme Check oficial e um pedido de teste continuam necessários antes de publicar. Veja `docs/validacao.md`.

O script `scripts/package-theme.py` produz o ZIP de importação somente com as pastas reconhecidas do tema.
