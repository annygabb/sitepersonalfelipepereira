# Validação — revisão CRO, mobile e SEO de 07/11/2026

## Evidências

- Referências Dra. Laura e F11 abertas no navegador. Fotografias, cenas amplas e transições de cards inspecionadas; aplicação ao Felipe registrada em ANALISE_CRO_E_UX.md.
- Seis mockups aprovados permanecem em docs/references. Dez fotos/logos originais preservados em docs/original-assets/assets, com hashes idênticos ao pacote de origem.
- Vídeo de abertura real, local, mudo e limitado a 3 segundos, com pular/rever e transição GSAP. Reel oficial do Instagram disponível por incorporação após clique e link externo.
- Novo bloco de momento: clique em “Quero voltar” muda o painel; tecla Home retorna a “Vou começar”.
- Mobile: título e CTA da hero centralizados nas larguras de iframe 320, 360, 390 e 430px, com desvio de centro do CTA de 0px na medição. Nove larguras de 320 a 1920px sem overflow global. Layout também possui regra específica para telefone em paisagem com ponteiro de toque.
- O atalho móvel aparece quando o CTA principal sai de vista; clique abre a seção de planos. O estado visível e a navegação foram observados no navegador.
- Modal do plano abriu por clique. Seis perguntas, identificação obrigatória, peso opcional e revisão final testados. Não houve envio externo ao WhatsApp.
- Nenhuma falha de carregamento nas 11 imagens observadas no DOM após conversão.
- Tags OG/Twitter verificadas no head: endereço real, JPG absoluto, 1200×630, MIME image/jpeg, descrição, locale, título e alt.
- OG final: JPEG, 1200×630, 184.283 bytes. Texto e telefone conferidos visualmente. Sem endereço ou credencial inventados.
- TypeScript e builds de produção/autônomo executados. Resultados e limites em PERFORMANCE_SEO_CHECKLIST.md.

## Ajustes de qualidade durante a revisão

Áreas interativas não são deslocadas durante a entrada de seção. Efeito magnético está concentrado na seta do botão; o alvo clicável permanece estável. A inclinação de card é neutralizada sobre os botões. Foi removida a duplicação entre offset do Lenis e scroll-padding, que reservava espaço excessivo nas âncoras.

## Limitações

Testes em Chromium remoto, com iframes responsivos. Não equivalem a testes em aparelhos físicos. Não foram executados Lighthouse, axe ou suíte Firefox/WebKit. Não se garante atendimento literal a todos os aparelhos nem nota de PageSpeed. As preferências de movimento reduzido e Save-Data têm tratamento em código; a regra de toque em paisagem não foi testada em aparelho físico.

A versão navegável é privada. A prévia social externa exige liberação pública; cada plataforma também pode manter cache. Não houve verificação de compartilhamento real em todas as redes enquanto o acesso permanecer privado.

## Publicação comercial

Antes de liberar publicamente, confirmar direitos comerciais das mídias, contato, condições de pagamento/cancelamento/reembolso, atendimento a menores e política final de privacidade. A revisão não acrescenta garantias de resultado, depoimentos, vagas, prazos ou credenciais não documentados.
