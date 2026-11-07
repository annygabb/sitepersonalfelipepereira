# FELIPE PEREIRA — BLACK EDITION 2026
## PROMPT MESTRE FINAL • DIREÇÃO DE ARTE APROVADA • CRO • UI/UX • REACT • RESPONSIVIDADE • QA

> **INSTRUÇÃO DE USO:** Cole este Markdown no ambiente de desenvolvimento com os arquivos da pasta `assets/` do pacote. Este é o **briefing definitivo das seções visualmente aprovadas**, com regras para implementar fielmente o site; NÃO é evidência de que o site foi construído, testado, publicado ou de que o vídeo externo foi baixado. As aprovações registradas abaixo são de **conceito visual**. Antes de qualquer publicação em produção, conferir fotos, vídeos, permissões, termos comerciais e resultados dos testes. 
>
> **Modo de atuação:** você é um squad sênior (direção de arte, UX/CRO, engenharia frontend, motion, copywriting e QA), não um gerador de templates. **Não reabrir escolhas visuais já aprovadas**, não perguntar novamente informações presentes neste documento. Se precisar alterar materialmente uma seção, criar uma prévia da alteração e pedir aprovação específica antes de implementá-la. Não publicar nem fazer deploy sem autorização inequívoca.

---

## 00 — OBJETIVO E STATUS REAL

Construir uma landing page comercial original para **Felipe Pereira — Personal Trainer**, com campanha de Black Friday e **consultoria online individual**, com narrativa em português brasileiro, experiência editorial fitness premium, carregamento cinematográfico, imagens verdadeiras, argumentos comerciais responsáveis e conversão para conversa iniciada voluntariamente pelo visitante no WhatsApp do Felipe.

**Resultado desejado do usuário do site:** compreender quem presta o serviço, o que recebe, como funciona, conhecer evidências visuais reais, comparar os planos e concluir um questionário antes de entrar em contato. Não exigir cadastro, pagamento ou conta para conversar.

**Estado da aprovação em conversa (06–07/11/2026, horário de Brasília):**

| Elemento | Situação da direção visual | Referência do pacote |
|---|---|---|
| Introdução cinematográfica | Conceito e roteiro aprovados, **vídeo fonte pendente** | `references/00-hero-aprovada.png` (estado pós-loader) |
| Hero principal | **Aprovada**: tipografia condensada grande, dourado e foto de Felipe | `references/00-hero-aprovada.png` |
| Quem é Felipe | **Aprovada**: foto real de camiseta vermelha, vídeo grande parcial, preto/dourado/ciano | `references/01-sobre-aprovada.png` |
| Como funciona | **Aprovada**: foto real com aluna, linha do tempo, ícones brancos, palavra “Acompanhamento” dourada | `references/02-como-funciona-aprovada.png` |
| Resultados reais | **Aprovada**: carrossel de cinco fotos lado a lado, central maior, laterais visíveis, sem textos nos cards | `references/03-resultados-aprovados.png` |
| Planos | **Aprovada**: três cards Luxury Pricing; Semestral em destaque | `references/04-planos-aprovados.png` |
| Questionário | **Aprovado**: Personal Journey, uma pergunta por vez, preto/dourado/ciano, etapa final WhatsApp | `references/05-questionario-aprovado.png` |
| FAQ, rodapé, políticas | Conteúdo funcional orientado no briefing; **sem mockup individual aprovado** | Não introduzir uma nova direção visual que destoe das seções aprovadas |

**INTERPRETAÇÃO OBRIGATÓRIA DAS IMAGENS:** mockups definem direção visual, pesos, ritmo, alinhamento e sensação — **não fornecem fotos reais de pessoas nem texto jurídico validado**. Se o mockup contiver rosto reconstruído, slogan impreciso, selo ou gráfico fictício, o arquivo original e este Markdown prevalecem. Implementar mídias reais como `<img>` / componentes de imagem, sobrepondo design com CSS, em vez de usar o mockup inteiro como fundo clicável.

**NÃO INVENTAR:** tempo de carreira, número de alunos, CREF, depoimentos, centímetros ou quilos, preços de referência, estoque, vagas, countdown, origem de leads, credenciais, diagnóstico, vídeo de aluna, foto ou prova de evolução. Não transformar imagem gerada por IA em prova social.

---

## 01 — REGRAS DE DIREÇÃO DE ARTE

### Uma marca fitness premium, não um saldão

- Fundo preto fosco / carvão profundo (`#0D0E10`, superfícies `#16191B`), off-white (`#F4F1ED`), ouro champagne (`#D9A85B` e luz pontual `#F3C774`) e **ciano estritamente como acento interativo** (`#18D5E5` em marcadores, progressão, sublinhados e foco). Ajustar cor final por acessibilidade e comparação real com os mockups; conservar a mesma identidade entre blocos.
- Tipografia de impacto, **display condensado em caixa alta na hero** e cabeçalhos, alternando com sans humanista de alta legibilidade para textos. Fontes livres equivalentes a *Barlow Condensed / Anton* para display e *Manrope / Inter* para interface, sujeitas a teste de caracteres acentuados; a identidade importa mais do que o nome de uma fonte.
- Golden highlights **sem brilho extremo repetitivo**. Gradiente e luz devem ser consequência de volume fotográfico e foco, não preenchimento artificial.
- Espaço negativo, ritmo assimétrico e fotografia original. Usar antes/depois sem filtros corporais e sem transformação de aparência; `object-fit: contain` quando necessário preservar a comparação inteira.
- Botão primário dourado com contraste AA e rótulo claro. Header fixo discreto com links âncora reais e CTA. Links não podem levar a `#` vazio.
- Efeitos textuais da referência anexa: **background highlight**, **underline highlight**, **brush underline**; aplicar de forma pontual em palavras como “EVOLUÇÃO” e “ACOMPANHAMENTO”. Elas entram uma vez, param e preservam leitura.
- Ciano deve ser perceptível, mas minoritário. Não converter a identidade para neon azul como padrão.
- Não replicar as referências VOID, agência ou F11 literalmente: traduzir a linguagem de composição, escala e transição para Felipe.

