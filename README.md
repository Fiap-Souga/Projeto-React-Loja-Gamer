# Loja Gamer

Projeto front-end de uma loja gamer desenvolvido com React + Vite.

## Como chegar neste ponto do projeto

A seguir está o passo a passo para montar a estrutura inicial do projeto até o estado atual em que ele está.

### 1. Criar o projeto com Vite

No terminal, dentro da pasta desejada, execute:

```bash
npm create vite@latest LojaGamer -- --template react
cd LojaGamer
npm install
```

Isso cria a base do projeto React e instala as dependências iniciais.

### 2. Instalar dependência de rotas

Como o projeto vai ter páginas diferentes, foi instalado o `react-router-dom`:

```bash
npm install react-router-dom
```

### 3. Estruturar as pastas do projeto

A estrutura inicial ficou assim:

```bash
LojaGamer/
  src/
    components/
    pages/
    css/
    App.jsx
    main.jsx
    index.css
  public/
  package.json
  vite.config.js
```

Dentro de `src/components` foi criado o layout base dos elementos reutilizáveis, como:

- Header.jsx
- Footer.jsx
- GameCard.jsx

Dentro de `src/pages` foram criadas as telas principais:

- Home.jsx
- Jogos.jsx
- Login.jsx
- Contato.jsx
- Error.jsx

### 4. Criar a base da aplicação

No arquivo `src/main.jsx`, a aplicação é renderizada no navegador:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

No arquivo `src/App.jsx`, a aplicação começa a ser montada com a estrutura principal:

```jsx
const App = () => {
  return (
    <>App</>
  )
}

export default App
```

### 5. Criar as páginas iniciais

Cada página foi criada com um conteúdo simples para marcar o início do desenvolvimento, por exemplo:

```jsx
const Home = () => {
  return (
    <>Home</>
  )
}

export default Home
```

Os mesmos padrões foram usados para `Jogos`, `Login`, `Contato` e `Error`.

### 6. Criar os componentes básicos

Também foram criados os componentes que vão compor o visual da loja:

```jsx
const Header = () => {
  return (
    <>Header</>
  )
}

export default Header
```

```jsx
const footer = () => {
  return (
    <>footer</>
  )
}

export default footer
```

Esses componentes ainda são a base inicial e serão melhorados conforme o projeto evolui.

### 7. Rodar o projeto

Para iniciar o ambiente local:

```bash
npm run dev
```

Depois, abra o endereço mostrado no terminal, normalmente:

```bash
http://localhost:5173
```

## Estado atual do projeto

Neste momento, o projeto já está com:

- estrutura inicial do Vite criada
- React configurado
- páginas básicas criadas
- componentes iniciais montados
- dependência de rotas instalada
- base pronta para continuar o desenvolvimento da loja
