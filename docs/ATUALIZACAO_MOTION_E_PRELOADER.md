# Atualização de movimento e rodapé

- Planos: título, subtítulo, três cards, benefícios e condições entram gradualmente. No celular, cada bloco aparece quando entra na tela. As animações rodam uma vez e respeitam movimento reduzido.
- Personal Journey, FAQ e rodapé: entradas progressivas independentes, sem esconder o conteúdo quando JavaScript não está disponível.
- WhatsApp fixo: SVG brand-whatsapp do Tabler (MIT), dourado/grafite com estado ciano. Destino: +55 62 9139-3319. Não cobre o CTA móvel; oculto durante a abertura e o questionário.
- Retrato: máscara inferior e sombra lateral para integrar o recorte ao fundo, sem recortar o rosto.
- Rodapé: AnimatedWaveFooter em components/ui, adaptado do anexo. Ondas douradas e ciano, links reais, contato real, privacidade preservada. Sem newsletter fictícia, endereços ou redes inventados.

## Abertura: estado real da entrega

O filme fotorealista THE FIRST REP não foi gerado: não há ferramenta de geração de vídeo disponível nesta sessão e os filmes solicitados não foram fornecidos. O desenho anterior foi substituído por uma abertura tipográfica leve. Isso é um fallback, não o vídeo 3D final.

Implementado: FelipePereiraSignature com motion/react, motion.svg, motion.path, traçados próprios extraídos da fonte Great Vibes para “Felipe Pereira”, pathLength, preenchimento progressivo, velocidade e callback. Não utiliza caminhos de “hello” ou “xin chào”.

O player está pronto em IntroSequence.tsx; configurar content/preloader.ts após receber os filmes:
- mobile: MP4 H.264 vertical 9:16, 3,5–4s, face pull centralizado, safe area livre para assinatura.
- desktop: MP4 H.264 horizontal 16:9, 3,5–4s, mesma sequência com composição própria.
- áudio mudo por padrão, faststart; preferencialmente até 2 MB mobile e 4 MB desktop.
- sem títulos gravados no vídeo: assinatura e PERSONAL TRAINER são camadas vetoriais.
- controle de término + prazo máximo de 4s; erro de vídeo retorna ao fallback.
- abertura uma vez por sessão; movimento reduzido/economia de dados entram direto no conteúdo; botão de pular preservado.

Nenhum vídeo inexistente é solicitado: fontes permanecem null até os arquivos finais serem entregues.