### Anti-AI-slop obrigatório

Nenhum elemento de interface pode existir apenas para decorar. Proibir “tracinho + eyebrow + título + parágrafo + 3 cards” repetido; aspas decorativas de depoimentos inexistentes; números inventados; cartões em branco preenchidos por chips sem informação; gradientes espalhados; ícones genéricos substituindo conteúdo; galeria com nomes inventados; selos “mais vendido” sem prova e estatística em faixa sem fonte. Conferir o arquivo `references/diretriz-anti-ai-slop.md` incluído no pacote.

**Princípio:** Hero atrai → Felipe humaniza → processo esclarece → resultados demonstram → planos tornam o investimento compreensível → questionário transforma intenção em conversa qualificada.

---

## 02 — INVENTÁRIO DE FONTES E USO EXATO DAS FOTOS

Arquivo original no ZIP | Destino e regras
:--|:--
`assets/felipe/felipe-camiseta-vermelha-original.png` | Seção “Quem é Felipe”; usar **esta foto real** de braços cruzados, camiseta vermelha “CENTRO OESTE GAMES”. Não redesenhar o rosto, uniforme ou letras.
`assets/felipe/felipe-camisa-branca-original.png` | Hero aprovado; usar foto real de Felipe em regata/camisa branca “PERSONAL TRAINER”, sem substituir a aparência por outra pessoa.
`assets/felipe/felipe-aluna-corrida-original.png` | Seção “Como funciona”; imagem ORIGINAL com Felipe e aluna segurando placa. **Não modificar a placa**: manter exatamente grafismo “CORRIDA DE RUA”, desenhos, tipos, cores e enquadramento originais, sem geração/retouching por IA. Aplicar moldura, máscara ou fundo POR FORA da foto, nunca edição do conteúdo.
`assets/resultados/caso-01-original.png` | Antes e depois masculino, orientação original mantida.
`assets/resultados/caso-02-original.png` | Antes e depois feminino, orientação original mantida.
`assets/resultados/caso-03-original.png` | Antes e depois feminino, orientação original mantida.
`assets/resultados/caso-04-original.png` | Antes e depois masculino, orientação original mantida.
`assets/resultados/caso-05-original.png` | Antes e depois feminino (perfil/lateral), orientação original mantida.
`assets/brand/logo-escuro-original.PNG` | Logo preta da identidade; uso em superfícies claras quando aplicável.
`assets/brand/logo-claro-original.PNG` | Logo branca da identidade; uso em superfícies escuras.

**SHA256 e bytes:** registrados no `ASSET_MANIFEST.json`. A mídia da pasta `assets` precisa ser copiada bit a bit, não refeita por gerador de imagens. Os arquivos `references/*aprovada.png` são imagens de **direção conceitual**, não mídias finais editáveis.

### Vídeos e fontes externas

1. **Vídeo verdadeiro da seção Sobre Felipe (salvar literalmente no Markdown):** https://www.instagram.com/p/De4d-udot06/ . É o vídeo informado pelo cliente no qual Felipe acompanha uma aluna. O bloco ocupa uma **área grande, mas não a seção inteira**, como na imagem aprovada. Permitir botão de reprodução claramente identificável; confirmar embed/arquivo autorizado/consentimento antes da publicação. Se embed falhar, oferecer link externo honesto; não exibir vídeo encenado ou thumbnail falsa como se fosse o Reel.
2. **Vídeo de abertura (até 3 segundos):** referência https://br.pinterest.com/pin/284360163969200280/ . Reproduzir trecho autorizado dos **primeiros 3 segundos** com o homem pegando peso e saindo da cena; a saída torna-se o gatilho de transição para hero. Precisa do arquivo original e de direito de utilização, **não tentar baixar/republicar automaticamente conteúdo de terceiros**. Sem mídia autorizada, usar transição estática premium e hero imediatamente acessível.
3. **Inspiracional de ritmo visual:** https://br.pinterest.com/pin/1088815647419215330/ .
4. **Referência de efeitos e fluidez:** https://www.f11arquitetura.com.br/ . Inspecionar efeitos reais no navegador quando houver ambiente; não afirmar que foram implementados/observados sem testes.
5. **Instagram profissional:** https://www.instagram.com/felipepereira_personal/ .
6. **WhatsApp comercial informado:** `+55 62 9139-3319`, link formatado como `https://wa.me/556291393319` após confirmação com Felipe.

**Autorização de imagens:** antes de publicar casos, fotos de aluna e vídeos, confirmar consentimento específico e documentado para uso público comercial, finalidade, eventual retirada, preservação e privacidade. Resultados individuais não garantem resultados futuros.

---

## 03 — MAPA DA PÁGINA E ORDEM DEFINITIVA

```text
Intro cinematográfica (máx. 3 s; opcional/fallback)
  ↓ corte sincronizado com a saída do peso
[01] HERO: Felipe, manifesto, CTA para planos
  ↓
[02] QUEM É FELIPE: foto real + Reel real do acompanhamento + 3 pilares
  ↓
[03] COMO FUNCIONA: foto original com aluna + timeline 01-04 interativa
  ↓
[04] RESULTADOS REAIS: carrossel imersivo SOMENTE 5 fotos de antes/depois
  ↓
[05] PLANOS BLACK FRIDAY: 3 preços, semestral destaque, benefícios
  ↓ escolher plano
[06] QUESTIONÁRIO PERSONAL JOURNEY: 6 questões + identificação + revisão
  ↓ gesto explícito
WhatsApp Felipe com mensagem preenchida (visitante confirma envio)
  ↓
FAQ conciso + rodapé com Instagram e informações confirmadas
```

