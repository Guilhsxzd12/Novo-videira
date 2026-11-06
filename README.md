# Novo Videira · Shopify 2.0 · versão 4

Tema da Videira reconstruído usando o HTML, CSS e recursos do ZIP da Cia do Vinho fornecido pelo usuário. Cabeçalho branco, navegação cinza, títulos com traço bordô, vitrines com fotos grandes, categorias, caixas, preços, harmonizações, países e rodapé seguem a referência. A identidade, os produtos e os formulários são da Videira.

## Instalar

Conecte `Guilhsxzd12/Novo-videira`, branch `main`, à biblioteca de temas Shopify ou importe [o ZIP](downloads/novo-videira-shopify.zip). A publicação depende da sincronização e seleção do tema na Shopify.

No editor, abra **Loja — referência ZIP** para escolher coleções de destaques, caixas, ofertas e novidades, substituir o banner ou adicionar slides. Sem coleção de caixas, a vitrine permite comprar seis unidades do mesmo vinho pelo total dos preços individuais, sem desconto automático. A campanha anuncia 27 a 30 de novembro; descontos precisam ser configurados na Shopify.

Categorias, países e marcas apontam para buscas do catálogo. Confira a classificação dos produtos e configure filtros no Shopify Search & Discovery. Configure também menus, políticas e contato nas configurações do tema.

Preços, variantes, estoque, carrinho e checkout usam Shopify. Favoritos ficam neste navegador. Não foram importados avaliações de clientes, contatos, rastreadores ou condições comerciais da Cia do Vinho.

## Conferir

- [Desktop](docs/preview-desktop.png) e [celular](docs/preview-mobile.png): capturas reais da versão renderizada com o catálogo público da Videira.
- `docs/preview.html`: demonstração local; compras precisam do tema instalado.
- [Design](docs/design.md), [validação](docs/validacao.md) e [testes](tests/README.md).

O ZIP contém somente pastas do tema. O repositório antigo Shopify-Videira não foi alterado.

## Interação e adaptação

A faixa superior desliza continuamente e respeita a preferência de redução de movimento. Países usam carrossel com gesto de arrastar e botões; adicione blocos **País** na seção Loja ZIP para incluir nome, imagem e coleção de destino. Ao adicionar o primeiro bloco, cadastre também os países existentes que deseja manter.

O rodapé tradicional apresenta links sempre visíveis, identidade bordô e contatos da Videira. No celular, organiza-se em duas colunas; banners editoriais ficam empilhados e os serviços ocupam uma faixa compacta. No computador, o rodapé e os banners usam colunas mais amplas.
