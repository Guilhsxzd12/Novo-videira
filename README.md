# Novo Videira · Shopify 2.0

Tema de e-commerce da Videira Vinhoteca, com estrutura comercial baseada na [Cia do Vinho](https://www.ciadovinho.com.br/), identidade bordô/dourada e fotos do próprio catálogo.

## Esta versão

- Cabeçalho de largura total, busca em destaque e navegação direta por tipos de vinho.
- No celular, cabeçalho acompanha a rolagem e não cobre produtos ou títulos.
- Banner comercial de Black Friday, de **27 a 30 de novembro**, substituível por artes próprias.
- Vitrines de produtos, categorias com fotografias, caixas, faixas de preço, ofertas reais, novidades e bodegas.
- Formato dos cards mantido; vitrines mostram duas colunas completas no celular.
- Catálogo sem a segunda busca duplicada.
- Fundo branco e títulos comerciais sem serifa. Conteúdo institucional compacto no final.
- Carrinho, preços, estoque, variantes e checkout nativos da Shopify.

## Aplicar na Shopify

Conecte **Guilhsxzd12/Novo-videira → main** na biblioteca de temas ou envie [novo-videira-shopify.zip](downloads/novo-videira-shopify.zip). Se o tema já está conectado a este repositório, confira a sincronização da branch `main`.

No editor de temas:

1. Em **Campanha**, personalize textos e datas ou envie artes de computador e celular. A campanha não configura descontos no checkout.
2. Em **Categorias**, associe coleções reais para Tintos, Brancos, Rosés e Espumantes; imagens são opcionais. Sem coleções, os links usam busca por termos nos títulos, pois os produtos atuais estão sem tipo cadastrado.
3. Escolha coleções para **Destaques da Videira**, **Novidades** e **Explore nossos vinhos**. Sem configuração, usam o catálogo.
4. Configure os países em **Origens**, com coleções de destino. Sem blocos, a seção depende dos metacampos dos produtos disponíveis para Liquid.
5. Habilite filtros no Shopify Search & Discovery. A seção de preços só aparece quando o filtro nativo de preço está disponível.
6. Confira WhatsApp, menus, políticas, busca, imagens, variantes, carrinho, frete e checkout na prévia antes de publicar.

**Nenhuma alteração foi enviada ao repositório antigo Shopify-Videira nem publicada diretamente pelo assistente na Shopify.** Se o novo repositório estiver vinculado a um tema, a aplicação depende da sincronização configurada na loja.

## Prévia e documentação

- `docs/preview.html`: abrir após baixar o repositório completo. Fotos e dados de referência são da Videira; compra e busca exibem aviso de demonstração.
- [Estudo e decisões](docs/design.md).
- [Validação e limites](docs/validacao.md).
- [Verificações locais](tests/README.md).

O ZIP contém somente as pastas de tema. Documentação, testes e fotos de referência ficam fora dele. Os dados públicos em `tests/catalog-preview.json` são apenas para a prévia; o tema publicado lê os dados reais da Shopify.

## Versão 3.0 · estrutura completa da referência

A apresentação foi ampliada a partir da inspeção direta do HTML e dos estilos públicos da Cia do Vinho: navegação com subcategorias, banner panorâmico com três slides, sete categorias verticais, kits, preços, ofertas, sete harmonizações, países com bandeiras, marcas, newsletter e rodapé com serviços. O catálogo possui filtros laterais no computador; a página do produto recebeu resumo técnico e apoio de entrega.

A newsletter usa o formulário nativo `customer` da Shopify. O cálculo real de frete e o checkout continuam sob as configurações da Videira. As condições promocionais da outra loja não foram transferidas. Artes e textos dos slides adicionais podem ser editados em **Campanha**; o movimento pode ser pausado e respeita redução de movimento.
