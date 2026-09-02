# Rede de Membros IBFC

PWA da Igreja Batista Filadélfia Church. Centraliza a vida da comunidade: cadastro de membros, escalas, avisos, mural de oração, estudos, mídias, jornada de leitura e gestão pastoral. Instala na tela inicial do celular, funciona como aplicativo e foi desenhado para caber no plano Free do Supabase, com paginação, RPCs, Storage com cache longo e Realtime somente no mural.

**Nome no aparelho:** Rede IBFC | **Título:** Rede de Membros IBFC
**App:** Angular 21, standalone, Signals e rotas lazy. 
**Backend:** Supabase com Auth, Postgres, Storage, Realtime e Edge Functions.

---

## Sumário

1. [O que o app faz](#o-que-o-app-faz)
2. [Stack](#stack)
3. [Como usar (membros)](#como-usar-membros)
4. [Como usar (líderes e admin)](#como-usar-líderes-e-admin)
5. [Papéis e permissões](#papéis-e-permissões)
6. [Arquitetura](#arquitetura)
7. [Rotas](#rotas)
8. [Backend (Supabase)](#backend-supabase)
9. [Instalação local](#instalação-local)
10. [Variáveis de ambiente](#variáveis-de-ambiente)
11. [Deploy](#deploy)
12. [Automações (GitHub Actions)](#automações-github-actions)
13. [Push, Realtime e PWA](#push-realtime-e-pwa)
14. [Scripts](#scripts)
15. [Ministérios, cargos e eventos](#ministérios-cargos-e-eventos)
16. [Licença e segurança](#licença-e-segurança)

---

## O que o app faz

A pessoa se cadastra com dados pessoais, foto, ministérios, cargos, filhos até 12 anos e CEP via BrasilAPI. Fica **PENDENTE** até um admin aprovar, na rota `/aguardando-aprovacao`. Depois entra no dashboard: Home, Bíblia, Mídias, Orações, Estudos, perfil e carteirinha. 

Líderes e admins ganham telas extras no menu do rodapé: escalas, avisos, membros e estatísticas. O rodapé mostra 4 itens; o restante vai para o overflow, incluindo Ajustes e sair.

## Stack

* **App:** Angular 21, standalone, Signals e lazy routes (`@angular/* 21.2`).
* **UI:** Tailwind CSS 4 e Angular Material 21.
* **Auth, Banco e Arquivos:** Supabase (Postgres, Auth, Storage, Realtime, Edge Functions, `@supabase/supabase-js 2.110`).
* **PWA:** `@angular/service-worker` e `ngsw-config.json`.
* **Push:** Web Push, VAPID e Edge Function `enviar-push`.
* **Vídeos:** YouTube Data API (título e thumbnail).
* **Carteirinha:** `angularx-qrcode`, `html-to-image` e `jsPDF`.
* **Gráficos:** Chart.js e `ng2-charts`.
* **Fotos:** `browser-image-compression` no cliente, antes do upload.
* **Hosting:** Vercel (`vercel.json` SPA) e/ou GitHub Pages.
* **CI:** GitHub Actions (deploy, keep-alive, backup semanal).
* **Ambiente:** TypeScript 5.9, RxJS 7.8, Vitest, npm 10.9.2.

## Como usar (membros)

O cadastro público gera status `PENDENTE`. Enquanto o admin não aprova, a pessoa fica na fila de aprovação. No cadastro, a foto adicionada é comprimida no aparelho antes do upload.

* **Home (`/dashboard/home`):** Versículo do dia; Pulso da semana (check-in pastoral); banner de instalação do PWA; escalas dos próximos 30 dias; aniversariantes da semana (com botão de WhatsApp); quadro de avisos em carrossel; PIX da igreja; lista de membros ativos com busca e filtros.
* **Bíblia (`/dashboard/plano-leitura`):** Jornada de leitura com barra de progresso, grade de dias e marcação da próxima leitura. O toque abre o capítulo em modal.
* **Mídias (`/dashboard/midias`):** Pregações e louvores do YouTube. A API busca a capa e o título automaticamente.
* **Mural de orações (`/dashboard/mural-oracoes`):** Feed com botões "Vou orar" e "Estou orando". Presence em tempo real ("N irmãos intercedendo agora") e toast de intercessão ao vivo. Aba de testemunhos. Conexão WebSocket apenas nesta tela.
* **Estudos (`/dashboard/estudos`):** Biblioteca de PDFs armazenados no Storage ou links do Google Drive.
* **Perfil público (`/dashboard/perfil/:id`):** Dados, ministérios, planos de leitura e pedidos do membro.
* **Ajustes (`/dashboard/perfil`):** Edição de cadastro, foto, filhos até 12 anos e notificações push.
* **Carteirinha (`/dashboard/carteirinha`):** Cartão digital com QR Code; exportação via PNG/PDF.

## Como usar (líderes e admin)

Itens exclusivos localizados no menu overflow do rodapé:

* **Escalas (`/dashboard/escala`):** Admin ou líder de departamento. Gerenciamento de calendário, voluntários e pedidos de troca.
* **Avisos (`/dashboard/avisos`):** Admin ou líder de mídia. Cadastro de banners para a Home. O insert dispara notificação push.
* **Estatísticas (`/dashboard/analytics`):** Admin ou Super Admin. RPC `dashboard_estatisticas` para análise de membros, pulso e ministérios.
* **Membros (`/dashboard/admin`):** Admin ou Super Admin. Aprovação de pendentes, edição, inativação e visualização de dependentes.
* **Gerenciamento de Estudos (`/dashboard/admin/estudos`):** Admin ou Super Admin. Envio de material em PDF ou links do Drive.

## Papéis e permissões

Níveis controlados pela coluna `nivel_acesso`:
* **USER:** Acesso padrão de membro (Home, Bíblia, Mídias, Orações, Estudos, perfil, carteirinha).
* **ADMIN:** Tudo de USER + analytics, gestão de membros/estudos, escalas e avisos.
* **SUPER_ADMIN:** Tudo de ADMIN + exclusão global no mural de oração.

**Status do Membro:**
* `PENDENTE`: Esperando aprovação.
* `ATIVO`: Acesso liberado ao app.
* `INATIVO`: Fora do app. Motivos: `EXCLUSAO_SOLICITADA`, `DECISAO_ADMIN`, `FALTA_DE_ACESSO`.

**Lideranças Específicas:**
* Líderes (campo `setor_responsavel` preenchido) têm acesso à rota de Escalas.
* Líderes de "Mídia" têm acesso também à rota de Avisos.

**Guards (`auth.guard.ts`):**
* `loginGuard`: Redireciona usuários logados para a Home.
* `authGuard`: Exige sessão e status diferente de `PENDENTE`.
* `aguardandoGuard`: Bloqueia o acesso geral para usuários `PENDENTE`.
* `adminGuard`: Restringe rotas gerenciais a `ADMIN`/`SUPER_ADMIN`.

> **Nota para o 1º acesso:** Cadastre-se pelo app e, via Table Editor do Supabase, altere seu próprio `nivel_acesso` para `SUPER_ADMIN` e `status` para `ATIVO`.

## Arquitetura

* **Rotas:** `src/app/app.routes.ts` (lazy loading).
* **Core:** Serviços, Guards, Auth, API `src/app/core/services/`.
* **Features:**
  * Autenticação: `src/app/features/auth/pages/`
  * Dashboard: `src/app/features/dashboard/pages/`
* **Shared:** Layouts, cards, empty-states, skeletons, modais `src/app/shared/`.
* **Estado:** Signals para reatividade.
* **Estilo:** Tailwind CSS + Material Design (`styles.css`, `material-theme.scss`).
* **CI/CD:** Scripts via `write-env.js` para injeção de secrets, `.github/workflows/` para automações.
* **Padronização:** Limite de paginação inicial = 10, uso global de `app-empty-state`, `app-loading-spinner` e `app-skeleton-card`.

## Rotas

* `/login`, `/cadastro`, `/recuperar-senha`, `/atualizar-senha`: Fluxo de Auth.
* `/aguardando-aprovacao`: Fila de novos cadastros.
* `/dashboard/home`: Tela Inicial.
* `/dashboard/plano-leitura`: Bíblia/Jornada.
* `/dashboard/midias`: Vídeos e louvores.
* `/dashboard/mural-oracoes`: Pedidos e intercessões.
* `/dashboard/estudos`: Biblioteca PDF/Drive.
* `/dashboard/perfil`: Edição de perfil/ajustes.
* `/dashboard/perfil/:id`: Visão pública do perfil.
* `/dashboard/carteirinha`: Identificação do membro.
* `/dashboard/escala`: (Líder/Admin).
* `/dashboard/avisos`: (Mídia/Admin).
* `/dashboard/analytics`: (Admin).
* `/dashboard/admin`: Gestão de usuários (Admin).
* `/dashboard/admin/estudos`: Uploads (Admin).

*(Rotas desconhecidas ou a raiz `/` redirecionam automaticamente para `/dashboard/home`)*

## Backend (Supabase)

* **Tabelas (`public`):** `membros`, `filhos`, `escalas`, `avisos`, `estudos`, `midias`, `pedidos_oracao`, `checkins_semanais`, `push_subscriptions`, `keepalive`.
* **RPCs:** `aniversariantes_proximos` (dias), `dashboard_estatisticas` (semana), `toggle_oracao` (id), `confirmar_leitura_aviso`.
* **Storage:** Buckets públicos `fotos_membros` e `avisos` (cacheControl: 31536000).
* **Realtime:** Habilitado **exclusivamente** na tabela `pedidos_oracao`.
* **Edge Functions:** `enviar-push` para disparos de web push acionados por Database Webhooks.
* **RLS (Row Level Security):** Protege os dados com base no JWT (`auth.users.id`). A chave pública no front-end atua apenas como identificador; a segurança é feita pelas políticas do banco.

## Instalação local

**Requisitos:** Node.js 22, npm 10+, projeto no Supabase.

    # 1. Clonar o repositório
    git clone https://github.com/luizclaudiolc/app-ibfc.git
    cd app-ibfc

    # 2. Instalar dependências (forçando compatibilidade do Angular/Material com plugins)
    npm ci --legacy-peer-deps

    # 3. Rodar o servidor de desenvolvimento
    npm start

**Checklist do Supabase:**
1. Habilitar Auth por E-mail (Site URL configurada).
2. Criar Tabelas e Políticas de RLS.
3. Criar Buckets (`fotos_membros`, `avisos`) como públicos.
4. Criar Funções RPC.
5. Ligar Realtime na tabela `pedidos_oracao`.
6. Tabela `keepalive` (inserir linha `id = 1`).
7. Deploy da Edge Function: `supabase functions deploy enviar-push --no-verify-jwt`.
8. Configurar Database Webhook (INSERT em `avisos` apontando para a Edge Function).

> *Aviso: Web Push e Service Workers não funcionam corretamente no `ng serve`. Para testar o PWA, faça o build de produção e utilize HTTPS.*

## Variáveis de ambiente

O arquivo `src/environments/environments.ts` é gerado dinamicamente durante o build usando o script `write-env.js`.

**No Frontend (Build / Actions / Vercel):**
* `SUPABASE_URL`: Endpoint do projeto.
* `SUPABASE_KEY` / `SUPABASE_ANON_KEY`: Chave pública anônima.
* `YOUTUBE_API_KEY`: API para as mídias.
* `VAPID_PUBLICKEY` / `VAPID_PUBLIC_KEY`: Chave pública para Push Notifications.

**Apenas Backend / Actions (NUNCA expor no Front):**
* `SUPABASE_DB_URL`: String de conexão (Postgres/Pooler).
* `SUPABASE_S3_ACCESS_KEY`, `SUPABASE_S3_SECRET_KEY`, `SUPABASE_S3_REGION`, `SUPABASE_PROJECT_REF`: Integração S3 (Backup).
* `BACKUP_PASSPHRASE`: Senha GPG para arquivos de backup.
* `VAPID_PRIVATE_KEY` / `VAPID_MAILTO`: Chaves privadas da Edge Function.
* `SUPABASE_SERVICE_ROLE_KEY`: Acesso irrestrito (Admin API).

## Deploy

* **Vercel:** Configurado nativamente como SPA via `vercel.json` (`npm run build`). Output aponta para `dist/app-ibfc/browser`.
* **GitHub Pages:** Deploy via Action (`.github/workflows/deploy-pages.yml`) rodando `npm run build -- --configuration production --base-href /app-ibfc/`. Os arquivos vão para a branch `gh-pages`.

## Automações (GitHub Actions)

* **Deploy Pages:** Roda no push da branch `master`.
* **Supabase Keepalive:** Roda diariamente (12:00 UTC) fazendo requisições na tabela `keepalive` para evitar que o plano Free do Supabase hiberne.
* **Backup Semanal:** Roda aos domingos (06:00 UTC). Executa `pg_dump` e sincroniza S3 Storage. Gera artefatos `.gpg` (AES256) retidos por 90 dias.

*(Para descriptografar o backup gerado localmente: `gpg --batch --yes --passphrase SUA_BACKUP_PASSPHRASE -d db.sql.gz.gpg > db.sql.gz`)*

## Push, Realtime e PWA

* **PWA:** Manifest configurado, ícones padronizados, Service Worker embutido (`ngsw-config.json`). No iOS, o usuário precisa ir em "Compartilhar > Adicionar à Tela de Início".
* **Realtime:** Limitado ao mural de orações (200 conexões simultâneas do plano Free). Usa event channels focados no `userId`.
* **Web Push:** Serviço `WebPushService` gera a inscrição, que é armazenada em `push_subscriptions`. A Edge Function processa os envios e remove inscrições expiradas (404/410).

## Scripts

    npm start     # Ambiente de desenvolvimento local (ng serve)
    npm run build # Gera o environment com write-env.js e executa o build (produção)
    npm run watch # Build contínuo para desenvolvimento
    npm test      # Testes via Vitest

## Ministérios, cargos e eventos

*(Definidos em `src/app/shared/models/consts.ts`)*

* **Departamentos:** Louvor, Mídia, Casais, Homens, Mulheres, Diaconato, Infantil/Kids, Jovens e Palavra.
* **Cargos:** Membro, Pastor(a), Presbítero, Diácono/Diaconisa, Evangelista, Missionário(a).
* **Eventos:** Cultos (Domingo Manhã/Noite), Quinta Profética, Escola Bíblica (Terça), Culto Específico (Jovens/Homens/Mulheres), Liderança.

## Licença e segurança

Software de uso exclusivo da Igreja Batista Filadélfia Church. 
* Não versione arquivos contendo as chaves `service_role`, URL do DB com senha ou chave Privada VAPID.
* O `environments.prod.ts` está ignorado no Git e deve ser recriado pela esteira de CI (`write-env.js`).