**FAQ/rodapé** não devem ser uma nova tela disruptiva; podem integrar a parte final dos planos e formulário, com leitura acessível. Não colocar galeria de resultados e pricing na hero (isso foi expressamente rejeitado).

---

## 04 — LOADER CINEMATOGRÁFICO E TRANSIÇÃO PARA HERO

**Sequência:** ao iniciar, se `prefers-reduced-motion: no-preference`, dispositivo com mídia autorizada carregada e boa condição de reprodução, tocar **apenas os primeiros três segundos** do material de referência, ligeiramente escurecido/desfocado para leitura da identidade; na saída do personagem com o peso, sincronizar máscara direcional/recorte lateral, cortar para fotografia original do Felipe em branco e exibir hero já renderizada por baixo.

- Máximo de 3 segundos de bloqueio intencional; **se vídeo não carregar imediatamente, não prender a página**. Botão “Pular introdução” legível e navegável; retorno do usuário não força repetição da intro na mesma sessão.
- Sem som/autoplay com áudio. Respeitar `prefers-reduced-motion`, `Save-Data`, autoplay bloqueado, Safari/iOS e falha de mídia; nesses casos hero direto. Evitar vídeo a 4K desnecessário; poster estático otimizado.
- FCP e CTA não dependem de GSAP, Lenis ou Three.js. Hero em DOM desde início, sem `visibility:hidden` permanente; lidar com unmount, limpeza de scroll lock e foco após transição.
- Não inventar cronômetro, não usar loader falso prolongado, não tornar a navegação inacessível.

### Hero — referência visual aprovada

`references/00-hero-aprovada.png`

**Composição:** fotografia verdadeira de Felipe à direita (camisa branca), fundo carvão com imagem/camada desaturada artística, título monumental na esquerda, champagne gold nos realces, marca-texto em “EVOLUÇÃO”, sublinhado pincel discreto, azul ciano apenas em pontos mínimos. CTA dourado grande; cabeçalho limpo.

**Copy aprovada como base:**

> A SUA **EVOLUÇÃO** NÃO ACONTECE POR ACASO.
>
> Consultoria premium online com acompanhamento real, estratégia e resultado.
>
> CTA: **QUERO MEU PLANO**

Ajustar pequenas quebras para legibilidade mobile, sem substituir o conceito aprovado. Evitar prometer resultado corporal específico. CTA âncora para `#planos`; link acessível ao teclado; CTA visível logo após intro. Navegação: Planos / Resultados / Como Funciona / Sobre o Felipe (âncoras reais). Link Instagram quando fizer sentido.

**Componentização baseada no `MinimalistHero` enviado pelo cliente:** aproveitar assinatura de propriedades e princípios de composição, mas revisar grid, tipos/alt, fallback, layout e responsividade. Não manter `src` de demo, círculo amarelo literal, nav `#` nem dependência desnecessária. No código final, separar `HeroPortrait`, `HeroHeadline`, `BrandHeader`, `HighlightMark`, `PrimaryCTA`.

---

## 05 — SEÇÃO “QUEM É FELIPE PEREIRA”

**Referência fixa:** `references/01-sobre-aprovada.png`.

**Layout aprovado:** esquerda com fotografia ORIGINAL do Felipe com camiseta vermelha; tipografia grande na direita; frase com “EVOLUÇÃO” sobre pincel dourado; três pilares interativos em faixa; abaixo/esquerda Reel grande (mas não fullscreen) que mostra Felipe orientando uma aluna; assinatura artística dourada é ELEMENTO DE COMPOSIÇÃO e não precisa fingir ser assinatura autêntica ou credencial.

**Título:** “POR TRÁS DE CADA EVOLUÇÃO, EXISTE ACOMPANHAMENTO DE VERDADE.”

**Texto-guia:** “Sou Felipe Pereira, Personal Trainer. Meu trabalho é transformar objetivos em um plano possível de seguir, com orientação próxima, ajustes e acompanhamento individual.” Ajustar apenas fluidez verbal sem acrescentar títulos, números ou certificações não comprovadas.

**3 interações reais, sem cartões vazios:**
- Emagrecimento com saúde → explicar o planejamento individual, sem prometer número ou prazo.
- Hipertrofia e ganho de força → treino adequado à realidade e à capacidade, sem garantia quantitativa.
- Mudança de estilo de vida → constância, suporte e ajustes possíveis.

No desktop, hover/focus destaca um pilar e expande texto de apoio real; mobile, tocar para expandir sem depender de hover. Evitar múltiplos brilhos. A reprodução do vídeo deve depender de clique intencional, com texto equivalente e link de fallback. **Nenhum outro rosto pode substituir a foto original**.

**Não utilizar** a frase estilizada como “depoimento” atribuído a Felipe se não for confirmação literal dele; pode ser copy institucional sem aspas, se mantida.

---

## 06 — SEÇÃO “COMO FUNCIONA O ACOMPANHAMENTO”

**Referência fixa:** `references/02-como-funciona-aprovada.png`.

**Título:** “Como funciona o **Acompanhamento** com o Felipe?” — **Acompanhamento em DOURADO**, demais palavras off-white, sublinhado ciano discreto.

**À esquerda:** blocos pequenos de princípios (planejamento personalizado; suporte e acompanhamento; evolução observável), junto à **foto ORIGINAL** de Felipe e aluna com a placa da corrida. **PROIBIDO ALTERAR A PLACA**; conservar letras “CORRIDA DE RUA” e todo o grafismo. Não redesenhar mão, rosto, roupa ou troféu. Se a imagem original for de resolução baixa, usar menor em coluna, sem upscaling generativo da placa.

