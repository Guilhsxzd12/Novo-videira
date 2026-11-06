# Validação · Videira 3.0

- 79 verificações de schemas, configurações, referências, assets, JSON e Instagram.
- Sintaxe dos dois scripts de interface validada com `node --check`.
- CSS analisado com CSS Tree: sintaxe e propriedades, desconsiderando variáveis customizadas.
- Oito páginas renderizadas em quatro cenários, total de 32 renderizações: catálogo vazio; um produto sem metadados; seis produtos sem metadados; seis produtos com metadados.
- Verificações adicionais: sete categorias mesmo sem tipos cadastrados; catálogo sem busca duplicada; catálogo sem filtros sem coluna vazia; campos de variante e formulário de compra; conta e faixa opcional.
- Prévia adicional com 38 produtos públicos da Videira e fotos próprias do catálogo. É um retrato de referência, sem atualização ao vivo de preços ou disponibilidade.
- ZIP de importação verificado e limitado às pastas reconhecidas do tema Shopify.

O renderizador LiquidJS adapta tags específicas da Shopify. Não substitui Theme Check oficial, prévia hospedada e pedido de teste. O navegador integrado de QA não estava disponível; a suíte de navegador herdada não foi executada. Carrossel, menus, filtros, formulário de newsletter e checkout devem ser conferidos na prévia real antes de publicar.

Nesta revisão houve acesso ao HTML, estilos, navegação e imagens públicos da Cia do Vinho, além de páginas internas. Não houve comparação de capturas do site completo em navegador nem validação visual pixel a pixel.
