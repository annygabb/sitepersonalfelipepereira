# Performance, SEO e qualidade — revisão de 07/11/2026

## Resultado medido

Comparação dos arquivos de imagem e fonte convertidos. Trata-se da soma desses recursos, não de uma medição de carregamento em rede.

| Recurso original | Antes (bytes) | Depois (bytes) | Redução |
|---|---:|---:|---:|
| public/assets/resultados/caso-01-original.png | 317,409 | 17,030 | 94.6% |
| public/assets/resultados/caso-02-original.png | 337,493 | 20,678 | 93.9% |
| public/assets/resultados/caso-03-original.png | 288,732 | 19,344 | 93.3% |
| public/assets/resultados/caso-05-original.png | 111,580 | 8,034 | 92.8% |
| public/assets/resultados/caso-04-original.png | 231,106 | 23,082 | 90.0% |
| public/assets/felipe/felipe-camiseta-vermelha-original.png | 257,803 | 22,786 | 91.2% |
| public/assets/felipe/felipe-aluna-corrida-original.png | 463,049 | 29,728 | 93.6% |
| public/assets/felipe/felipe-camisa-branca-original.png | 170,362 | 11,886 | 93.0% |
| public/assets/brand/logo-claro-original.PNG | 141,823 | 27,090 | 80.9% |
| public/assets/brand/logo-escuro-original.PNG | 122,497 | 21,706 | 82.3% |
| public/video/abertura-poster.jpg | 25,316 | 20,556 | 18.8% |
| public/video/reel-poster.jpg | 26,726 | 20,668 | 22.7% |
| public/fonts/HTxwL3I-JCGChYJ8VI-L6OO_au7B4873_3E.ttf | 86,636 | 32,920 | 62.0% |
| public/fonts/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4jE-_F.ttf | 96,348 | 30,692 | 68.1% |
| public/fonts/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FO_F.ttf | 96,200 | 30,648 | 68.1% |
| public/fonts/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4aE-_F.ttf | 96,188 | 30,916 | 67.9% |
| public/fonts/HTxyL3I-JCGChYJ8VI-L6OO_au7B6xTrY3TWvA.ttf | 88,944 | 34,648 | 61.0% |
| public/fonts/HTxwL3I-JCGChYJ8VI-L6OO_au7B46r2_3E.ttf | 87,120 | 33,112 | 62.0% |
| public/fonts/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFO_F.ttf | 96,300 | 30,300 | 68.5% |
| public/fonts/HTxyL3I-JCGChYJ8VI-L6OO_au7B6xTrf3fWvA.ttf | 89,652 | 34,992 | 61.0% |
| public/fonts/HTxwL3I-JCGChYJ8VI-L6OO_au7B47b1_3E.ttf | 87,556 | 33,148 | 62.1% |

**Total: 3,318,840 → 533,964 bytes; redução de 83.9%.**

## Checklist aplicado

| Item | Situação |
|---|---|
| Fotos da página em WebP | Aplicado, qualidade 85 |
| Originais preservados | Arquivados em docs/original-assets; não servidos como fotos da página |
| OG JPG até 200 KB | 1200×630, 184.283 bytes; exceção intencional ao WebP para compatibilidade solicitada |
| Hero sem lazy e com prioridade | Mantido |
| Conteúdo abaixo da dobra com lazy e dimensões | Mantido |
| Fontes WOFF2, swap, duas famílias | Aplicado |
| GSAP/Lenis respondem a interação e scroll | Mantido, com limpeza de listeners e contextos |
| Movimento reduzido | Regras CSS e matchMedia; toque continua nativo |
| Alvos interativos estáveis | Entradas de conteúdo interativo sem deslocamento; feedback magnético na seta do botão |
| Espaço de âncora | Corrigida soma duplicada entre Lenis e scroll-padding |
| Idioma, H1 e labels | pt-BR, uma H1 e campos rotulados |
| Foco visível | Mantido |
| Title e description | Implementados, com texto factual |
| Canonical absoluto | URL retornada pelo Sites |
| Open Graph e Twitter | URL absoluta, JPG, dimensões, locale, descrição e alt |
| JSON-LD | Person, Service e WebSite; sem endereço ou credencial inventados |
| Favicons e theme-color | Aplicados |
| HTTPS | Hospedagem do Sites |
| Robots | noindex/nofollow: versão de revisão privada |
| Links externos | noopener noreferrer |

## Validação e limites

TypeScript, build principal e build autônomo executados. Inspeção em Chromium das interações e de nove larguras de iframe (320 a 1920px). O CTA da hero ficou centralizado nas larguras mobile conferidas, sem overflow global. O questionário chegou à revisão com identificação obrigatória e peso opcional. O bloco de momento aceita clique e navegação por teclado.

Não foram executadas auditorias Lighthouse/axe nem testes em aparelhos físicos. O PageSpeed remoto e os depuradores sociais não conseguem avaliar uma página protegida como uma página pública. Não se afirma nota 95+, SEO 100, conversão maior ou funcionamento comprovado em todas as redes. A mudança de audiência pública é necessária para validação social externa.

## Segurança e dependências

Não houve login, pagamento, banco ou analytics adicionados. O player do Instagram continua sendo carregado somente após clique. Não foi executada uma auditoria completa de vulnerabilidades; não se afirma ausência de vulnerabilidades com base apenas em build.