**À direita:** quatro momentos numerados da jornada; cada cartão tem ícone BRANCO, número em ciano e uma pequena fotografia/ilustração lateral relacionada (checklist, halter, smartphone, painel ilustrativo). Essas imagens são decorativas, não resultados reais.

| Etapa | Título aprovado | Explicação humana e prudente |
|---|---|---|
| **01** | Avaliação completa | “Entendemos o seu momento, rotina, objetivos e informações relevantes para planejar o acompanhamento.” |
| **02** | Planejamento personalizado | “O plano de treino é definido de acordo com o seu objetivo, nível e disponibilidade.” |
| **03** | Acompanhamento de perto | “Você tem um canal para tirar dúvidas, receber orientações e manter a constância.” |
| **04** | Ajustes e evolução | “Analisamos o andamento do processo e fazemos ajustes quando necessários, com feedback semanal.” |

**Interação:** linha vertical ciano progride com ScrollTrigger ao rolar (ou IntersectionObserver como fallback); etapa ativa destaca borda suave; permite expandir/recolher detalhes por clique/teclado. Estado inicial compreensível sem JS. No mobile, timeline vertical em largura plena, imagem real em bloco próprio antes das etapas; não exigir rolagem horizontal e não criar layout “infográfico de 3 colunas” ilegível.

**Fecho discreto aprovado como intenção visual:** “Mais saúde, performance e qualidade de vida” entendido como objetivo do acompanhamento, NÃO garantia individual. Remover gráfico de evolução numérico fictício ou tratá-lo como textura ilustrativa não-dados. Não usar aspas de depoimento falso.

---

## 07 — RESULTADOS REAIS: GALERIA DEFINITIVA

**Referência visual escolhida depois de várias revisões:** `references/03-resultados-aprovados.png`.

**ESTA É UMA REGRA IRREVOGÁVEL SEM NOVA APROVAÇÃO:** os **cards exibem APENAS as fotos originais comparativas de antes e depois**. Nada de nomes, quilos, porcentagens, medidas, textos de “processo real”, chips, três ícones inferiores, notas ou mini-depoimentos **dentro dos cards**. Não exibir métricas mesmo que tenham sido fornecidas nas primeiras fotos; essa foi a escolha visual final da cliente.

**Composição:** fundo carvão profundo, cards fotográficos altos com molduras champagne de brilho contido; card ativo CENTRAL visivelmente maior, cards anteriores/seguintes visíveis parcialmente com leve perspectiva; setas circulares periféricas, indicadores acessíveis de página e discretos acentos ciano para orientar o gesto horizontal. Cabeçalho minimalista “RESULTADOS REAIS” e headline “Transformações que inspiram.”. Um curto texto de contexto pode existir FORA da galeria se não diminuir o protagonismo das fotografias; evitar frases sobre saúde específica que as imagens não demonstram.

**Ordem lógica:** caso 01, 02, 03, 04, 05. O slide inicial pode ser caso 03 central como no mockup; garantir que usuário consiga acessar todos com navegação em loop opcional e controles claros. A foto comparativa ORIGINAL já contém antes e depois lado a lado; manter a ordem de origem, sem trocar esquerda/direita, não gerar corpos, não ajustar silhueta, não transformar expressões e não usar IA.

**Requisitos de carrossel:**
- Mouse: setas anterior/próximo clicáveis; arraste por ponteiro se robusto; teclado Left/Right com foco dentro do carrossel, sem sequestrar teclado global.
- Touch: swipe horizontal inercial com snapping; cards adjacentes visíveis indicando que há mais conteúdo; sem romper scroll vertical natural da página, sem overflow horizontal global.
- `aria-roledescription="carrossel"`, texto visível ou acessível “Resultado 2 de 5”, cada slide tem alt descritivo neutro “Comparação fotográfica de antes e depois, caso 02”. Não inferir métricas, diagnóstico nem identidade.
- Animar `transform`/`opacity`, preservar proporção real, não deixar fotos pequenas demais, evitar reflexos espelhados que se confundam com corpos adicionais. Renderizar versões responsivas; preload só da central, lazy laterais.
- Se o usuário reduzir movimento, troca por fade mínimo ou instantânea, sem perspectiva agressiva.
- Não usar autoplay que avança sozinho antes que visitante observe imagens; a curiosidade é criada por cards laterais perceptíveis e setas, não por perda de controle.

**Aviso curto** FORA da galeria, após seção: “Resultados individuais. A evolução varia conforme características e rotina de cada pessoa.” Quando juridicamente necessário, apresentar contexto sem colar informações sobre as fotografias.

**Uso público exige autorização dos cinco participantes.** O consentimento para fotos de acompanhamento privado não implica publicação comercial.

---

## 08 — PLANOS BLACK FRIDAY: LUXURY PRICING APROVADO

**Referência visual:** `references/04-planos-aprovados.png`.

**Grid:** 3 cartões premium, preto com filetados champagne, semestral CENTRAL maior com acabamento dourado, detalhes ciano nos checks; CTAs “Escolher plano” dentro de cada cartão. Título “Escolha seu plano e evolua com acompanhamento.” Não usar preços inventados, trocadilho com “grátis”, card vazio nem classificação falsa “mais vendido”.

| Plano | Duração | Equivalente mensal | Total do compromisso |
|---|---|---|---|
| **Trimestral** | 3 meses | **R$ 99,90/mês** | **R$ 299,70** |
| **Semestral** | 6 meses | **R$ 89,90/mês** | **R$ 539,40** |
| **Anual** | 12 meses | **R$ 79,90/mês** | **R$ 958,80** |

**Atenção financeira:** os valores acima são exatamente os fornecidos; equivalência mensal **não significa automaticamente mensalidade parcelada**. Mostrar total do plano e “valor equivalente por mês”; mencionar “à vista” apenas quando condições comerciais forem confirmadas, principalmente para semestral e anual. Semestral com “destaque da seleção”, mas NÃO “mais vendido” sem dados. Promoção “Black Friday -50%” foi declarada, porém preço anterior não foi documentado: **não exibir percentuais comparativos nem valor riscado antes de comprovação**. Se confirmados, exibir condições, vigência, limitações e canal de atendimento de maneira transparente.

