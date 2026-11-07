# Felipe Pereira — Black Edition

Landing page de consultoria online, implementada a partir do briefing aprovado de 06–07/11/2026.

## Revisar sem instalar

Abra `ABRIR_SITE.html` do pacote de entrega no Chrome, Edge, Firefox ou Safari. Fotos, fontes, estilos e código estão dentro desse arquivo. O site abre sem instalação ou internet. O vídeo de abertura também está incorporado. O player externo do Instagram e os links de WhatsApp precisam de internet. A função de copiar usa a área de transferência quando o navegador permite e oferece seleção manual em caso de bloqueio.

## Desenvolvimento

Node.js 22.13 ou superior. Execute `npm install`, depois `npm run dev`. O código usa React, TypeScript, Tailwind, shadcn/ui, Lucide, GSAP/ScrollTrigger e Lenis; a aplicação principal usa Vinext/Vite. `npm run typecheck` verifica os tipos, `npm run build` compila a aplicação e `npm run build:preview` cria o HTML autônomo em `release/`.

## Conteúdo e fluxo

- `content/coaching.ts`: planos em centavos, seis perguntas, formatação monetária e mensagem do WhatsApp.
- `components/landing/Landing.tsx`: header, hero, apresentação, etapas, galeria, planos, FAQ e rodapé.
- `components/landing/QualificationWizard.tsx`: seleção, validações, revisão editável e encaminhamento voluntário.
- `app/globals.css`: tokens, responsividade e movimento reduzido.
- `public/assets/`: arquivos originais, preservados sem alterações.
- `docs/BRIEF_APROVADO.md`: fonte de requisitos.
- `docs/VALIDACAO.md`: evidências, limitações e pendências para lançamento.

Os dados do questionário ficam na memória da página. Fechar o diálogo preserva os dados enquanto a página está aberta; recarregar ou fechar a página descarta os dados. Nenhum envio é automático. Nenhum banco, login, pagamento, analytics ou armazenamento local das respostas foi adicionado.

## Publicação

A versão de revisão é disponibilizada no Sites com acesso privado. A indexação está desativada para revisão. Antes do lançamento, confirmar consentimentos das fotografias, contato do WhatsApp, termos de contratação e privacidade. Abertura com os primeiros 3 segundos reais do vídeo indicado no Pinterest, integrada ao projeto para revisão. O Reel usa player oficial do Instagram após clique e link externo. Confira as fontes e confirmações pré-publicação em docs/REFERENCIAS_E_MIDIAS.md.

## Revisão cinematográfica

Todas as seis referências aprovadas acompanham o código em docs/references. A abertura possui botão de pular e repetição manual. O carrossel usa perspectiva 3D, os planos reagem ao ponteiro e o formulário tem transição de etapa. Preferência por movimento reduzido é respeitada. O marcador de sessão da abertura não armazena respostas do questionário.

## Conversão e compartilhamento

Revisão CRO aplicada e registrada em docs/ANALISE_CRO_E_UX.md. No celular, composição centralizada, campos centralizados e atalho contextual para os planos. A imagem public/og-preview.jpg tem 1200×630 e menos de 200 KB. As tags sociais já usam o endereço real do Sites; miniaturas externas dependem de acesso público e cache das plataformas.

Fotos públicas em WebP, fontes WOFF2 e originais arquivados em docs/original-assets e docs/original-fonts. O relatório de bytes e o checklist estão em docs/PERFORMANCE_SEO_CHECKLIST.md.
