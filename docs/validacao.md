# Validação · Videira 2.0

## Executado

- 66 verificações de schemas Shopify, configurações, referências, assets, JSON e Instagram.
- Sintaxe JavaScript verificada com `node --check`.
- Oito páginas renderizadas em quatro cenários: catálogo vazio; um produto sem metadados; seis produtos sem metadados; seis produtos com metadados.
- Categorias mantidas mesmo com tipo de produto vazio; catálogo sem busca duplicada; campos de variante e formulário nativo de compra preservados.
- Prévia adicional gerada com os 38 produtos do catálogo público da Videira e fotos próprias da loja. Esses dados são um retrato de referência, sem conexão ao vivo com estoque ou preços.
- ZIP de importação com somente as pastas reconhecidas de tema Shopify, testado quanto à integridade.

## Limites

Não havia navegador de QA integrado disponível. Não foi feita comparação visual pixel a pixel com a Cia do Vinho, nem validação em navegador ou checkout real. O acesso HTTP direto à referência retornou 403; a pesquisa usou páginas indexadas e imagens públicas da própria referência.

O renderizador LiquidJS adapta tags da Shopify para verificações locais. Não substitui Theme Check oficial, prévia hospedada, testes de celular e um pedido de teste antes de publicar. A suíte de navegador herdada não foi executada nesta entrega.

## Conferir na Shopify

Sincronização da branch `main`, campanha, categorias vinculadas a coleções, filtro de preços no Search & Discovery, menu mobile, duas colunas de cards, imagens, variantes sem estoque, carrinho, frete, pagamento e checkout. Nenhum desconto automático foi configurado pelo tema.

A prévia HTML é uma demonstração do design. Os links de compra exibem um aviso; no tema instalado, usam os fluxos nativos reais da Shopify.
