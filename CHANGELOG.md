# Changelog - ZÊNITHA Co.

## [1.0.0] - 2025

### ✨ Conversão para React + Vite

#### Estrutura
- Convertido site HTML estático para aplicação React moderna
- Configurado Vite como bundler para melhor performance
- Separado estilos em arquivos modulares (`styles.css` e `animations.css`)
- Criado estrutura de componentes React

#### Ajustes de Logo
- **Header (Navegação)**: Reduzido de 50px para **40px**
- **Footer (Rodapé)**: Reduzido de 52px para **36px**
- Mantida mesma proporção e qualidade visual

#### Favicon
- Criado favicon SVG personalizado
- Design: Letra "Z" estilizada em dourado (#d1a347)
- Background com gradient azul (#0E1A2B → #162540)
- Bordas arredondadas (6px radius)

#### Arquivos Criados
```
/index.html              - HTML principal com meta tags
/public/favicon.svg      - Favicon personalizado
/src/main.tsx           - Entry point React
/src/app/App.tsx        - Componente principal
/src/app/styles.css     - Estilos principais (600+ linhas)
/src/app/animations.css - Animações e transições
/README.md              - Documentação do projeto
/CHANGELOG.md           - Este arquivo
```

#### Scripts NPM
```json
{
  "dev": "vite",           // Desenvolvimento
  "build": "vite build",   // Build produção
  "preview": "vite preview" // Preview build
}
```

### 🎨 Visual
- ✅ Mantido 100% do design original
- ✅ Todas as cores, fontes e espaçamentos preservados
- ✅ Animações e transições mantidas
- ✅ Responsividade preservada

### 🚀 Performance
- Vite para hot reload instantâneo
- Build otimizado para produção
- Code splitting automático
- Assets otimizados

### 📦 Dependências
- React 18.3.1
- Vite 6.3.5
- TypeScript
- Tailwind CSS 4.1.12

### 🎯 Funcionalidades Preservadas
- ✅ Scroll suave entre seções
- ✅ Animações on scroll
- ✅ Menu mobile hamburger
- ✅ Carousel infinito de depoimentos
- ✅ Hover effects em cards e botões
- ✅ Tipografia responsiva (clamp)

---

**Autor**: Assistente IA  
**Data**: Março 2025  
**Versão**: 1.0.0
