# Guia de Padronização BEM — Time Frontend

## Convenção de nomes

```
.block
.block__element
.block__element--modifier
.block--modifier
```

### Regras obrigatórias

1. **kebab-case** para palavras compostas: `product-card`, não `productCard`.
2. **Nunca** IDs para estilo. IDs só para `aria-labelledby` e JS via `document.getElementById`.
3. **Máximo 2 níveis** de aninhamento SASS (`.block { &__el { &--mod {} } }`).
4. **Modificadores NUNCA sozinhos** no HTML: `.button button--large`, não `class="large"`.
5. **Utilities com prefixo `u-`** e sempre com `!important` (único lugar permitido).

### Bloco x Elemento — como decidir?

Faça a pergunta: **"esse pedaço faz sentido sozinho em outra página?"**

- "Sim" → é bloco (`button`, `card`, `badge`, `nav`).
- "Não, só existe dentro do pai" → é elemento (`card__title`, `nav__link`).

### Modificador x Bloco novo — como decidir?

- Se é **a mesma coisa com variação** → modificador (`button--primary`).
- Se é **outra coisa com aparência parecida** → bloco novo.

### Exemplos

```html
✅ Correto
<button class="button button--primary button--large">Enviar</button>
<article class="card card--highlight">
  <h3 class="card__title">Título</h3>
</article>

❌ Errado
<button class="button primary large">Enviar</button>
<div class="card"><span class="title">Título</span></div>
```

## Como adicionar um novo componente

1. Crie `src/scss/components/_nome.scss`.
2. Registre em `src/scss/main.scss` na seção COMPONENTS.
3. Toda classe segue o padrão BEM.
4. Rode `npm run lint` antes do commit.

## Fluxo de trabalho

```bash
npm install        # instala deps
npm run dev        # SASS em watch
npm run build      # build minificado
npm run lint       # stylelint + htmlhint
```