**Benefícios oferecidos no briefing:** avaliação física por fotos; treinos personalizados; acompanhamento individual online; suporte WhatsApp para dúvidas/correção de exercícios; ajustes semanais quando necessários; feedback semanal; imagens de acompanhamento de evolução de forma consentida. “Dieta personalizada” foi citada no briefing — **validar profissional habilitado e escopo legal antes de afirmar prescrição ou plano alimentar**, sem transformar Felipe automaticamente em nutricionista. A informação completa de benefícios deve estar legível antes da conversão, podendo existir seção compacta própria logo acima dos planos com hierarquia aprovada.

**CTA e estado:** `handleSelectPlan('trimestral'|'semestral'|'anual')` abre o questionário com o plano selecionado e seu total, NÃO WhatsApp diretamente. No mobile, empilhar cartões; o Semestral pode aparecer primeiro para reconhecimento, desde que a comparação de todos os planos permaneça fácil. Nenhum card deve ser cortado; evitar scrolling horizontal para enxergar preço, quando em 360px.

**Base de código:** adaptar `pricing.tsx` fornecido no briefing ao domínio de três durações; NÃO reutilizar toggle `monthly/yearly`, nem planos demo `Starter/Pro/Enterprise`. Componentes shadcn: Card/Button/Badge (badge apenas funcional), Toggle apenas quando houver ação real. Não deixar `href="#"`.

### Modelo de dados sugerido

```ts
export type PlanId = 'trimestral' | 'semestral' | 'anual';
export const plans = {
  trimestral: { id: 'trimestral', months: 3, monthlyCents: 9990, totalCents: 29970 },
  semestral: { id: 'semestral', months: 6, monthlyCents: 8990, totalCents: 53940 },
  anual: { id: 'anual', months: 12, monthlyCents: 7990, totalCents: 95880 },
} as const;
```

Formatar sempre com `Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'})` a partir de centavos. Testar todos os totais e passagem do plano ao formulário.

---

## 09 — QUESTIONÁRIO “PERSONAL JOURNEY” APROVADO

**Referência:** `references/05-questionario-aprovado.png`. A referência é a primeira etapa ampliada; outras colagens antigas com perguntas diferentes não valem. **Uma pergunta por tela, não uma planilha de perguntas visíveis simultaneamente.**

**Visual:** base preta, tarjas e bordas finas douradas, respostas grandes em cinza carvão, estado escolhido dourado, progresso dourado + pontinhos ciano, tipografia grande e clara. Desktop pode usar resumo compacto do plano selecionado à esquerda e pergunta à direita; no celular só a pergunta em destaque, resumo pequeno acima, sem colunas. Microcopy inicial: “Vamos entender seu momento.” e “São seis perguntas rápidas antes de falar com Felipe.” **Não afirmar que o questionário cria automaticamente uma prescrição personalizada.**

### As seis perguntas — copiar exatamente, sem trocar por rotina/alimentação

**Q1 — Qual é o seu principal objetivo?**
- Ganhar massa muscular
- Emagrecer com saúde
- Definir o corpo
- Melhorar condicionamento

**Q2 — O que mais está dificultando seu resultado?**
- Falta de constância
- Falta de uma estratégia adaptada
- Falta de acompanhamento
- Falta de motivação

**Q3 — Há quanto tempo tenta resolver isso?**
- Há poucas semanas
- Há alguns meses
- Há mais de um ano
- Há muitos anos

**Q4 — Já teve acompanhamento profissional?**
- Nunca tive
- Já tive, mas não funcionou
- Tenho atualmente
- Faz tempo que não tenho

**Q5 — Quanto isso incomoda atualmente?**
- Pouco
- Moderadamente
- Bastante
- Muito

**Q6 — Quando gostaria de começar?**
- Imediatamente
- Nos próximos 30 dias
- Em até 3 meses
- Ainda estou pensando

**Formato:** seleção única por questão (`radio` semântico) + botão Continuar; Anterior reversível; não permitir avançar sem seleção; manter as escolhas ao voltar; indicador “Pergunta 3 de 6”, progresso real; foco no título ao trocar de etapa e `aria-live=polite` com parcimônia. Não pedir dados adicionais fora dos informados.

### Identificação depois da Q6

- **Nome**: obrigatório (identificação para contato).
- **Altura**: solicitar com unidade `cm` e validação de formato, obrigatória conforme briefing original.
- **Idade**: solicitar em anos, obrigatória conforme briefing original; elegibilidade de menores e tratamento responsável precisam ser avaliados antes do lançamento.
- **Peso**: **opcional**; `kg`, aceitar vazio sem bloqueio. Não confundir valores inseridos como métricas públicas.
- NÃO pedir CPF, endereço residencial, pagamento, foto, e-mail obrigatório, telefone redundante ou dados médicos no questionário inicial.

Antes de abrir WhatsApp mostrar **resumo editável** de plano, preço e respostas, com nota clara “Ao continuar, o WhatsApp será aberto com a mensagem preenchida para você conferir e enviar.” Ninguém recebe a mensagem automaticamente. Botão final dourado “Falar com o Felipe no WhatsApp”; não dar feedback falso de envio.

### Texto dinâmico para WhatsApp (enviar SOMENTE por decisão do visitante)

```text
Olá, Felipe! Gostaria de saber mais sobre a consultoria Black Edition.

Plano escolhido: [plano]
Duração: [3/6/12] meses
Valor total informado: [R$]
Equivalente mensal informado: [R$]

Nome: [nome]
Idade: [idade] anos
Altura: [altura] cm
Peso: [peso em kg, somente se informado]

Meu principal objetivo: [Q1]
Minha maior dificuldade: [Q2]
Há quanto tempo tento resolver isso: [Q3]
Acompanhamento anterior: [Q4]
Quanto isso me incomoda: [Q5]
Quando quero começar: [Q6]

Gostaria de conversar sobre os próximos passos.
```

