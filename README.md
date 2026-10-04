# Petshop Malucão — protótipo de site com catálogo

Site estático (HTML, CSS e JavaScript puros), pronto para publicar na Vercel sem configuração.

## Publicar
Na Vercel, clique em **Add New > Project**, importe este repositório e clique em **Deploy**. Não precisa mudar nenhuma configuração. Cada novo envio para a branch `main` atualiza o site.

## O que trocar (dados de exemplo)
- **WhatsApp**: `script.js`, linha `const WHATSAPP = "5500000000000"`.
- **Produtos e preços**: lista `PRODUTOS` em `script.js`.
- **Endereço, horário e entrega**: seção "Visite a gente" em `index.html` (e o endereço do mapa).
- **Instagram**: link no rodapé de `index.html`.
- **Números do topo** (+2.000 pets, 4,9 no Google) e promoções (frete grátis, 10% OFF).

## Arquivos
- `index.html` — estrutura e textos
- `styles.css` — cores (variáveis em `:root`) e layout
- `script.js` — catálogo, busca, carrinho e pedido pelo WhatsApp
- `assets/` — logo e favicon
