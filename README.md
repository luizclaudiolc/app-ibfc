# ⛪ App IBFC

Um PWA (Progressive Web App) moderno desenvolvido para a gestão interna da igreja. Focado na experiência do usuário e facilidade de acesso via dispositivos móveis, o aplicativo centraliza o gerenciamento de escalas, anúncios, e cadastro de membros, utilizando recursos nativos de aplicativos em uma interface web responsiva e elegante.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

*   **Frontend:** [Angular](https://angular.dev/) (Framework principal, versão v16+) com reatividade baseada em Signals.
*   **Estilização:** [Tailwind CSS](https://tailwindcss.com/) (para um design responsivo, rápido e limpo).
*   **Componentes de UI:** [Angular Material](https://material.angular.io/) (para modais, snackbars e ícones integrados).
*   **Backend & Banco de Dados:** [Supabase](https://supabase.com/) (Autenticação, PostgreSQL e Storage).
*   **Compressão de Imagens:** `browser-image-compression` (Otimização local de imagens antes do upload).

## ✨ Funcionalidades Principais

*   **PWA Integrado:** Pode ser instalado diretamente na tela inicial do celular.
*   **Dashboard Personalizado:** Exibição da saudação do usuário, notificações importantes e avisos globais no formato de carrossel.
*   **Gestão de Escalas:** 
    *   Visualização de escalas pessoais diretamente na Home.
    *   Filtro dinâmico para carregar as escalas dos próximos 30 dias.
*   **Quadro de Aniversariantes:** Visualização dos aniversariantes da semana, com integração para envio direto de mensagens via WhatsApp.
*   **Perfil do Usuário:**
    *   Atualização de dados cadastrais.
    *   Upload, compressão automática e remoção da foto de perfil.
*   **Gestão de Membros:** 
    *   Busca inteligente de membros ativos.
    *   Visualização de cargos, setores e controle de inatividade.
*   **Modais e Alertas Nativos:** Sistema de notificações globais (`Snackbars`) e diálogos de confirmação padronizados e animados.

## 📦 Estrutura do Projeto

O projeto segue uma arquitetura modular focada em escalabilidade:

```bash
src/
├── app/
│   ├── core/              # Serviços globais (AuthService, SupabaseService, NotificationService)
│   ├── shared/            # Componentes reutilizáveis (Modais, Header, Footer, Custom-Snackbar)
│   └── dashboard/         # Telas principais da aplicação (Home, Perfil, Escalas, Avisos)
├── assets/                # Imagens (incluindo logo) e arquivos estáticos
└── styles.scss            # Estilos globais (Tailwind base e overrides do Angular Material)
```

## 🛠️ Como executar o projeto localmente

### 1. Pré-requisitos
* **Node.js** instalado na máquina.
* **Angular CLI** instalado globalmente (`npm install -g @angular/cli`).
* Uma conta no **Supabase** com as tabelas configuradas (Membros, Escalas, Avisos) e Storage para fotos.

### 2. Instalação
Clone o repositório:
`git clone https://github.com/SeuUsuario/app-ibfc.git`

Acesse a pasta do projeto:
`cd app-ibfc`

Instale as dependências:
`npm install`

### 3. Configuração de Ambiente
Crie o arquivo de ambiente em `src/environments/environment.ts` com as chaves do Supabase:

`export const environment = {`
`  production: false,`
`  supabaseUrl: 'SUA_URL_DO_SUPABASE',`
`  supabaseKey: 'SUA_CHAVE_ANONIMA_DO_SUPABASE'`
`};`

### 4. Executando a Aplicação
Inicie o servidor de desenvolvimento:
`ng serve`

Acesse a aplicação no seu navegador: `http://localhost:4200/`. A página será recarregada automaticamente se houverem mudanças no código.