```ts
const whatsappPhoneDigits = '556291393319';
const url = `https://wa.me/${whatsappPhoneDigits}?text=${encodeURIComponent(message)}`;
// abrir por ação expressa do usuário; NUNCA enviar automaticamente
```

Se o WhatsApp não abrir, exibir o número e botão “Copiar mensagem” para continuação manual. Evitar colocar os dados do questionário em URL do próprio site, analytics, console, screenshots públicos, Storage ou banco por padrão. O link de destino `wa.me` naturalmente contém texto pré-preenchido na URL; explicar esse comportamento e evitar reter histórico desnecessário. Confirmar política de privacidade e compartilhamento dos dados com WhatsApp/Meta antes da publicação.

---

## 10 — COPY/CRO: SEQUÊNCIA DE PERSUASÃO HONESTA

A copy do site precisa responder: **o que é? para quem é? por que agora? quem atende? como começa? o que está incluso? o que compro e quanto custa? o que muda na rotina?**

| Lugar | Proposta de copy | Função |
|---|---|---|
| Hero | “A SUA EVOLUÇÃO NÃO ACONTECE POR ACASO.” | Posicionamento e desejo com direção, sem promessa quantificada |
| Hero subtítulo | “Consultoria online com acompanhamento individual, estratégia e constância.” | Explica serviço de forma legível |
| Sobre | “Por trás de cada evolução, existe acompanhamento de verdade.” | Proximidade de Felipe |
| Vídeo | “Veja esse acompanhamento na prática” | Prova de atuação real, sem falsa testimonial |
| Como funciona | “Da avaliação aos ajustes: um plano pensado na sua realidade.” | Reduz incerteza |
| Resultados | “Transformações que inspiram.” | Contextualiza as comparações sem colocar texto nos cards |
| Planos | “Escolha seu plano e evolua com acompanhamento.” | Escolha objetiva e preço transparente |
| Form | “Vamos entender seu momento.” | Menos fricção para conversa |
| CTA final | “Falar com o Felipe no WhatsApp” | Ação honesta |

Não usar vergonha, body-shaming, urgência artificial, falsas garantias de resultado ou gatilhos de escassez sem evidência. CTA prioritário deve sempre ser o próximo passo apropriado, não uma promessa de compra concluída. Captura de conversão ocorre **após** decisão consciente de abrir WhatsApp.

**Objeções a responder no FAQ (texto curto, validado):** acompanhamento é online? como são ajustados os treinos? o que preciso para iniciar? como funciona contato e feedback? o que está incluso no preço? como funciona o pagamento? para quem os planos são adequados? **Não completar lacunas como se fossem acordos fechados**. Se escopo ou termos não foram confirmados, marcar “a confirmar com Felipe” e não publicar resposta inventada.

---

## 11 — FRONTEND: STACK, COMPONENTES E COMPORTAMENTO

**Stack requerida:** React + TypeScript + Tailwind + shadcn/ui, Lucide (ícones), Motion/Framer Motion para aparições simples, GSAP+ScrollTrigger e Lenis SOMENTE para movimento útil, carregados de forma diferida. Three.js/Spline só com ganho visual mensurável e autorização específica; por padrão desnecessários.

**Respeitar o repositório que existir.** Inspecionar `package.json`, `tsconfig.json`, `components.json`, aliases e estilos antes de modificar; não forçar `/components/ui` se projeto usa `src/components/ui`, mas manter consistência com import `@/components/ui/..`. Se faltar suporte, propor `npx shadcn@latest init` e instalação Tailwind/TypeScript compatível **depois de inspecionar as versões**. Não misturar versões de Tailwind, Radix ou Motion sem checagem.

### Hierarquia de componentes proposta

```text
src/
  components/
    ui/                           # shadcn primitives e efeitos de texto
      button.tsx, card.tsx, badge.tsx
      text-background-highlight.tsx
      underline-highlight.tsx
      brush-underline.tsx
    landing/
      SiteHeader.tsx
      IntroSequence.tsx
      HeroFelipe.tsx
      AboutFelipe.tsx
      CoachingProcess.tsx
      ResultsCarousel.tsx
      LuxuryPricing.tsx
      QualificationWizard.tsx
      PlanReview.tsx
      FAQ.tsx
      SiteFooter.tsx
  content/
    plans.ts
    process.ts
    faq.ts
  lib/
    whatsapp.ts
    currency.ts
  hooks/
    useReducedMotion.ts
  styles/
    globals.css
public/
  images/                    # copiar originais autorizados do ZIP
  video/                     # apenas vídeo autorizado
