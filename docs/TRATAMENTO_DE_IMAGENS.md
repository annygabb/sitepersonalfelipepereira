# Derivados de fotografia usados nesta revisão

Os retratos de abertura e apresentação e a foto do casal receberam remoção de fundo por edição de imagem. As imagens de antes/depois não passaram por geração. As fontes recebidas estão preservadas em docs/original-assets.

Saídas consumidas pelo site:
- public/assets/felipe/white-cutout-v2.webp
- public/assets/felipe/red-cutout-v2.webp
- public/assets/felipe/couple-cutout-v2.webp

Método: ferramenta de edição de imagens integrada, sem API externa adicional. Exportação dos resultados RGBA para WebP com alpha, qualidade 93.

Prompt-base utilizado: “Use case: background-extraction. Remove ONLY the entire background. Keep the pictured persons exactly as photographed: face, expression, hairstyle, body shape, pose, arms, hands, clothing, printed logos and all visible text. Keep both people together and the entire original CORRIDA DE RUA plaque. Remove background inside gaps. Preserve photographic framing; no new body parts, outpainting, props, halo, shadow, typography or border. Actual alpha transparency. Refine naturally smooth hair and clothing edges, no polygon corners or dark halo.”

Revisão do retrato branco: removida marca de tatuagem adicionada indevidamente no antebraço pelo primeiro processamento. Prompt: “Remove ONLY the small dark tattoo on the lower left forearm, absent in the original. Match surrounding natural skin. Preserve all other photo content and transparent background.”

Como toda edição generativa, os derivados não têm igualdade de pixels com as fotografias recebidas. Estas permanecem arquivadas para substituição ou comparação.
