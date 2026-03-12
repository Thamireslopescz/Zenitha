# 📖 Guia de Uso - ZÊNITHA Co.

## 🚀 Início Rápido

### Instalação
```bash
pnpm install
```

### Desenvolvimento
```bash
pnpm dev
```
Acesse: `http://localhost:5173`

### Build de Produção
```bash
pnpm build
```
Arquivos gerados em: `/dist`

### Preview da Build
```bash
pnpm preview
```

---

## 📁 Estrutura de Arquivos

### Principais Arquivos

#### `/index.html`
- HTML principal da aplicação
- Contém link para o favicon
- Meta tags SEO

#### `/src/main.tsx`
- Ponto de entrada React
- Renderiza o componente `<App />`

#### `/src/app/App.tsx`
- Componente principal
- Contém toda a estrutura da página
- Gerencia animações e menu mobile

#### `/src/app/styles.css`
- Todos os estilos da aplicação
- Variáveis CSS (cores, fontes)
- Estilos responsivos

#### `/src/app/animations.css`
- Animações de scroll
- Transições
- Keyframes

---

## 🎨 Personalização

### Cores
Edite em `/src/app/styles.css`:
```css
:root {
  --gold: #d1a347;        /* Dourado principal */
  --gold-dark: #b8882e;   /* Dourado escuro */
  --blue: #0E1A2B;        /* Azul escuro */
  --blue-mid: #162540;    /* Azul médio */
  --off: #FAF8F4;         /* Off-white */
  --off-dark: #f0ece4;    /* Off-white escuro */
}
```

### Logo
Para trocar o logo, substitua a imagem em:
```typescript
import logoImage from "figma:asset/[SUA_IMAGEM].png";
```

Tamanhos atuais:
- **Header**: 40px de altura
- **Footer**: 36px de altura

### Favicon
Edite `/public/favicon.svg` para personalizar o ícone.

---

## 📱 Responsividade

### Breakpoints
- **Desktop**: > 900px
- **Tablet**: 601px - 900px  
- **Mobile**: ≤ 600px

### Menu Mobile
Ativa automaticamente em telas < 900px.

---

## ✨ Funcionalidades

### Scroll Suave
Links internos (`#hero`, `#dobra2`, etc.) com scroll suave automático.

### Animações on Scroll
Elementos com classes:
- `.anim` - Fade + slide up
- `.anim-left` - Slide da esquerda
- `.anim-right` - Slide da direita
- `.anim-scale` - Scale up
- `.anim-fade` - Apenas fade

Delays:
- `.d1` - 0.1s
- `.d2` - 0.2s
- `.d3` - 0.3s
- ... até `.d6`

### Carousel de Depoimentos
Auto-scroll infinito. Pausa no hover.

---

## 🔧 Manutenção

### Adicionar Nova Seção
1. Adicione o JSX em `App.tsx`
2. Adicione estilos em `styles.css`
3. Adicione animações se necessário
4. Atualize menu de navegação

### Modificar Conteúdo
Todo o conteúdo está em `App.tsx`. Procure pela seção desejada:
- `#hero` - Topo/Hero
- `#dobra2` - Sobre
- `#dobra3` - Para Quem
- `#dobra4` - Manifesto
- `#dobra5` - Aviso
- `#dobra6` - Processo
- `#dobra7` - Fundador
- `#dobra8` - Depoimentos
- `#dobra9` - CTA/Contato

---

## 📧 Contato

Para dúvidas ou suporte:
- Email: contato@zenitha.co

---

## 📜 Licença

© 2025 ZÊNITHA Co. Todos os direitos reservados.
