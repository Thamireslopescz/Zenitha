# ZÊNITHA Co. - Website

Website corporativo da ZÊNITHA Co., consultoria de branding focada em criar marcas autênticas.

## 🎨 Alterações Realizadas

### Estrutura do Projeto
- ✅ Convertido de HTML estático para aplicação React + Vite
- ✅ Separação de estilos em arquivos CSS modulares (`styles.css`)
- ✅ Separação de animações em arquivo dedicado (`animations.css`)
- ✅ Adição de favicon personalizado com letra "Z" estilizada
- ✅ Configuração completa do Vite para desenvolvimento e produção

### Ajustes de Logo
- **Header (Nav)**: Logo ajustado de `50px` para `40px` de altura
- **Footer**: Logo ajustado de `52px` para `36px` de altura
- **Favicon**: Criado favicon SVG com gradient e letra "Z" dourada

### Organização de Arquivos

```
/
├── index.html              # HTML principal com favicon
├── public/
│   └── favicon.svg         # Favicon da aplicação
├── src/
│   ├── main.tsx            # Ponto de entrada React
│   ├── app/
│   │   ├── App.tsx         # Componente principal
│   │   ├── styles.css      # Estilos principais
│   │   └── animations.css  # Animações separadas
│   └── styles/
│       └── index.css       # Importa estilos globais
```

## 🚀 Como Executar

```bash
# Instalar dependências
pnpm install

# Executar em desenvolvimento
pnpm dev

# Build para produção
pnpm build
```

## 📦 Tecnologias

- **React 18.3.1**
- **Vite 6.3.5**
- **TypeScript**
- **CSS Modules**

## 🎯 Características

- Design responsivo
- Animações suaves ao scroll
- Menu mobile hamburger
- Carousel infinito de depoimentos
- Tema escuro/dourado elegante
- Fontes: Playfair Display e Cormorant Garamond

## 📝 Nota

O visual da aplicação foi mantido idêntico ao design original. As alterações foram apenas na organização do código e nos tamanhos dos logos conforme solicitado.