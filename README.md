# Nox Motors

## Visão Geral
Nox Motors é uma aplicação web moderna construída com **React** e **Vite** que exibe modelos de motocicletas, opções de financiamento, lojas e informações de contato. A aplicação oferece uma interface limpa e responsiva com roteamento no cliente usando **React Router**.

## Pilha Tecnológica
- **React** ^19.3.0
- **React Router DOM** ^7.18.4
- **Vite** ^8.3.1
- **TypeScript** ^7.0.2
- **CSS Modules** para estilos escopados por componente

## Estrutura do Projeto
```
src/
├─ App.tsx                # Componente raiz com definições de rotas
├─ main.tsx               # Ponto de entrada da aplicação
├─ components/            # Componentes reutilizáveis
│   ├─ Layout/            # Estrutura com Header e Footer
│   │   ├─ Layout.tsx
│   │   └─ Layout.module.css
│   ├─ Header/            # Navegação no cabeçalho
│   │   ├─ Header.tsx
│   │   └─ Header.module.css
│   ├─ Footer/            # Footer com links rápidos e copyright
│   │   ├─ Footer.tsx
│   │   └─ Footer.module.css
│   └─ Logo/              # Componente de logo da marca
│       └─ Logo.tsx
├─ pages/                 # Componentes de página (um por rota)
│   ├─ Home/              # Página inicial
│   ├─ Modelos/           # Lista de modelos de motocicletas
│   ├─ Moto/              # Detalhes de modelo individual (rota dinâmica)
│   ├─ Financiamento/     # Informações de financiamento
│   ├─ Lojas/             # Localização das lojas
│   └─ Contato/           # Formulário ou informações de contato
├─ data/                  # Dados estáticos (ex.: lista de modelos)
├─ utils/                 # Funções utilitárias
├─ styles/                # Estilos globais
└─ assets/                # Imagens, ícones, etc.
public/                    # Assets estáticos públicos (favicon, index.html)
index.html                 # Entrada HTML
vite.config.ts             # Configuração do Vite
package.json               # Metadados e scripts do projeto
tsconfig.json              # Configuração do TypeScript
```

## Começando
```bash
# Clone o repositório (se ainda não fez)
git clone <url-do-repositorio>
cd nox-motors

# Instale as dependências
npm install
```

## Desenvolvimento
Inicie o servidor de desenvolvimento com recarga automática:
```bash
npm run dev
```
Abra `http://localhost:5173` no navegador para visualizar a aplicação.

## Construção para Produção
Gere um bundle otimizado para produção:
```bash
npm run build
```
Os arquivos compilados serão colocados na pasta `dist/`, prontos para serem servidos por qualquer servidor web estático.

## Pré‑visualização da Build de Produção
Você pode pré‑visualizar a build localmente:
```bash
npm run preview
```

## Visão Geral dos Scripts (conforme `package.json`)
- `dev` – Inicia o Vite em modo de desenvolvimento.
- `build` – Cria um bundle pronto para produção.
- `preview` – Serve a pasta `dist/` localmente para uma checagem rápida.

## Contribuição
Sinta‑se à vontade para abrir *issues* ou enviar *pull requests*. Siga o estilo de código existente (TypeScript + CSS Modules) e execute `npm run lint` (se configurado) antes de commitar.

## Licença
Adicione aqui as informações da licença do seu projeto (ex.: MIT).

## Overview
Nox Motors is a modern web application built with **React** and **Vite** that showcases motorbike models, financing options, store locations, and contact information. The app provides a clean, responsive UI with client‑side routing powered by **React Router**.

## Tech Stack
- **React** ^19.3.0
- **React Router DOM** ^7.18.4
- **Vite** ^8.3.1
- **TypeScript** ^7.0.2
- **CSS Modules** for component‑scoped styling

## Project Structure
```
src/
├─ App.tsx                # Root component with route definitions
├─ main.tsx               # Application entry point
├─ components/            # Reusable UI components
│   ├─ Layout/            # Layout wrapper with Header & Footer
│   │   ├─ Layout.tsx
│   │   └─ Layout.module.css
│   ├─ Header/            # Site header navigation
│   │   ├─ Header.tsx
│   │   └─ Header.module.css
│   ├─ Footer/            # Footer with quick links and copyright
│   │   ├─ Footer.tsx
│   │   └─ Footer.module.css
│   └─ Logo/              # Brand logo component
│       └─ Logo.tsx
├─ pages/                 # Page‑level components (one per route)
│   ├─ Home/              # Home page
│   ├─ Modelos/           # List of motorbike models
│   ├─ Moto/              # Individual model details (dynamic route)
│   ├─ Financiamento/     # Financing information
│   ├─ Lojas/             # Store locations
│   └─ Contato/           # Contact form / info
├─ data/                  # Static data files (e.g., model listings)
├─ utils/                 # Utility functions
├─ styles/                # Global style assets
└─ assets/                # Images, icons, etc.
public/                    # Public static assets (favicon, index.html)
index.html                 # HTML entry point
vite.config.ts             # Vite configuration
package.json               # Project metadata & scripts
tsconfig.json              # TypeScript configuration
```

## Getting Started
```bash
# Clone the repository (if you haven't already)
git clone <repository-url>
cd nox-motors

# Install dependencies
npm install
```

## Development
Run the development server with hot‑module reloading:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser to view the app.

## Building for Production
Create an optimized production build:
```bash
npm run build
```
The compiled assets will be placed in the `dist/` directory, ready to be served by any static web server.

## Preview Production Build
You can locally preview the production build:
```bash
npm run preview
```

## Scripts Overview (from `package.json`)
- `dev` – Starts Vite in development mode.
- `build` – Generates a production‑ready bundle.
- `preview` – Serves the `dist/` folder locally for a quick sanity check.

## Contributing
Feel free to open issues or submit pull requests. Follow the existing code style (TypeScript + CSS modules) and run `npm run lint` (if configured) before committing.

## License
Add your license information here (e.g., MIT).
