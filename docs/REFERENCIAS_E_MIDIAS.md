# Referências e mídias — revisão cinematográfica

As seis imagens aprovadas estão preservadas em `docs/references/`. São referências de composição. As fotos originais são elementos separados, com textos, botões e navegação em HTML.

| Referência aprovada | Implementação |
|---|---|
| 00-hero-aprovada.png | HeroHeadline, HeroPortrait, título por linhas, realce dourado, CTA e luz champagne |
| 01-sobre-aprovada.png | Foto vermelha, manchete, três pilares interativos e bloco do Reel real |
| 02-como-funciona-aprovada.png | Foto original com aluna/placa, quatro etapas, ícones brancos e timeline ciano |
| 03-resultados-aprovados.png | Cinco fotos originais, central ampliada, perspectiva 3D, ouro e controles ciano |
| 04-planos-aprovados.png | Luxury Pricing, semestral destacado, cantos e molduras douradas, valores verdadeiros |
| 05-questionario-aprovado.png | Personal Journey, realce dourado da pergunta, respostas amplas, plano e progresso reais |

## Vídeo de abertura

Fonte indicada: https://br.pinterest.com/pin/284360163969200280/

A página pública identifica o vídeo como “Sometimes I take videos”, de VL Visuals, e aponta para https://www.instagram.com/reel/DRSyI9ckqAp/. O objeto VideoObject público disponibilizou a mídia. O trecho local contém somente os primeiros 3,000 segundos, sem áudio, em H.264 com faststart, 720×1280. Nenhum novo personagem ou vídeo artificial foi criado. O trecho mostra a mão pegando o peso e a saída da cena.

`public/video/abertura-3s.mp4` é o trecho usado. A introdução possui progresso vinculado à reprodução, botão Pular, encerramento limitado por tempo, transição GSAP e tratamento de erro/autoplay. Não se repete na sessão; “Rever abertura” permite assistir novamente. Prefers-reduced-motion e Save-Data pulam a reprodução automaticamente.

O pedido atual autorizou a integração no desenvolvimento. A confirmação de direito de uso comercial continua necessária antes da publicação pública, conforme briefing.

## Reel do Felipe

Fonte: https://www.instagram.com/p/De4d-udot06/

O bloco carrega o player oficial `https://www.instagram.com/p/De4d-udot06/embed/` após clique. A capa é a imagem real informada pelo próprio post. Não é uma imagem encenada. O link externo fica disponível, inclusive se o Instagram restringir a incorporação. O player externo requer internet; o restante do site e a introdução local funcionam na versão autônoma.

## Movimento

GSAP 3.15.0 + ScrollTrigger; Lenis 1.3.27 sincronizado com GSAP ticker. Retorno/limpeza de contextos e listeners ao desmontar ou mudar preferência. Suavização da roda sem simular o toque; áreas de formulário, vídeo e carrossel ficam fora da suavização global. O Lenis é pausado no modal e durante a introdução.

3D usa matrizes CSS e GSAP: rotateY/translateZ/scale nos resultados, leve inclinação dos planos com ponteiro fino e transição de etapa no questionário. Não foi adicionado WebGL pesado. Botões têm brilho breve, resposta à pressão e movimento de seta; títulos recebem entradas por linhas e marca-texto. Prefers-reduced-motion desativa movimentos amplos.

Documentação de integração consultada: https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/ e https://github.com/darkroomengineering/lenis .

## Atualização: abertura e reprodução
- Abertura SVG original em tons de cinza: face pull com corda, pesos e revelação em duas partes (3,4s). Respeita movimento reduzido; uma vez por sessão.
- Vídeo local: arquivo público do Reel oficial https://www.instagram.com/p/De4d-udot06/, 720 × 1280, sem upscale. Autoplay mudo por IntersectionObserver; pausa ao sair, controles de som/reprodução.
- Assinatura: Great Vibes (Google Fonts), fonte local.
- Formulário: seis perguntas preservadas; dados pessoais sem spinbuttons; Enviar abre WhatsApp diretamente.
