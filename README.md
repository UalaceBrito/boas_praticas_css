# 🛍️ MinhaLoja — Refatoração CSS com BEM + ITCSS

> Projeto acadêmico de refatoração de CSS aplicando **Metodologia BEM** combinada com arquitetura **ITCSS** e pré-processador **SASS**, mantendo **100% do comportamento e layout originais**.

![Status](https://img.shields.io/badge/status-concluído-success)
![SASS](https://img.shields.io/badge/SASS-1.77-cc6699)
![BEM](https://img.shields.io/badge/BEM-metodologia-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📌 Sobre o Projeto

Este repositório contém a **refatoração completa** de um projeto front-end original cujo CSS era escrito com classes genéricas e sem padrão (`.titulo`, `.botao`, `.card-grande`), resultando em:

- ❌ Conflitos de nomes entre componentes
- ❌ Especificidade crescente (`!important` para tudo)
- ❌ Dificuldade de manutenção por múltiplos devs
- ❌ Zero documentação de padrões

Após a refatoração:

- ✅ **Metodologia BEM** aplicada em todos os blocos, elementos e modificadores
- ✅ **Arquitetura ITCSS** separando responsabilidades (abstracts, base, layout, objects, components, utilities)
- ✅ **SASS** com variáveis, mixins, funções e placeholders
- ✅ **Design tokens** centralizados (cores, espaçamentos, tipografia)
- ✅ **Stylelint** validando o padrão BEM automaticamente
- ✅ **Zero regressão visual** — mesma aparência, código novo

---

## 🧠 O que é BEM?

**BEM** = **B**lock, **E**lement, **M**odifier. Uma convenção de nomenclatura para CSS que torna os nomes autoexplicativos e livres de conflito.

| Conceito | Sintaxe | Exemplo | Significado |
|----------|---------|---------|-------------|
| **Bloco** | `.bloco` | `.card` | Componente independente e reutilizável |
| **Elemento** | `.bloco__elemento` | `.card__title` | Parte do bloco — não existe sozinha |
| **Modificador** | `.bloco--modificador` | `.card--highlight` | Variação de estado ou aparência |

### Regras rápidas

1. Nomes em `kebab-case` (minúsculas, hífen entre palavras)
2. Elementos usam `__` (dois underscores)
3. Modificadores usam `--` (dois hífens)
4. **Nunca** estilize por ID
5. **Máximo** 2 níveis de aninhamento no SASS
6. Modificadores sempre acompanham o bloco: `.button.button--primary`

📖 Guia completo em [`docs/BEM-GUIDE.md`](docs/BEM-GUIDE.md).

---

## 🏗️ Stack Técnica

| Ferramenta | Versão | Função |
|------------|--------|--------|
| **SASS (SCSS)** | `^1.77` | Pré-processador CSS |
| **Stylelint** | `^16.0` | Linting com regra regex de BEM |
| **stylelint-order** | `^6.0` | Ordenação alfabética de propriedades |
| **HTMLHint** | `^1.1` | Validação de HTML |
| **serve** | `^14` | Servidor local de desenvolvimento |

---

## 📁 Estrutura de Pastas

```
boas_praticas_css/
├── .editorconfig
├── .gitignore
├── .stylelintignore
├── .stylelintrc.json
├── package.json
├── README.md
├── docs/
│   └── BEM-GUIDE.md
├── src/
│   ├── index.html
│   ├── pages/
│   │   ├── home.html
│   │   └── produto.html
│   ├── scss/
│   │   ├── main.scss              ← entry point (ITCSS)
│   │   ├── abstracts/             ← variáveis, mixins, funções (sem output)
│   │   ├── base/                  ← reset, tipografia
│   │   ├── layout/                ← header, footer, container, grid
│   │   ├── objects/               ← padrões abstratos reutilizáveis
│   │   ├── components/            ← blocos BEM com skin
│   │   └── utilities/             ← classes atômicas com !important
│   └── js/
│       ├── main.js
│       ├── modal.js
│       └── toast.js
└── dist/
    └── css/
        └── main.css               ← gerado pelo build
```

### Por que essa ordem (ITCSS)?

Do **mais genérico** ao **mais específico**, do **menos específico** ao **mais específico**:

1. **Abstracts** — variáveis, mixins, funções (não geram CSS)
2. **Base** — reset e estilos globais de elementos HTML
3. **Layout** — estrutura macro (container, grid, header, footer)
4. **Objects** — padrões de layout sem skin visual
5. **Components** — blocos BEM com identidade visual
6. **Utilities** — classes atômicas com `!important` (única exceção)

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) `>= 18`
- npm `>= 9`

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/<seu-usuario>/<seu-repo>.git

# 2. Entre na pasta
cd <seu-repo>

# 3. Mude para a branch correta
git checkout boas_praticas_css

# 4. Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Compila SASS em watch + source maps
npm run dev

# Em outro terminal, sobe o servidor local
npm run serve
# Abra http://localhost:3000
```

### Build de produção

```bash
npm run build
# Gera dist/css/main.css minificado, sem source maps
```

### Lint

```bash
# Valida SCSS com stylelint (quebra se não seguir BEM)
npm run lint:css

# Valida HTML
npm run lint:html

# Roda os dois
npm run lint
```

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Compila SASS em watch mode (`expanded`) |
| `npm run build` | Build de produção (`compressed`, sem source map) |
| `npm run lint:css` | Roda stylelint nos arquivos SCSS |
| `npm run lint:html` | Roda htmlhint nos arquivos HTML |
| `npm run lint` | Roda os dois linters em sequência |
| `npm run serve` | Sobe servidor estático na pasta `src/` |

---

## 🎨 Design Tokens

Centralizados em `src/scss/abstracts/_variables.scss`. Exemplos:

```scss
// Cores
$color-primary-500: #e63946;
$color-neutral-900: #111827;

// Espaçamento (escala 4px)
$space-4: 1rem;    // 16px
$space-8: 2rem;    // 32px

// Tipografia
$font-size-md: 1rem;
$font-size-4xl: 2.5rem;

// Breakpoints
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
```

Toda cor, espaçamento ou tamanho novo **deve** vir de um token existente. Se não existir, adicione um novo token — nunca "chumbe" valores soltos.

---

## 🧩 Blocos BEM Implementados

### Layout

- `header` — cabeçalho sticky com brand, nav, search e cart
- `footer` — rodapé com copy e redes sociais
- `container` — wrapper de largura máxima (1200px)
- `product-grid` — grade de produtos responsiva (1 → 2 → 3 colunas)

### Components

| Bloco | Descrição |
|-------|-----------|
| `button` | Botão com variantes de cor, tamanho, layout e loading |
| `badge` | Rótulo compacto com variantes semânticas (success/danger/warning) |
| `card` | Card genérico com header, body, footer, overlay e horizontal |
| `input` / `field` | Formulário completo com label, helper, erro, checkbox, radio, select, textarea |
| `input-group` | Input + botão colados (busca, cupom) |
| `search` | Busca do header com `:focus-within` |
| `modal` | Diálogo modal acessível com backdrop, tamanhos, posições e animações |
| `toast` | Notificação efêmera com auto-dismiss |
| `nav` | Navegação principal com indicador de link ativo |
| `cart-button` | Ícone de carrinho com badge de contagem |
| `hero` | Bloco de destaque com título, subtítulo e CTA |
| `section` | Agrupamento de conteúdo com header e link "ver todos" |
| `product-card` | Card de produto da vitrine |
| `product-detail` | Página completa de produto (galeria + info + ações) |
| `breadcrumb` | Navegação hierárquica "você está aqui" |

### Objects

- `media` — imagem + corpo lado a lado (padrão OOCSS)
- `list` — lista com variantes inline

### Utilities

- `spacing` — classes atômicas `u-mt-*`, `u-mb-*`, `u-p-*`, `u-gap-*`
- `text` — alinhamento e peso (`u-text-center`, `u-text-bold`)
- `visibility` — `visually-hidden`, `u-hidden-mobile`, `u-hidden-desktop`

---

## ✅ Como Contribuir

1. Crie uma branch a partir de `boas_praticas_css`:
   ```bash
   git checkout -b feature/nome-da-feature
   ```

2. Siga as regras do [`docs/BEM-GUIDE.md`](docs/BEM-GUIDE.md)

3. Antes de commitar:
   ```bash
   npm run lint
   npm run build
   ```

4. Commit semântico:
   ```bash
   git commit -m "feat(button): adiciona variante ghost"
   ```

5. Abra um Pull Request

---

## 🧪 Checklist de Regressão Visual

Antes de considerar o refactor concluído, valide:

- [ ] `index.html` renderiza idêntico ao original
- [ ] `pages/produto.html` renderiza idêntico ao original
- [ ] Header é sticky no scroll
- [ ] Grid de produtos responde em 3 breakpoints (mobile / tablet / desktop)
- [ ] Modal abre, fecha com ESC e com clique no backdrop
- [ ] Toast aparece e some após 2.5s
- [ ] Todos os formulários aceitam foco por teclado (`Tab`)
- [ ] Focus ring visível em todos os elementos interativos
- [ ] Nenhum erro no console do navegador
- [ ] `npm run lint` passa sem warnings

---

## 📚 Referências

- [BEM — Documentação oficial](https://en.bem.info/methodology/)
- [ITCSS — Inverted Triangle CSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
- [SASS — Documentação](https://sass-lang.com/documentation)
- [Stylelint — Regras](https://stylelint.io/user-guide/rules/)

---

## 👤 Autor

- **Nome:** [Uálace Brito]
- **Curso:** [DEV FULL STACK PYTHON]
- **Instituição:** [EBAC]
- **Contato:** [dev.full.ualace@gmail.com]

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para detalhes.

---

<p align="center">
  Feito com 💙 durante o curso de Boas Práticas CSS
</p>
