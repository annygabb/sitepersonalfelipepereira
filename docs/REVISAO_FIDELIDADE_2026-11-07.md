# Revisão das cinco composições aprovadas

A revisão substitui os layouts aproximados por componentes específicos de cada referência.

- Sobre: retrato original recortado por CSS com halo dourado; vídeo real no painel inferior esquerdo; headline à direita, três benefícios compactos e frase institucional.
- Como funciona: foto original do casal ampliada, placa preservada, narrativa à esquerda e quatro cartões com timeline ciano à direita. As miniaturas decorativas reutilizam regiões da arte aprovada, sem funcionarem como prova de resultado.
- Resultados: cinco cartões simultâneos em perspectiva e sobreposição, central maior, setas, teclado, gesto de toque e indicadores. As fotografias originais usam contain: não se alteraram corpos nem se inventaram partes ausentes.
- Planos: calendário, preços e totais originais, Semestral maior com badge, bordas e luz dourada, botões em cápsula e quatro benefícios inferiores. Objetos decorativos derivados da própria referência por máscara CSS.
- Questionário: diálogo em tela inteira, cabeçalho, manifesto à esquerda, resumo do plano e painel à direita com seis segmentos. Mantidas seis perguntas, dados pessoais e revisão antes do WhatsApp.
- Removido do layout o bloco adicional MomentGuide que deslocava a composição aprovada.

## Validação

Conferência visual no navegador em desktop e em iframe de 390px (área útil 375px), com largura do conteúdo igual à viewport, sem overflow horizontal nos planos e no diálogo. Verificados: escolha Semestral, seleção de resposta, sequência das seis perguntas até identificação, navegação da galeria e fechamento por Escape. TypeScript e exportação HTML executados. O preview não substitui teste em aparelho físico.

## Diferenças intencionais e verificáveis

A tipografia é HTML responsivo e as fotografias de evidência permanecem originais. O vídeo é o Reel real, cuja cena difere do mockup ilustrativo. Não foi acrescentada prescrição de dieta sem confirmação profissional. A composição foi aproximada às referências, sem alegação de equivalência pixel a pixel.


## Correção posterior dos três trechos apontados

- Removidos recortes em polygon de retratos e casal, substituídos por derivados WebP com alpha verdadeiro. Os arquivos fotográficos recebidos permanecem em docs/original-assets; os novos recortes foram processados por geração/edição de imagem e não são cópias pixel a pixel dos originais.
- Hero: fotografia integrada ao fundo, halo suave, proporções de foto e headline equilibradas, CTA com tipografia legível.
- Sobre: títulos e corpo com famílias explícitas, vídeo com enquadramento acima do play impresso na capa, um único botão de reprodução e recorte limpo. Correção de sobreposição de retrato e legenda no celular.
- Processo: somente uma seta por cartão. As miniaturas decorativas usam apenas a área do objeto, sem bordas, texto ou setas do mockup. Corpo e imagens ocupam áreas separadas; título da seção, placa e rostos ficam visíveis.
- Verificação: screenshots de desktop, celular com área útil de 375px e tablet com área útil de 753px; sem overflow horizontal observado na abertura e no processo. Testado fechar/reabrir avaliação completa. Preferência por movimento reduzido e controles do Reel mantidos.
