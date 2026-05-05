# Arquitetura do Projeto

## Stack atual

- Nuxt.js (estrutura clássica com `pages`, `components`, `layouts`, `plugins`)
- Firebase Firestore para conteúdo dinâmico
- Geração estática com `nuxt generate`

## Organização de pastas

- `pages/`: rotas da aplicação e páginas dinâmicas (`_name.vue`)
- `components/`: componentes reutilizáveis
- `layouts/`: layout base
- `plugins/`: integrações client-side e bootstrap da aplicação
- `assets/`: CSS, fontes e imagens processadas no build
- `static/`: arquivos servidos de forma estática
- `scripts/`: scripts auxiliares (ex.: geração de rotas)
- `utils/`: utilitários puros (ex.: normalização de slug)

## Fluxo de conteúdo

1. O script `scripts/generate-routes.js` conecta ao Firestore.
2. As coleções `specialities` e `exams_types` são lidas.
3. Os campos `name` são convertidos em slug por `utils/slug.js`.
4. As rotas dinâmicas são injetadas no processo de `generate`.