```

**Componentes do briefing:** `MinimalistHero` e `Pricing` originais são *REFERÊNCIA* para tipagem e composição, não arquivos que devam ser copiados cegamente. O primeiro tinha imagem de demo e disco amarelo; o segundo tinha cobrança `monthly/yearly` fictícia. Substituir por dados reais do Felipe e acessibilidade robusta. `references/prompt_v2_original.md` guarda o código referencial completo enviado anteriormente, incluindo anexos.

### Motions intencionais

- **Hero:** intro concluída → máscara de revelação → foto do Felipe aparece em 650–850 ms → título grande entra uma vez → marca-texto dourado surge 350–550 ms → CTA sempre estável e imediatamente clicável.
- **Sobre:** parallax mínimo na foto; sublinhado dourado se desenha; cards de pilares reagem a hover/focus/touch; vídeo grande chama atenção mas não toca sozinho com áudio.
- **Processo:** linha ciano preenche verticalmente à medida que scroll avança; etapa ativa ilumina discretamente; expandir/recolher card não desloca texto de forma agressiva.
- **Resultados:** 3D/perspectiva leve por `transform`, swipe responsivo com snap, centralização do ativo; setas e bolinhas reais; **sem autoplay forçado**.
- **Pricing:** o Semestral é visualmente destacado desde a primeira renderização; hover/foco mudam borda/elevação, nunca layout/preço; botões grandes e com estados claros.
- **Questionário:** transição de cartões entre passos com slide curto de 10–16px e opacidade; mudança de foco acessível; sem efeito que esconda opções enquanto o usuário lê.

**Motion tokens sugeridos:** `ease=[0.22,1,0.36,1]`; 200–400 ms interações pequenas, 500–850 ms revelações; sempre `prefers-reduced-motion`. CSS prefers-reduced-motion também precisa funcionar sem runtime JS. GSAP `context()` + cleanup, Lenis clean destroy, ScrollTrigger refresh em reflow, nunca chamar bibliotecas pesadas no critical path de rendering.

**Semântica e acessibilidade:** HTML `header/nav/main/section/footer`, H1 único, labels reais, botões com nome, alt honesto, setas com aria-label, foco visível ciano + contraste seguro, área mínima de toque 44×44, tab/enter/space, escape de modais, body scroll sem lock permanente. Nunca usar imagem do mockup como conteúdo final ou substituir todo texto por imagem.

---

## 12 — RESPONSIVIDADE E PERFORMANCE

### Matriz de pontos de verificação

| Largura | Contexto | Checagens prioritárias |
|---|---|---|
| 320 px | Celular compacto | Títulos não cortados, CTA visível, preços completos, wizard sem scroll lateral |
| 360 px | Android compacto | Botões 44px, carrossel arrastável, menus coerentes |
| 390–430 px | iPhone/Android atuais | Foto hero não cobrir H1, progresso e controles, teclado virtual sobre formulário |
| 768 px | Tablet retrato | Transição 1→2 colunas, vídeo preservado, cards pricing legíveis |
| 1024 px | Tablet paisagem | Ordem de leitura, cards e timeline não esmagados |
| 1280/1440 px | Desktop | Escala editorial, hero com respiro e foto original correta |
| 1920 px | Desktop largo | Limitar largura dos textos, evitar vazio estranho/crops extremos |

**Orientação e navegador:** testar mobile portrait/landscape, tablet portrait/landscape, desktop; Chromium, Firefox e WebKit em Playwright, depois revisão manual em iPhone Safari e Android Chrome quando dispositivos disponíveis. Emulação NÃO substitui teste real. Verificar `100svh/100dvh`, safe-area-inset, sticky header, foco com teclado, perda de rede, retorno da aba e autoplay bloqueado.

**Metas sugeridas, não resultados já medidos:** LCP ≤2,5s p75 em condições de campo quando viável; CLS ≤0,1; INP ≤200ms; zero overflow horizontal global; zero console error funcional inesperado; imagens adequadas e não ampliadas além da resolução; JS não bloqueante; CSS/fontes críticas antes dos módulos pesados. Não prometer nota Lighthouse sem medição.

`loading=lazy` abaixo da dobra, `fetchpriority=high` somente imagem real hero, `srcset/sizes`, WebP/AVIF derivados sem manipular corpos nem textos e sempre manter original. Posters de vídeo, dimensões reservadas, interseção para ativar seção, fallback sem vídeo; não carregar cinco imagens de resultado em tamanho máximo simultaneamente no primeiro frame.

---

## 13 — PLANO DE IMPLEMENTAÇÃO EM ETAPAS (APÓS AUTORIZAÇÃO DE CÓDIGO)

As escolhas visuais foram feitas; **não pedir novamente a opção A/B/C**. Solicitar aceite apenas diante de mudanças materiais no design ou de execução/deploy que exija acesso real a repositório/serviço.

1. **Auditar repositório:** versão React/framework/Tailwind/TypeScript, assets, rotas, dependências. Registrar estado, sem alterar produção.
2. **Criar tokens e shell:** estilos globais, fontes, footer/header, âncoras e componentes acessíveis.
3. **Intro e Hero:** assets e autorização do vídeo; fallback; H1/CTA no SSR/HTML; screenshot comparativo.
4. **Sobre Felipe:** usar foto original do pacote; Reel oficial e fallback; 3 pilares expansíveis.
5. **Como funciona:** usar foto com placa original pixel-preservada; linha vertical, white icons, fotos auxiliares; mobile.
6. **Resultados:** construir carrossel baseado em fotos originais, somente imagens nos cards; 5 slides, teclado/touch/arrow.
7. **Planos:** modelos em centavos, destaque semestral, compatibilidade mobile, condições verificadas, seleção única.
8. **Questionário:** seis perguntas imutáveis, identificação (nome/altura/idade requeridos, peso opcional), revisão, `wa.me` sem envio automático.
9. **FAQ/rodapé/privacidade:** fontes reais, política, Instagram e contato, sem simulações.
10. **Testes e revisão editorial:** anti-slop, acessibilidade, performance, mobile e funil ponta a ponta.
11. **Deploy de preview somente com permissão:** compartilhar URL de teste para inspeção. **Produção apenas com nova autorização expressa.**

**Definition of Done por seção:** código integrado, renderização correta, screenshot real desktop/mobile, zero erros funcionais verificados, interações com mouse/toque/teclado, imagens originais preservadas, copy revista, aceite do dono do projeto. Não alegar “testado” sem logs.

---

## 14 — TESTES E2E E ACEITAÇÃO

### Cenários essenciais para Playwright / browser QA

```text
[ ] Loader aparece somente se houver mídia e condições; skip funciona; timeout libera hero.
[ ] Hero com foto verdadeira do Felipe, copy legível, header funcional e CTA para #planos.
[ ] Sobre usa a foto vermelha original; vídeo aponta para Reel correto; play/fallback funcional.
[ ] Como funciona usa a imagem original com placa original sem alteração; etapas 01..04 abrem/fecham.
[ ] Ícones das etapas 01..04 são brancos; “Acompanhamento” do título é dourado.
[ ] Resultados têm exatamente 5 imagens; cada card tem SOMENTE antes/depois; não há métricas.
[ ] Setas, swipe, dots e teclado permitem ver todos os casos; sem overflow horizontal global.
[ ] Preços totais e equivalentes são exatos e não induzem parcelamento inexistente.
[ ] Destaque semestral não afirma “mais vendido”.
[ ] Selecionar cada plano abre wizard com plano correto, sem enviar dados ainda.
[ ] Perguntas Q1..Q6 exibem exatamente 4 opções cada, textos especificados, validação de seleção.
[ ] Botões Voltar/Continuar preservam respostas; progresso correto e acessível.
[ ] Nome, altura e idade exigidos; peso opcional aceita vazio; não coletar excesso.
[ ] Revisão exibe plano e respostas; usuário pode editar antes de WhatsApp.
[ ] `wa.me/556291393319` contém texto corretamente codificado e só abre por clique final.
[ ] Falha de abertura oferece número e copiar mensagem.
[ ] Não existe envio automático, garantia de resultado ou afirmação nutricional sem validação.
[ ] Navegação no teclado, contrastes AA, foco, leitor de tela e reduced motion funcionando.
[ ] Responsividade 320, 360, 390, 430, 768, 1024, 1280, 1440, 1920 px.
[ ] Safari iOS e Chrome Android reais marcados como verificados SOMENTE após teste manual.
[ ] `lint`, `typecheck`, `test`, `build`, e2e, axe e Lighthouse registrados com evidências.
```

**Observabilidade sem invasão:** medir `hero_cta_click`, `plan_view`, `plan_selected` (sem plano vinculado a identidade), `form_step_complete` (somente número da etapa, sem resposta), `form_review_view`, `whatsapp_intent_click` (sem texto de mensagem). Não rastrear dados de saúde, imagens, peso, idade nem conteúdo das respostas em analytics. Sem falsa alegação de mensagem entregue, compra concluída ou pagamento recebido.

---

## 15 — CHECKS LEGAIS/COMERCIAIS ANTES DE PUBLICAR

- **Imagem e vídeo de pessoas:** autorizações específicas, preferência por licença/documento de uso, possibilidade de retirada; não publicar se ausentes.
- **Alegação nutricional:** “dieta personalizada” requer verificação profissional/habilitação responsável; não atribuir prescrição ao personal sem suporte.
- **50% OFF:** só exibir porcentagem comparativa com preço original comprovável, período e condições verificadas; evitar falsa escassez.
- **Forma de pagamento:** validar à vista, parcelas, periodicidade, cancelamento, reembolso, duração, início, vagas e disponibilidade; não converter equivalente mensal em cobrança mensal automaticamente.
- **Privacidade:** dados de saúde podem ser sensíveis dependendo do conteúdo e contexto; minimizar a coleta, explicar tratamento e encaminhamento ao WhatsApp, proteger eventuais fotos/documentos, cumprir LGPD e tratar acesso de menores com cuidado.
- **Credenciais:** inserir CREF, títulos, anos, certificados e qualificações somente se Felipe apresentar elementos verificáveis e autorizar a divulgação.
- **Evoluções reais:** não alegar causalidade exclusiva pelo programa, nem prazo garantido, ainda que foto revele mudanças.
- **URL/atendimento:** testar Instagram e número WhatsApp em ambiente real antes de produzir campanha.

---

## 16 — REFERÊNCIAS TÉCNICAS E SKILLS

**Usar quando disponíveis, verificar instalação antes de declarar execução:** `design-taste-frontend` / `taste-skill` para criticar layout; CRO/copywriting para proposta de valor; `humanizar` para linguagem autêntica; `emil-design-eng` e `impeccable` para motion/UI; `grilling` para questionar escolhas; `Playwright` + axe para QA; `agent-browser` para percurso; React best practices e inspeção de bundle; `verification-before-completion` para evidência. Se alguma não estiver instalada, registrar “não disponível” e seguir checklist manual equivalente, **sem fingir execução**.

Referências do briefing e peças originais estão na pasta `references/`. Ver também `references/prompt_v2_original.md` para íntegra dos componentes React TSX `MinimalistHero` e `Pricing` enviados como código referencial, e `references/diretriz-anti-ai-slop.md` para todas as restrições de linguagem visual. O arquivo anterior é **histórico**; se houver contradição, as aprovações e regras DESTE arquivo final prevalecem.

---

## 17 — CRITÉRIO FINAL DE ENTREGA E RESPOSTA DO AGENTE DE IMPLEMENTAÇÃO

Após completar **implementação real e testes**, entregar relatório: arquivos alterados, links verificáveis de preview, screenshots por seção/viewport, diferenças em relação ao mockup aprovado, resultado de testes/axe/Lighthouse, falhas conhecidas, dados legais/comerciais pendentes, comprovante de que imagens originais foram preservadas e link final de preview. **Não fazer push/merge/deploy em produção sem autorização específica.**

No caso de entrega apenas documental, dizer explicitamente “Prompt e pacote preparados, site não implementado”. Não anunciar “site pronto” quando só existem mockups ou documentação.

**Última prioridade:** em um site para contratação de acompanhamento humano, a experiência deve parecer feita por uma pessoa com critério: fotografia verdadeira, explicação compreensível, preço legível, UX inclusiva e CTA honesto. A qualidade da conversão não depende de mais efeitos, mas de menos dúvidas.

---

**FIM DO PROMPT MESTRE FINAL — FELIPE PEREIRA / BLACK EDITION 2026**
