# Validação · Videira 4

- 84 verificações estruturais de schemas, referências, assets, JSON e Instagram.
- 32 renderizações LiquidJS: oito páginas em quatro cenários de catálogo e metadados.
- Teste real no Chromium em 1440 e 390 px: imagens completas, ausência de rolagem horizontal da página e de erros JavaScript.
- Interações verificadas: favoritos e persistência após recarregar, carrossel, menu móvel, rodapé móvel, filtros, seleção de variante e carrinho.
- Compra de seis garrafas a R$ 49 validada com total de R$ 294; variante indisponível desabilita compra; duas unidades de variante a R$ 120 totalizam R$ 240.
- Capturas reais em preview-desktop.png e preview-mobile.png. Dados e fotos da prévia são um retrato público do catálogo Videira.

Os testes locais usam LiquidJS e um servidor que simula endpoints Shopify. Não validam pagamento, frete, inscrição real na newsletter ou configurações da loja. Esses fluxos exigem a prévia Shopify e pedido de teste. Não houve publicação direta na loja.

Revisão de interação: Chromium verificou o movimento real da faixa superior, rolagem dos países com dez itens simulados, rodapé com links visíveis sem acordeões e ausência de transbordamento horizontal em 1440 e 390 px. Os países extras do teste não fazem parte do catálogo publicado.
