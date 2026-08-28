# Rede de Membros IBFC

PWA da **Igreja Batista Filadélfia Church** para a vida da comunidade: membros, escalas, avisos, oração, estudos, mídias, leitura bíblica e gestão pastoral.

Instala na tela inicial do celular, funciona como app e roda no **plano Free do Supabase** (paginação, RPCs, Storage com cache longo, Realtime só no mural).

**Nome no aparelho:** Rede IBFC  
**Título:** Rede de Membros IBFC

---

## Sumário

- [Stack](#stack)
- [Como usar (membros)](#como-usar-membros)
- [Como usar (líderes e admin)](#como-usar-líderes-e-admin)
- [Papéis e permissões](#papéis-e-permissões)
- [Arquitetura](#arquitetura)
- [Backend (Supabase)](#backend-supabase)
- [Instalação local](#instalação-local)
- [Variáveis de ambiente](#variáveis-de-ambiente)
- [Deploy](#deploy)
- [Automações (GitHub Actions)](#automações-github-actions)
- [Push, Realtime e PWA](#push-realtime-e-pwa)
- [Scripts](#scripts)

---

## Stack

| Camada | Tecnologia |
|---|---|
| App | Angular **21** (standalone, Signals, lazy routes) |
| UI | Tailwind CSS 4 + Angular Material 21 |
| Auth / DB / Storage | Supabase (Postgres, Auth, Storage, Realtime, Edge Functions) |
| PWA | `@angular/service-worker` (`ngsw-config.json`) |
| Push | Web Push + VAPID + Edge Function `enviar-push` |
| Vídeos | YouTube Data API (metadados / thumbnail) |
| Carteirinha | `angularx-qrcode` + `html-to-image` + `jsPDF` |
| Gráficos | Chart.js + `ng2-charts` |
| Fotos | `browser-image-compression` antes do upload |
| Hosting | Vercel (`vercel.json` SPA rewrite) e/ou GitHub Pages |
| CI | GitHub Actions: deploy, keep-alive, backup semanal |

---

## Como usar (membros)

Cadastro público → status **PENDENTE** até um admin aprovar (`/aguardando-aprovacao`). Depois entra no dashboard.

### Home (`/dashboard/home`)

- Versículo do dia
- **Pulso da semana** (check-in pastoral; some depois de responder)
- Banner para **instalar o PWA** (Android) ou instruções (iOS)
- **Suas escalas** (próximos 30 dias) e pedido de substituição
- **Aniversariantes da semana** + WhatsApp
- **Quadro de avisos** (carrossel; toque amplia a arte)
- **PIX** da igreja
- Lista de **membros ativos** (busca + filtro por ministério, paginação de 10)

### Bíblia — Jornada de leitura (`/dashboard/plano-leitura`)

- Vários planos; progresso em `%`
- Grade de dias; “Próxima leitura” destacada
- Toque no dia abre o capítulo no dialog

### Mídias (`/dashboard/midias`)

- Pregações/louvores do YouTube (capa + player em modal)
- Líder de mídia / admin cadastra pela URL do vídeo

### Mural de orações (`/dashboard/mural-oracoes`)

- Feed de pedidos para interceder (botão **Vou orar**)
- Composer recolhido: “Compartilhar um pedido…”
- Presence: “N irmãos intercedendo agora”
- Toast ao vivo quando alguém ora
- Aba **Testemunhos** (pedidos atendidos)
- Dono (e Super Admin) edita/exclui

Realtime **só nesta tela**, no canal `mural-oracoes`. Sai da rota → desconecta.

### Estudos (`/dashboard/estudos`)

- PDF no Storage **ou** link do Google Drive
- Abrir / baixar

### Perfil público (`/dashboard/perfil/:id`)

- Dados, ministérios, planos de leitura, pedidos da pessoa

### Ajustes (`/dashboard/perfil`)

- Editar cadastro, foto (comprimida), dependentes (até 12 anos)
- Ativar/desativar **notificações push**
- Sair

### Carteirinha (`/dashboard/carteirinha`)

- Cartão digital + QR + exportar PNG/PDF

---

## Como usar (líderes e admin)

O menu extra aparece no overflow do rodapé, conforme o papel.

| Tela | Quem acessa | O que faz |
|---|---|---|
| Escalas `/dashboard/escala` | Admin ou líder de departamento | Calendário do mês, criar escala, voluntários, ver pedidos de troca |
| Avisos `/dashboard/avisos` | Admin ou líder de **mídia** | Banners da Home (imagem + data + texto). Insert dispara push |
| Estatísticas `/dashboard/analytics` | Admin / Super Admin | RPC `dashboard_estatisticas`: membros, pulso, ministérios |
| Membros `/dashboard/admin` | Admin / Super Admin | Aprovar pendentes, editar, inativar, paginação, filhos na página |
| Ger. Estudos `/dashboard/admin/estudos` | Admin / Super Admin | PDF ou link Drive |

**Níveis**

- `USER` — membro
- `ADMIN` — gestão
- `SUPER_ADMIN` — gestão + apagar pedido de oração de qualquer um

**Status:** `PENDENTE` → `ATIVO` → `INATIVO` (exclusão pedida, decisão admin ou falta de acesso).

Cadastro pede dados pessoais, ministérios, cargos e filhos. CEP via BrasilAPI.

---

## Papéis e permissões
