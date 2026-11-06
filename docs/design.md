# Videira 3.0 · Reprodução da estrutura pública da Cia do Vinho

Referência: https://www.ciadovinho.com.br/, consultada em 6 de novembro de 2026. Nesta revisão foi possível acessar diretamente o HTML completo, a folha de estilos, a configuração pública dos menus e as imagens de referência. Também foram estudados catálogo e produto. O código do tema é uma implementação própria em Liquid/Shopify; nenhum script do backend da outra loja é carregado.

## Correspondências implementadas

| Área pública da referência | Implementação Videira |
| --- | --- |
| Faixa superior, logo, busca, conta e carrinho | Cabeçalho comercial com identidade Videira e minicarrinho nativo. |
| Menus com subcategorias | Campanha, lançamentos, kits, faixas de preço, países, tipos, uvas e marcas. |
| Banner panorâmico preto e dourado | Campanha Black Videira com datas próprias; slides adicionais, setas, indicadores e pausa. |
| Vitrines e títulos centralizados entre linhas | Prateleiras com quatro cards no computador e duas colunas no celular. |
| Sete atalhos verticais de categoria | Destaques, tintos, espumantes, brancos, rosés, novidades e caixas, com fotos do catálogo. |
| Kits, quatro faixas de preço e ofertas | Coleção de kits quando configurada; atendimento para caixas; filtros de preço e descontos reais. |
| Harmonizações e origens | Sete categorias gastronômicas fotográficas; países com bandeiras e buscas configuráveis. |
| Marcas e conteúdo de apoio | Marcas do catálogo, informações, dúvidas, serviços, newsletter e rodapé completo. |
| Catálogo com filtros em coluna | Filtros nativos Shopify no desktop e painel modal no celular; ordenação e paginação reais. |
| Produto com imagem e painel de compra | Galeria, variantes, quantidade, preço, resumo técnico, carrinho, descrição e informações de entrega. |

Montserrat local é a fonte principal da interface, alinhada à referência. O fundo é branco; as áreas de identidade usam bordô `#651242` e dourado. Os cards de produto mantêm a estrutura da Videira, com nova distribuição na vitrine.

## Catálogo e condições da Videira

Preços, estoque e formas de pagamento vêm da Shopify. Não foram copiados cupons, cashback, avaliações, brindes, parcelamento ou frete grátis da Cia do Vinho. Newsletter usa o formulário nativo de clientes da Shopify. Frete é calculado no checkout conforme a configuração real da loja.

Produtos atuais sem tipo cadastrado usam buscas por termos no título como alternativa. Coleções escolhidas no editor são a opção mais precisa. Países possuem buscas de fornecedores de referência configuráveis; novas marcas podem exigir atualização dessas coleções/buscas.

## Imagens e licenças

Logo, foto de brinde e fotos de produtos são da Videira. Fotografias gastronômicas são do Unsplash; fontes e créditos estão em `assets/media-credits.txt`. Montserrat é distribuída sob SIL Open Font License, incluída no tema. Os banners comerciais da outra loja foram analisados como referência, sem reutilizar sua marca ou condições de venda.

Não foi realizada comparação pixel a pixel em navegador neste ambiente. A apresentação completa deve ser conferida na prévia Shopify, incluindo os dados, menus e políticas reais.
