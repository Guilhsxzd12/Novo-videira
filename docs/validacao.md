# Validação desta versão

## Realizado

- Sintaxe JavaScript de `assets/videira.js` verificada com `node --check`.
- 60 verificações locais de arquivos, schemas, templates, identificadores de configuração, snippets, assets, JSON e Instagram.
- Renderização Liquid de oito páginas: início, catálogo, produto, carrinho, busca, erro 404, página de conteúdo e lista de coleções.
- Os oito templates foram renderizados em quatro cenários: catálogo vazio, um produto sem metadados, seis produtos sem metadados e seis produtos com metadados. Total: 32 renderizações aprovadas.
- Verificação de título principal, busca, menus, links de conta, faixa opcional, ausência de Liquid não resolvido, campos de variante e formulário nativo de compra.
- Verificação de que o snippet de card mantém o conteúdo original e de que o CSS novo não redefine seu formato.
- ZIP de importação criado somente com `assets`, `config`, `layout`, `locales`, `sections`, `snippets` e `templates`.

A renderização usa dados ilustrativos locais. Neste ambiente, a dependência de teste LiquidJS foi obtida do bundle oficial do projeto via GitHub; ela não é incluída nem necessária no tema Shopify.

## Limites

O navegador de QA e a prévia integrada não estavam disponíveis neste ambiente. Não houve validação visual em navegador, teste de cliques em celular/computador ou inspeção da loja Shopify. A suíte de navegador herdada é mantida como ferramenta, mas não foi executada nesta entrega.

O LiquidJS adapta tags específicas da Shopify apenas para testar renderização. O resultado não substitui a renderização, Theme Check oficial e validação de checkout nos servidores Shopify.

Antes de publicar, revisar o tema na prévia Shopify: imagem principal, cabeçalho com os menus reais, cards, catálogo, filtros habilitados, busca, menu mobile, variantes sem estoque, carrinho, frete, formas de pagamento e checkout. Condições comerciais e dados do catálogo real são configurados na loja.

## Prévia ilustrativa

`docs/preview.html` abre após baixar o repositório completo. Usa os mesmos templates e estilos, com garrafas ilustradas e preços fictícios claramente identificados. A busca e a compra nessa prévia exibem um aviso; no tema instalado, usam os fluxos reais da Shopify. O arquivo independente `Novo-Videira-previa.html` também é fornecido na entrega.
