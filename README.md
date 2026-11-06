# Novo Videira · Tema Shopify

Novo design do e-commerce da Videira Vinhoteca. Tema Shopify Online Store 2.0 em Liquid, independente da loja atual.

## Direção do design

Fundo claro, bordô da Videira e dourado discreto. Cabeçalho compacto com busca sempre visível, navegação por tipo de vinho, país, uva e bodega. A página inicial aproxima a apresentação da marca da descoberta de produtos.

O componente `snippets/product-card.liquid` e as regras de formato dos cards foram preservados do tema original: fotografia, origem, bodega, uva, preço e botão de compra. Os produtos, variantes, preços, disponibilidade e checkout continuam vindo da Shopify.

## Instalar na Shopify depois

1. Em **Loja virtual → Temas → Adicionar tema → Conectar ao GitHub**, escolha **Guilhsxzd12/Novo-videira → main**. Isso deve criar um tema separado na biblioteca.
2. Alternativa: envie o arquivo **[novo-videira-shopify.zip](downloads/novo-videira-shopify.zip)**. Ele contém somente as pastas do tema, prontas para importação.
3. Abra **Personalizar** e configure as coleções de **Escolhas da Videira**, **Novidades** e **Mais rótulos para descobrir**. Sem coleção definida, as vitrines usam o catálogo disponível.
4. Em **Ocasiões**, associe uma coleção a cada bloco. Sem associação, o bloco abre o catálogo completo. Os textos e destinos são configuráveis.
5. Em **Origens**, configure blocos com países e coleções reais. Sem blocos, a seção identifica países nos metacampos dos primeiros 50 produtos disponíveis para Liquid. Os atalhos automáticos de país/uva usam a busca da loja, que depende do conteúdo indexado; coleções configuradas são a opção mais precisa.
6. Configure o menu adicional do cabeçalho, o menu do rodapé, as políticas e o WhatsApp. A faixa superior e o banner principal podem ser editados no editor de temas. A identidade permite escolher bordô, dourado, fundo e logo.
7. Habilite os filtros no **Shopify Search & Discovery** e confira a prévia no celular e no computador. Teste busca, carrinho, variantes, frete e checkout com o catálogo real antes de publicar.

**Nada deste repositório foi publicado na loja atual.** O usuário fará a aplicação e publicação do tema na Shopify.

## Incluído

- Cabeçalho com busca de produtos, menus acessíveis por clique/teclado e navegação para celular.
- Banner principal editável, atalhos por tipo, vitrines, ocasiões, origens, uvas e bodegas.
- Catálogo com filtros e ordenação nativos; página do vinho com variantes e ficha técnica.
- Adição de produtos via Ajax Cart API, carrinho lateral e formulários nativos de compra.
- Rodapé com Instagram **@videiravinhoteca**, informações e políticas da loja.
- Aviso de maioridade, foco visível, descrições de imagem e respeito a movimento reduzido.
- Sem preços fictícios, descontos automáticos ou campanha de Black Friday ativada.

## Documentação e validação

- [Estudo das referências e decisões de design](docs/design.md).
- [Validação realizada e limites](docs/validacao.md).
- [Verificações locais](tests/README.md).
- [Configuração das contas de cliente](docs/contas-cliente.md).

Base: `Guilhsxzd12/Shopify-Videira`, commit `8bbe6d9c2fc1a1d6f0e9e6276dd6533f0c781f94`. A loja e o repositório anteriores não foram modificados por este redesign.
